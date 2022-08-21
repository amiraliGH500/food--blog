import React from 'react'
import Image from 'next/image'
import{
  IoLogoRss,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoPinterest,
  IoIosSearch
}from "react-icons/io"
import{
  AiFillInstagram
}from "react-icons/ai"
import{
  BiUserCircle
}from "react-icons/bi"

function Header() {
  return (
    <div>
      <div className='p-4 pl-11 flex justify-between pr-11'>
        <div className='mt-2'>
          <a href="#">
          <Image
          src="/logo.png"
          height={76}
          width={454}
          layout="fixed"
          />
          </a>
        </div>
        <div className='flex text-center mt-5'>
          <div className='flex gap-4 mt-2'>
          <IoLogoRss className='text-2xl hover:text-yellow-600'/>
          <IoLogoTwitter className='text-2xl hover:text-yellow-600'/>
          <IoLogoFacebook className='text-2xl hover:text-yellow-600'/>
          <IoLogoPinterest className='text-2xl hover:text-yellow-600'/>
          <AiFillInstagram className='text-2xl hover:text-yellow-600'/> 
          <BiUserCircle className='text-2xl mr-3 hover:text-yellow-600'/>
          </div>
          <div className='relative'>
          <input type="text" className=' font-sans border-black border-2 w-40 h-10 p-2 active:rounded-none' placeholder='search recipes'/>
          <IoIosSearch className="text-2xl absolute top-2 right-1 text-yellow-600"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header