import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="w-full bg-customDark">
  <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row gap-6 ">
    
    <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3 p-10  ">
      <div className="mb-8 lg:mb-0 gap-4">
        <p className="mb-6  font-semibold text-white text-2xl ">Resources</p>
        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
          <li className='hover:underline'>Widgets Gallery [New]</li>
          <li className='hover:underline'>Subscription Gamification</li>
          <li className='hover:underline'>Unbundling of Box Subscription</li>
        </ul>
      </div>
      <div className="mb-8 lg:mb-0">
        <p className="mb-6 text-2xl font-semibold text-white ">Migration</p>
        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
          <li className='hover:underline'>Recharge</li>
          <li className='hover:underline'>Bold</li>
          <li className='hover:underline'>Migration reviews</li>
        </ul>
      </div>
      <div className="mb-8 lg:mb-0">
        <p className="mb-6 text-2xl font-semibold text-white ">Compare Apps</p>
        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
          <li className='hover:underline'>Recharge vs Bold vs Loop</li>
          <li className='hover:underline'>Recharge vs Skio vs Loop</li>
          <li className='hover:underline'>
          Ordergroove vs Recharge vs Loop</li>
        </ul>
      </div>
      <div className="mb-8 lg:mb-0">
        <p className="mb-6 text-2xl font-semibold text-white ">Integrations</p>
        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
          <li className='hover:underline'>Prediko for Inventory Management</li>
          <li className='hover:underline'>Upsell Widget Designer</li>
          <li className='hover:underline'>Littledata for BFCM analytics</li>
          <li className='hover:underline'>All Integrations</li>
          
        </ul>
      </div>
      <div className="mb-8 lg:mb-0">
        <p className="mb-6 text-2xl font-semibold text-white ">Help</p>
        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
          <li className='hover:underline'>Loop Help Centre</li>
          <li className='hover:underline'>CHow to setup subscription on Shopify</li>
          
        </ul>
      </div>
      <div className="mb-8 lg:mb-0">
        <p className="mb-6 text-2xl font-semibold text-white ">Legal</p>
        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
          <li className='hover:underline'>Automatic Renewal Law (ARL)</li>
        </ul>
      </div>
      <div className=' grid place-content-center bg-purple-600 rounded-lg p-2 hover:bg-purple-400'>
        <button className='text-white flex justify-center items-center text-centerhover:bg-purple-200'>follow on shop</button>
      </div>
    </div>
  </div>
  <hr className="my-4" />
  <div className="mx-auto max-w-6xl items-center  px-4 md:flex lg:px-0">

    <div className="">
  <div className="flex justify-between mb-2 text-gray-400 text-sm">
    <span>Country/region</span>
    <span>Language</span>
  </div>
  <div className="flex items-center space-x-4">
    <div className="flex items-center space-x-2 px-4 py-2 border border-gray-400 rounded text-white">
      <span>USD $</span>
      <span>| United States</span>
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
    <div className="flex items-center space-x-2 px-4 py-2 border border-gray-400 rounded text-white ">
      <span>English</span>
      <svg className="w-4 h-4 text-gray-400 p-4" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </div>
</div> 
  </div>
  <div className="mt-4 md:mt-0 flex  justify-start  p-4 mx-56 ">
      <p className="text-sm font-medium text-gray-500 flex items-start justify-start p-4">
        © 2024, Loop Demo Store Powered by Shopify
      </p>
    </div>
</footer>

    </div>
  )
}

export default Footer
