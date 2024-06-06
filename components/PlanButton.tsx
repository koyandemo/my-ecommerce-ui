"use client"

interface PlanButtonProps {
  txt: string;
}

const PlanButton = ({ txt }: PlanButtonProps) => {
  const handleClick = () => {
    console.log("hi")
    alert("Under Development !");
  };
  return (
    <button
      onClick={() => {handleClick()}}
      className="button px-0 mt-8 py-3 w-full text-center border bg-transparent text-gray-icon border-gray-icon text-[14px] cursor-pointer z-30"
    >
      {txt}
    </button>
  );
};

export default PlanButton;
