import { useState } from "react";
import "./Starships.css";
import List from "../List/List";

export default function Starships() {
  const [arr, setArr] = useState([]);
  return (
    <List arr={arr} setArr={setArr} type={"starships"}>
      {arr.map((starship) => {
        return (
          <li className="list-container__item" key={starship.id}>
            <h2 className="list-container__title">{starship.name}</h2>
            <p className="list-container__subtitle">{`Model: ${starship.model}`}</p>
            <p className="list-container__subtitle">{`Crew: ${starship.crew}`}</p>
            <p className="list-container__subtitle">{`Cost in credits: ${starship.cost_in_credits}`}</p>
            <p className="list-container__subtitle">{`Manufacturer: ${starship.manufacturer}`}</p>
          </li>
        );
      })}
    </List>
  );
}
