import { useState } from "react";
import "./Species.css";
import List from "../List/List";

export default function Species() {
  const [arr, setArr] = useState([]);
  return (
    <List arr={arr} setArr={setArr} type={"species"}>
      {arr.map((speciesType) => {
        return (
          <li className="list-container__item" key={speciesType.id}>
            <h2 className="list-container__title">{speciesType.name}</h2>
            <p className="list-container__subtitle">{`Language: ${speciesType.language}`}</p>
            <p className="list-container__subtitle">{`Skin colors: ${speciesType.skin_colors}`}</p>
            <p className="list-container__subtitle">{`Classification: ${speciesType.classification}`}</p>
            <p className="list-container__subtitle">{`Average height: ${speciesType.average_height}`}</p>
          </li>
        );
      })}
    </List>
  );
}
