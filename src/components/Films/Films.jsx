import { useState } from "react";
import "./Films.css";
import List from "../List/List";

export default function Films() {
  const [arr, setArr] = useState([]);
  return (
    <List arr={arr} setArr={setArr} type={"films"}>
      {arr.map((film) => {
        return (
          <li className="list-container__item" key={film.id}>
            <h2 className="list-container__title">{film.title}</h2>
            <p className="list-container__subtitle">{`Released ${film.release_date}`}</p>
            <p className="list-container__subtitle">{`Directed by ${film.director}`}</p>
          </li>
        );
      })}
    </List>
  );
}
