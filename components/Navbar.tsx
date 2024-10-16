import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">
          <img src="logo.jpg" alt="Logo" className="h-24" />
        </div>
        <ul className='gap-10 lg-gap-16 hidden md:flex'>
          <li className='menuLink'><a href='#hero'><b>Home</b></a></li>
          <li className='menuLink'><a href='#Projects'><b>Projects</b></a></li>
          <li className='menuLink'><a href='#skills'><b>Skills</b></a></li>
          <li className='menuLink'><a href='#about'><b>About</b></a></li>
          <li className='menuLink'><a href='#contact'><b>Contact</b></a></li>
        </ul>
        <AiOutlineMenu className='md:hidden' size={30} />
      </div>
    </div>
  );
};

export default Navbar;
