import React from 'react';

const OrderPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-4'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base odd:bg-red-50'>
            <td className='hidden md:block py-6 px-1'>223432142413135</td>
            <td className='py-6 px-1'>9.4.2023</td>
            <td className='py-6 px-1'>Price</td>
            <td className='hidden md:block  py-6 px-1'>Big Burger</td>
            <td className='py-6 px-1'>On the way</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-slate-400'>
            <td className='hidden md:block py-6 px-1'>223432142413135</td>
            <td className='py-6 px-1'>9.4.2023</td>
            <td className='py-6 px-1'>Price</td>
            <td className='hidden md:block  py-6 px-1'>Big Burger</td>
            <td className='py-6 px-1'>On the way</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-red-50'>
            <td className='hidden md:block py-6 px-1'>223432142413135</td>
            <td className='py-6 px-1'>9.4.2023</td>
            <td className='py-6 px-1'>Price</td>
            <td className='hidden md:block  py-6 px-1'>Big Burger</td>
            <td className='py-6 px-1'>On the way</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
