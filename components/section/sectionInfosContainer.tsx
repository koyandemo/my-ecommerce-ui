import React from "react";
import ShareScan from "../ShareScan";
import { infoDatasType } from "@/utils/types";

interface SectionInfosContainerProps {
  design: number;
  data: infoDatasType;
}

const SectionInfosContainer = ({
  design,
  data,
}: SectionInfosContainerProps) => {
  return (
    <div>
      {data.map((item, i) => (
        <ShareScan
          isReverse={
            design === 1
              ? (i + 1) % 2
                ? false
                : true
              : (i + 1) % 2
              ? true
              : false
          }
          img={item.img}
          title={item.title}
          description={item.description}
          btnLabel={item.btnLabel}
        />
      ))}
    </div>
  );
};

export default SectionInfosContainer;
