import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt="portfolio picture1"></img>
          </div>
          <h3>Formula 1 Frenzy</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/wangheer2010/Formula-1-Frenzy" className='btn'>Github</a>
            <a href="https://sccr0123.github.io/Formula-1-Frenzy/" className='btn btn-primary' target="_blank">Live Demo</a> 
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt="portfolio picture2"></img>
          </div>
          <h3>Tech Blog App</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/wangheer2010/Model-View-Controller-Tech-Blog" className='btn'>Github</a>
            <a href="https://chen-tech-blog-app.herokuapp.com/" className='btn btn-primary' target="_blank">Live Demo</a> 
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt="portfolio picture3"></img>
          </div>
          <h3>Budget Tracker</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/wangheer2010/Progressive-Web-App-Budget-Tracker" className='btn'>Github</a>
            <a href="https://budget-tracker-progressive.herokuapp.com/" className='btn btn-primary' target="_blank">Live Demo</a> 
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG4} alt="portfolio picture4"></img>
          </div>
          <h3>Restaurant Ordering System</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/wangheer2010/online-ordering-system" className='btn'>Github</a>
            <a href="https://pizzapalaceordersystem.herokuapp.com/" className='btn btn-primary' target="_blank">Live Demo</a> 
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG5} alt="portfolio picture5"></img>
          </div>
          <h3>Weather Dashboard</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/wangheer2010/WeatherDashboard" className='btn'>Github</a>
            <a href="https://wangheer2010.github.io/WeatherDashboard/" className='btn btn-primary' target="_blank">Live Demo</a> 
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG6} alt="portfolio picture6"></img>
          </div>
          <h3>Note Taker for Small Business</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/wangheer2010/Note-Taker-for-Small-Business" className='btn'>Github</a>
            <a href="https://notetakerforsb.herokuapp.com/" className='btn btn-primary' target="_blank">Live Demo</a> 
          </div>
        </article>
      </div>
    </section>

  )
}

export default Portfolio