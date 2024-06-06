import React from 'react'
import TextComponent from './text/TextComponent'

interface PickContainerProps {
    title:string;
    children:React.ReactElement,
}

const Container = ({title,children}:PickContainerProps) => {
  return (
    <div className="w-[inherit] flex justify-center items-center flex-col gap-[35px] mt-[50px]">
      <TextComponent
        mainTxt={title}
        size="lg"
        weight="bold"
        transform="none"
      />
      <div className="w-[100%] justify-center sm:justify-between flex flex-wrap gap-5 sm:gap-3">
        {children}
      </div>
    </div>
  )
}

export default Container
