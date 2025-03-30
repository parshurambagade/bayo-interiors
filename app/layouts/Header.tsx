import Image from 'next/image'
import React from 'react'
import NavItems from '../components/NavItems'

const Header = () => {
  return (
    <div className='min-h-[70px] w-full flex px-5'>
        <div className="logo flex-[2.5]  flex gap-5 w-full items-center justify-start">
            <Image src={'/logo.png'} alt='Bayo Interiors' height={40} width={40}/>
            <span className='text-text text-[28px] font-semibold uppercase leading-normal'>BAYO INTERIORS</span>
        </div>
        <div className="nav-items flex-4 flex items-center justify-center">
            <NavItems />
        </div>
        <div className='flex-[2.5]'>

        </div>
    </div>
  )
}

export default Header