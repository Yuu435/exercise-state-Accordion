import React from "react";

const Accordion_item = ({ id, name, content }) => {
  const handleClickToggleAccordion = (element) => {
    const content = element.target.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  };

  return (
    <div>
      <div className="accordion-header" onClick={handleClickToggleAccordion}>
        {name}
      </div>
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion_item;
