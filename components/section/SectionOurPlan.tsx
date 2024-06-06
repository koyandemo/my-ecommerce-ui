import React from "react";
import Button from "../Button";
import TextComponent from "../text/TextComponent";

interface SectionOurPlanProps {
  design: 1 | 2;
}

const SectionOurPlan = ({ design }: SectionOurPlanProps) => {
  return (
    <section
      className={`contain grid  grid-cols-1 relative place-items-center mt-[50px] ${
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
      <div className="w-full flex xl:mt-0 mt-8 lg:flex-row flex-col lg:gap-0 gap-6 justify-center items-center relative z-10">
        <article className="border rounded-xl max-w-[20rem] flex flex-col items-center justify-center border-secondary-tone px-[12px] py-[25px] bg-gray-alabaster text-black">
          <img
            alt="SHRE Pro"
            loading="lazy"
            width={60}
            height={60}
            decoding="async"
            data-nimg={1}
            className="object-contain"
            src="https://myshre.com/assets/icons/shrepro.svg"
            style={{ color: "transparent" }}
          />
          <h3 className="font-bold text-[22px]">SHRE Pro</h3>
          <h4 className="font-bold text-lg mt-5">Elevate your game</h4>
          <p className="mt-3 font-normal text-center text-black-600">
            Upgrade to our Pro Plan and unlock a world of possibilities. In
            addition to Free Plan features, Pro Plan users can also:
          </p>
          <a
            className="button px-0 mt-8 py-3 w-full text-center border bg-transparent pointer-events-none text-gray-icon border-gray-icon text-[14px]"
            href="/shop"
          >
            Coming soon
          </a>
        </article>
        <article className="border rounded-xl max-w-[20rem] flex flex-col items-center justify-center border-accent px-[20px] lg:scale-105 py-[28px] bg-accent text-white bg-[#6D3DF5] lg:shadow-[0px_0px_19.033px_0.634px_#AD92F9]">
          <img
            alt="Freemium"
            loading="lazy"
            width={64}
            height={64}
            decoding="async"
            data-nimg={1}
            className="object-contain"
            src="https://myshre.com/assets/icons/freemium.svg"
            style={{ color: "transparent" }}
          />
          <h3 className="font-bold text-xl">Freemium</h3>
          <p className="text-3xl font-bold">
            £ 0 <span className="text-xs -ml-1">/forever</span>
          </p>
          <h4 className="font-bold text-lg mt-[30px]">Networking essentials</h4>
          <p className="mt-3 font-normal text-center false">
            Our Free Plan is perfect for individuals who want to experience the
            power of SHRE. With this plan, you can:
          </p>
          <a
            className="button px-0 mt-8 py-3 w-full text-center border bg-transparent pointer-events-none text-gray-icon border-gray-icon text-[14px]"
            href="/shop"
          >
            Get your now
          </a>
        </article>
        <article className="border rounded-xl max-w-[20rem] flex flex-col items-center justify-center border-secondary-tone px-[12px] py-[25px] bg-gray-alabaster text-black">
          <img
            alt="SHRE Teams"
            loading="lazy"
            width={60}
            height={60}
            decoding="async"
            data-nimg={1}
            className="object-contain"
            src="https://myshre.com/assets/icons/shreteams.svg"
            style={{ color: "transparent" }}
          />
          <h3 className="font-bold text-[22px]">SHRE Teams</h3>
          <h4 className="font-bold text-lg mt-5">Tailored for your success</h4>
          <p className="mt-3 font-normal text-center text-black-600">
            Our Teams Plan is fully customisable, it includes all the features
            of the Pro Plan and can be tailored further, such as:
          </p>
          <a
            className="button px-0 mt-8 py-3 w-full text-center border bg-transparent pointer-events-none text-gray-icon border-gray-icon text-[14px]"
            href="/shop"
          >
            Coming soon
          </a>
        </article>
      </div>
    </section>
  );
};

export default SectionOurPlan;
