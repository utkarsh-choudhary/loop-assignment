import React from 'react'

function SubFooter() {
  return (
    <div>
      <div className=' h-100 p-4 grid place-content-center bg-custom-gradient w-full' style={{
        background: 'linear-gradient(to right, #4216E4, #6F34DB, #20C68E)',
      }}>
        <p className='flex items-center justify-center text-xl'>Rated ⭐️⭐️⭐️⭐️⭐️ on Shopify App Store</p>
        <h1 className='flex items-center justify-center text-6xl p-10'>This store is powered by Loop subscriptions!</h1>
        <h3 className='flex items-center justify-center text-xl'>Turn your customers into subscribers and drive recurring revenue for your DTC brand.</h3>
        <div className="flex justify-center items-center p-4">
  <button className="bg-green-400 text-white font-bold py-2 rounded hover:bg-green-600 w-52">
    Book a Demo
  </button>
</div>
      </div>
    </div>
  )
}

export default SubFooter
