import { OurClientCardProps } from "@/utils/types";
import Image from "next/image";
import React from "react";

const OurClientCard = ({ name, img }: Omit<OurClientCardProps, "id">) => {
  return (
    <div className='bg-gray-400 w-[100%] h-[200px] sm:h-[150px] sm:w-[200px] relative'>
      <Image alt={name} layout="fill" objectFit="cover" src={img} />
    </div>
  );
};

export default OurClientCard;
