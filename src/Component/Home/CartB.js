import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const CartB = () => {
    const [show,setShow]=useState(false);
    const closeHandle=()=>setShow(false);
    
    
    const toggleShow=()=>setShow((s) => !s)
    const backdrop='true';
  return (
   <>
   <Button variant='primary'  onClick={toggleShow}>Cart</Button>
    <Offcanvas show={show} onHide={closeHandle} backdropClassName='backdrop' placement='end' scroll='true'>
    <Offcanvas.Header closeButton className=' d-flex justify-content-end'></Offcanvas.Header>
    <Offcanvas.Title className=' fs-4 fw-bold text-danger text-center' >Cart</Offcanvas.Title>
    
    <Offcanvas.Body >
      
      <ul className=' d-flex justify-content-around ' style={{listStyle:'none'}} >
        <li className='fs-4 fw-bold border-bottom border-3'>Item
        
        </li>
        <li className='fs-4 fw-bold border-bottom border-3'>Price</li>
        <li className='fs-4 fw-bold border-bottom border-3'>Quantity</li>
      </ul>
    </Offcanvas.Body>
    </Offcanvas>
  
   </> 
  )
}

export default CartB