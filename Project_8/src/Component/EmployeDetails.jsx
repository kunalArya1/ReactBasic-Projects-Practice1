import React from "react";

const EmployeDetails = () => {
  const employees = [
    {
      name: "Jack Smith",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 24000,
    },
    {
      name: "Mary Robbins",
      level: 3,
      dept: "Fin",
      designation: "Manager",
      salary: 28000,
    },
    {
      name: "Steve Williams",
      level: 4,
      dept: "Ops",
      designation: "President",
      salary: 35000,
    },
    {
      name: "Bob Andrews",
      level: 1,
      dept: "Fin",
      designation: "Trainee",
      salary: 16500,
    },
    {
      name: "Dave Martin",
      level: 2,
      dept: "Fin",
      designation: "Manager",
      salary: 21700,
    },
    {
      name: "Julia Clarke",
      level: 3,
      dept: "Ops",
      designation: "Manager",
      salary: 26900,
    },
    {
      name: "Kathy Jones",
      level: 4,
      dept: "Tech",
      designation: "President",
      salary: 42500,
    },
    {
      name: "Tom Bresnan",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 22200,
    },
  ];
  return (
    <div className=" text-center p-5 ">
      <h1 className="font-bold text-3xl p-4">Employe Details</h1>
      <ul>
        {employees.map((employe) => (
          <li className=" p-4 font-semibold">
            Name: {employe.name}, Level: {employe.level}, Dept: {employe.dept},
            Designation: {employe.designation}, Salary: {employe.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeDetails;
