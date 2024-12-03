import React from 'react'
import { Row, Col , Container } from 'react-bootstrap';
import pointer1 from '../../assets/pointer 1.png'

const Workreusable = ({title , img}) => {            /* These objects are called props */
    
  return (
    <Col lg={6} xs={6}>
        <div><img src={img} alt="" className='img-fluid'/></div>
        <div class="box_head">{title} </div>
        <div class="box_body">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</div>
    </Col>
  )
}

export default Workreusable