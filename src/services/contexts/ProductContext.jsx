import { createContext, useContext, useEffect, useState } from "react";
import api from "../config";

const ProductsContext = createContext();

function ProductProvider({ children }) {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchingProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error);
      }
    };

    fetchingProducts();
  }, []);
  return (
    <ProductsContext.Provider value={Products}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};

export { useProducts };
export default ProductProvider;
