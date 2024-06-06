import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='w-[inherit] h-[100px] flex items-center justify-center bg-gray-500 mt-[50px]'>
     <div style={{width: '100%', height: '150px', position: 'relative'}}>
     <Image 
      alt='Banner'
      layout="fill"
      objectFit='cover'
      src="https://static.vecteezy.com/system/resources/thumbnails/003/240/364/small/shopping-online-on-phone-paper-art-modern-pink-background-gifts-box-free-vector.jpg"
     />
    </div>
    </div>
  )
}

export default Banner
