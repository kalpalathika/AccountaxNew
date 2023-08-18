import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScrollToView = (id) => {
     const currentContainer = document.getElementById(id);
     console.log(currentContainer, id)
     if(currentContainer) currentContainer.scrollIntoView({
      behavior: 'smooth'
     });

  }

  return (
    <div id="home" className='flex justify-between items-center h-24 max-w-full mx-auto px-4 bg-white'>
      {/* <h1 className={`text-3xl font-bold text-red-500`}>Accountax</h1> */}
      <img src={logo} className="h-12"/>
      <ul className='hidden md:flex'>
        <li className={`p-4 hover:underline hover:underline-offset-4 hover:decoration-red-500 cursor-pointer`} onClick={()=> {handleScrollToView("home")}}>Home</li>
        <li className={`p-4 hover:underline hover:underline-offset-4 hover:decoration-red-500 cursor-pointer`} onClick={()=> {handleScrollToView("aboutUs")}}>About</li>

        <li className={`p-4 hover:underline hover:underline-offset-4 hover:decoration-red-500 cursor-pointer`} onClick={()=> {handleScrollToView("services")}}>Services</li>
        <li className={`p-4 hover:underline hover:underline-offset-4 hover:decoration-red-500 cursor-pointer`} onClick={()=> {handleScrollToView("accountax")}} >Why Acountax</li>
        <li className={`p-4 hover:underline hover:underline-offset-4 hover:decoration-red-500 cursor-pointer`} onClick={()=> {handleScrollToView("clients")}}>Our Clients</li>
        <li className={`p-4 hover:underline hover:underline-offset-4 hover:decoration-red-500 cursor-pointer`} onClick={()=> {handleScrollToView("location")}}>Location</li>

        {/* <li className='p-4'>Contact</li> */}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#201630] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <li className='p-4 border-b border-gray-600 text-white' onClick={()=> {handleScrollToView("home"); setNav(!nav)}}>Home</li>
          <li className='p-4 border-b border-gray-600 text-white'onClick={()=> {handleScrollToView("aboutUs"); setNav(!nav);}}>About</li>
          <li className='p-4 border-b border-gray-600 text-white' onClick={()=> {handleScrollToView("services"); setNav(!nav);}}>Services</li>
          <li className='p-4 border-b border-gray-600 text-white' onClick={()=> {handleScrollToView("accountax"); setNav(!nav);}}>Why Acountax</li>
          <li className='p-4 border-b border-gray-600 text-white' onClick={()=> {handleScrollToView("clients"); setNav(!nav);}}>Our Clients</li>
          <li className='p-4 border-b border-gray-600 text-white' onClick={()=> {handleScrollToView("location"); setNav(!nav);}}>Location</li>

          {/* <li className='p-4'>Contact</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
