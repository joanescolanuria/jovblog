import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function Footer() {
  return (
    <div  className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black  py-5 items-center'>
        <Image src={assets.logojov_white} alt='' width={90} />
        <p className='text-sm text-white'>dev. joan vasquez    </p>
            <div className='flex'>
            <a href="https://github.com/joanvasquez21" target="_blank" rel="noopener noreferrer">
                    <Image src={assets.github} alt="GitHub" width={40} height={40} />
                  </a>

            </div>
        
        

    </div>
  )
}

export default Footer