import ProductCard from "@/components/Product/ProductCard";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "force-cache", // this will fetch the data and store it in the cache as CDN (Content Delivery Network) cache for future use
  });
  const products = await res.json();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold py-5">Products </h1>
      <div className="container mx-auto grid grid-cols-3 gap-4 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
