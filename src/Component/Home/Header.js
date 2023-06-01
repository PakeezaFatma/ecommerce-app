import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <section>
       <Container fluid  className=' bg-secondary bg-gradient p-3'>
      <Row className='text-center text-white'>
        <Col className='fw-bold ' style={{fontSize:100}}> The Generics</Col>
      </Row>
    </Container>
    </section>
  )
}

export default Header