import Profile from '../assets/images/profile.jpg'
import Socials from '../components/socialMedia.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faSpotify, faApple } from '@fortawesome/free-brands-svg-icons'
// import { faPodcast } from '@fortawesome/free-solid-svg-icons'


const insta = <FontAwesomeIcon icon={faInstagram}/>
const spotify = <FontAwesomeIcon icon={faSpotify}/>
const tiktok = <FontAwesomeIcon icon={faTiktok}/>
const podcast = <FontAwesomeIcon icon={faApple}/>
export default function Me() {
  return (
    <div id='meContainer'>
      <img src={Profile} alt='profile'></img>
      <div id='socialList'>
          <Socials social={"https://www.instagram.com/nelson.luzbel/?hl=en"} icon={insta}/>
          <Socials social={"https://open.spotify.com/show/7kaVwVi3m5NOV6UpIBxJkX?si=pth_bsDrQ_KRQS6XDde6WA&nd=1"} icon={spotify}/>
          <Socials social={"https://www.tiktok.com/@nelsonluzbel"} icon={tiktok}/>
          <Socials socail={"https://podcasts.apple.com/us/podcast/mastering-anxiety-health-anxiety-hypochondria/id1523328774"} icon={podcast}/>
      </div>
    </div>
  )
}
