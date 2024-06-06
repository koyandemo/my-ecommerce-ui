import React from "react";
import TextComponent from "../text/TextComponent";
import { OurProductCardProps } from "@/utils/types";
import Image from "next/image";

const OurProductCard = ({title,img,description}:Omit<OurProductCardProps,"id">) => {
  return (
    <div className="w-[175px] h-[auto] flex flex-col gap-[10px]">
        <TextComponent mainTxt={title} />
        <div className='bg-gray-400' style={{ width: "inherit", height: "150px", position: "relative" }}>
      <Image alt={title} layout="fill" objectFit="cover" src={img} />
    </div>
      <TextComponent size="sm" weight="bold" mainTxt={description} />
    </div>
  );
};

export default OurProductCard;
