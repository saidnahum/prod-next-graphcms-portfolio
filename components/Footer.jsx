import React from 'react';
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

export const Footer = () => {
   return (
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col justify-center items-center mt-20'>
         <div className='flex text-gray-400 space-x-5 text-2xl'>
            <FaFacebook className='hover:text-gray-600 cursor-pointer'/>
            <FaInstagram className='hover:text-gray-600 cursor-pointer'/>
            <FaTwitter className='hover:text-gray-600 cursor-pointer'/>
            <FaGithub className='hover:text-gray-600 cursor-pointer'/>
            <FaYoutube className='hover:text-gray-600 cursor-pointer'/>
         </div>
         <div className='text-gray-500 py-5 mb-10'>&copy; {new Date().getFullYear()} Pixel Portfolio</div>
      </div>
   )
}
