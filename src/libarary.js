const getCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = await response.json();
  return data.slice(6);
};

const getProduct = async (category) => {
  let url = category
    ? `https://dummyjson.com/products/category/${category}`
    : `https://dummyjson.com/products?limit=10`;

  const response = await fetch(url);
  const data = await response.json();
  return data.products;
};

const getProductId = async (productId = null) => {
  let API = "https://dummyjson.com/products/";
  if (productId != null) {
    const response = await fetch(`${API}/${productId}`);
    const data = await response.json();
    return data;
  }
};

export { getCategories, getProduct, getProductId };
