'use client';

import { ProductType } from '@/types/types';
import React, { useEffect, useState } from 'react';

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity *
        (product.options?.length
          ? product.price + product.options[selected].additionalPrice
          : product.price)
    );
  }, [quantity, selected, product]);

  return (
    <div>
      <h2 className='text-2xl font-bold'>${total}</h2>
      {/* options container */}
      <div className='flex gap-4'>
        {product.options?.length &&
          product.options?.map((option, index) => (
            <button
              key={option.title}
              className='min-w-[6rem] p-2 ring-1 ring-red-500 rounded-md'
              style={{
                background: selected === index ? 'red' : 'white',
                color: selected === index ? 'white' : 'black',
              }}
              onClick={() => setSelected(index)}>
              {option.title}
            </button>
          ))}
      </div>
      {/* quantity container */}
      <div className='flex justify-between items-center'>
        {/* quantity */}
        <div className='flex justify-beetwen w-full p-3 ring-1 ring-red-500'>
          <span>Quantity</span>
          <div className='flex gap-4 items-center'>
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>
              {'<'}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}>
              {'>'}
            </button>
          </div>
        </div>
        <button className='uppercase w-56 bg-red-600 text-white p-3 ring-1 ring-red-600'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
