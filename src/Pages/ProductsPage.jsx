import { useProducts } from "../services/contexts/ProductContext";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import Categories from "../Components/Categories";
import SearchBox from "../Components/SearchBox";
import { useEffect, useState } from "react";
import {
  categoryProducts,
  getInitialParams,
  searchProducts,
} from "../helpers/helper";
import { useParams, useSearchParams } from "react-router-dom";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [displayed, setDisplayed] = useState([]);
  const [params, setParams] = useSearchParams();

  function categoryHandler(e) {
    let category = e.target.innerText.toLowerCase();
    if (e.target.tagName !== "LI") return;
    if (category === "all") {
      const { category, ...rest } = query;
      return setQuery(rest);
    }
    setQuery({ ...query, category });
  }
  function searchHandler() {
    if (!search) {
      let { search, ...rest } = query;
      setQuery(rest);
    } else {
      setQuery({ ...query, search });
    }
  }

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialParams(params));
  }, [products]);

  useEffect(() => {
    let finalProducts = searchProducts(products, query.search);
    finalProducts = categoryProducts(finalProducts, query.category);
    setParams(query);
    setSearch(query.search || "");
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <main>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />

      <section className="flex justify-between gap-4">
        <div className="w-[90%] gap-2 flex flex-wrap items-center">
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="w-1/5 ">
          <Categories categoryHandler={categoryHandler} query={query} />
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;
