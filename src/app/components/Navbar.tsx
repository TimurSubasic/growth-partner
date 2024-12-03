'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {

    const path = usePathname()
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offset = 70; // Navbar height offset
          window.scrollTo({
            top: elementPosition - offset, // Adjust for the navbar height
            behavior: 'smooth', // Smooth scroll effect

          });

          setSidebarOpen(!sidebarOpen)
        }
      };

      const changeDesign = () => {
        const newTheme = document.getElementById('why-us');
        const oldWhy = document.getElementById('why-us-old');
        const oldAbout = document.getElementById('about-us-old');

        newTheme?.classList.toggle('hidden')

        oldWhy?.classList.toggle('hidden')

        oldAbout?.classList.toggle('hidden');

      }

     

  return (
    <div className='fixed top-0 bg-[#006039] w-full h-[70px] text-white font-semibold '>
        <div className='mx-auto max-w-7xl p-5 text-center relative h-full '>
            {/* menu btn */}
            <div className='absolute left-5 top-5'>
                {path == '/' && (
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className=" duration-300 flex items-center justify-center gap-1 z-50 ">
                        
                        {/* hamburger */}
                        <div className='h-6 w-6 z-50'>

                            <div className={`h-[3px] w-6 bg-white rounded-lg absolute ${sidebarOpen ? 'top-[10px] rotate-45 ' : 'top-[7px] '} duration-200`}></div>

                            <div className={`h-[3px] w-6 bg-white rounded-lg absolute ${sidebarOpen ? 'top-[10px] -rotate-45 ' : 'bottom-[6px] '} duration-200`}></div>

                        </div>

                        <p className='z-50'>Menu</p>
                    </button>
                )}
                {path != '/' && (
                    <Link href='/' className=' duration-300'>
                        Home
                    </Link>
                )}
            </div>

            {/* center image */}
            <div className='inline-block -mt-[10px]'>
                <Image
                    src="/gp2.png" 
                    alt="Growth Partners Icon"
                    width={40} 
                    height={40} 
                />
            </div>

            <div className='absolute right-5 top-5'>
                {path != '/contact' && (
                    <Link href='/contact' className=' duration-300'>
                        Contact Us
                    </Link>
                )}
            </div>
        </div>

        {/* Sidebar for Menu Options */}
        
            <div
            className={`fixed top-0 ${sidebarOpen ? 'left-0' : '-left-[500px]'} bg-[#006039] h-full z-30 pt-20 p-14 sm:p-16 md:p-20 xl:p-28 text-white duration-300 shadow-ring shadow-2xl `}
          >
            <div className="flex flex-col items-center text-white">
              <button onClick={() => scrollToSection('hero')} className="p-3 hover:text-green-500 duration-200">Home</button>
              <button onClick={() => scrollToSection('why-us')} className="p-3 hover:text-green-500 duration-200">Why Us</button>
              <button onClick={() => scrollToSection('contact-us')} className="p-3 hover:text-green-500 duration-200">Contact Us</button>
              <button onClick={() => changeDesign()} className="p-3 hover:text-green-500 duration-200">prosli dizajn</button>
            </div>
          </div>
        
    </div>
  )
}

export default Navbar
