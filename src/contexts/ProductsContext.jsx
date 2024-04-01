/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useGetData } from "../../hooks/useGetData";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const { data, isLoading, error } = useGetData(
    "http://localhost:3000/api/products"
  );

  return (
    <ProductsContext.Provider value={{ data, isLoading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};
