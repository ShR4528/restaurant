'use client';

import React, { useEffect, useState } from 'react';

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    quantity * (options ? options[selected].additionalPrice : 0) + price;
  }, [quantity, selected, price, options]);

  return (
    <div>
      <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
      {/* options container */}
      <div className='flex gap-4'>
        {options?.map((option, index) => (
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
