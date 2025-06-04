import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Userlist from './pages/Userlist';
import CreateUser from './pages/CreateUser';

function Crud() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={<Userlist />} />
        <Route path='/create' element={<CreateUser />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default Crud
