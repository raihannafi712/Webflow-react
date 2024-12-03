import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './connector.css'

const Connector = () => {
  return (
    <section className='connector'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div class="connector_down_site">Copyright 2022, Finsweet.com</div>
                </Col>
                <Col lg={5}>
                    <div class="connector_down_menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Connector