import React from "react";
import "./App.css";
import Accordion from "./Component/Accordion";

const App = () => {
  const datas = [
    {
      id: 1,
      name: "Accordion 1",
      content:
        "Build vertically collapsing accordions in combination with ourCollapse JavaScript plugin.",
    },
    {
      id: 2,
      name: "Accordion 2",
      content:
        "Build vertically collapsing accordions in combination with ourCollapse JavaScript plugin.",
    },
  ];

  return (
    <div className="container">
      {/* accordion - 1 */}
      <Accordion datas={datas} />
    </div>
  );
};

export default App;
