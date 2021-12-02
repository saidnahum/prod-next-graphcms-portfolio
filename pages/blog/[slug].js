import React from 'react';
import Head from 'next/head';
import { getPostsSlugs, getPost } from '../../utils/data';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export const getStaticPaths = async () => {

   const slugsRes = await getPostsSlugs();
   const slugs = slugsRes.posts;

   return {
      paths: slugs.map(slug => ({ params: { slug: slug.slug } })),
      fallback: false
   }

}

export const getStaticProps = async ({ params }) => {
   const postRes = await getPost(params.slug);
   const post = postRes.post;

   return {
      props: {
         post
      }
   }
}

const Post = ({ post }) => {
   return (
      <>
         <Head>
            <title>{post.title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div className='max-w-3xl mx-auto px-6 sm:px-6 lg:px-0'>
            <h1 className='text-4xl text-center mb-10 md:text-6xl text-gray-900 font-bold'>{post?.title}</h1>
            <div className='flex justify-between items-center my-5 md:my-0 mb-0 md:mb-5'>
               <p className='text-gray-700 text-sm md:text-base'>{new Date(post.date).toDateString()}</p>
               <div className='flex items-center'>
                  <p className='mr-4 text-gray-800 font-semibold md:text-lg ital'>{post.author.name}</p>
                  <Image
                     className='rounded-full border-8 border-red-900'
                     src={post.author.image.url}
                     width={50}
                     height={50}
                     objectFit='cover'
                     alt={post.title}
                  />
               </div>
            </div>
            <div className='flex justify-center space-x-3 mb-10'>
               {
                  post.tags.map(tag => (
                     <span className='uppercase mt-5 md:mt-0 text-xs md:text-sm md:tracking-wide md:m-2 p-2  md:px-2 md:py-1 bg-gray-100 text-gray-900 rounded-lg' key={tag}>{tag}</span>
                  ))
               }
            </div>
            <section className='prose max-w-3xl mx-auto'>
               <ReactMarkdown>
                  {post.content.markdown}
               </ReactMarkdown>
            </section>
         </div>
      </>
   )
}

export default Post
