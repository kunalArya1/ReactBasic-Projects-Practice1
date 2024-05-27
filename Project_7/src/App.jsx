import React from "react";
import StudentDetails from "./Component/StudentDetails";

const App = () => {
  const student = {
    name: "John Doe",
    english: 80,
    maths: 80,
    computers: 70,
  };
  return (
    <div>
      <StudentDetails studentDetail={student} />
    </div>
  );
};

export default App;
