"use client";

import { SectionFaqProps } from "@/utils/types";
import React, { act, useState } from "react";

const SectionFaq = ({ data }: SectionFaqProps) => {
  const [active, setActie] = useState<number[]>([]);

  const handleClick = (value: number) => {
    if (active.includes(value)) {
      const idxs = active.filter((data) => data !== value);
      setActie(idxs);
    } else {
      setActie([...active, value]);
    }
  };

  return (
    <section className="mt-[50px]">
      <h3 className="lg:text-3xl text-2xl mt-6 text-center font-bold">FAQs</h3>
      <ul className="my-[60px] mt-8  mx-auto w-full flex flex-col gap-10">
        {data.map((faq) => (
          <li className="w-full" key={faq.id}>
            <div className="flex bg items-center justify-between gap-4 flex-nowrap w-full">
              <p className="text-xl text-black-neutral lg:text-2xl font-bold">
                {faq.question}
              </p>
              <button
                className="relative w-5 aspect-square"
                aria-label="toggle show or hide answer"
                onClick={() => {
                  handleClick(faq.id);
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  className="text-xl relative z-10 text-black-neutral"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                </svg>
                {!active.includes(faq.id) && (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="text-xl absolute inset-0 text-accent transition-transform duration-300"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "rotate(-90deg)" }}
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`grid transition-[grid-template-rows] duration-300 lg:text-xl text-lg text-black-neutral lg:max-w-[70ch] max-w-[50ch] ${
                active.includes(faq.id) ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="duration-100 overflow-hidden">
                <ul
                  className="pl-2 mt-2"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                ></ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionFaq;
