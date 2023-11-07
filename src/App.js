// import "./App.css";
// import Axios from "axios";
// import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { CardDetail } from "./CardDetail";

// // fetch("https://jsonplaceholder.typicode.com/posts")
// //   .then((res) => res.json())
// //   .then((data) => {
// //     console.log(data);
// //   });
// export function App() {
//   const [catFacts, setCatFacts] = useState([]);

//   const url = "https://jsonplaceholder.typicode.com/posts";

//   const fetchData = () => {
//     Axios.get(url)
//       .then((res) => {
//         setCatFacts(res.data);
//       })
//       .catch((error) => {
//         console.error("Failed to fetch cat facts: ", error);
//       });
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div className="App">
//         <Router>
//           <nav>
//             {/* <Link to={`${url}/${e.currentTarget.id}`}></Link> */}
//           </nav>
//           <Routes>
//             <Route path="/CardDetail" element={<CardDetail />} />
//           </Routes>
//         </Router>
//       </div> 

//       {catFacts.map((item, index) => {
//         return (
//           <div
//             key={index}
//             id={item.id}
//             className="card"
//              onClick={(e) => {
//               console.log(e.currentTarget.id);
//               console.log(`${url}/${e.currentTarget.id}`);
//             }}
//           >
//             <h1>{item?.title}</h1>
//             <div className="body">{item?.body}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { CardDetail } from "./CardDetail";

// // Define the URL outside of the component
// const url = "https://jsonplaceholder.typicode.com/posts";

// function App() {
//   const [catFacts, setCatFacts] = useState([]);

//   const fetchData = () => {
//     Axios.get(url)
//       .then((res) => {
//         setCatFacts(res.data);
//       })
//       .catch((error) => {
//         console.error("Failed to fetch cat facts: ", error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div className="App">
//         <Router>
//           <nav>
//             <Link to="/CardDetail">CardDetail</Link>
//           </nav>
//           <Routes>
//             <Route path="/CardDetail" element={<CardDetail />} />
//             <Route path="/" element={<Home catFacts={catFacts} />} />
//           </Routes>
//         </Router>
//       </div>
//     </div>
//   );
// }

// // Define a Home component to display the list of cat facts
// function Home({ catFacts }) {
//   return (
//     <div>
//       {catFacts.map((item, index) => {
//         return (
//           <div
//             key={index}
//             id={item.id}
//             className="card"
//             onClick={(e) => {
//               console.log(e.currentTarget.id);
//               console.log(`${url}/${e.currentTarget.id}`);
//             }}
//           >
//             <h1>{item?.title}</h1>
//             <div className="body">{item?.body}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;
