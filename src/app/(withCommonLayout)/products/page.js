import ProductCard from "@/components/Product/ProductCard";

const ProductsPage = async () => {
  // Data fetching
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store", // as per user req data will fetch dynamically without storing in cache
  });
  const products = await res.json();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold py-5">Products </h1>
      <div className="container mx-auto grid grid-cols-3 gap-8 py-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
