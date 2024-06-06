import React from 'react'
import TextComponent from './text/TextComponent'

interface PickContainerProps {
    title:string;
    children:React.ReactElement,
}

//w-[100%] grid gap-3  grid-flow-col overflow-x-scroll

const Container = ({title,children}:PickContainerProps) => {
  return (
    <div className="w-[inherit] flex justify-center items-center flex-col gap-[30px] mt-[80px]">
      <TextComponent
        mainTxt={title}
        size="lg"
        weight="bold"
        transform="none"
      />
      <div className="w-[100%] justify-center sm:justify-between flex flex-wrap gap-3">
        {children}
      </div>
    </div>
  )
}

export default Container
