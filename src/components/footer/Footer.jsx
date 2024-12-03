import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap'
import './footer.css'
import logo from '../../assets/logo.png'
import fb from '../../assets/fb.png'
import x from '../../assets/twitter.png'
import insta from '../../assets/insta.png'
import link from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <section className='footer'>
        <Container>
            <Row>
                <Col lg={6}>
                        <div class="footer_logo"><img src={logo} alt="logo" className='img-fluid'/></div>
                        <div class="footer_body">We are always open to discuss your project and improve your online presence.</div>
                        <div class="footer_box">
                            <div class="footer_box_left">
                                 <div class="email">Email me at</div>
                                 <div><a href="#">contact@website.com</a></div>
                            </div>
                            <div class="footer_box_right">
                                <div class="call">Call us</div>
                                <div>0927 6277 28525</div>
                            </div>
                        </div>
                </Col>
                <Col lg={{span:5 , Offset:1}}>
                <div class="footer_head">Lets Talk!</div>
                        <div class="footer_socials">
                            <ul>
                             <li><a href="#"><img src={fb} alt="fb"/></a></li>
                             <li><a href="#"><img src={x} alt="fb"/></a></li>
                             <li><a href="#"><img src={insta} alt="fb"/></a></li>
                             <li><a href="#"><img src={link} alt="fb"/></a></li>
                            </ul>
                        </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer