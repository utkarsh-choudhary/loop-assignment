// src/components/SavingPlans.jsx
import React from 'react';

function SavingPlans({ img, title, description, desc,para, lara , desc1,}) {
  return (
     
    <div className='relative flex flex-col sm:flex-row items-start  rounded-md border p-4 mb-4 cursor-pointer bg-gray-200'>
      <div className='flex-shrink-0 w-full sm:w-[150px] h-[150px]'>
        <img
          src={img}
          
          className='w-full h-full rounded-md object-cover border-none'
        />
      </div>
      <div className='flex-1 p-4'>
        <h1 className='text-lg font-semibold flex items-center'>
          {title}
        </h1>
        <p className='mt-2 text-sm text-gray-600'>
          {description}
        </p>
        <div className='mt-2 flex items-center space-x-2'>
          <p className='mt-2 text-sm text-gray-600'>{para}</p>
        </div>
        <div className='mt-2 flex items-center space-x-2'>
          <p className='mt-2 text-sm text-gray-600'>{lara}</p>
        </div>
        <div className='mt-2 flex items-center space-x-2'>
          <p className='mt-2 text-sm text-gray-600 '>{desc} <span className="text-sm line-through">{desc1}</span></p>
          
        </div>
      </div>
      <button className='absolute bottom-4 right-4 text-gray-600 border border-black px-4 py-2 rounded-lg'>
        Edit
      </button>
    </div>
  );
}

export default SavingPlans;
