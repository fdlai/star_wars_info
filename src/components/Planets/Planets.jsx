import { useState } from "react";
import "./Planets.css";
import List from "../List/List";

export default function Planets() {
  const [arr, setArr] = useState([]);
  return (
    <List arr={arr} setArr={setArr} type={"planets"}>
      {arr.map((planet) => {
        return (
          <li className="list-container__item" key={planet.id}>
            <h2 className="list-container__title">{planet.name}</h2>
            <p className="list-container__subtitle">{`Climate: ${planet.climate}`}</p>
            <p className="list-container__subtitle">{`Terrain: ${planet.terrain}`}</p>
            <p className="list-container__subtitle">{`Population: ${planet.population}`}</p>
            <p className="list-container__subtitle">{`Diameter: ${planet.diameter}`}</p>
          </li>
        );
      })}
    </List>
  );
}
