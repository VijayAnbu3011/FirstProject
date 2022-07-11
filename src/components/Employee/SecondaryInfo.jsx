import React from 'react'
import { Input,Col,Row,Form,Collapse } from 'antd';
import 'antd/dist/antd.css';
import "./StepperForm.css"
const { Panel } = Collapse;
function SecondaryInfo() {
  return (
    <div>
    <Form layout='vertical'>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Pan NO"><Input /></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="Aadhar No"><Input /></Form.Item></Col >
            </Row>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Father Name"><Input /></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="Mother Name"><Input /></Form.Item></Col >
            </Row>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Spouse Name"><Input /></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="Passport No"><Input /></Form.Item></Col >
            </Row>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Marital Status"><Input /></Form.Item></Col >
            </Row>
    </Form>      
  </div>
  )
}

export default SecondaryInfo