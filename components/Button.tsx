import React from "react";

interface ButtonProps{
    txt:string
}

const Button = ({txt}:ButtonProps) => {
  return (
    <button className="w-[150px] rounded-[30px] px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300">
      {txt}
    </button>
  );
};

export default Button;
