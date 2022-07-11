import React, { useState } from 'react';
import { Button, Steps,Input,Col,Row,Form,Collapse } from 'antd';
import 'antd/dist/antd.css';
import "./StepperForm.css"
import Contact from './Contact';
import PrimaryInfo from './PrimaryInfo';
import SecondaryInfo from './SecondaryInfo';
import Education from './Education';
import AddressDetails from './AddressDetails';
import BankDetails from './BankDetails';
import TechanicalSkill from './TechanicalSkill';
import Experience from './Experience';
const { Step } = Steps;
const steps = [
    {
      title: 'Primary Info',
      content: <PrimaryInfo />,
    },
    {
      title: 'Secondary Info',
      content: <SecondaryInfo/>,
    },
    {
      title: 'Education Details',
      content: <Education/>,
    },
    {
        title: 'Address Details',
        content: <AddressDetails/>,
      },
      {
        title: 'Bank Details',
        content:<BankDetails/>,
      },
      {
        title: 'Techanical Skills',
        content: <TechanicalSkill/>
      },
      {
        title: 'Experience',
        content: <Experience/>,
      },
      {
        title:'Contact',
        content:<Contact/>,
      },
  ];
function StepperForm() {  
const [current, setcurrent] = useState(0)
const Next =()=>{
setcurrent(current+1)
};
const Previous =()=>{
    setcurrent(current-1)
    };
  return (
    < div className='reg'>
        <Steps current={current} className="steps_nav">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button className='btn_nxt' type="primary" onClick={() => Next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button className='btn_nxt' type="primary">
            Submit
          </Button>
        )}
        {
          current == 0 ?(
          <Button  disabled>
          Previous
        </Button>)
         :
          (<Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => Previous()}
          >
            Previous
          </Button>)
        }
      </div>
      </div>
  )
}

export default StepperForm