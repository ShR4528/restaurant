import { AddressElement } from '@stripe/react-stripe-js';
import React from 'react';

const AdressForm = () => {
  return (
    <form>
      <h1>AdressForm</h1>
      <AddressElement
        options={{ mode: 'shipping' }}
        onChange={(event) => {
          if (event.complete) {
            const address = event.value.address;
          }
        }}
      />
    </form>
  );
};

export default AdressForm;
