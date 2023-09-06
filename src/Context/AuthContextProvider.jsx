import React, { useState , useEffect , createContext, Children} from 'react';
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [loading , setLoading] = useState(true);
    const [user , setUser] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            if(user) navigate("/chats");
        })
    } , [user , navigate])
    
    return (
        <div>
            <AuthContext.Provider value={user}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;