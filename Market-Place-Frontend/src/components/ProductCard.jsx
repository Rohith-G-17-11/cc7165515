function ProductCard({ product }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-medium text-gray-900">{product.name}</h2>
            <p className="text-gray-700 text-base mb-1">₹{product.price}</p>
            <p className="text-sm text-gray-500 mb-2">Rating: {product.rating} / 5</p>
            <p className="text-sm text-gray-600">{product.description}</p>
        </div>
    );
}

export default ProductCard;
