import React,{ useState } from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import ".//MentorDashBoardStyle.css";
import { DownOutlined } from '@ant-design/icons';
import { Layout,Dropdown, Menu, Space,Button, Modal,Form } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function MentorDashBoard() {
  const {  Sider } = Layout;
  // change PassWord
  const [ChangePassword, setChangePassword] = useState(false)
  const showChangePassword=()=>{
    setChangePassword(true)
  }
  const handleChangePassword=()=>{
    setChangePassword(false)
  }
  // DropDown
  const menu = (<Menu items={[{key: '1',label: (<a>Profile</a> ),},
                              { key: '2',label: (<a onClick={showChangePassword}> Change password </a>),},
                              {key: '3',danger: true,label: (<a>LogOut</a>),},]}/>);
 return (
    <div>
      <div className="page_all_Admin">
        <div className="header_nav">
          <div className="logo"></div>
          <Input style={{width: 500,position: "absolute",top: 18,left: 500,height: 25,}}placeholder="Search Mentor / Employee"/>
        </div>
        <div className='profile_photo' >
          <Dropdown overlay={menu} className='dropdown'>
          <a onClick={e => e.preventDefault()}>
      <Space>
      <img src="./asset1/Avatar.png"/>
        Shalani
        <DownOutlined />
        
      </Space>
    </a>
  </Dropdown>
  {/* change password */}
  <Modal title="Change Password" visible={ChangePassword}  onCancel={handleChangePassword} width={500} 
           footer={[<Button type='primary' onClick={handleChangePassword} >
            Submit
            </Button>]} 
            > 
            <Form>
            <Form.Item label="Password" name="password" rules={[ { required: true, message: 'Please input your password!',} ]}>
            <Input.Password />
            </Form.Item>
            </Form>
            </Modal>
        </div>
        {/* sider bar model */}
        
          <Sider width={60} className="sider_Mentor bg-white" >
            <div className="btn">
              <Link className="nav-link" to={"/"}>
                {" "}
                <button className="dashBoard_btn">
                  <p>DashBoard</p>
                </button>
              </Link>
              <Link className="nav-link" to={"/BatchMentor"}>
                <button className="batch_btn">
                  <p>Batch</p>
                </button>
              </Link>
            </div>
          </Sider>
      </div>
    </div>
  );
}

export default MentorDashBoard;
