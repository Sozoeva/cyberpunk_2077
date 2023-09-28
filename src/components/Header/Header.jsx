import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assers/images/logo.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" />
        <div className={styles.links}>
        <div>
          <a className={styles.link} href="">Cyberpunk 2077</a>
        </div>
        <div>
          <a className={styles.link} href="">Призрачная свовода</a>
        </div>
        <div>
          <a className={styles.link} href="">Новости</a>
        </div>
        <div>
          <a className={styles.link} href="">Смотреть</a>
        </div>
        <div>
          <a className={styles.link} href="">Купить</a>
        </div>
        </div>

      </nav>
    </header>
  );
};
