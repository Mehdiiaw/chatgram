import React from 'react';

import { Routes , Route } from 'react-router-dom'; 

//components
import Login from './Components/Login';
import Chats from './Components/Chats'
//Context 
import AuthContextProvider from './Context/AuthContextProvider';

const App = () => {
  return (
    <div>
      <AuthContextProvider>
          <Routes>
            <Route path='/chats' element={<Chats />} />
            <Route path='/' element={<Login />} />
          </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;