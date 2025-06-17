import { useNavigate } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-gray-800">
      <img
      src={product.image}
      alt={product.name}
      className="w-full h-40 object-contain bg-white rounded-md mb-3"
      />

      <h2 className="text-lg font-medium">{product.name}</h2>
      <p className="text-gray-700">₹{product.price}</p>
      <p className="text-sm text-gray-600">Rating: {product.rating} / 5</p>
      <p className="text-sm text-gray-500 mb-3">{product.description}</p>
      <div className="flex gap-3">
        <button onClick={() => navigate(`/edit/${product.id}`)} className="bg-yellow-500 text-lime-400 px-3 py-1 rounded">Edit</button>
        <button onClick={() => onDelete(product.id)} className="bg-red-500 text-lime-400 px-3 py-1 rounded">Delete</button>
      </div>
    </div>
  );
}

export default ProductCard;
