import React from 'react'
import './contact.css'
import { Container ,Row , Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <section className='contact'>
      <Container>
        <Row>
            <Col lg={6} className='form_left_inside'>
                <div class="form_left_head">Building stellar websites for early startups</div>
                <div class="form_body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</div>
            </Col>
            <Col lg={{span:6,offset:0}} className='form_right_inside'>
            <div class="form_right_head">Send inquiry</div>
                            <div class="form_body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                            <div class="form_right_form">
                                <div class="name">
                                    <form action="#">
                                      <label for="fname"></label>
                                     <input type="text" id="fname" name="firstname" placeholder="your name"/>
                                   </form>
                                </div>
                                <div class="name">
                                    <form action="#">
                                      <label for="fname"></label>
                                     <input type="text" id="fname" name="firstname" placeholder="Email"/>
                                   </form>
                               </div>
                               <div class="name">
                                <form action="#">
                                  <label for="fname"></label>
                                 <input type="text" id="fname" name="firstname" placeholder="Paste your Figma design URL"/>
                               </form>
                           </div>
                            </div>
                            <div class="form_right_btn"><a href="#">Send an Inquiry</a></div>
                            <div class="form_right_btn2"><a href="#">Get in touch with us <i class="fa-solid fa-arrow-right"></i></a></div>
            </Col>
        </Row>
      </Container>  
    </section>
  )
}

export default Contact