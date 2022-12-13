import AboutMe from '../components/AboutMe.js'
import Me from '../components/Me.js'


export default function Home() {
  return (
    <div id='homeContainer'>
        <div id='textContainer'>
      <AboutMe/>
      </div>
      <Me/>
    </div>
  )
}
