export interface OurClientCardProps {
  id: number;
  name: string;
  img: string;
}

export interface OurProductCardProps {
  id: number;
  title: string;
  img: string;
  description: string;
}

export interface HowItWorkCardProps {
  id: number;
  img: string;
}

export interface SectionFeatureSharingTabProps {
  tabs: { id: number; title: string }[];
  contents: { id: number; title: string; description: string; img: string }[];
}

export interface SectionFaqProps{
    data : {id:number,question:string,answer:string}[]
}


export type infoDatasType  = {img:string,title:string,description:string,btnLabel:string}[]

export type OurPlanDatasType = {
  id:number;
  title:string;
  plan:number;
  category:string;
  description:string;
  btnLabel:string;
}
