import React from 'react'
import Image from 'next/image'

function Nav() {
  return (
    <div>
      <div className='p-4 pl-11 pr-11 '>
          <div className='font-bold flex gap-10 justify-center border-b-2 border-t-2 p-4 z-50 bg-white sticky top-0 border-black'>
            <h1 className='hover:text-yellow-600 cursor-pointer'>RECIPES</h1>
            <h1 className='hover:text-yellow-600 cursor-pointer'>MEAL PREP</h1>
            <h1 className='hover:text-yellow-600 cursor-pointer'>MEAL PALNS</h1>
            <h1 className='hover:text-yellow-600 cursor-pointer'>EXTRA BYTES</h1>
            <h1 className='hover:text-yellow-600 cursor-pointer'>SHOP</h1>
            <h1 className='hover:text-yellow-600 cursor-pointer'>ABOUT</h1>
          </div>
          <div className='grid grid-cols-2 bg-[#2f2f2f] text-white' >
          <Image
            src='/Deruny-Ukrainian-Potato-Pancakes-close-693x520.jpg'
            width={693}
            height={520}
            layout='fixed'
            className='cursor-pointer'
            />
            <div className='ml-40 mt-20'>
              <h5 className='w-40 h-7 text-sm font-bold  bg-yellow-400 text-center pt-1'>LATEST & GREATES</h5>
              <h1 className='text-2xl font-bold mt-2 w-96 hover:text-yellow-600 cursor-pointer'>
                DERUNY (DRANIKI) – UKRAINIAN POTATO PANCAKES
              </h1>
              <h3 className='text-base font-bold text-gray-400'>
              $2.77 RECIPE / $0.46 SERVING
              </h3>
              <h2 className='text-xl font-light mt-10'>
                Deruny, also called Draniki, are traditional Ukrainian potato pancakes made with finely grated raw potatoes, onion, flour, and eggs.
              </h2>
              <h1 className='w-fit text-2xl font-bold mt-10 hover:text-gray-400 cursor-pointer'>READ MORE...</h1>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Nav