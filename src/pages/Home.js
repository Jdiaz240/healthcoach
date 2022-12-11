import AboutMe from '../components/AboutMe.js'
import Me from '../components/Me.js'
import Splash from '../components/Splash.js'

export default function Home() {
  return (
    <div id='homeContainer'>
        <div id='textContainer'>
      <Splash/>
      <AboutMe/>
      </div>
      <Me/>
    </div>
  )
}
