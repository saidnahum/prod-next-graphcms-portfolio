import React from 'react';
import { getPortfolioItems } from '../../utils/data';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export const getStaticProps = async () => {
   const portfoliosRes = await getPortfolioItems();
   const portfolios = portfoliosRes.portfolios

   return {
      props: {
         portfolios
      }
   }
}

const index = ({ portfolios }) => {

   console.log(portfolios);

   return (
      
      <>
         <Head>
				<title>Projects</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>      
         <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-0'>
            {
               portfolios.map(portfolio => (
                  <div key={portfolio.slug}>
                     <Link href={`/portfolio/${portfolio.slug}`}>
                        <a>
                           <div className='relative mb-10 image overflow-hidden rounded-lg transform transition-all duration-300 md:hover:scale-105'>
                              <div className='absolute w-full h-full z-10 opacity-80 bg-green-900 '>
                                 <div className='absolute w-full h-full z-10 flex justify-center items-center flex-col text-center px-4 md:px-10'>
                                    <h3 className='text-white font-semibold text-xl md:text-3xl p-2 md:p-5 leading-relaxed'>
                                       {portfolio.title}
                                    </h3>
                                    <p className='text-gray-50 text-sm md:text-lg md:mt-4 line-clamp-2 md:line-clamp-none'>{portfolio.description}</p>
                                    <div className='mt-3 md:mt-10'>
                                       {portfolio.tags.map(tag => (
                                          <span className='text-white md:uppercase text-sm md:tracking-wide m-1 md:m-2 bg-green-500 px-2 py-1 rounded-lg font-bold' key={tag}>{tag}</span>
                                       ))}
                                    </div>
                                 </div>
                              </div>
                              <Image
                                 src={portfolio.coverImage.url}
                                 width={portfolio.coverImage.width}
                                 height={portfolio.coverImage.height}
                                 objectFit='cover'
                                 className='absolute'
                                 layout='responsive'
                                 alt={portfolio.title}
                              />
                           </div>
                        </a>
                     </Link>
                  </div>
               ))
            }
         </div>
      </>

   )
}

export default index
