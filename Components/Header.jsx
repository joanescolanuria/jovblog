import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'


export const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg-px-28'>
        <div className='flex justify-between items-center'>
          {/**  <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>¡Bienvenido a mi blog! Este espacio está dedicado a proyectos y tutoriales sobre desarrollo backend.
           Aquí aprenderás a construir aplicaciones robustas y escalables utilizando diversas tecnologías y frameworks. 
             Exploraremos desde la configuración básica hasta integraciones avanzadas,
              siempre con ejemplos prácticos y consejos útiles. Si te apasiona la programación y 
              quieres profundizar en el mundo del backend, ¡este es el lugar perfecto para ti!</p>
                          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Comenzemos <Image src={assets.arrow} /> </button>

              */}
            <Image src={assets.logojov} width={90} alt='' className='w-[130px] sm:w-auto' />
        </div>
        <div className='text-center my-8'>
          <h1 className='text-3xl sm:text-5xl font-medium'>bcknd</h1>
          <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
            ¡Bienvenido a mi blog! Este espacio está dedicado a proyectos y tutoriales sobre desarrollo backend, siempre con ejemplos prácticos y consejos útiles. Si te apasiona la programación, ¡este es el lugar perfecto para ti!
          </p>

        {/**<form className='flex justify-between max-w-[500px] scale-75  sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
            <input type="email" className='pl-4 outline-none' placeholder='Escribe tu email' id="" />
            <button className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600  active:text-white'>Suscribete</button>
          </form>
 */} 
        </div>
    </div>
  )
}


export default Header