import React from 'react'

function Button() {
  return (
    <div>
      <div className='flex p-2 mx-10 '>
        <button className='py-3 px-6 text-lg bg-white text-purple-800 rounded-md hover:bg-purple-100 hover:text-purple-600 border border-purple-300'>
          See all products
        </button>
      </div>
    </div>
  )
}

export default Button
