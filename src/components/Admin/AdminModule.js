import React from 'react'
import { BrowserRouter, Route, Routes }  from "react-router-dom";
import AdminHome from './AdminHome';
import AdminHomeContent from './AdminHomeContent'
import AdminMentorContent from './AdminMentorContent';
import AdminRequestContent from './AdminRequestContent';

function AdminModule() {
  return (
    <div>
    <BrowserRouter>
    <AdminHome />
       <Routes>
      <Route path='/' element={<AdminHomeContent/>}/>
      <Route path='/AdminMentorContent' element={<AdminMentorContent/>}/>
      <Route path='/AdminRequestContent' element={<AdminRequestContent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AdminModule