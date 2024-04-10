import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className = "bg-dark-1  fixed w-full z-50 flex-between px-6 py-4 lg:px-10 ">
      <Link href = '/'>
         <Image 
           src = "/icon/logo.svg"
           alt = "zoom logo"
           height = {32}
           width = {32}
           className = "max-sm:size-10"
         />
         <p className = "text-[26px] font-extrabold text-white max-sm:hidden">zoom</p>
      </Link>

      <div className = "flex-between gap-5">
        // clerk comes in here
      </div>
    </nav>
  )
}

export default Navbar
