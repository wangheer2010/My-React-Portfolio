import React from 'react';
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi'
import {MdPermPhoneMsg} from 'react-icons/md'
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const Nav = () => {
  return (
   <nav>
     <a href='/'><AiOutlineHome /></a>
     <a href='#about'><AiOutlineUser /></a>
     <a href='#portfolio'><BiBook /></a>
     <a href='#contact'><MdPermPhoneMsg /></a>
   </nav>
  );
}

export default Nav;