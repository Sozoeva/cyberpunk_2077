import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assers/images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.nav_link}>
          <div>
          <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className={styles.links}>
        <Link to="/cyberpunk" className={styles.nav_link}>
          <a className={styles.link} href="">Cyberpunk 2077</a>
        </Link>
        <Link to="/phantom" className={styles.nav_link}>
          <a className={styles.link} href="">Phantom Vault</a>
        </Link>
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
