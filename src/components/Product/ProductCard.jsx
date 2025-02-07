export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="mt-2 text-gray-900 font-bold text-xl">${product.price}</p>
        <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
          {product.category}
        </span>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
