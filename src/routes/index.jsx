import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicial from '../pages/inicial';
import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login';

function AppRoutes (){
    return(    
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default AppRoutes