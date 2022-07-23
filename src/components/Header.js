// import { Navbar } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

export default function Header() {
  return (
    <>
    <Navbar className='header' variant='light'>
      <Navbar.Brand id='namePlate'>Nelson Luzbel</Navbar.Brand>
        <Nav className='links'>
        <Nav.Link className='btn' href="https://www.instagram.com/nelson.luzbel/?hl=en" role="button">Instagram </Nav.Link>
        <Nav.Link className='btn' href="https://www.tiktok.com/@nelsonluzbel" role="button">TikTok </Nav.Link>
        <Nav.Link className='btn' href="https://open.spotify.com/show/7kaVwVi3m5NOV6UpIBxJkX?si=pth_bsDrQ_KRQS6XDde6WA&nd=1" role="button">Podcast </Nav.Link>
        </Nav>
    </Navbar>
    </>

  )
}
