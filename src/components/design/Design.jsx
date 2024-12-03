import React from 'react'
import "./design.css"
import { Col, Container, Row } from 'react-bootstrap'
import box1 from '../../assets/image box icon1.png'
import box2 from '../../assets/image box icon2.png'
import box3 from '../../assets/image box icon3.png'
import box4 from '../../assets/image box icon4.png'
import box5 from '../../assets/image box icon5.png'
import box6 from '../../assets/image box icon6.png'

const Design = () => {
  return (
    <section className='design'>
        <Container>
            <Row className="justify-content-center">
                <Col lg={6} className="text-center main_design" >
                <h6>Feature</h6>
                <h3>Design that solves problems,one product at a time</h3> 
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Row>
                        <Col lg={{span:3 , offset:1}} xs={{span:3 , offset:1}} className='design_image_box_inside'>
                             <div class="image_box_pic"><img src={box1} alt="icon" className='img-fluid'/></div>
                             <div class="image_box_head">Uses Client First</div>
                             <div class="image_box_body">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </div>
                        </Col>
                        <Col lg={{span:3 , offset:1}} xs={{span:3 , offset:1}} className='design_image_box_inside'>
                            <div class="image_box_pic"><img src={box2} alt="icon" className='img-fluid'/></div>
                            <div class="image_box_head">Two Free Revision Round</div>
                            <div class="image_box_body">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </div>
                        </Col>
                        <Col lg={{span:3 , offset:1}}xs={{span:3 , offset:1}} className='design_image_box_inside'>
                            <div class="image_box_pic"><img src={box3} alt="icon" className='img-fluid'/></div>
                            <div class="image_box_head">Template Customization</div>
                            <div class="image_box_body">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{span:3 , offset:1}} xs={{span:3 , offset:1}} className='design_image_box_inside'>
                            <div class="image_box_pic"><img src={box4} alt="icon" className='img-fluid'/></div>
                            <div class="image_box_head">Uses Client First</div>
                            <div class="image_box_body">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </div>
                        </Col>
                        <Col lg={{span:3 , offset:1}} xs={{span:3 , offset:1}} className='design_image_box_inside'>
                            <div class="image_box_pic"><img src={box5} alt="icon" className='img-fluid'/></div>
                            <div class="image_box_head">Uses Client First</div>
                            <div class="image_box_body">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </div>
                        </Col>
                        <Col lg={{span:3 , offset:1}} xs={{span:3 , offset:1}} className='design_image_box_inside'>
                            <div class="image_box_pic"><img src={box6} alt="icon" className='img-fluid'/></div>
                            <div class="image_box_head">Uses Client First</div>
                            <div class="image_box_body">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Design