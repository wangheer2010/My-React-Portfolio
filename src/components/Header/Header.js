import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
    return (
        <header className='container header_container'> 
            <h5>Hello I'm</h5>
            <h1>Chen Wang</h1>
            <h5 className='text-align'> Full Stack Data Scientist</h5>
            <CTA />
            <HeaderSocials />
            <div className='me'>
                <img src={ME} alt="me" />
            </div>

            <a href="#contact" className="scroll_down">Scroll Down</a>
        </header>
    )
}
export default Header