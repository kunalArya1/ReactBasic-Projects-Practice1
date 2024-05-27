import React from "react";

const StudentDetails = ({ studentDetail }) => {
  let grade = "";
  if (
    studentDetail.english + studentDetail.computers + studentDetail.maths >=
    225
  ) {
    grade = "A";
  } else if (
    studentDetail.english + studentDetail.computers + studentDetail.maths >=
    180
  ) {
    grade = "B";
  } else if (
    studentDetail.english + studentDetail.computers + studentDetail.maths >=
    150
  ) {
    grade = "C";
  }
  return (
    <div className=" text-center p-5 ">
      <h1 className=" text-2xl font-bold p-4">Student Details</h1>
      <h1 className=" font-semibold text-xl">Name : {studentDetail.name}</h1>
      <h1 className=" font-semibold text-xl">
        English : {studentDetail.english}
      </h1>
      <h1 className=" font-semibold text-xl">Maths : {studentDetail.maths}</h1>
      <h1 className=" font-semibold text-xl">
        Computers : {studentDetail.computers}
      </h1>
      <h1 className=" font-semibold text-xl">Grade : {grade}</h1>
    </div>
  );
};

export default StudentDetails;
