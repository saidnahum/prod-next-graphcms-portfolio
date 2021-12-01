import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {

   const router = useRouter();

   return (
      <div className='w-full py-10 px-4 sm:px-6 lg:px-0'>
         <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between max-w-3xl mx-auto items-center'>
            <h1 className='text-2xl font-semibold'><span className='text-green-800'>SaidN</span> Portfolio</h1>
            <ul className='flex space-x-5'>
               <li>
                  <Link href='/'>
                     <a className={`text-gray-900 hover:text-gray-600 ${router.pathname == "/" ? 'text-green-500 font-bold hover:text-green-800' : 'text-gray-500'}`}>Home</a>
                  </Link>
               </li>
               <li>
                  <Link href='/about'>
                     <a className={`text-gray-900 hover:text-gray-600 ${router.pathname == "/about" ? 'text-green-500 font-bold hover:text-green-800' : 'text-gray-500'}`}>About</a>
                  </Link>
               </li>
               <li>
                  <Link href='/portfolio'>
                     <a className={`text-gray-900 hover:text-gray-600 ${router.pathname == "/portfolio" ? 'text-green-500 font-bold hover:text-green-800' : 'text-gray-500'}`}>Portfolio</a>
                  </Link>
               </li>
               <li>
                  <Link href='/blog'>
                     <a className={`text-gray-900 hover:text-gray-600 ${router.pathname == "/blog"  ? 'text-green-500 font-bold hover:text-green-800' : 'text-gray-500'}`}>Blog</a>
                  </Link>
               </li>
               <li>
                  <Link href='/gallery'>
                     <a className={`text-gray-900 hover:text-gray-600 ${router.pathname == "/gallery"  ? 'text-green-500 font-bold hover:text-green-800' : 'text-gray-500'}`}>Gallery</a>
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Header
