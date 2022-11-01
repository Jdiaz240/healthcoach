import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Footer() {
  return (
    <div className='Footer'>
      <Navbar>
                <Navbar.Brand>National Suicide Prevention hotline: 800-273-8255</Navbar.Brand>
                <Nav.Link>Mental health Help</Nav.Link> 
        </Navbar>
    </div>
  )
}

