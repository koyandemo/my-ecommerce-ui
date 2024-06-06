"use client";

import { SectionFeatureSharingTabProps } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";

const SectionFeatureSharingTab = ({
  tabs,
  contents,
}: SectionFeatureSharingTabProps) => {
  const [active, setActive] = useState(1);

  const handleClick = (value: number) => {
    setActive(value);
  };

  return (
    <section className="flex flex-col md:flex-row  bg-gray-400 px-5 py-5 rounded-[30px] h-auto mt-[50px]">
      <ul className="w-[100%] md:w-[30%] h-[320px]  md:h-auto flex flex-col justify-between  text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        {tabs.map((data) => (
          <li
            key={data.id}
            className={`inline-flex text-center justify-center items-center px-4 py-3 rounded-sm active w-full cursor-pointer ${
              active === data.id
                ? "bg-blue-700 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => {
              handleClick(data.id);
            }}
          >
            {data.title}
          </li>
        ))}
      </ul>
      {contents.map((data) => {
        return (
          <>
            {active === data.id ? (
              <div className="flex flex-col gap-[5px] p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full h-[inherit]">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {data.title}
                </h3>
                <p className="mb-2">{data.description}</p>
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    position: "relative",
                  }}
                >
                  <Image
                    alt="NFC + QR sharing"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    layout="fill"
                    src={data.img}
                    style={{ inset: "0px", color: "transparent" }}
                  />
                </div>
              </div>
            ) : null}
          </>
        );
      })}
    </section>
  );
};

export default SectionFeatureSharingTab;
