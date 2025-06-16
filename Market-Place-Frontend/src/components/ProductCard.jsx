import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDelete = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const updated = products.filter((p) => p.id !== product.id);
    localStorage.setItem("products", JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg font-doodle relative">
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>₹{product.price}</p>
      <p>Rating: {product.rating} / 5</p>
      <p className="text-sm text-gray-700">{product.description}</p>
      <div className="absolute top-2 right-2">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">⋯</button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow rounded">
            <button onClick={() => navigate(`/edit/${product.id}`)} className="block px-4 py-2 hover:bg-gray-100">Edit</button>
            <button onClick={handleDelete} className="block px-4 py-2 hover:bg-red-100 text-red-600">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;