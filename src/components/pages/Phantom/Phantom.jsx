import React from "react";
import styles from "./Phantom.module.scss";
import jonny from "../../../assers/images/johnny_silverhand.jpeg";

export const Phantom = () => {
  return (
    
    <div className={styles.phantom}>
      <img
        className={styles.phantom_bgr}
        src="https://www.cyberpunk.net/build/images/keyart-bg-desktop-en@2x-8cc96f38.jpg"
        alt=""
      />
      <img
        className={styles.phantom_vi}
        src="https://www.cyberpunk.net/build/images/keyart-v-desktop@2x-f3a7a86f.png"
        alt=""
      />
      <div className={styles.phantom_person}>
        <img
          src="https://www.cyberpunk.net/build/images/phantom-liberty/character-myers@2x-a5da415d.png"
          alt=""
        />
        <img
          src="https://www.cyberpunk.net/build/images/phantom-liberty/character-songbird@2x-115a5186.png"
          alt=""
        />
        <img
          src="https://www.cyberpunk.net/build/images/phantom-liberty/character-reed@2x-d13cf2a0.png"
          alt=""
        />
        <img
          src="https://www.cyberpunk.net/build/images/phantom-liberty/character-alex@2x-32ae1659.png"
          alt=""
        />
        <img
          src="https://www.cyberpunk.net/build/images/phantom-liberty/character-hansen@2x-20238681.png"
          alt=""
        />
      </div>
    </div>
  );
};
