import React from 'react';
import Image from 'next/image';
import { singleProduct } from '@/data';
import Price from '@/components/Price';

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-400 md:flex-row'>
      {/* image container */}
      {singleProduct.img && (
        <div className='relative'>
          <Image
            src={singleProduct.img}
            alt=''
            fill
            className='object-contain'
          />
        </div>
      )}
      {/* text container */}
      <div>
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
