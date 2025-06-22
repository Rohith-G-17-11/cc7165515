import { useNavigate } from "react-router-dom";

function ProductCard({ product, onDelete, deleting }) {
  const navigate = useNavigate();

  return (
    <div className="card-hover bg-white border border-gray-300 rounded-lg p-4 shadow text-gray-800 fade-in">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain rounded-md mb-3 bg-white"
      />
      <h2 className="text-lg font-semibold text-lime-600">{product.name}</h2>
      <p className="text-gray-700">₹{product.price}</p>
      <p className="text-sm text-gray-600">Rating: {product.rating} / 5</p>
      <p className="text-sm text-gray-500 mb-3">{product.description}</p>
      <div className="flex gap-3">
        <button onClick={() => navigate(`/edit/${product._id}`)} className="bg-yellow-400 text-lime-700 px-3 py-1 rounded hover:bg-yellow-300">Edit</button>
        <button
          onClick={() => onDelete(product._id)}
          className={`px-3 py-1 rounded text-lime-700 ${deleting ? 'bg-red-200 cursor-not-allowed' : 'bg-red-400 hover:bg-red-300'}`}
          disabled={deleting}
        >
          {deleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;