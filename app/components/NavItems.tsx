import Link from 'next/link';
import React from 'react'

const NavItems = () => {
    const navItems = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Projects",
            url: "/projects"
        },
        {
            name: "About Us",
            url: "/about"
        },
        {
            name: "Contact Us",
            url: "/contact"
        }
    ];

  return (
    <div className='flex items-center justify-center gap-12'>
        {navItems.map(item => <Link href={item.url} key={item.name} className='text-text text-sm leading-6 uppercase text-center font-semibold'>{item.name}</Link>)}
    </div>
  )
}

export default NavItems