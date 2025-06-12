import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Userlist from './pages/Userlist';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';

function Crud() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={<Userlist />} />
        <Route path='/create' element={<CreateUser />}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default Crud
