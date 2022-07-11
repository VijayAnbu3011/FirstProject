import { Breadcrumb } from 'antd';
import React from 'react';
import './AdminRequestContent.css';
import 'antd/dist/antd.css';
import { Input,Table,Space} from 'antd';

function AdminRequestContent() {
  // table columns and data
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Employee ID',
      dataIndex: 'employeeId',
      key: 'employeeId',
    },
    {
      title: 'Employee Name',
      dataIndex: 'employeeName',
      key: 'employeeName',
    },
    {
      title: 'YOP',
      dataIndex: 'yop',
      key: 'yop',
    },
    {
      title: 'Precentage',
      dataIndex: 'percentange',
      key: 'percentage',
    },
    {
      title: 'Experience',
      dataIndex: 'experience',
      key: 'experience',
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title:"Action",
      dataIndex:'action',
      key:'action',
      render: () => (
      <Space>
     <a style={{color:'blue',border:'1px solid blue'}}>Approve</a>
      <a style={{color:'red',border:'1px solid red'}}>Reject</a>
      </Space>)
    }
  ];
  const data = [
    {
      no:'1',
      employeeId:'#12345',
      employeeName:'Adhi',
      yop:"2022",
      percentange:"84%",
      experience:'Fresher',
      contact:'758563821',
    },
  ];
  return (
    <div>
        <div className='page_all_Admin'>
            <div className='breadcrum_area'>
            <Breadcrumb style={{position:'relative',left:8,top:5,}}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Request</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className='content'>
          <div className='content_nav'>
                  <div className='nav_batch'><p>Request List</p></div>
                  <div className='nav_input'>
                  <Input style={{width:300,position:'absolute',top:3,right:30,}} placeholder="Search" />
                  </div>
              </div>
              <div className='content_table'>
              <Table columns={columns} dataSource={data} />
              </div>
          </div>
        </div>
  )
}

export default AdminRequestContent