import React from 'react';
import Image from 'next/image';

import Price from '@/components/Price';
import { ProductType } from '@/types/types';
import DeleteButton from '@/components/DeleteButton';

// Функция `getData` выполняет асинхронный запрос к серверу
const getData = async (id: string) => {
  // Отправляем GET-запрос к серверу для получения данных о продукте
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: 'no-store', // Опция cache указывает, что данные не должны кэшироваться
  });

  // Если ответ от сервера не успешный (например, код ответа не 200 OK), выбрасываем ошибку
  if (!res.ok) {
    throw new Error('Failed'); // Выбрасываем ошибку с сообщением "Failed"
  }

  // Преобразуем полученные данные в формат JSON и возвращаем их
  return res.json();
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const singleProduct: ProductType = await getData(params.id);

  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-400 md:flex-row md:gap-8 md:items-center relative'>
      {/* image container */}
      {singleProduct.img && (
        <div className='relative w-full h-1/2 md:h-[70%]'>
          <Image
            src={singleProduct.img}
            alt=''
            fill
            className='object-contain'
          />
        </div>
      )}
      {/* text container */}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
        <h1 className='text-3xl font-bold xl:text-4xl'>
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price product={singleProduct} />
      </div>
      <DeleteButton id={singleProduct.id} />
    </div>
  );
};

export default SingleProductPage;
