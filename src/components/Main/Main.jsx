import "./Main.css";
import { Route, Routes, Link } from "react-router-dom";
import Films from "../Films/Films";
import People from "../People/People";
import Planets from "../Planets/Planets";
import Species from "../Species/Species";
import Starships from "../Starships/Starships";
import Vehicles from "../Vehicles/Vehicles";

export default function Main() {
  return (
    <div className="main">
      <div className="main__links">
        <Link className="main__link" to="/films">
          Films
        </Link>
        <Link className="main__link" to="/people">
          People
        </Link>
        <Link className="main__link" to="/planets">
          Planets
        </Link>
        <Link className="main__link" to="/species">
          Species
        </Link>
        <Link className="main__link" to="/starships">
          Starships
        </Link>
        <Link className="main__link" to="/vehicles">
          Vehicles
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<h2>Use the links above to navigate</h2>} />
        <Route path="/films" element={<Films />} />
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/species" element={<Species />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </div>
  );
}
