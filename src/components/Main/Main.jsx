import React from "react";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <main className={styles.main}>
      <video autoPlay loop muted>
        <source
          src="https://cdn-l-cyberpunk.cdprojektred.com/video/EP1_ProjectAce_clean_16x9_15s-av1.mp4"
          type="video/mp4"
        />
      </video>
      <div className="container">
        <div className={styles.main_about}>
          <h2>"Призрачная свобода" уже доступна</h2>
          <div className={styles.main_btns}>
          <button>Подробнее</button>
          <button>Трейлер</button>
          </div>
          
        </div>
      </div>
    </main>
  );
};
