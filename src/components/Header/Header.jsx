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
          <a className={styles.link} href="">Phantom Vault</a>
        </div>
        <div>
          <a className={styles.link} href="">News</a>
        </div>
        <div>
          <a className={styles.link} href="">Watch</a>
        </div>
        <div>
          <a className={styles.link} href="">Buy now</a>
        </div>
        </div>

      </nav>
    </header>
  );
};
