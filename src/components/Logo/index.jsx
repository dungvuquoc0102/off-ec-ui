import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <Link className={styles.wrapper}>
      <img
        className={styles.logoImg}
        src="/assets/images/logo.png"
        alt="logo"
      />
    </Link>
  );
}

export default Logo;
