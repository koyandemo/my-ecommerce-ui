import React from "react";
import TextComponent from "../text/TextComponent";
import { OurProductCardProps } from "@/utils/types";

const OurProductCard = ({title,img,description}:Omit<OurProductCardProps,"id">) => {
  return (
    <div className="w-[175px] h-[auto] flex flex-col gap-[10px]">
        <TextComponent mainTxt={title} />
      <a href="#">
        <img
          className="w-[inherit]"
          src={img}
          alt=""
        />
      </a>
      <TextComponent size="sm" weight="bold" mainTxt={description} />
    </div>
  );
};

export default OurProductCard;
