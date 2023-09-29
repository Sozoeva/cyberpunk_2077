import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import video from "../../assers/video/cyberpunk2077.mp4";
import axios from "axios";
import { Link } from "react-router-dom";

export const Main = () => {
  const [resource, setResource] = useState([]);
  const [news, setNews] = useState([]);

  const getResource = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/resource`
      );

      setResource(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getResource();
  }, []);

  const getNews = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/news`
      );

      setNews(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <main className={styles.main}>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div>
        <section className={styles.main_title}>
          <h2>"Cyberpunk 2077" available now on all platforms</h2>
          <div className={styles.main_btns}>
          
            <button>
            <Link to='/cyberpunk' className={styles.nav_link}>
              Learn more
               </Link>
              </button>
           
            <button>

            <a style={{textDecoration:"none", color:"#fcee0a"}}
                className="link"
                href="https://www.youtube.com/watch?v=LembwKDo1Dk"
                target="_blank"
              >
                Watch trailer
              </a>
      
              
            </button>
          </div>
          <div className={styles.main_title_line}></div>
        </section>


        <section id="news" className={styles.main_news}>
          <div className={styles.main_news_now}>
            <h2>Cyberpunk 2077: Phantom liberty - out now!</h2>
          </div>

          <div className={styles.main_news_info}>
            {news.map((newsData) => {
              return (
                <div>
                  <p>News_</p>
                  <img src={newsData.img} alt="" />
                  <p>{newsData.title}</p>
                  <div className={styles.main_news_line}></div>
                </div>
              );
            })}
          </div>
        </section>
        <section className={styles.main_dafk_future}>
          <h2>Welcome to the dystopian future</h2>
          <p>
            Cyberpunk 2077 is an adventure role-playing game set in the
            metropolis of Night City, where power, luxury and body modification
            are valued above all else. You play as V, a mercenary in search of a
            device that can create immortality. You develop by changing your
            character's cyber implants, skills and playstyle, exploring an open
            world where your actions affect the course of the plot and
            everything that surrounds you.
          </p>
        </section>
        <div className={styles.main_resouce}>
          <div className={styles.main_resouce_about}>
            {resource.map((resourceData) => {
              return (
                <div>
                  <img src={resourceData.img} alt="" />
                </div>
              );
            })}
          </div>
          <div className={styles.main_rosource_line}></div>

        </div>

      </div>
    </main>
  );
};
