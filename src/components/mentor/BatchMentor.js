import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { Breadcrumb, Layout,Dropdown,Menu,Button,Modal,Switch } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Space} from 'antd';
import { WarningFilled } from '@ant-design/icons';
import Typography from '@mui/material/Typography';
import './BatchMentor.css';

function BatchMentor() {
  const {  Content,  } = Layout;
  let navigate=useNavigate()
  let navigatetoEmpList=()=>{
      navigate("/EmployeeList")
  }
  // row selected
  const [selectedRowKeys, setselectedRowKeys] = useState([]);
  const onSelectChange=(newSelectedRowKeys)=>{
    setselectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection ={
    selectedRowKeys,
    onChange:onSelectChange,
  }
  // batch strength
  const menu = (
  <Menu
    items={[
      {key: '1',label: 'Initial Strength 100' },
      {key: '2',label: 'DropOut 10'},
      {key: '3',label: (<a>Terminated </a>),},
      {key: '4',label: (<a>Absconding  </a>),},
      {key: '5',label: (<a>Present Strength</a>),},
    ]}
  />
  )
  // Attendance model
  const [IsModelVisible, setIsModelVisible] = useState(false)
  const showModel=()=>{
    setIsModelVisible(true);
  }
  const handleCreate=()=>{
    setIsModelVisible(false);
  }
  const column = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Employee ID',
      dataIndex: 'employee_id',
      key: 'employee_id',
    },
    {
      title: 'Employee Name',
      dataIndex: 'employee_name',
      key: 'employee_name',
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance_button',
      key: 'attendance_button',
      render: (_, record) => (
        <Space size="middle" >
         <Typography>M</Typography>
         <Switch size="small" defaultChecked />
        <Typography>N</Typography>
        <Switch size="small" defaultUnChecked />
        </Space>
      ),
    },
  ]
  const datas = [
    {
      no:'1',
      employee_id:'123',
      employee_name:'Vijay',
      attendance_button:'',
    }
  ]
  
    // table columns and data
    const columns = [
      {
        title: 'No',
        dataIndex: 'no',
        key: 'no',
      },
      {
        title: 'Batch ID',
        dataIndex: 'batch_id',
        key: 'batch_id',
      },
      {
        title: 'Batch Name',
        dataIndex: 'batch_name',
        key: 'batch_name',
      },
      {
        title: 'Technologies',
        dataIndex: 'technologies',
        key: 'technologies',
      },
      {
        title: 'Start Date',
        dataIndex: 'start_date',
        key: 'start_date',

      },
      {
        title: 'End Date',
        dataIndex: 'end_date',
        key: 'end_date',
      },
      {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
      },
      {
        title: 'Batch Strength',
        dataIndex: 'batch_strength',
        key: 'batch_strength',
        render: (_, record) => (
          <Space size="large" >
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <WarningFilled style={{ fontSize: '25px', color: '#FAA81D', }} />
            </Dropdown>
             
          </Space>
        ),
      },
      {
        title: '',
        dataIndex: 'Attendance',
        key: 'Attendance',
        render: (_, record) => (
          <Space size="middle">
            <Button className='buttonAttendance'  onClick={showModel}>Attendance</Button>
            <Modal title="Attendance For(20 Mar 2020)" visible={IsModelVisible}  onCancel={handleCreate} width={1000} 
         footer={[<Button type='primary'  onClick={handleCreate} >
          Submit
          </Button>]} 
          ><Table columns={column} dataSource={datas} /></Modal>
          </Space>
        ),
      },
      {
        title: '',
        dataIndex: 'emp_list',
        key: 'emp_list',
        render: (_, record) => (
          <Space size="middle">
            <img src='./asset1/Xnix-Line-Right Arrow.svg' onClick={navigatetoEmpList}/>
          </Space>
        ),
      },
    ];
    const data = [
    {
      key: '1',
      no:'3' ,
      batch_id: '123',
      batch_name:'vj',
      technologies: 'vj',
      start_date:'123',
      end_date:'123',
      status:'Active',
      batch_strength:'',
      Attendance:'',
      emp_list:'',
    },
  ];
  
  return (
    <div>
         <Layout style={{ padding: '0 24px 24px',float:'right', width:'95%',position:'absolute',top:60,left:60}}>
      <Breadcrumb style={{ margin: '16px 0', }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Batch</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="site-layout-background bg-white" style={{padding: 24,margin: 0,minHeight: 500, }}>
          <div className='content'>
                  <div className='content_nav'>
                  <div className='nav_batch ' style={{color:'#FAA81D',position:'absolute',top:75,left:50}} ><p>Batch List</p></div>
                  <div className='nav_input'>
                  <Input style={{width:300,position:'absolute',top:70,right:50,}} placeholder="Search" />
                  </div>
                  </div>
                <div className='content_table' style={{position:'relative',top:30}} >
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                  </div>  
          </div>
        </Content>
      </Layout>        
    </div>
  )
}

export default BatchMentor