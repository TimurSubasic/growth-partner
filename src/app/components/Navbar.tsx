'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const path = usePathname()




  return (
    <div className=' bg-[#006039] w-full h-[70px] text-white font-semibold '>


        <div className=' mx-auto max-w-7xl p-5 text-center relative h-full '>

            {/* menu btn */}
            <div className=' absolute left-5 top-5'>

                {
                    path == '/' && 
                    (
                        <button>
                            Menu
                        </button>
                    )
                }

                {
                    path != '/' && 
                    (
                        <Link href='/'>
                            Home
                        </Link>
                    )
                }

            </div>


            {/* center image */}
            <div className='text-center inline-block'>
                <Image
                src="/gp2.png" // Path to your image
                alt="Growth Partners Icon"
                width={30} // Desired width
                height={30} // Desired height
                />
            </div>



            <div className=' absolute right-5 top-5 '>
            {
                path != '/contact' && 
                (
                    <Link href={'/contact'}>
                        Contact Us
                    </Link>
                )
            }
            </div>


        </div>

        
      
    </div>
  )
}

export default Navbar
