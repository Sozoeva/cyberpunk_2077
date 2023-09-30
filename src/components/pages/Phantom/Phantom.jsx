import React from "react";
import styles from "./Phantom.module.scss";

export const Phantom = () => {
  return (
    <div className={styles.phantom}>
      <div className={styles.phantom_imgs}>
        <img
          className={styles.phantom_bgr}
          src="https://www.cyberpunk.net/build/images/keyart-bg-desktop-en@2x-8cc96f38.jpg"
          alt=""
        />
        <img
          className={styles.phantom_name}
          src="https://www.cyberpunk.net/build/images/phantom-liberty/keyart-logo-desktop-en@2x-ee956d11.png"
          alt=""
        />
        <img
          className={styles.phantom_vi}
          src="https://www.cyberpunk.net/build/images/keyart-v-desktop@2x-f3a7a86f.png"
          alt=""
        />
      </div>

      <div className={styles.phantom_mission}>
        <h2>MISSION BRIEFING</h2>
        <div className={styles.phantom_about}>
          <div>
            <h3>Objective</h3>
            <p>
              Enter the shadowy world of spycraft and become — infiltrate
              high-security buildings, take out enemies, and go toe-to-toe
              against seasoned professionals. Espionage is a high-risk game, and
              failure isn’t an option. Choose your allies with care as you
              unravel the secrets at the heart of this expansion.
            </p>
          </div>
          <div>
            <img
              src="https://www.cyberpunk.net/build/images/phantom-liberty/objective-1@2x-6c9c3df2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
