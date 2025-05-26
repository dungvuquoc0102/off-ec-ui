import styles from "./Avatar.module.scss";

function Avatar() {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.avatarImg}
        src="https://picsum.photos/100"
        alt="avatar"
      />
    </div>
  );
}

export default Avatar;
