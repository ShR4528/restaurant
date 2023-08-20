import { pizzas } from '@/data';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map((item) => (
        <Link
          className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 md:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between even:bg-fuchsia-50 items-center group'
          href={`/product/${item.id}`}
          key={item.id}>
          {/* image container */}
          {item.img && (
            <div className='relative h-[88%]'>
              <Image src={item.img} alt='' fill className='object-contain' />
            </div>
          )}
          {/* text container */}
          <div className='flex items-center justify-center font-bold '>
            <h1 text-2xl p-2>
              {item.title}
            </h1>
            <h2 className='group-hover:hidden text-2xl'>{item.price}</h2>
            <button className='hidden bg-red group-hover:block uppercase text-white p-2 rounded-md'>
              Add To Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
