import { useState } from "react";
import "./People.css";
import List from "../List/List";

export default function People() {
  const [arr, setArr] = useState([]);
  return (
    <List arr={arr} setArr={setArr} type={"people"}>
      {arr.map((person) => {
        return (
          <li className="list-container__item" key={person.id}>
            <h2 className="list-container__title">{person.name}</h2>
            <p className="list-container__subtitle">{`Gender: ${person.gender}`}</p>
            <p className="list-container__subtitle">{`Eye color: ${person.eye_color}`}</p>
            <p className="list-container__subtitle">{`Height: ${person.height}`}</p>
            <p className="list-container__subtitle">{`Skin color: ${person.skin_color}`}</p>
          </li>
        );
      })}
    </List>
  );
}
