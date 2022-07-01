import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
    return (
        <header className='container header_container'> 
            <h5>Hello I'm</h5>
            <h1>Chen Wang</h1>
            <h5 className='text-align'> Full Stack Data Scientist</h5>
            <CTA />
        </header>
    )
}
export default Header