import axios from "axios";
import React, { useEffect, useState } from "react";

const Countries = () => {
  const [data, setData] = useState([]);
  // le useEffect se joue quand le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="countries">
      <h1>Countries</h1>
    </div>
  );
};

export default Countries;
