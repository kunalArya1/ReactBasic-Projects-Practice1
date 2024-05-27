import React from "react";

const StationaryItem = ({ header, item }) => {
  return (
    <div className=" p-5">
      <h1 className=" font-bold text-xl">{header}</h1>
      <ul>
        {item.map((item) => {
          return <li key={item} className=" pl-5 font-semibold uppercase"> {item}</li>;
        })}
      </ul>
    </div>
  );
};

export default StationaryItem;
