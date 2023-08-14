import React from 'react';
import Menu from './Menu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='h-12 text-red-500 p-4 flex items-center cursor-pointer justify-between border-b-2 border-b-red-500 uppercase'>
      <div className='hidden md:flex gap-4'>
        <Link href='/'>HomePage</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      {/* LOGO */}
      <div className='text-xl'>
        <Link href='/'>Massimo</Link>
      </div>
      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
