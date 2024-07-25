import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Navbar() {
  return (
    <div>
    <p className='hover:underline p-1 bg-customPurple text-white flex items-center justify-center'>
      Welcome to loop Subscription's demo🚀 know more about loop
      <ArrowForwardIcon className='ml-2 transition-transform duration-300 transform hover:scale-x-150' />
    </p>
    
      <nav class="bg-gray-200">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only"></span>
          
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <p className='text-customPurple text-xl'>Loop</p>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a href="#" class="text-slate-500  px-3 py-2 text-xl font-medium hover:underline " >Shop Subscription</a>
            <a href="#" class="text-slate-500 px-3 py-2 text-xl font-medium hover:underline">Bundles</a>
            <a href="#" class="text-slate-500 px-3 py-2 text-xl font-medium hover:underline">
            Manage Subscriptions</a>
            <a href="#" class="text-slate-500 px-3 py-2 text-xl font-medium hover:underline">Recharge Alternative</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        
        <div class="relative ml-3">
          <div>
            <button type="button" class=" flex rounded-full  text-sm  " id="user-menu-button">
            <img class="h-8 w-8 rounded-full bg-transparent" src="https://www.pikpng.com/pngl/m/109-1092659_search-icon-small-png-clipart.png" alt=""/>
              <img class="h-8 w-8 rounded-full bg-transparent" src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt=""/>
              <img class="h-8 w-8 rounded-full " src="https://cdn.icon-icons.com/icons2/2582/PNG/512/shopping_bag_icon_153983.png" alt=""/>

            </button>
          </div>

          
          
        </div>
      </div>
    </div>
  </div>

  
  
</nav>

    </div>
  )
}

export default Navbar
