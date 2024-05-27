import React from "react";
import Button from "./Component/Button";
/*
Build a React component to display a button with custom styles and button text as ‘Start’. The
 styles should be passed as props.
 Data:
 const backgroundColor = 'lightgreen'
 const color = 'darkgreen'
 const borderRadius = '5px'
 const padding = '10px'

*/

const App = () => {
  const ButtonStyle = {
    backgroundColor: "lightgreen",
    color: "darkgreen",
    borderRadius: "5px",
    padding: "10px 20px",
  };
  return (
    <>
      <div className=" text-center p-9">
        <div className=" font-bold p-4">Here is your custome button </div>
        <Button style={ButtonStyle} />
      </div>
    </>
  );
};

export default App;
