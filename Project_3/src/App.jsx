import React from "react";
import StationaryItem from "./Component/StationaryItem";

const App = () => {
  const itemsData = ["pen", "pencil", "ruler", "eraser"];
  return <StationaryItem header={"Stationary Items"} item={itemsData} />;
};

export default App;
