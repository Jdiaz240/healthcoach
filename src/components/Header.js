// import { Navbar } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';

export default function Header() {
  return (
    <>
    <Navbar className='header' variant='light'>
      <Navbar.Brand id='namePlate'><strong>Nelson Luzbel</strong></Navbar.Brand>
        <Nav className='links'>
        <Button className='btn' href="https://www.instagram.com/nelson.luzbel/?hl=en">Instagram </Button>
        <Button className='btn' href="https://www.tiktok.com/@nelsonluzbel">TikTok </Button>
        <Button className='btn' href="https://open.spotify.com/show/7kaVwVi3m5NOV6UpIBxJkX?si=pth_bsDrQ_KRQS6XDde6WA&nd=1">Podcast </Button>
        </Nav>
    </Navbar>
    </>

  )
}
