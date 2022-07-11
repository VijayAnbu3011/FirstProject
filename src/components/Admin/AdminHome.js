import React from 'react';
import './AdminHome.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

import { Input } from 'antd';
function AdminHome() {
  return (
    <div>
        <div className='page_all_Admin'>
          <div className='header_nav'>
            <div className='logo'></div>
            <Input style={{width:500,position:'absolute',top:18,left:500,height:25,}} placeholder="Search Mentor / Employee" />           
           <div className='header_logout'>
             <button>Logout</button>
           </div>
          </div>
          <div className='side_nav'>
            <div className='btn'>
            <Link className="nav-link" to="/"> <button className='group_btn' ><p>Batch</p> </button></Link>
            <Link className="nav-link" to="/AdminMentorContent"><button className='team_btn' ><p>Mentor</p> </button></Link>
            <Link className="nav-link" to="/AdminRequestContent"><button className='add_btn' ><p>Request</p></button></Link>
            </div>     
          </div>
          <div className='content'>
          </div>
        </div>
    </div>
  )
}

export default AdminHome