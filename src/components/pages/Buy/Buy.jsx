import React, { useContext, useEffect, useState } from "react";
import styles from "./Buy.module.scss";
import { GlobalContext } from "../../context/GlobalContext";
import { ProductLink } from "../ProductLink/ProductLink";

export const Buy = () => {
  const { products, getProducts } = useContext(GlobalContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.buy}>
      <h2>Buy products now</h2>
      <div className={styles.products}>
        {products.map((product) => {
          return (
            <ProductLink key={product.id} product={product} />
          );
        })}
      </div>
      <div className={styles.buy_line}></div>
    </div>
  );
};


