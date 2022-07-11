import React from 'react'
import { Breadcrumb, Layout } from 'antd';
import './DashBoard.css'

function DashBoard() {
    const {  Content,  } = Layout;
  return (
    <div>
       <Layout style={{ padding: '0 24px 24px',float:'right', width:'95%',position:'absolute',top:60,left:60}}>
      <Breadcrumb style={{ margin: '16px 0', }}>
        </Breadcrumb>
        <Content className="site-layout-background bg-white" style={{padding: 24, margin: 0,minHeight: 500,}}>
          <div className='pie_chart'>
           content
          </div>
        </Content>
      </Layout> 
    </div>
  )
}

export default DashBoard