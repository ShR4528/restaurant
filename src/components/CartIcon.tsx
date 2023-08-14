import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const CartIcon = () => {
  return (
    <Link href='/cart' className='flex items-center gap-4'>
      CartIcon
      <div className='relative w-9 h-9  md:w-5 md:h-5'>
        <Image src='/cart.png' alt='cart' fill />
      </div>
      <span>Cart</span>
    </Link>
  );
};

export default CartIcon;
