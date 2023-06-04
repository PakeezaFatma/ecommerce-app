import React, { createElement, useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
const CartB = () => {
  
    const [show,setShow]=useState(false);
    const closeHandle=()=>setShow(false);
    
    const cartElements = [

      {
      
      title: 'Colors',
      
      price: 100,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      
      quantity: 2,
      
      },
      
      {
      
      title: 'Black and white Colors',
      
      price: 50,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      
      quantity: 3,
      
      },
      
      {
      
      title: 'Yellow and Black Colors',
      
      price: 70,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      
      quantity: 1,
      
      }
      
      ]
  
    const toggleShow=()=>setShow((s) => !s)
    const backdrop='true';
    useEffect(()=>{console.log('use effect')},[show])
  return (
   <>
   <Button variant='primary'  onClick={toggleShow}>Cart</Button>
    <Offcanvas show={show} onHide={closeHandle} backdropClassName='backdrop' placement='end' scroll='true'>
    <Offcanvas.Header closeButton className=' d-flex justify-content-end'></Offcanvas.Header>
    <Offcanvas.Title className=' fs-4 fw-bold text-danger text-center' >Cart</Offcanvas.Title>
    
    <Offcanvas.Body >
      
      <div className='d-flex justify-content-around '>
       <dv className='fs-4 fw-bold border-bottom border-3'>ITEM</dv>
       <dv className='fs-4 fw-bold border-bottom border-3'>PRICE</dv>
       <dv className='fs-4 fw-bold border-bottom border-3'>QUANTITY</dv> 

      </div>
      < Row className='d-flex  ' >
     
      <Col className=' border-bottom border-3 col-6'>
      <dv className='fs-4 fw-bold border-bottom border-3'>ITEM</dv>
        <img  className='img-thumbnail m-3' src={cartElements[0].imageUrl} />
     
      </Col>
      
      <Col><dv className='fs-4 fw-bold border-bottom border-3'>PRICE</dv>
      {cartElements[0].price}</Col>
      <Col><dv className=' fw-bold border-bottom border-3'>QUANTITY</dv>{cartElements[0].quantity}</Col>
      
      </Row>
      < Row className='d-flex  ' >
      <Col className='border-bottom border-3'><img src={cartElements[0].imageUrl} style={{width:'100px'}}/></Col>
      <Col>{cartElements[0].price}</Col>
      <Col>{cartElements[0].quantity}</Col>
      
      </Row>
      
    </Offcanvas.Body>
    </Offcanvas>
  
   </> 
  )
}

export default CartB