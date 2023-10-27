import React from "react";
import Accordion_item from "./Accordion_item";

const Accordion = ({ datas }) => {
  const accordionList = datas.map((data) => {
    return (
      <div key={datas.id} className="accordion">
        <Accordion_item {...data} />
      </div>
    );
  });

  return <>{accordionList}</>;
};

export default Accordion;
