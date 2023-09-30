import React from "react";
import background from "../../../assers/images/cyberpunk_bgr.jpeg";
import styles from "./Cyberpunk.module.scss";

export const Cyberpunk = () => {
  return (
    <div className={styles.cyberpunk}>
      <div className={styles.cyberpunk_imgs}>
      <img className={styles.cyberpunk_name}
        src="https://www.cyberpunk.net/build/images/home8/logo-cp77-yellow-en@2x-a95c56ad.png"
        alt=""
      />
      <img className={styles.cyberpunk_img_bgr} src={background} alt="" />
     
      </div>
 <div className={styles.cyberpunk_story}>
        <div>
          <img
            src="https://cdn-l-cyberpunk.cdprojektred.com/cyberpunk2077/story/Cyberpunk2077_Just_around_the_corner_RGB@2x.jpg"
            alt=""
          />
        </div>
        <div>
          <h3>Story</h3>
          <p>
            Take on the job of a lifetime — to steal a one-of-a-kind implant
            that is the key to immortality — and build your legend in the vast
            open world of Night City, where the choices you make shape the story
            and the people around you. Take on a variety of gigs to go from
            up-and-coming mercenary to legendary cyberpunk, all while uncovering
            the mysteries of the priceless implant everyone is dying to get
            their hands on.
          </p>
        </div>
      </div>
      <div className={styles.cyberpunk_rewards}>
        <div>
          <h3>MY REWARDS</h3>
          <p>
            The My Rewards program offers players an exciting selection of
            in-game items as well as digital content to enjoy outside of the
            game. Sign up to claim exclusive apparel, comic books, soundtracks,
            and wallpapers!
          </p>
        </div>
        <div>
          <img
            src="https://www.cyberpunk.net/build/images/cyberpunk/keyart-myrewards@2x-c83c4b97.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
