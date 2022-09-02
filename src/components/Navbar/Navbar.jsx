import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='app__navbar section__padding'>
        <div className="app__navbar-logo">
            <a href="#home">
                <img src={logo} alt="gpt3 logo"/>
            </a>
        </div>

        <div className="app__navbar-links">
            <ul>
                <li><a className='p-large' href="#home">Home</a></li>
                <li><a className='p-large' href="#wgpt3">What is GPT3</a></li>
                <li><a className='p-large' href="#possibilities">Open AI</a></li>
                <li><a className='p-large' href="#features">Case Studies</a></li>
                <li><a className='p-large' href="#blog">Library</a></li>
            </ul>
        </div>

        <div className="app__navbar-signIn">
            <p><a className='p-large' href="#signIn">Sign In</a></p>
            <button className='custom__button p-large' type='button'>Sign Up</button>
        </div>

        <div className="app__navbar-smallscreen">
            {
                !toggle ? (
                    <div className="app__navbar-smallscreen_menu ">
                        <AiOutlineMenu size={30} color='#fff' onClick={()=>setToggle(true)}/>
                    </div>
                ) : (
                    <div className="app__navbar-smallscreen_closeMenu">
                        <div className="app__navbar-smallscreen_close">
                            <AiOutlineClose size={30} color="#fff" onClick={()=>setToggle(false)}/>
                        </div>

                        <div className="app__navbar-smallscreen_content scale-up-tr" > 
                            <ul>
                                <li><a className='p-large' href="#home" onClick={()=>setToggle(false)}>Home</a></li>
                                <li><a className='p-large' href="#wgpt3" onClick={()=>setToggle(false)}>What is GPT3</a></li>
                                <li><a className='p-large' href="#possibilities" onClick={()=>setToggle(false)}>Open AI</a></li>
                                <li><a className='p-large' href="#features" onClick={()=>setToggle(false)}>Case Studies</a></li>
                                <li><a className='p-large' href="#blog" onClick={()=>setToggle(false)}>Library</a></li>
                            </ul>

                            <div className="app__navbar-smallscreen_signIn">
                                <p><a className='p-large' href="#signIn" onClick={()=>setToggle(false)}>Sign In</a></p>
                                <button className='custom__button p-large' type='button' onClick={()=>setToggle(false)}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Navbar