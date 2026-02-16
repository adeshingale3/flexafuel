'use client';

import React from 'react';

const Strip = () => {
  return (
    <div className="w-full bg-black py-4 overflow-hidden mt-5">
      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .scroll-text {
          animation: scroll-horizontal 8s linear infinite;
          white-space: nowrap;
        }
      `}</style>
      <div className="scroll-text text-white text-xl font-bold flex flex-row">
        <div className='mr-10'>Order <span className='text-red-500'>Flexafuel</span> Today</div>
        <div className='mr-10'><span className='text-red-500'>Hurry</span> Up !!!</div>
        <div>Order <span className='text-red-500'>Flexafuel</span> Today</div>
      </div>
    </div>
  );
};

export default Strip;