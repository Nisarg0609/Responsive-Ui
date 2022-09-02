import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='app__footer section__padding'>
        <div className="app__footer-header">
            <h1 className='headtext-large gradient-text'>Do you want to step in to the future before others</h1>
            <button className='p-large' type='button'>Request Early Access</button>
        </div>

        <div className="app__footer-content">
            <div className="app__footer-content_logo element">
                <img src={logo} alt="logo img" />
                <p className='p-medium'>Crechterwoord K12 182 DK,</p>
                <p className='p-medium'>All Rights Reserved</p>
            </div>

            <div className="app__footer-content_links element">
                <h4 className='p-large'>Links</h4>
                <p><a className='p-medium' href="overons">Overons</a></p>
                <p><a className='p-medium' href="socialMedia">Social  Media</a></p>
                <p><a className='p-medium' href="counters">Counters</a></p>
                <p><a className='p-medium' href="contect">Contect</a></p>
            </div>

            <div className="app__footer-content_company element">
                <h4 className='p-large'>Company</h4>
                <p><a className='p-medium' href="#terms">Terms & Conditions</a></p>
                <p><a className='p-medium' href="#policy">Privacy Policy</a></p>
                <p><a className='p-medium' href="#contact">Contact</a></p>
            </div>

            <div className="app__footer-content_extra element">
                <h4 className='p-large'>Get in touch</h4>
                <p className='p-medium'>Crechterwoord K12 182 DK</p>
                <p className='p-medium'>085-132567</p>
                <p className='p-medium'>info@payme.net</p>
            </div>
        </div>

        <div className="app__footer-copyright">
            <p className='p-medium'>@2021 GPT-3. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer