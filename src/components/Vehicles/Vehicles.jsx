import { useState } from "react";
import "./Vehicles.css";
import List from "../List/List";

export default function Vehicles() {
  const [arr, setArr] = useState([]);
  return (
    <List arr={arr} setArr={setArr} type={"vehicles"}>
      {arr.map((vehicle) => {
        return (
          <li className="list-container__item" key={vehicle.id}>
            <h2 className="list-container__title">{vehicle.name}</h2>
            <p className="list-container__subtitle">{`Model: ${vehicle.model}`}</p>
            <p className="list-container__subtitle">{`Crew: ${vehicle.crew}`}</p>
            <p className="list-container__subtitle">{`Cost in credits: ${vehicle.cost_in_credits}`}</p>
            <p className="list-container__subtitle">{`Manufacturer: ${vehicle.manufacturer}`}</p>
          </li>
        );
      })}
    </List>
  );
}
