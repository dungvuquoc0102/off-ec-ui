import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import config from "@/config";
import Logo from "../Logo";
import Navbar from "../Navbar";
import Avatar from "../Avatar";

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className="container">
        <Logo />
        <Navbar />
        {/* Start function */}
        <div>
          {/* Logged in */}
          <Avatar />
          {/* Not logged in */}
          <div>
            <Link to={config.routes.login}>Đăng nhập</Link>
            <Link to={config.routes.register}>Đăng ký</Link>
          </div>
        </div>
        {/* End function */}
      </div>
    </header>
  );
}

export default Header;
