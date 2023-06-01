import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <MDBFooter  className='bg-primary text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-around  p-4 border-bottom text-white'>
        <div className='me-5 d-none d-lg-block '>
          <span className='fs-1 fw-bold'>The Generics</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset ' >
            <MDBIcon style={{fontSize:"40px",color:""}} fab icon="youtube-square" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon  style={{fontSize:"40px",color:""}} fab icon="facebook-square" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon style={{fontSize:"40px",color:""}} fab icon="spotify" />
          </a>
          
          
         
        </div>
      </section>
</MDBFooter>
  )
}

export default Footer