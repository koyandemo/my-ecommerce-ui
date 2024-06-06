import { OurClientCardProps } from "@/utils/types";
import Image from "next/image";
import React from "react";

const OurClientCard = ({ name, img }: Omit<OurClientCardProps, "id">) => {
  return (
    <div className='bg-gray-400' style={{ width: "200px", height: "150px", position: "relative" }}>
      <Image alt={name} layout="fill" objectFit="cover" src={img} />
    </div>
  );
};

export default OurClientCard;
