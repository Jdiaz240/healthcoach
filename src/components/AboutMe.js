import Profile from '../assets/images/profile.jpg'

export default function AboutMe() {
    return (
        <div className='container'>
            <section>
                <p>
                    <h3>Hello! I’m Nelson</h3> <br/>

                    I’m a Health Coach with a focus on helping others overcome Health Anxiety & General Anxiety. I understand the negative impact it can have on your quality of life because I’ve experienced it myself! It’s my absolute passion to see others overcome the obstacles that are holding them back and begin to experience more Joy and Happiness.<hr />
                     <a href='https://calendly.com/nelsonluzbel'><button>My calendly</button></a>
                </p>

            </section>

            <aside id='profile'>
                <img src={Profile} alt='profile'></img>
            </aside>
        </div>
    )
}
