import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assers/images/logo.png";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const {pathName} = useLocation()
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
            <a className={styles.link} href="">
              Cyberpunk 2077
            </a>
          </Link>
          <Link to="/phantom" className={styles.nav_link}>
            <a className={styles.link} href="">
              Phantom Vault
            </a>
          </Link>
          <Link to="/buy" className={styles.nav_link}>
            <a className={styles.link} href="">
              Buy now
            </a>
          </Link>
          <div>
            <a
              className={styles.link}
              href="https://www.netflix.com/kg-ru/title/81054853"
            >
              Netflix
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
