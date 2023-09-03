import Image from 'next/image';
import React from 'react';

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/* products container */}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
        {/* single item */}
        <div className='flex items-center justify-between mb-4 '>
          <Image src='/temporary/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <span>Large</span>
          </div>
          <h2>$79.90</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        {/* single item */}
        <div className='flex items-center justify-between mb-4 '>
          <Image src='/temporary/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <span>Large</span>
          </div>
          <h2>$79.90</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        {/* single item */}
        <div className='flex items-center justify-between mb-4 '>
          <Image src='/temporary/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <span>Large</span>
          </div>
          <h2>$79.90</h2>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>
      {/* payment container */}
      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 2xl:gap-6'>
        <div className='flex justify-between '>
          <span>Subtotal</span>
          <span> $88.70</span>
        </div>
        <div className='flex justify-between '>
          <span>Service Cost</span>
          <span> $0.00</span>
        </div>
        <div className='flex justify-between '>
          <span>Delivery Cost</span>
          <span className='text-green-500'>Free</span>
        </div>
        <hr className='my-2' />
        <div className='flex justify-between '>
          <span>TOTAL Number</span>
          <span className='font-bold'>$91.90</span>
        </div>
        <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
