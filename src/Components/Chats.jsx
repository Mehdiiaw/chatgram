import React , {useState , useEffect , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import {ChatEngine} from "react-chat-engine"
import axios from "axios";
//context
import { AuthContext } from '../Context/AuthContextProvider';

//Components
import Navbar from './Navbar';
const Chats = () => {
    const [loading , setLoading] = useState(true);
    const navigate = useNavigate();
    const user = useContext(AuthContext);

    useEffect(() => {
        if(!user){
            navigate("/")
            return;
        }
        
        axios.get("https://api.chatengine.io/users/me" , {
            headers : {
                // "project-id" : "341aa502-bda6-4c36-a976-80c6dbce8e62",
                // "user-name" : user.email ,
                // "user-secret" : user.uuid,
                "private-key" : "c6d83458-ecec-4033-8737-2d5ddeb955c5"
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email" , user.email);
            formdata.append("username" , user.email);
            formdata.append("secret" , user.uid);
            getfile(user.photoURL)
             .then(avatar => {
                formdata.append("avatar" , avatar , avatar.name)
                axios.post("https://api.chatengine.io/users/" , formdata , {
                    headers : {
                        "private-key" : "c6d83458-ecec-4033-8737-2d5ddeb955c5"
                    }
                })
                    .then( () => {
                        setLoading(false)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                
             })
        })

       
    } , [user , navigate])

    const getfile = async (url) => {
        const respond = await fetch(url);
        const data = await respond.blob();
        return new File([data] , "userPhoto.jpg" , {type : "image/jpeg"} );
    }

    
    const logoutHandler = async () => {
        await auth.signOut();
        navigate("/")
    }
    if(!user || loading ) return "Loading ...";

    return (
        <div>
            <Navbar logoutHandler={logoutHandler} />
            <ChatEngine
            height ="calc(100vh - 50px)"
            projectID= "341aa502-bda6-4c36-a976-80c6dbce8e62"
            userName= {user.email}
            userSecret= {user.uid}
            />
        </div>
    );
};

export default Chats;