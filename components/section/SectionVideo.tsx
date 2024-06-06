import React from 'react'
import TextComponent from '../text/TextComponent'

const SectionVideo = ({title,url}:{title:string,url:string}) => {
  return (
    <div className='flex flex-col justify-center items-center mt-[50px] pb-[50px]'>
      <TextComponent
        mainTxt={title}
        size="lg"
        weight="bold"
        transform="none"
      />
     <video autoPlay loop controls className="rounded-2xl object-cover mx-auto mt-10 w-full max-w-[1000px]">
        <source src={url} type="video/mp4" /></video>
    </div>
  )
}

export default SectionVideo
