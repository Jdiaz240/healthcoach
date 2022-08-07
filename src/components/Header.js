// import { Navbar } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


export default function Header() {
  return (
    <>
    <Navbar className='header' variant='light'>
      <Navbar.Brand id='namePlate'><strong>Nelson Luzbel</strong></Navbar.Brand>
        <Nav className='links'>
        <button href="https://www.instagram.com/nelson.luzbel/?hl=en">Instagram </button>
        <button href="https://www.tiktok.com/@nelsonluzbel">TikTok </button>
        <button href="https://open.spotify.com/show/7kaVwVi3m5NOV6UpIBxJkX?si=pth_bsDrQ_KRQS6XDde6WA&nd=1">Podcast </button>
        </Nav>
    </Navbar>
    </>

  )
}
