import Profile from '../assets/images/profile.jpg'
import Button from 'react-bootstrap/Button'

export default function AboutMe() {
    return (
        <div className='container' >
            <section>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi officiis quam optio laboriosam
                    voluptatem architecto nobis voluptates odio commodi? Maiores amet itaque adipisci quaerat error
                    quam
                    explicabo cumque? Molestias, atque.<hr />
                    <Button href='https://calendly.com/nelsonluzbel'>My calendly</Button> 
                </p>
                
            </section>

            <aside id='profile'>
                <img src={Profile} alt='profile'></img>
            </aside>
        </div>
    )
}
