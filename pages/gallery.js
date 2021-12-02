import React from 'react';
import { getPhotos } from '../utils/data';
import { getPlaiceholder } from 'plaiceholder';
import Image from 'next/image';

const blurImages = async (photos) => {
   const images = await Promise.all(
      photos.map(async (image) => {
         const {base64, img} = await getPlaiceholder(image.photo.url, {size: 10});
         
         return {
            ...img,
            base64,
            id: image.id,
            description: image.description,
            date: image.date,
            title: image.title
         }
      })
   );

   return images;
}

export const getStaticProps = async() => {
   const photosRes = await getPhotos();
   const {photos} = photosRes;
   const blurredPhotos = await blurImages(photos);

   return {
      revalidate: 3600,
      props: {
         blurredPhotos
      }
   }
}

const gallery = ({ blurredPhotos }) => {

   console.log(blurredPhotos);

   return (
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-2 gap-3'>
         {
            blurredPhotos.map(photo => (
               <Image 
                  src={photo.src}
                  width={photo.width / 3}
                  height={photo.height/ 3}
                  key={photo.id}
                  placeholder="blur"
                  blurDataURL={photo.base64}
                  objectFit='cover'
                  layout='responsive'
                  alt={photo.title}
               />
            ))
         }
      </div>
   )
}

export default gallery
