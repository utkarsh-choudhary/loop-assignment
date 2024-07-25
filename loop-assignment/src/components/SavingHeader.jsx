import React from 'react'

function SavingHeader() {
  return (
    <div className='flex justify-around items-center'>
      <h1 className='text-3xl flex items-start justify-start'>Saving plan details</h1>
      <div className='p-2 text-xl gap-2  text-purple-700 '>
      <button className='border p-4 m-4 rounded-lg hover:bg-purple-200'>Scheduled orders</button>
      <button className='border p-4 rounded-lg hover:bg-purple-200'>Order history</button>
      </div>
    </div>
  )
}

export default SavingHeader
