import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MentorDashBoard from "./MentorDashBoard";
import BatchMentor from "./BatchMentor";
import DashBoard from './DashBoard';
import EmployeeList from './EmployeeList';
// import LoginMentor from './LoginMentor';

function MentorModule() {
  return (
    <div>
      <BrowserRouter>
        <MentorDashBoard />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/BatchMentor" element={<BatchMentor />} />
          <Route path="/EmployeeList" element={<EmployeeList />}/>
        </Routes>
      </BrowserRouter>
      {/* <LoginMentor/> */}
    </div>
  );
}

export default MentorModule;
