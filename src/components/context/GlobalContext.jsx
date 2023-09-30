import axios from "axios";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [resource, setResource] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProductData, setSelectedProductData] = useState([]);


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

  const getData = async (id) => {
    console.log(id);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/users/${id}`
      );
      setSelectedProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        resource,
        getResource,
        news,
        getNews,
        products,
        getProducts,
        selectedProductData,
        getData,
        setSelectedProductData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
