import React from 'react'
import { Input,Col,Row,Form,Collapse, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import "./StepperForm.css"
const { Panel } = Collapse;
function PrimaryInfo() {
  return (
        <div >
       <Form layout='vertical'>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="Employee ID"><Input /></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="Employee Name"><Input /></Form.Item></Col >
                </Row>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="Date Of Join"><DatePicker  style={{
        width: '100%',
      }}/></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="Date Of Birth"><DatePicker  style={{
        width: '100%',
      }}/></Form.Item></Col >
                </Row>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="E-mail ID"><Input /></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="Blood Group"><Input /></Form.Item></Col >
                </Row>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="Designation"><Input /></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="Gender"><Input /></Form.Item></Col >
                </Row>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="Nationality"><Input /></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="Employee Status"><Input /></Form.Item></Col >
                </Row>
        </Form>      
      </div>
  )
}

export default PrimaryInfo