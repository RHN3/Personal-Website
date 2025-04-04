import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to={"/About"}>
            <button>About</button>
          </Link>
        </li>
        <li>
          <Link to={"*"}>
            <button>Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
