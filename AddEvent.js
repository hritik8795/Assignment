import React from 'react'
// import {BrowserRouter as Router,Routes,Switch,Route} from "react-router-dom";
import { Link} from "react-router-dom"

import { UserOutlined ,PlusOutlined} from '@ant-design/icons';

import { Avatar } from 'antd';

import { Layout ,Button} from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
const { Header, Sider } = Layout;
const AddEvent = () => {
  return (
    <div>

        <Layout>
      <Header style={{padding:10}}>
      <Avatar style={{float:'right'}} icon={<UserOutlined />} />
       <Title level={4} style ={{color:'white'}}>Hritik shukla</Title></Header>
    
    <Layout>
      <Sider style={{background:'grey'}}>
      <br/>
    
      <Button  style={{margin:35 ,background:'red',color:'white',borderRadius:'10PX'}} >DASHBOARD</Button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </Sider>
      <Layout>
      <h1 className='thick'>WELCOME, HRITIK</h1>
      <Link to ='Form'>
      <Button style={{height:"65px",width:'220px',borderRadius:'5PX',marginLeft:100}}><PlusOutlined />Add Event</Button>
      </Link>
      </Layout>
    </Layout>
  </Layout>
    </div>
  )
}

export default AddEvent