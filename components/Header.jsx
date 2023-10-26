import React from 'react'
import logo from "@/public/logo.svg"
import Image from 'next/image'

import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex items-center justify-around mt-8 '>
        {/* left div */}
        <div className='ml-[4rem]'>
            <Image 
            src={logo}
            width={150}
            height={150}
            alt='Logo of website'
            />
        </div>
        {/* right div */}
        <div className='flex gap-5 text-xl'>
            <Link href={"/"} className="font-bold">Home</Link>
            <Link href={"/"}>Find a doctor</Link>
            <Link href={"/"}>Apps</Link>
            <Link href={"/"}>Testimonials</Link>
            <Link href={"/"}>About us</Link>

        </div>
    </div>
  )
}

export default Header