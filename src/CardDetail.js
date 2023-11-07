import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

export function CardDetail() {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch data: ", error);
      });
  }, [id]);

  return (
    <div>
      {data ? (
        <div>
          <h1>Object ID: {data.id}</h1>
          <h2>Title: {data.title}</h2>
          <p>UserID: {data.userId}</p>
          <p>Body: {data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/appNew">Back to cards</Link>
    </div>
  );
}
