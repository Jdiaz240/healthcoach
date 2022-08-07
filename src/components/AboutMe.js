import Profile from '../assets/images/profile.jpg'

export default function AboutMe() {
    return (
        <div className='container' >
            <section>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi officiis quam optio laboriosam
                    voluptatem architecto nobis voluptates odio commodi? Maiores amet itaque adipisci quaerat error
                    quam
                    explicabo cumque? Molestias, atque.<hr />
                    <button href='https://calendly.com/nelsonluzbel'>My calendly</button> 
                </p>
                
            </section>

            <aside id='profile'>
                <img src={Profile} alt='profile'></img>
            </aside>
        </div>
    )
}
