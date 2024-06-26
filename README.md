# React Practice Project

## Project 1

Build an EmployeeCard component in React to display name, designation and work experience
of a person. Pass name, designation and work experience as props.

1. The colour of “Designation:” should be green.
2. The colour of “Experience:” should be blue.

## Project 2

Build a React component to display a button with custom styles and button text as ‘Start’. The styles should be passed as props.

<details markdown='1'>
<summary>Data</summary>

```
const backgroundColor = 'lightgreen'
const color = 'darkgreen'
const borderRadius = '5px'
const padding = '10px'
```

</details>

## Project 3

Build a React component to display a list of stationery items with a header. The items and
header should be passed as props. Header should be “Stationery Items”.

 <details>
 <summary>Data</summary>

```
const items = ['pen', 'pencil', 'ruler', 'eraser']
```

 </details>

## Project 4

Build a React component to display an image with a caption. The image and caption should be passed as props.

<details>
<summary>Data</summary>

```
const imageLink='https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
const caption = 'Spring Flowers'
```

</details>

## Project 5

Given the products data. Build a React component to display the name of all products as an unordered list on the DOM.

<details>
<summary>Data</summary>

```
 const products = [
 { name: 'Perk', quantity: 10, sales: 7 },
 { name: 'Pepsi', quantity: 10, sales: 20 },
 { name: 'Coke', quantity: 18, sales: 50 },
 { name: 'Maggi', quantity: 41, sales: 22 },
 { name: '5Star', quantity: 7, sales: 9 },
 ]
```

</details>

## Project 6

 Consider the products data from previous question and display all the product details as
 unordered list for which the number of sales is more than the quantity.

## Project 7

Given a student object with student name and the marks for english, maths and computers. If the total marks of a student is >= 225, the grade is A, >=180 the grade is B, >=150 the grade is C, otherwise the grade is D. Build a React Component that takes the student object as props and uses it to show all the students details, total marks and grade on the DOM as shown in the
image below.

<details>
<summary>Data</summary>

```
 const student = {
  name: 'John Doe',
  english: 90,
  maths: 80,
  computers: 70,
 }
```
</details>

## Project 8

Build a React component to display all the employee details as unordered list on the DOM in the
following format:

name: name, level: level, dept: dept, designation: designation, salary: salary

No need to pass as props.

<details>
<summary>Data</summary>

```
const employees = [
 {
    name: 'Jack Smith',
    level: 2,
    dept: 'Tech',
    designation: 'Manager',
    salary: 24000,
 },
 {
    name: 'Mary Robbins',
    level: 3,
    dept: 'Fin',
    designation: 'Manager',
    salary: 28000,
 },
 {
    name: 'Steve Williams',
    level: 4,
    dept: 'Ops',
    designation: 'President',
    salary: 35000,
 },
 {
    name: 'Bob Andrews',
    level: 1,
    dept: 'Fin',
    designation: 'Trainee',
    salary: 16500,
 },
 {
    name: 'Dave Martin',
    level: 2,
    dept: 'Fin',
    designation: 'Manager',
    salary: 21700,
 },
 {
    name: 'Julia Clarke',
    level: 3,
    dept: 'Ops',
    designation: 'Manager',
    salary: 26900,
 },
{
    name: 'Kathy Jones',
    level: 4,
    dept: 'Tech',
    designation: 'President',
    salary: 42500,
 },
 {
    name: 'Tom Bresnan',
    level: 2,
    dept: 'Tech',
    designation: 'Manager',
    salary: 22200,
 },
 ]
```
</details>



## Project 9

Considering above data given in question 8, at the end of all the employee details, calculate and
display the total salary expense of the company. Total Salary Expense: totalSalary

## Project 10

Considering above data given in question 8, display the details of employee with orange backgroundColor, who are at level 2.


## Project 11

Considering above data given in question 8, add a border around the employee details whose
designation is “President”