import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import "./cardDetail.css";

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
          <table className="styled-table">
            <tr>
              <th>Object ID </th>
              <td>{data.id}</td>
            </tr>
            <tr>
              <th>Title </th>
              <td>{data.title}</td>
            </tr>
            <tr>
              <th>Body </th>
              <td>{data.body}</td>
            </tr>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
