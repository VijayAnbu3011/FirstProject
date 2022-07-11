import React from 'react'
import { Form, Input } from 'antd';
import 'antd/dist/antd.css';
import './/LoginMentor.css'
function LoginMentor() {
  return (
    <div >
        <div className='page'>
        <div className='login'>
        <div className='img_space'>
                <p>Great things on<br/>your way!</p>
        </div>
            <div className='login_content'>
                <div className='login_logo'></div>
                <div className='login_text'>
                    Login
                </div>
                <div className='login_form'>
                <Form
                   labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                      layout='vertical'
                       >
      <Form.Item  label="Employee ID"  >
        <Input />
      </Form.Item>

      <Form.Item label="Password">
        <Input.Password />
        </Form.Item>
                </Form>
                </div>
                <div className='btn'>
                          <button >Login</button>
                          <button >Cancel</button>
                      </div>
                <div className='line'></div>
                      <div className='footer'>
                      <div className='copyrights'>Copyright &copy; 2018 Aleercio.com  </div>
                      <div className='tc'>&emsp;&emsp;Terms & Conditions | Privacy policy</div> 
                      </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LoginMentor