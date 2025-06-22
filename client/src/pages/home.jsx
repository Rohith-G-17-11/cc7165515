import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products`);
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    setDeletingId(id);
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`, {
      method: 'DELETE',
    });
    setDeletingId(null);
    fetchProducts(); // refresh after delete
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 fade-in">
      {loading ? (
        <p className="text-center col-span-full text-lime-600 text-lg animate-pulse">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-center col-span-full text-lime-600">No products added yet.</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} product={product} onDelete={handleDelete} deleting={deletingId === product._id} />
        ))
      )}
    </div>
  );
}

export default Home;