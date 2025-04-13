import { Link } from "react-router-dom";
import "./navigationBar.css";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"*"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
