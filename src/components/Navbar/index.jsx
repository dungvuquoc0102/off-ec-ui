import config from "@/config";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={config.routes.home}>Home</NavLink>
          </li>
          <li>
            <NavLink to={config.routes.products}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
