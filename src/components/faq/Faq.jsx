import React, { useState } from 'react'
import { Container , Col, Row } from 'react-bootstrap'
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import './faq.css'



export const Faq = () => {

let [show , setShow] = useState(true)
let [show1 , setShow1] = useState(true)
let [show2 , setShow2] = useState(true)
let [show3 , setShow3] = useState(true)
let [show4 , setShow4] = useState(true)



let handleFaq = ()=>{
    setShow(!show)
}
let handleFaq1 = ()=>{
    setShow1(!show1)
}
let handleFaq2 = ()=>{
    setShow2(!show2)
}
let handleFaq3 = ()=>{
    setShow3(!show3)
}
let handleFaq4 = ()=>{
    setShow4(!show4)
}

  return (
    <section className='faq'>
        <Container>
            <Row>
                <Col lg={4}>
                    <div class="faq_head">Frequently asked questions</div>
                    <div class="faq_body"><a href="#">Contact us for more info</a></div>
                </Col>
                <Col lg={{span:6 , offset: 2}}>
                    <Row>
                        <Col lg={12} className='faq_main'>
                            <h3 onClick={handleFaq}>01 &nbsp;&nbsp;&nbsp;&nbsp; How much time does it take? {show == false ? <FiMinus /> : <LuPlus />}</h3>
                            {show==false && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus fuga incidunt, facere ea accusantium dicta maxime ipsum ducimus commodi eos explicabo sapiente ratione odit quae voluptatibus! Enim doloremque ipsa qui dolor quibusdam maiores dolorem omnis animi sit dicta cumque sequi illo itaque alias quam, architecto similique adipisci suscipit ullam quis tenetur ad, quisquam deserunt! Repellat, ullam odit. Ut accusantium, autem dolorum ratione rem non minima veniam hic voluptate mollitia modi dicta voluptatem ea consequatur odio a quia porro minus sed quis possimus quo provident. Cumque fuga nemo soluta eaque. Sapiente, corporis dolor libero fugiat adipisci et provident vitae mollitia modi.</p> }
                            <h3 onClick={handleFaq1}>02 &nbsp;&nbsp;&nbsp;&nbsp; What is your class naming convention? {show1 == false ? <FiMinus /> : <LuPlus />}</h3>
                            {show1== false && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus fuga incidunt, facere ea accusantium dicta maxime ipsum ducimus commodi eos explicabo sapiente ratione odit quae voluptatibus! Enim doloremque ipsa qui dolor quibusdam maiores dolorem omnis animi sit dicta cumque sequi illo itaque alias quam, architecto similique adipisci suscipit ullam quis tenetur ad, quisquam deserunt! Repellat, ullam odit. Ut accusantium, autem dolorum ratione rem non minima veniam hic voluptate mollitia modi dicta voluptatem ea consequatur odio a quia porro minus sed quis possimus quo provident. Cumque fuga nemo soluta eaque. Sapiente, corporis dolor libero fugiat adipisci et provident vitae mollitia modi.</p> }
                            <h3 onClick={handleFaq2}>03 &nbsp;&nbsp;&nbsp;&nbsp;How do you communicate? {show2 == false ? <FiMinus /> : <LuPlus />}</h3>
                            {show2==false && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus fuga incidunt, facere ea accusantium dicta maxime ipsum ducimus commodi eos explicabo sapiente ratione odit quae voluptatibus! Enim doloremque ipsa qui dolor quibusdam maiores dolorem omnis animi sit dicta cumque sequi illo itaque alias quam, architecto similique adipisci suscipit ullam quis tenetur ad, quisquam deserunt! Repellat, ullam odit. Ut accusantium, autem dolorum ratione rem non minima veniam hic voluptate mollitia modi dicta voluptatem ea consequatur odio a quia porro minus sed quis possimus quo provident. Cumque fuga nemo soluta eaque. Sapiente, corporis dolor libero fugiat adipisci et provident vitae mollitia modi.</p> }
                            <h3 onClick={handleFaq3}>04 &nbsp;&nbsp; I have a bigger project. Can you handle it? {show3 == false ? <FiMinus /> : <LuPlus />}</h3>
                            {show3== false && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus fuga incidunt, facere ea accusantium dicta maxime ipsum ducimus commodi eos explicabo sapiente ratione odit quae voluptatibus! Enim doloremque ipsa qui dolor quibusdam maiores dolorem omnis animi sit dicta cumque sequi illo itaque alias quam, architecto similique adipisci suscipit ullam quis tenetur ad, quisquam deserunt! Repellat, ullam odit. Ut accusantium, autem dolorum ratione rem non minima veniam hic voluptate mollitia modi dicta voluptatem ea consequatur odio a quia porro minus sed quis possimus quo provident. Cumque fuga nemo soluta eaque. Sapiente, corporis dolor libero fugiat adipisci et provident vitae mollitia modi.</p> }
                            <h3 onClick={handleFaq4}>05 &nbsp;&nbsp;&nbsp;&nbsp; What is your class naming convention? {show4 == false ? <FiMinus /> : <LuPlus />}</h3>
                            {show4== false && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus fuga incidunt, facere ea accusantium dicta maxime ipsum ducimus commodi eos explicabo sapiente ratione odit quae voluptatibus! Enim doloremque ipsa qui dolor quibusdam maiores dolorem omnis animi sit dicta cumque sequi illo itaque alias quam, architecto similique adipisci suscipit ullam quis tenetur ad, quisquam deserunt! Repellat, ullam odit. Ut accusantium, autem dolorum ratione rem non minima veniam hic voluptate mollitia modi dicta voluptatem ea consequatur odio a quia porro minus sed quis possimus quo provident. Cumque fuga nemo soluta eaque. Sapiente, corporis dolor libero fugiat adipisci et provident vitae mollitia modi.</p> }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
