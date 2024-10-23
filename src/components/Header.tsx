import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-950 py-1 px-8 sm:px-24">
      <div className="text-cyan-400 font-bold text-2xl">
        LOGO
      </div>
        <ul className="flex items-center gap-5 text-white">
            <li><Link href="/" className='hover:text-cyan-400'>Home</Link></li>
            <li><Link href="/about" className='hover:text-cyan-400'>About</Link></li>
            <li><Link href="/contactUs" className='hover:text-cyan-400'>Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
