import React, { Component, Fragment } from 'react';
import web3 from '../ethereum/web3';
import estore from '../ethereum/store';
import { Card, Row, Col, Icon, Avatar, Header ,Input, Form, Divider, Grid, Image, Placeholder, Segment, Container} from 'antd';
import { Button, Modal} from 'semantic-ui-react';
const { Meta } = Card;
import Layout from '../components/Layout'
import ipfs from '../ipfs';
import axios, { post } from 'axios';
import { Router, Link } from '../routes';


import ipfsClient from 'ipfs-http-client';





class Hdocindex extends Component {

  render ()
  {
    return (
        <Layout>
        


        <div style={{ background: '#13c2c2',  padding: '30px' }}>

    <Row gutter={16}>
    <Col span={8}>
    <Card
    style={{ width: 330, height:500 }}
    cover={<img alt="example" src="http://clipart-library.com/images/8i6oer5KT.png" size="large" />}

    >

<div align ="center">
<Link route= "/index1">
   <a className = "item"> <Button type="submit" content='User Login' icon='user' size='big' /></a>
   </Link>


    <br></br>  <br></br>



    </div>
    </Card>


    </Col>
      <Col span={8}>
      <Card
      style={{ width: 330, height:500}}
      cover={<img alt="example" src="http://clipart-library.com/images/6cr6Kndei.png" style={{height:350}} />}

      >


      <div align ="center">
      <Link route= "/index1">
         <a className = "item"> <Button type="submit" content='Physician Login' icon='user md' size='big' />
         </a>
         </Link>



      <br></br>  <br></br>

       </div>
      </Card>
      </Col>


      <Col span={8}>
      <Card
      style={{ width: 330, height:500}}
      cover={<img alt="example" src="http://clipart-library.com/image_gallery2/Insurance-PNG-HD.png"  size="small"/>}

      >


      <div align ="center">
      <Link route= "/index1">
         <a className = "item"> <Button type="submit" content='Insurance Login' icon='shield alternate' size='big' /></a>
         </Link>


      <br></br>  <br></br>



</div>
      </Card>
      </Col>
    </Row>
</div>
      </Layout>
    )
  }
}

export default Hdocindex;
