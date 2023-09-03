import React from 'react';

const OrderPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className=''>
        <thead>
          <tr>
            <th>Order</th>
            <th>Date</th>
            <th>Price</th>
            <th>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default OrderPage;
