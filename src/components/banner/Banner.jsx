import React from 'react'
import bg from '../../assets/Illustration.png'
import { Container , Row , Col } from 'react-bootstrap';
import './banner.css'

const Banner = () => {
  return (
    <section className='banner'>
        <Container>
            <Row>
                <Col lg={6}>
                    <h4 className='head'>Building stellar websites for early startups</h4>
                    <p className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <Row className='btn_row'>
                        <Col lg={6}>
                        <a class="banner_btn" href="#">View our work</a>
                        </Col>
                        <Col lg={6}>
                        <a class="banner_btn2" href="#">View Pricing  <i class="fa-solid fa-arrow-right"></i></a>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>
                    <img src={bg} alt="" className='img-fluid'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner