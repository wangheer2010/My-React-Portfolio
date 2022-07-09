import React from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward, FaGraduationCap} from 'react-icons/fa'
import {HiOutlineLibrary} from 'react-icons/hi'
const About = () => {
    return(
        <section id='about'>
            <h5>Get to Know</h5>
            <h2> About Me </h2>

            <div className="container about_container">
                <div className='about_me'>
                    <div className='about_me-image' >
                        <img src={ME} alt="about_image" />
                    </div>
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>3+ years machine learning scientist</small>
                        </article>
                        <article className='about_card'>
                            <FaGraduationCap className='about_icon'/>
                            <h5>Education</h5>
                            <small>Columbia University, Class of 2021 MSBA</small>
                        </article>
                        <article className='about_card'>
                            <HiOutlineLibrary className='about_icon'/>
                            <h5>Projects</h5>
                            <small>30+ projects completed</small>
                        </article>
                    </div>
                    <p> Hi! I am a senior data scientist working at Capital One. Please feel free to reach out to me if you are interested in working with me </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;