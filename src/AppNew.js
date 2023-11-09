import "./App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CardDetail } from "./CardDetail";

export function AppNew() {
  const [catFacts, setCatFacts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = () => {
    Axios.get(url)
      .then((res) => {
        setCatFacts(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch cat facts: ", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {catFacts.map((item, index) => (
        <div key={index} id={item.id} className="card">
          <Link to={`/cardDetail/${item.id}`}>
            <h1>{item?.title}</h1>
          </Link>
          <div className="body">{item?.body}</div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/appNew">cards</Link>
      </nav>
      <Routes>
        <Route path="/cardDetail/:id" element={<CardDetail />} />
        <Route path="/appNew" element={<AppNew />} />
      </Routes>
    </BrowserRouter>
  );
}