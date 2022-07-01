import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {RiBilibiliFill} from 'react-icons/ri'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/chenwang970912/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/wangheer2010" target="_blank"><BsGithub /></a>
        <a href="https://space.bilibili.com/1990410336" target="_blank"><RiBilibiliFill /></a>
    </div>
  )
}

export default HeaderSocials