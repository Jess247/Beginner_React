import React, { useState } from 'react';
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

// #### create list with dynamic content
// const lakeList = [
//   "Echo Lake", 
//   "Maud Lake", 
//   "Cascade Lake"
// ];

// ########

// ###### render list objects
// const lakeList = [
//   {id:"1", name: "Echo", trailhead: "Echo"},
//   {id:"2", name: "Maud", trailhead: "wrights"},
//   {id:"3", name: "Velma", trailhead: "Bayview"}
// ];

// function App({lakes}) {
//   return(
//     <div>
//       {lakes.map(lake => (
//         <div key={lake.id}>
//           <h2>{lake.name}</h2>
//           <p>Accessed by: {lake.trailhead}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
// ########

// ##### Contditions (ternary ifs also works with standard ifs)
// function Lake({name}) {
//   return(
//     <div>
//       <h1>Visits {name}</h1>
//     </div>
//   );
// }

// function Skiresort({name}) {
//   return(
//     <div>
//       <h1>Visits {name}</h1>
//     </div>
//   );
// }


// function App(props){
//   return(
//     <div>
//       {props.season === "summer" ? (<Lake name="Lake Taho" />
//       ) : props.season ==="winter" ? (<Skiresort name="the Apls" />
//       ) : (
//         <h1>
//         Come back in summer or winter
//         </h1>
//       )}
//     </div>
//   );
  
// }
// #####

// ####### use fragments avoid rendering multible unnessisary divs
// 
// function Lake() {
//   return(
//       <h1>Lakes</h1>
//   );
// }

// function Skiresort() {
//   return(
//       <h1>Resorts</h1>
//   );
// }


// function App(){
//   return(
//     // long version
//     // <React.Fragment>
//     // <Lake/>
//     // <Skiresort/>
//     // </React.Fragment>
    
//     // short
//     <>
//     <Lake/>
//     <Skiresort/>
//     </>
//   );
  
// }
// ####

// ###### using states

function App() {
  // initial state
  // useState is a build in hook to handle state changes
  // first value is state value second is function to change it
  const [year, setYear] = useState(2021);
  const [manager, setManager] = useState("Mrs. Smith");
  const [status, setStatus] = useState("open");
  return(
    <>
      <div>
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>Next year</button>
      </div>
      <div>
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager("Mrs. Juno")}>Juno</button>
        <button onClick={() => setManager("Mrs. Smith")}>Smith</button>
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button onClick={() => setStatus("open")}>
          Open
        </button>
        <button onClick={() => setStatus("closed")}>
          Closed
        </button>
    </div>
    </>
    
  );
}
// #######


 ReactDOM.render(
   <App />,
   document.getElementById("root")
 );