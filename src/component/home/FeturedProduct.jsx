// "use client"
import Container from "../Container";
import ProductBox from "../ProductBox";

export default async function FeturedProduct() {
  const response = await fetch(
    "https://dummyjson.com/products/category/mobile-accessories?limit=5"
  );
  const data = await response.json();

  return (
    <div className=" p-3 bg-white">
      <Container>
        <div className=" text-center text-3xl font-bold">
          <h1>Fetured Products</h1>
        </div>
        <div className=" my-4 grid grid-cols-5 gap-3">
          {data.products.map((prod) => {
            return <ProductBox key={prod.id} product={prod} />;
          })}
        </div>
      </Container>
    </div>
  );
}
