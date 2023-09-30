import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "./Product.module.scss";
import { useParams } from "react-router";

export const Product = () => {
  const { id } = useParams();
  const { getData, selectedProductData } = useContext(GlobalContext);

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className={styles.product}>
      <div>
        <h2>{selectedProductData?.title}</h2>
        <p>{selectedProductData?.description}</p>
      </div>

      <div>
        <img src={selectedProductData?.img} alt="" />
      </div>
    </div>
  );
};
