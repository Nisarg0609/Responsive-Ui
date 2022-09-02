import React from 'react'
import './Header.css'
import people from '../../assets/people.png'
import Ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='app__header section__padding' id='home'>
        <div className="app__header-content" >
            <h1 className='headtext-large gradient-text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
            <p id='signIn' className='header-content__p p-large'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            
            <div className="header__input" >
                <input  className='p-large' type="text" placeholder='Your Email Address'/>
                <button className='p-large' type='button'>Get Started</button>
            </div>

            <div className="header__people">
                <img src={people} alt="people img" />
                <div className="header__people-line"/>
                <p className='p-medium'>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>

        <div className="app__header-image">
            <img src={Ai} alt="Ai img" />
        </div>
    </div>
  )
}

export default Header