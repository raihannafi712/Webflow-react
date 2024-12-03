import React from 'react'
import './blog.css'
import { Col, Container, Row } from 'react-bootstrap'
import man from '../../assets/businessman.png'
import woman from '../../assets/woman.png'
import monitor from '../../assets/monitor.png'

const Blog = () => {
  return (
    <section className='blog'>
        <Container>
            <Row>
                <Col lg={8}>
                    <div class="blog_head">Our blog</div>
                </Col>
            </Row>
            <Row>
                <Col lg={{span:3 , offset:1}}>
                        <div class="blog_pic"><img src={man} alt="businessman" className='img-fluid'/></div>
                        <div class="blog_date">19 Jan 2022</div>
                        <div class="blog_body">How one Webflow user grew his single person consultancy from $0-100K in 14 months</div>
                        <div class="blog_last">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</div>
                        <div class="blog_btn"><a href="#">Read more <i class="fa-solid fa-arrow-right"></i></a></div>
                </Col>
                <Col lg={{span:3 , offset:1}}>
                <div class="blog_pic"><img src={woman} alt="businessman" className='img-fluid'/></div>
                        <div class="blog_date">19 Jan 2022</div>
                        <div class="blog_body">How one Webflow user grew his single person consultancy from $0-100K in 14 months</div>
                        <div class="blog_last">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</div>
                        <div class="blog_btn"><a href="#">Read more <i class="fa-solid fa-arrow-right"></i></a></div>
                </Col>
                <Col lg={{span:3 , offset:1}}>
                <div class="blog_pic"><img src={monitor} alt="businessman" className='img-fluid'/></div>
                        <div class="blog_date">19 Jan 2022</div>
                        <div class="blog_body">How one Webflow user grew his single person consultancy from $0-100K in 14 months</div>
                        <div class="blog_last">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</div>
                        <div class="blog_btn"><a href="#">Read more <i class="fa-solid fa-arrow-right"></i></a></div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Blog