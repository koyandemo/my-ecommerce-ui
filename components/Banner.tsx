import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='w-[inherit] h-[100px] flex items-center justify-center bg-gray-500 mt-[50px]'>
     <div className='bg-gray-400' style={{width: '100%', height: '150px', position: 'relative'}}>
     <Image 
      alt='Banner'
      layout="fill"
      objectFit='cover'
      objectPosition="top"
      src="https://firebasestorage.googleapis.com/v0/b/books-club-87d13.appspot.com/o/ecommerce-ui%2Fbanner.webp?alt=media&token=2695e9b6-3d27-4bff-9ee9-7d2b89a3c53e"
     />
    </div>
    </div>
  )
}

export default Banner
