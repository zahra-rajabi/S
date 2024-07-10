function shortenText(title) {
  const shortenTitle = title.split(" ").splice(0, 3).join(" ");
  if (shortenTitle.length > 22) return title.split(" ").splice(0, 2).join(" ");
  return shortenTitle;
}

function searchProducts(products, search) {
  if (!search) return products;
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return searchedProducts;
}
function categoryProducts(products, category) {
  if (!category || category === "all") return products;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
}

function getInitialParams(searchParams) {
  const query = {};
  const search = searchParams.get("search");
  const category = searchParams.get("category");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
}

export { shortenText, searchProducts, categoryProducts, getInitialParams };
