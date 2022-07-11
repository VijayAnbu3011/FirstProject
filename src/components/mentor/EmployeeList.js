import React,{ useState } from 'react'
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { Breadcrumb, Layout,Dropdown,Menu } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal,Form ,Select,DatePicker,Table,Space} from 'antd';
import { WarningFilled,DownOutlined  } from '@ant-design/icons';
import './EmployeeList.css'

function EmployeeList() {
    const {  Content,  } = Layout; 
    const { Option } = Select;
    // row selected
    const [selectedRowKeys, setselectedRowKeys] = useState([]);
    const onSelectChange=(newSelectedRowKeys)=>{
      setselectedRowKeys(newSelectedRowKeys)
    }
    const rowSelection ={
      selectedRowKeys,
      onChange:onSelectChange,
    }
    // 
  const [IsModelVisible, setIsModelVisible] = useState(false)
  const showModel=()=>{
    setIsModelVisible(true);
  }
  const handleCreate=()=>{
    setIsModelVisible(false);
  }
  // mock modal
  const [MockModal, setMockModal] = useState(false)
  const showMockModal=()=>{
    setMockModal(true);
  }
  const handleMockCreate=()=>{
    setMockModal(false)
  }
  // state modal
  const [stateModal, setstateModal] = useState(false)
  const showstateModal=()=>{
    setstateModal(true);
  }
  const handlestateCreate=()=>{
    setstateModal(false)
  }
  // Mock rateing
  const menu = (
    <div>
      <table>
        <tr><td>Mock 1 </td><td>Excellent</td></tr>
        <tr><td>Mock 2 </td><td>Excellent</td></tr>
        <tr><td>Mock 3 </td><td>Excellent</td></tr>
        <tr><td>Mock 4 </td><td>Excellent</td></tr>
        <tr><td>Mock 5 </td><td>Excellent</td></tr>
      </table>
    </div>
    )
    // status
    const menuStatus = (
      <Menu
        items={[
          {
            label:<a onClick={showstateModal}>Absconde</a>,
            key: '0',
          },
          {
            label: <a onClick={showstateModal}>Terminate</a>,
            key: '1',
          },
          {
            label: 'Active',
            key: '3',
          },
        ]}
      />
    );
      // table columns and data
      const columns = [
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
          title: 'Mocks Taken',
          dataIndex: 'mocks_taken',
          key: 'mocks_taken',
        },
        {
          title: 'Mock Rateings',
          dataIndex: 'mock_rateing',
          key: 'mock_rateing',
          render: (_, record) => (
            <Space size="large" >
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
              <WarningFilled style={{ fontSize: '25px', color: '#FAA81D', }} />
              </Dropdown>   
            </Space>)
        },
        {
            title: 'Attendance',
            dataIndex: 'attendance',
            key: 'attendance',
          },
        {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
          render: (_, record) => (
            <Space size="middle">
              <Dropdown overlay={menuStatus} trigger={['click']}>
                    <p onClick={(e) => e.preventDefault()}>
                  <Space>
                    Active
                  <DownOutlined />
                  </Space>
                   </p>
                 </Dropdown> 
                 <Modal title="Reason for change status" visible={stateModal}  onCancel={handlestateCreate} width={500} 
           footer={[<Button type='primary' onClick={handlestateCreate} >
            Submit
            </Button>]} 
            > 
            <form>
            <div class="mb-3">
            <label for="inputReason" class="form-label" >Reason</label>
            <textarea class="form-control" id="inputdReason" rows="3"></textarea>
           </div>
            </form>
            </Modal>
            </Space>
          ),
        },
        {
          title: '',
          dataIndex: 'give_Rateing',
          key: 'give_Rateing',
          render: (_, record) => (
            <Space size="middle">
              <Button  onClick={showMockModal} className='buttonGiveRateing'>Give Rateing</Button>
              <Modal title="Mock Rateing" visible={MockModal}  onCancel={handleMockCreate} width={1000} 
           footer={[<Button type='primary' onClick={handleMockCreate} >
            Submit
            </Button>]} 
            >  
            <form class="row g-3">
            <div class="col-md-6">
         <label for="inputMockType" class="form-label">Mock Type</label>
        <input type="text" class="form-control" id="inputMocktype"/>
         </div>
         <div class="col-md-6">
          <label for="inputMockTakenBy" class="form-label">Mock Taken By</label>
           <input type="text" class="form-control" id="inputMocktakenby"/>
           </div>
           <div class="col-md-6">
         <label for="inputTechnology" class="form-label">Technology</label>
        <input type="email" class="form-control" id="inputtechnology"/>
         </div>
         <div class="col-md-6">
          <label for="inputPratical" class="form-label">Pratical Knowledge(out of 100)</label>
           <input type="password" class="form-control" id="inputpratical"/>
           </div>
           <div class="col-md-6">
         <label for="inputTheoretical" class="form-label">Theoretical Knowledge(out of 100)</label>
        <input type="email" class="form-control" id="inputtheoretical"/>
         </div>
         <div class="col-md-6">
          <label for="inputOverAll" class="form-label">OverAll FeedBack(pratical+Theoretical)</label>
           <input type="password" class="form-control" id="inputoverall"/>
           </div>
           <div class="mb-3">
           <label for="inputDetailedFeedBack" class="form-label" >Detailed FeedBack</label>
           <textarea class="form-control" id="inputdetailedfeedback" rows="3"></textarea>
           </div>
            </form>
            </Modal>
            </Space>
          ),
        },
        {
          title: '',
          dataIndex: 'emp_list',
          key: 'emp_list',
          render: (_, record) => (
            <Space size="middle">
              <img src='./asset1/Xnix-Line-Right Arrow.svg' />
            </Space>
          ),
        },
      ];
      const data = [
      {
        key: '1',
        no:'3' ,
        employee_id: '123',
        employee_name:'vj',
        mocks_taken: 'vj',
        mock_rateing:'',
        attendance:'21/23',
        status:'',
        give_Rateing:'',
        emp_list:'',
      },
    ];
    
  return (
    <div>
         <Layout style={{ padding: '0 24px 24px',float:'right', width:'95%',position:'absolute',top:60,left:60}}>
      <Breadcrumb style={{ margin: '16px 0', }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Batch</Breadcrumb.Item>
          <Breadcrumb.Item>Employee List</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="site-layout-background bg-white" style={{padding: 24,margin: 0,minHeight: 500, }}>
          <div className='content'>
                  <div className='content_nav'>
                  <div className='nav_batch ' style={{color:'#FAA81D',position:'absolute',top:75,left:50}} ><p>Employee List</p></div>
                  <div className='nav_input'>
                  <Input style={{width:300,position:'absolute',top:70,right:300,}} placeholder="Search" />
                  </div>
                  <div className='nav_btn' >
                      <button onClick={showModel} style={{position:'absolute',top:70,right:50,backgroundColor:'#FAA81D',color:'white',borderRadius:'4px',border:'none'}}>Create Mock</button>
       <Modal title="Add new batch" visible={IsModelVisible}  onCancel={handleCreate}
         footer={[<Button type='primary' onClick={handleCreate}>
          Create
          </Button>]} 
          >
         <Form layout='vertical' style={{height:390,}}>
         <Form.Item
        label="Batch_ID"
        rules={[
          {
            required: true,
            message: 'Batch ID',
          },
        ]}
      >
        <Input placeholder="Batch ID" />
      </Form.Item>    
      <Form.Item
        label="Mock No"
        rules={[
          {
            required: true,
            message: 'Mock_No',
          },
        ]}
      >
        <Input placeholder="Mock_No" />
      </Form.Item>             
       <Form.Item    label="Technologies"
        rules={[
          {
            required: true,
            message: 'Please select Technologies!',
            type: 'array',
          },
        ]}
        >
        <Select mode="multiple" placeholder="Please select Technologies!">
          <Option value="React">React</Option>
          <Option value="HTML">HTML</Option>
          <Option value="CSS">CSS</Option>
          <Option value="JQuery">JQuery</Option>
          <Option value="JavaScript">JavaScript</Option>
         </Select>
        </Form.Item>
        <Form.Item   label="Panel" 
        rules={[
          {
            required: true,
            message: 'Please select Panel!',
          },
        ]}
      >
        <Select placeholder="Please select Mentor Name">
          <Option value="Sathyam">Sathyam</Option>
          <Option value="Vijendran">Vijendran</Option>
        </Select>
       </Form.Item>  
       <Form.Item name="date-time-picker" label="Date & Time" >
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
                      </Form>
                       </Modal>
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

export default EmployeeList