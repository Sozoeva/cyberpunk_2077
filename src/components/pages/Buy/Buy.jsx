import React, { useEffect, useState } from "react";
import styles from "./Buy.module.scss";
import axios from "axios";

export const Buy = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/products`
      );
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.buy}>
              <h2>Buy products now</h2>
      <div className={styles.products}>

        {products.map((product) => {
          return (
            <div className={styles.product}>
              <div key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.img} alt="" />
                <p>{product.price} $</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.buy_line}></div>

    </div>
  );
};
