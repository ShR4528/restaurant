'use client';

import Countdown from 'react-countdown';
import React from 'react';

const endingDate = new Date('2023-07-25');
console.log(endingDate);

const CountDown = () => {
  return (
    <Countdown
      date={endingDate}
      className='font-bold text-5xl text-yellow-300'
    />
  );
};

export default CountDown;
