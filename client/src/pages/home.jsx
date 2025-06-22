import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [notFound, setNotFound] = useState(false);

  const fetchProducts = async (query = "") => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products?search=${query}`);
    const data = await res.json();
    setProducts(data);
    setNotFound(data.length === 0);
  };

  useEffect(() => {
    fetchProducts(); // load all products on mount
  }, []);

  const handleSearch = () => {
    fetchProducts(searchQuery);
  };

  return (
    <div className="p-4 fade-in">
      {/* Search Input */}
      <div className="flex justify-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search by name or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 border border-lime-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        <button
          onClick={handleSearch}
          className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600"
        >
          Search
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {notFound ? (
          <p className="text-center col-span-full text-red-500">No matching products found.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product._id} product={product} onDelete={() => fetchProducts()} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
