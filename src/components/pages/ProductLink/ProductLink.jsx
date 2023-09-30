import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "./ProductLink.module.scss";
import { Link, useParams } from "react-router-dom";

export const ProductLink = ({ product, children }) => {
  const { setSelectedProductData } = useContext(GlobalContext);

  // const onClick = () => {
  //   setSelectedProductData(product);
  // }; 
  // onClick={onClick}

  return (
    <Link
      to={`/buy/${product.id}`}
     
      className={styles.product_link}
    >
      <div className={styles.product}>
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.img} alt="" />
          <p>{product.price} $</p>
        </div>
      </div>
    </Link>
  );
};
