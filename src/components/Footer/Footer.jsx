import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={`${styles.footer_content} ${"container"}`}>
          <div className={styles.footer_terms}>
            <p>Terms of Use & Privacy Policy</p>
            <p>Careers</p>
            <p>User agreement</p>
            <p>Fan Content Guidelines</p>
            <p>REDmod</p>
          </div>
          <div className={styles.footer_social_media}>
            <p>Find us on</p>
            <a href="https://www.youtube.com/user/CyberPunkGame" target="_blank">
              <img
                src="https://www.cyberpunk.net/build/images/icon-youtube-cd7b4275.svg"
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FCyberpunkGame" target="_blank">
              <img
                src="https://www.cyberpunk.net/build/images/icon-facebook-f12b4736.svg"
                alt=""
              />
            </a>
            <a href="https://twitter.com/cyberpunkgame" target="_blank">
              <img
                src="https://www.cyberpunk.net/build/images/icon-twitter-0bde3412.svg"
                alt=""
              />
            </a>
            <a href="https://discord.com/invite/cyberpunkgame" target="_blank">
              <img
                src="https://www.cyberpunk.net/build/images/icon-social-discord-c4bd9363.svg"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/cyberpunkgame/" target="_blank">
              <img
                src="https://www.cyberpunk.net/build/images/icon-social-instargam-580ed29b.svg"
                alt=""
              />
            </a>
            <a href="https://www.twitch.tv/cdprojektred" target="_blank">
              <img
                src="https://www.cyberpunk.net/build/images/icon-social-twitch-ada6b616.svg"
                alt=""
              />
            </a>
          </div>
          <div className={styles.footer_cookies}>
            <p>Cookie Declaration</p>
            <span>
              CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks
              of CD PROJEKT S.A. © 2022 CD PROJEKT S.A. All rights reserved. All
              other copyrights and trademarks are the property of their
              respective owners.
            </span>
          </div>
          <div className={styles.footer_games}>
            <div className={styles.footer_games_other}>
              <div>
                <img
                  src="https://www.cyberpunk.net/build/images/witcher-dbdb7666.png"
                  alt=""
                />
                <span>
                  <a href="https://www.thewitcher.com/kg/en/" target="_blank">thewitcher.com</a>
                </span>
              </div>
              <div>
                <img
                  src="https://www.cyberpunk.net/build/images/gwent-f7fcd4e6.png"
                  alt=""
                />
                <span>
                  <a href="https://www.playgwent.com/en/" target="_blank">playgwent.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
