import { Breadcrumb, Space } from 'antd';
import React, { useState } from 'react';
import './AdminHomeContent.css';
import 'antd/dist/antd.css';
import {Button,Tag,Modal,Form ,Select,DatePicker,Table} from 'antd';
import { Input } from 'antd';
import {EditOutlined ,DeleteOutlined } from '@ant-design/icons';
function AdminHomeContent() {
  const { Option } = Select;
  const [IsModelVisible, setIsModelVisible] = useState(false)
   // iterate form details
   const [addFormData, setaddFormData] = useState({
    batchName:'',
    mentorName:'',
    technologies:[],
    startDate:'',
    endDate:'',
    action:""
  })
  const [Data, setData] = useState([])
  console.log(Data);
   //To take or Save the input from Calender
   const saveStartDate = (value) => {
    setaddFormData({ ...addFormData, startDate: value.format("YYYY-MM-DD") });
  };
  // endDate
  const saveEndDate = (value) => {
    setaddFormData({ ...addFormData, endDate: value.format("YYYY-MM-DD") });
  };
   //to select data from multiselect Drop Down Box
   const handleSelect = (value) => {
    setaddFormData({ ...addFormData, technologies: value });
  };
  // select mentor
  const handleMentor=(value)=>{
    setaddFormData({ ...addFormData, mentorName: value });
  }
  // reset form
  const handleReset=()=>{
    setaddFormData({
      mentorName:'',
      technologies:'',
      startDate:'',
    endDate:''
    })
  }
 
  // after create button clicked it store in another data
  let addBatch=()=>{
    setData([...Data,addFormData]);
    setaddFormData({
    batchName:'',
    mentorName:'',
    technologies:'',
    startDate:'',
    endDate:'',
    })
    handleReset()
    handleCreate()
  }
  const showModel=()=>{
    setIsModelVisible(true);
  }
  const handleCreate=()=>{
    setIsModelVisible(false);
  }
  // entered value in state
  let changeDetails=(e)=>{
    setaddFormData({
     ...addFormData,
     [e.target.name]:e.target.value
    })
  }
  // table columns and data
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Batch ID',
      dataIndex: 'batchId',
      key: 'batchId',
    },
    {
      title: 'Batch Name',
      dataIndex: 'batchName',
      key: 'batchName',
    },
    {
      title: 'Mentor Name',
      dataIndex: 'mentorName',
      key: 'mentorName',
    },
    {
      title: 'Technologies',
      key: 'technologies',
      dataIndex: 'technologies',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render:()=>(
        <>
          <p style={{color:'yellow'}}>In Process</p>
          <p style={{color:'green'}}>Completed</p>
          <p style={{color:'blue'}}>To Be Started</p>
          </>
      )
    },
    {
      title:"Action",
      dataIndex:'action',
      key:'action',
      render: () => (
      <Space>
     <a ><EditOutlined /></a>
      <a><DeleteOutlined /></a>
      </Space>)
    }
  ];
  let data=[];
  Data.map((value,index)=>{
    return(
      data.push({
        no:index+1,
        batchId: "TYSS04052022",
        batchName: value.batchName,
        mentorName: value.mentorName,
        technologies:value.technologies,
        startDate: value.startDate,
        endDate: value.endDate,
      })
    )})
    
;
  return (
    <div>
        <div className='page_all_Admin'>
            <div className='breadcrum_area'>
            <Breadcrumb style={{position:'relative',left:8,top:5,}}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Batch</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className='content'>
          <div className='content_nav'>
                  <div className='nav_batch'><p>Batch List</p></div>
                  <div className='nav_input'>
                  <Input style={{width:300,position:'absolute',top:3,right:30,}} placeholder="Search" />
                  </div>
                  <div className='nav_btn' >
                      <button onClick={showModel} >+ New Batch</button>
       <Modal title="Add new batch" visible={IsModelVisible}  onCancel={handleCreate}
         footer={[<Button type='primary' onClick={addBatch}>
          Create
          </Button>]} 
          >
         <Form layout='vertical' style={{height:390,}}>
         <Form.Item
        label="Batch Name"
        rules={[
          {
            required: true,
            message: 'Batch Name',
          },
        ]}
      >
        <Input  name="batchName"
        value={addFormData.batchName}
        onChange={(e)=>{changeDetails(e)}} placeholder="Batch Name" />
      </Form.Item>
      <Form.Item   label="Mentor Name"  
        rules={[
          {
            required: true,
            message: 'Please select Mentor Name!',
          },
        ]}
      > 
        <Select placeholder="Please select Mentor Name"  onChange={(value)=>{handleMentor(value)}}>
          <Option value="Sathyam"  >Sathyam </Option>
          <Option value="Vijayandran"  >Vijayandran</Option>
        </Select>
       </Form.Item>                 
       <Form.Item    label="Technologies" name='technologies' value={addFormData.technologies} 
       
        rules={[
          {
            required: true,
            message: 'Please select Technologies!',
            type: 'array',
          },
        ]}
        >
        <Select mode="multiple" placeholder="Please select Technologies!" onChange={(value)=>{handleSelect(value) }}>
          <Option value="React">React</Option>
          <Option value="HTML">HTML</Option>
          <Option value="CSS">CSS</Option>
          <Option value="JQuery">JQuery</Option>
          <Option value="JavaScript">JavaScript</Option>
         </Select>
         
        </Form.Item>
        <Form.Item label="Start Date" name='startDate' value={addFormData.startDate} >
        <DatePicker  onChange={(event) => {
                  saveStartDate(event);
                }}/>
        </Form.Item>
        <Form.Item label="End Date"  name='endDate' value={addFormData.endDate}>
        <DatePicker  onChange={(event) => {
                  saveEndDate(event);
                }} />
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
  )
}

export default AdminHomeContent