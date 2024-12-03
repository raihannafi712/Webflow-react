import React from 'react'
import './project.css'
import { Container, Row, Col } from 'react-bootstrap';
import cardLeft from '../../assets/left card.png'
import cardRight from '../../assets/right card.png'
import churchCard from '../../assets/church card.png'


const Project = () => {
  return (
    <section className='project'>
        <Container>
            <Row>
                <Col lg={7}>
                <div class="p_head"><h3>View our projects</h3></div>  
                <div class="p_link"><a href="#">View more  <i class="fa-solid fa-arrow-right"></i></a></div>
                </Col>
            </Row>
            <Row>
                <Col lg={7}>
                    <Row>
                        <Col lg={12}>
                            <div class="left_project">
                                <div class="left_project_items">
                                    <div class="left_project_img"> 
                                        <img src={cardLeft} alt="card1" className='img-fluid'/>
                                    </div>
                                    <div class="overlay_main">
                                        <h3>Workhub office Webflow Webflow Design</h3>
                                        <a href="#">View project <i class="fa-solid fa-arrow-right"></i></a>
                                    </div> 
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={{ span: 4, offset: 1 }}>
                <div class="customer">
                             <img src={cardRight} alt="card2" className='img-fluid'/>
                              <div class="customer_overlay">
                                 <h3>Unisaas Website Design</h3>
                                 <a href="#">View portfolio  <i class="fa-solid fa-arrow-right"></i></a>
                              </div>
                        </div>
                    <div class="church"><img src={churchCard} alt="church" className='img-fluid'/></div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

// Overlay js
// let overlayMain = document.querySelector(".overlay_main");


export default Project