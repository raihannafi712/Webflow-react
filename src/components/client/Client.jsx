import React from 'react'
import "./client.css"
import { Col, Container, Row } from 'react-bootstrap'
import proff from "../../assets/profile.png"


const Client = () => {
  return (
    <section className='client'>
        <Container>
            <Row>
                <Col lg={5}>
                    <div class="client_head">What our clients say about us</div>
                    <div class="body_client">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt velit recusandae quos esse corporis dolorum veniam hic molestiae impedit.</div>
                </Col>
                <Col lg={{span:6 , offset:1}}>
                    <div class="client_body">"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</div>
                    <div class="client_profile"><img src={proff} alt=""/></div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Client