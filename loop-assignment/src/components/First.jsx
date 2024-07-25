import React from 'react'

function First() {
  return (
    <div className='p-5'>
      <p className='   text-lg'>#11782521051 <span className='bg-green-500 rounded-lg text-white p-1'> Active</span></p>
      <p className='font-semibold'>$137.26 <span className='font-medium text-black'>+ $0 shipping</span> </p>
      <p className=''>Deliver every 1 week</p>
      <div className="flex justify-center items-center ">
  <img
    src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/Frame_9.png?v=1718883792"
    className="h-64 w-"
    alt="Image"
  />
</div>


      <p className='text-2xl'>Upcoming order : <span className='font-semibold p-2'>August 7,2024</span></p>
      <div className="flex m-7 justify-center gap-6">
  <div className="w-72">
    <button className="w-full text-purple-500  bg-purple-50 text-center text-base py-4 rounded-xl border border-customPurple hover:bg-customPurple hover:text-white ">
      Order now
    </button>
  </div>
  <div className="w-72 ">
    <button className="w-full text-purple-500 bg-purple-50 text-center text-base py-4 rounded-xl border border-customPurple hover:bg-customPurple hover:text-white">
      Skip
    </button>
  </div>
  <div className="w-72">
    <button className="w-full text-purple-500 bg-purple-50 text-center text-base py-4 rounded-xl border border-customPurple hover:bg-customPurple hover:text-white">
      Re-Schedule
    </button>
  </div>
  <div className="w-72">
    <button className="w-full text-purple-500 bg-purple-50 text-center text-base py-4 rounded-xl border border-customPurple hover:bg-customPurple hover:text-white">
      Postpone
    </button>
  </div>
</div>


      <p className='p-1'>Last order was charged on July 4, 2024</p>
    </div>
  )
}

export default First
