import React from 'react';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-50'>
      {/* wrapper */}
      <div className=''>
        {/* single item */}
        <div className=''>
          {/* image */}
          <div className='relative'>
            <Image src='' alt='' fill />
          </div>
          {/* text container */}
          <div className=''>
            <h1 className=''>Title</h1>
            <p className=''>Description</p>
            <span>123</span>
            <button className=''>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
