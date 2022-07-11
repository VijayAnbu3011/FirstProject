import React from 'react'
import { Input,Col,Row,Form,Collapse } from 'antd';
import 'antd/dist/antd.css';
import "./StepperForm.css"
const { Panel } = Collapse;
function BankDetails() {
  return (
    <div>
    <Form layout='vertical'>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Account No"><Input /></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="Bank Name"><Input /></Form.Item></Col >
            </Row>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Account Type"><Input /></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="IFSC Code"><Input /></Form.Item></Col >
            </Row>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Branch"><Input /></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="State"><Input /></Form.Item></Col >
            </Row>
            
    </Form>      
  </div>
  )
}

export default BankDetails