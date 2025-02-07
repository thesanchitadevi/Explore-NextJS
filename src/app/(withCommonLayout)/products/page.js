import ProductCard from "@/components/Product/ProductCard";

const ProductsPage = async () => {
  // Data fetching
  const res = await fetch("http://localhost:5000/products", {
    // Data fetching with cache control
    // cache: "force-cache", // this will fetch the data and store it in the cache as CDN (Content Delivery Network) cache for future use

    // Data revalidation => after deploying the app, the data will be revalidated every 5 seconds means build/update the data manually. ISR (Incremental Static Regeneration) will be used. It only works in fetch function.
    next: {
      revalidate: 5,
    },
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
