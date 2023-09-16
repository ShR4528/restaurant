'use client';
import { userCartStore } from '@/utils/store';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = userCartStore();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    userCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    if (!session) {
      router.push('/');
    } else {
      try {
        const res = await fetch('http://localhost:3000/api/orders', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: 'NOt paid',
            userEmail: session.user.email,
          }),
        });
        const data = await res.json();
        router.push(`/pay/${data.id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/* products container */}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
        {/* single item */}
        {products.map((item) => (
          <div className='flex items-center justify-between mb-4 key={item.id}'>
            {item.img && (
              <Image src={item.img} alt='' width={100} height={100} />
            )}
            <div className=''>
              <h1 className='uppercase text-xl font-bold'>
                {item.title} x{item.quantity}
              </h1>
              <span>{item.optionTitle}</span>
            </div>
            <h2>{item.price}</h2>
            <span className='cursor-pointer' onClick={() => removeFromCart}>
              X
            </span>
          </div>
        ))}
      </div>

      {/* payment container */}
      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 2xl:gap-6'>
        <div className='flex justify-between '>
          <span>Subtotal ({totalItems} items)</span>
          <span> {totalPrice}</span>
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
