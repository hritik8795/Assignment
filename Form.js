
import React from 'react';
import { Layout } from 'antd';
import {Button} from 'antd';

import { ArrowLeftOutlined} from '@ant-design/icons';
import {Input} from 'antd';

const { TextArea } = Input;


const { Header } = Layout;





const Form = () => {
  return (
    <div>
     <Layout>
      <Header style ={{background:"white"}}>
      <Button type="text"><ArrowLeftOutlined />Back</Button>
      <Button  type ="text" style ={{float:"right",padding :20 ,color:"red"}}>Preview Page</Button>
      </Header>
    </Layout>
    <div>
      <h1 style ={{paddingLeft:50,paddingTop:30}}><b>Create Event</b></h1>
    </div>

    <Button type="link" style  ={{height:50,paddingLeft:75,paddingTop:40,color:"black"}}>Create Event</Button><br/>
    <Button type="link" style  ={{height:50,paddingLeft:75,paddingTop:40,color:"black"}}>Banner</Button><br/>
    <Button type="link" style  ={{height:50,paddingLeft:75,paddingTop:40,color:"black"}}>Short description</Button><br/>
   <div style  ={{paddingLeft:75,paddingTop:40,color:"black"}}>
   <TextArea style ={{height:150,width:500}}></TextArea>
   </div>

    <div style={{paddingTop:70,paddingLeft:700}}>
   <Button type="submit"style ={{background:"red",color:"white",borderRadius:5}}>
        <b>Save</b>
      </Button>
      </div>
          
    </div>
  )
}

export default Form