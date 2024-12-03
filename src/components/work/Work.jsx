import React from 'react'
import './work.css'
import { Row, Col , Container } from 'react-bootstrap';
import pointer1 from '../../assets/pointer 1.png'
import pointer2 from '../../assets/pointer 2.png'
import pointer3 from '../../assets/pointer 3.png'
import pointer4 from '../../assets/pointer 4.png'
import Workreusable from '../reusable/Workreusable';

const Work = () => {
  return (
    <section className='work'>
    <Container>
      <Row>
        <Col lg={6} className='left_para'>
          <h3>How we work</h3>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad sed earum esse ea iste debitis maxime, quibusdam enim aliquam labore quia illo necessitatibus in aliquid magni eum soluta deleniti?</h6>
          <a class="work_btn" href="#">Get in touch with us <i class="fa-solid fa-arrow-right"></i></a>
        </Col>
        <Col lg={6} className='right_para'>
        {/* USING REUSABLE COMPONENTS (WITH PROPS) START */}
          <Row>
            <Workreusable title='Strategy' img={pointer1} />
            <Workreusable title='Wireframing' img={pointer2}/>
          </Row>
          <Row>
          <Workreusable title='Design' img={pointer3}/>
          <Workreusable title='Development' img={pointer4}/>
          </Row>
          {/* USING REUSABLE COMPONENTS (WITH PROPS) END */}
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Work