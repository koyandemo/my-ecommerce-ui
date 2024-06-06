import { HowItWorkCardProps } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

const HowItWorkCard = ({img}:Omit<HowItWorkCardProps,'id'>) => {
  return (
    <div className='bg-gray-400' style={{ width: "185px", height: "280px", position: "relative" }}>
          <Image
            alt="Banner"
            layout="fill"
            objectFit="cover"
            src={img}
          />
    </div>
  )
}

export default HowItWorkCard
