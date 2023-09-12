// React library
import React from 'react';
//Connects React elements and DOM. used to render app
import ReactDOM from 'react-dom/client';
//styling sheets
import './index.css';
//App is one component that is rendered
import App from './components/App';

import reportWebVitals from './reportWebVitals';


/*
  Create a function that calls the current date.
  () => {} is an arrow function. Can replace with function() {}
*/
// const getCurrentDate = () => {
//   const date = new Date();
//   return date.toDateString();
// }

//creating react element

/*.createElement() takes 3 arguments:
1. HTML tag
2. Attributes/Properties - function arguments to components
3. Content

Babel converts JSX to React elements
*/
// const greeting = <h1>Hello World! Current Date: {getCurrentDate()}</h1>;
//{} is used to call a function inside of JSX



//root lives in public/index.html
//const is a variable that cannot be reassigned
const root = ReactDOM.createRoot(document.getElementById('root'));

/*
render() is a method that takes two arguments:
1. React element to render
2. DOM container where you want to run the React element
3. (Optional) Callback function to store any logic
*/
root.render( //react-dom does this! App is a fully functional react compoment
    <App /> 
  // {greeting}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
