import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className='contact_options'>
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>cw3211@columbia.edu</h5>
                        <a href="mailto:cw3211@columbia.edu">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <AiOutlineLinkedin className='contact_option-icon'/>
                        <h4>LinkedIn</h4>
                        <h5>Chen Wang</h5>
                        <a href="https://www.linkedin.com/in/chenwang970912/">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <FiTwitter className='contact_option-icon'/>
                        <h4>Twitter</h4>
                        <h5>Chen Wang</h5>
                        <a href="https://twitter.com/ChenWan00277258">Send a message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact