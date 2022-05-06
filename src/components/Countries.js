import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRange] = useState(36);
  const [selectedContinent, setContinent] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  // le useEffect se joue quand le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min={1}
          max={250}
          defaultValue={rangeValue}
          onChange={(e) => setRange(e.target.value)}
        />
        {radios.map((continent) => (
          <li key={continent}>
            <input
              type="radio"
              name="continentRadio"
              checked={selectedContinent == continent}
              id={continent}
              onChange={(e) => {
                setContinent(e.target.id);
              }}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedContinent && (
        <button
          onClick={() => {
            setContinent("");
          }}
        >
          Annuler la recherche
        </button>
      )}
      <ul>
        {data
          .filter((country) =>
            country.continents[0].includes(selectedContinent)
          )
          .sort((a, b) => a.population - b.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;

//VIDEO 1.36.29
