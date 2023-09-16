'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { userCartStore } from '@/utils/store';

const CartIcon = () => {
  const { totalItems } = userCartStore();

  useEffect(() => {
    userCartStore.persist.rehydrate();
  }, []);

  return (
    <Link href='/cart' className='flex items-center gap-4'>
      CartIcon
      <div className='relative w-9 h-9  md:w-5 md:h-5'>
        <Image src='/cart.png' alt='cart' fill />
      </div>
      <span>Cart ({totalItems})</span>
    </Link>
  );
};

export default CartIcon;
