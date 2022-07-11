import { Breadcrumb, Space } from "antd";
import React, { useState } from "react";
import "./AdminMentorContent.css";
import "antd/dist/antd.css";
import { Button, Modal, Form, Select,Table } from "antd";
import {EditOutlined ,DeleteOutlined } from '@ant-design/icons';
import { Input } from "antd";
function AdminMentorContent() {
  const { Option } = Select;
  const [IsModelVisible, setIsModelVisible] = useState(false);
  const showModel = () => {
    setIsModelVisible(true);
  };
  const handleCreate = () => {
    setIsModelVisible(false);
  };
  // entered value in state
  let changeDetails=(e)=>{
    setaddFormData({
     ...addFormData,
     [e.target.name]:e.target.value
    })
  }
  const [addFormData, setaddFormData] = useState({
    mentorName:'',
    employeeId:'',
    emailId:'',
    skill:'',
    action:''
  })
  const [Data, setData] = useState([])
  // after create button clicked it store in another data
  let addBatch=()=>{
    setData([...Data,addFormData]);
    handleCreate()
    setaddFormData({
    mentorName:'',
    employeeId:'',
    emailId:'',
    skill:'',
    action:''
    })
  }
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Mentor Name',
      dataIndex: 'mentorName',
      key: 'mentorName',
    },
    {
      title: 'Employee ID',
      dataIndex: 'employeeId',
      key: 'employeeId',
    },
    {
      title: 'E-mail ID',
      dataIndex: 'emailId',
      key: 'emailId',
    },
    {
      title: 'Skill',
      key: 'skill',
      dataIndex: 'skill',
      render:()=>(
        <>
          <p style={{color:'blue' }}>HTML</p>
          <p style={{color:'blue' }}>CSS</p>
          <p style={{color:'blue'}}>React</p>
          </>
      )
    },
    {
      title:"Action",
      dataIndex:'action',
      key:'action',
      render: () => (
      <Space>
     <a><EditOutlined /></a>
      <a><DeleteOutlined /></a>
      </Space>)
    }
  ];
  let data=[];
  Data.map((value,index)=>{
    return(
      data.push({
        no:index+1,
        mentorName: value.mentorName,
        employeeId: value.employeeId,
        emailId:value.emailId,
        skill: 'HTML,CSS,JavaScript,React',
      })
    )})
  return (
    <div>
      <div className="page_all_Admin">
        <div className="breadcrum_area">
          <Breadcrumb style={{ position: "relative", left: 8, top: 5 }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Mentor</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="content">
        <div className="content_nav">
          <div className="nav_batch">
            <p>Mentors List</p>
          </div>
          <div className="nav_input">
            <Input
              style={{ width: 300, position: "absolute", top: 3, right: 30 }}
              placeholder="Search"
            />
          </div>
          <div className="nav_btn">
            <button onClick={showModel}>+ New Mentor</button>
            <Modal
              title="Add new mentor"
              visible={IsModelVisible}
              onCancel={handleCreate}
              footer={[
                <Button type="primary" onClick={addBatch}>
                  Create
                </Button>,
              ]}
            >
              <Form layout="vertical">
                <Form.Item
                  label="Mentor Name"
                  rules={[
                    {
                      required: true,
                      message: "Mentor Name",
                    },
                  ]}
                >
                  <Input name="mentorName"
                      value={addFormData.mentorName}
                      onChange={(e)=>{changeDetails(e)}}  placeholder="Mentor Name" />
                </Form.Item>
                <Form.Item
                  label="Employee ID"
                  rules={[
                    {
                      required: true,
                      message: "Mentor Name",
                    },
                  ]}
                >
                  <Input name="employeeId"
                      value={addFormData.employeeId}
                      onChange={(e)=>{changeDetails(e)}} placeholder="Employee ID" />
                </Form.Item>
                <Form.Item
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input name="emailId"
                      value={addFormData.emailId}
                      onChange={(e)=>{changeDetails(e)}} />
                </Form.Item>
                <Form.Item
                  label="Skills"
                  rules={[
                    {
                      required: true,
                      message: "Please select Technologies!",
                      type: "array",
                    },
                  ]}
                >
                  <Select mode="multiple" placeholder="Skills!">
                    <Option value="React">React</Option>
                    <Option value="HTML">HTML</Option>
                    <Option value="CSS">CSS</Option>
                    <Option value="JQuery">JQuery</Option>
                    <Option value="JavaScript">JavaScript</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>
        <div className='content_table'>
              <Table columns={columns} dataSource={data} />
              </div>
      </div>
    </div>
  );
}

export default AdminMentorContent;
