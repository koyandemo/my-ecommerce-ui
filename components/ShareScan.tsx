import React from 'react'
import TextComponent from './text/TextComponent'
import Button from './Button'
import Image from 'next/image'

interface ShareScanProps{
  isReverse:boolean;
  img : string;
  title :string;
  description:string;
  btnLabel:string;
}

const ShareScan = ({isReverse,img,title,description,btnLabel}:ShareScanProps) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-[10px] mt-[50px]  ${isReverse ? "sm:flex-row-reverse sm:justify-start sm:items-start" : "sm:flex-row sm:justify-start sm:items-start"}`}>
      <div className='w-[100%] sm:w-[50%] h-[300px] relative'>
     <Image 
      alt='Banner'
      layout="fill"
      objectFit='cover'
      src={img}
     />
    </div>
      <div className='w-[100%] sm:w-[50%] flex flex-col justify-between gap-[20px]   mb-[30px]'>
       <div className='flex flex-col gap-[15px]'>
       <TextComponent mainTxt={title} weight='bold' />
        <TextComponent mainTxt={description} />
       </div>
        <Button txt={btnLabel} />
      </div>
    </div>
  )
}

export default ShareScan
