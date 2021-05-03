import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// create list with dynamic content
// const lakeList = [
//   "Echo Lake", 
//   "Maud Lake", 
//   "Cascade Lake"
// ];

// render list objects
const lakeList = [
  {id:"1", name: "Echo", trailhead: "Echo"},
  {id:"2", name: "Maud", trailhead: "wrights"},
  {id:"3", name: "Velma", trailhead: "Bayview"}
];

function App({lakes}) {
  return(
    <div>
      {lakes.map(lake => (
        <div key={lake.id}>
          <h2>{lake.name}</h2>
          <p>Accessed by: {lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}

 ReactDOM.render(
   <App lakes={lakeList}/>,
   document.getElementById("root")
 );