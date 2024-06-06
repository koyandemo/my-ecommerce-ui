import TextComponent from "../text/TextComponent";
import { OurPlanDatasType } from "@/utils/types";
import { PlanOneIcon, PlanThreeIcon, PlanTwoIcon } from "@/utils/icon";
import PlanButton from "../PlanButton";
import Button from "../Button";

interface SectionOurPlanProps {
  design: 1 | 2;
  data: OurPlanDatasType[];
}

const SectionOurPlan = ({ design, data }: SectionOurPlanProps) => {
  return (
    <section
      className={`contain-none grid  grid-cols-1 relative place-items-center mt-[50px] ${
        design === 1 ? "pb-[20px] xl:grid-cols-[0.3fr_1fr]" : "pt-[50px] pb-0"
      }`}
    >
      {design === 1 && (
        <div className="h-full flex flex-col gap-[20px] xl:place-self-start place-self-center items-center justify-center ">
          <TextComponent
            mainTxt="Our Plans"
            size="lg"
            weight="bold"
            transform="none"
          />
          <TextComponent
            mainTxt="Lorem Ipsum Dolar"
            size="md"
            weight="medium"
            transform="none"
          />
          <Button txt="Get your now" />
        </div>
      )}
      <div 
      className="w-full flex xl:mt-0 mt-8 lg:flex-row flex-col lg:gap-0 gap-6 justify-center items-center relative z-10"
      >
        {data.map((item) => (
          <div
            className={`border rounded-xl max-w-[20rem] flex flex-col items-center justify-center ${
              item.id !== 2
                ? "border-secondary-tone px-[12px] py-[25px] bg-gray-alabaster text-black"
                : "border-accent px-[20px] lg:scale-105 py-[28px] bg-accent text-white bg-[#6D3DF5] lg:shadow-[0px_0px_19.033px_0.634px_#AD92F9]"
            }`}
          >
            {item.id === 1 && <PlanOneIcon />}
            {item.id === 2 && <PlanTwoIcon />}
            {item.id === 3 && <PlanThreeIcon />}
            <h3 className="font-bold text-[22px]">{item.title}</h3>
            <h4 className="font-bold text-lg mt-5">{item.category}</h4>
            <p className="mt-3 font-normal text-center text-black-600">
              {item.description}
            </p>
            <PlanButton txt={item.btnLabel} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionOurPlan;
