import Banner from "@/components/Banner";
import HowItWorkCard from "@/components/card/HowItWorkCard";
import OurClientCard from "@/components/card/OurClientCard";
import OurProductCard from "@/components/card/OurProductCard";
import PickContainer from "@/components/PickContainer";
import SectionFaq from "@/components/section/SectionFaq";
import SectionFeatureSharingTab from "@/components/section/SectionFeatureSharingTab";
import SectionInfosContainer from "@/components/section/sectionInfosContainer";
import SectionOurPlan from "@/components/section/SectionOurPlan";
import SectionVideo from "@/components/section/SectionVideo";
import ShareScan from "@/components/ShareScan";
import {
  faqDataRaws,
  featureSharingTabDataRaws,
  hiwDataRaws,
  infoDatas,
  infoDatas2,
  ourClientsDataRaws,
  ourSingatureProductsRaws,
  shareScanData,
  videoUrl,
} from "@/utils/initData";
import {
  HowItWorkCardProps,
  OurClientCardProps,
  OurProductCardProps,
  SectionFeatureSharingTabProps,
} from "@/utils/types";

export default function Home() {
  const hiwData = hiwDataRaws;
  const faqData = faqDataRaws;
  const ourClientsData = ourClientsDataRaws;
  const ourProductsData = ourSingatureProductsRaws;
  const featureSharingTabData: SectionFeatureSharingTabProps =
    featureSharingTabDataRaws;

  return (
    <div>
      <Banner />
      <PickContainer title="Our clients">
        <>
          {ourClientsData.map((data: OurClientCardProps) => (
            <OurClientCard key={data.id} name={data.name} img={data.img} />
          ))}
        </>
      </PickContainer>
      <ShareScan isReverse={false} img={shareScanData.img} title={shareScanData.title} description={shareScanData.description} btnLabel={shareScanData.btnLabel} />
      <PickContainer title="Our singature products">
        <>
          {ourProductsData.map((data: OurProductCardProps) => (
            <OurProductCard
              key={data.id}
              title={data.title}
              img={data.img}
              description={data.description}
            />
          ))}
        </>
      </PickContainer>
      <PickContainer title="How it works">
        <>
          {hiwData.map((data: HowItWorkCardProps) => (
            <HowItWorkCard key={data.id} img={data.img} />
          ))}
        </>
      </PickContainer>
      <SectionVideo title="Get started with SHRE in minutes" url={videoUrl} />
      <SectionOurPlan design={1} />
      <SectionFeatureSharingTab
        tabs={featureSharingTabData.tabs}
        contents={featureSharingTabData.contents}
      />
      <SectionFaq data={faqData} />
      <div className="mt-[50px] mb-[50px]"></div>
      <div className="mb-[150px]">
        <Banner />
        <SectionOurPlan design={2} />
        <SectionInfosContainer design={1} data={infoDatas} />
        <PickContainer title="How it works">
        <>
          {hiwData.map((data: HowItWorkCardProps) => (
            <HowItWorkCard key={data.id} img={data.img} />
          ))}
        </>
      </PickContainer>
      <SectionInfosContainer design={2} data={infoDatas2} />
      <PickContainer title="Our singature products">
        <>
          {ourProductsData.map((data: OurProductCardProps) => (
            <OurProductCard
              key={data.id}
              title={data.title}
              img={data.img}
              description={data.description}
            />
          ))}
        </>
      </PickContainer>
      </div>
    </div>
  );
}
