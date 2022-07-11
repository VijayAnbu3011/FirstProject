import React from 'react'
import { BrowserRouter, Route, Routes }  from "react-router-dom";
import LoginEmployee from './LoginEmployee';
import StepperForm from './StepperForm';


function EmployeeModule() {
  return (
    <div>
       <BrowserRouter>

       <Routes>
       <Route path='/' element={<LoginEmployee/>}/>
       <Route path='/StepperForm' element={<StepperForm/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default EmployeeModule