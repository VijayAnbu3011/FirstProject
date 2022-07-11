import React, { useState } from 'react'
import { Input,Col,Row,Form,Collapse } from 'antd';
import 'antd/dist/antd.css';
import "./StepperForm.css";
import {PlusCircleOutlined,DeleteOutlined } from '@ant-design/icons';
import './AddressDetails.css';
const { Panel } = Collapse;
function Experience() {
  const [Copy, setCopy] = useState({Address_Type:'',Door_No:'',Street:'',Locality:'',City:'',State:'',Pin_Code:'',Land_Mark:''})
  const [isAdd, setisAdd] = useState(true)
  const [Double, setDouble] = useState([Copy])
  let AddForm=()=>{
    setisAdd(false)
    setDouble([...Double,setCopy])
  }
  let DeleteForm=()=>{
    setDouble([Double])
  }
  return (
    <div>
      {
      Double.map((val,ind)=>{
        return (
    <Collapse defaultActiveKey={['1']} >
    <Panel header="Experience" key="1" >
  <Form layout='vertical'>
          <Row>
            <Col span={8} push={2} ><Form.Item label="Company Name"><Input /></Form.Item></Col >
            <Col span={8} offset={6}><Form.Item label="Year Of Experience"><Input /></Form.Item></Col >
          </Row>
          <Row>
            <Col span={8} push={2} ><Form.Item label="Date Of Join"><Input /></Form.Item></Col >
            <Col span={8} offset={6}><Form.Item label="Date of Relieving"><Input /></Form.Item></Col >
          </Row>
          <Row>
            <Col span={8} push={2} ><Form.Item label="Designation"><Input /></Form.Item></Col >
            <Col span={8} offset={6}><Form.Item label="Location"><Input /></Form.Item></Col >
          </Row>
          {  isAdd ? <button className='Add_btn' onClick={AddForm} ><PlusCircleOutlined /> Add </button> :
          (ind>0 ?
                     <button className='Add_btn' onClick={DeleteForm}><DeleteOutlined /> Delete </button>:
                     <button className='Add_btn' onClick={AddForm} ><PlusCircleOutlined /> Add </button>
          )
          }
  </Form>
  </Panel>
  </Collapse>   
  )
})}   
</div>
  )
}

export default Experience