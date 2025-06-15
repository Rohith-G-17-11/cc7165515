import { useState } from 'react';

function ProductForm({ onAdd }) {
    const [form, setForm] = useState({
        name: "",
        price: "",
        rating: "",
        description: "",
        image: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.price) {
            return alert("Name and Price are required");
        }
        onAdd({ ...form, id: Date.now() });
        setForm({
            name: "",
            price: "",
            rating: "",
            description: "",
            image: ""
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 shadow-md rounded-xl max-w-md mx-auto text-white"
        >
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
            
            <input
                className="w-full p-2 border mb-3 text-black"
                type="text"
                name="name"
                placeholder="Product Name"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                className="w-full p-2 border mb-3 text-black"
                type="number"
                name="price"
                placeholder="Price (₹)"
                value={form.price}
                onChange={handleChange}
                required
            />
            <input
                className="w-full p-2 border mb-3 text-black"
                type="number"
                step="0.1"
                max="5"
                name="rating"
                placeholder="Rating (0 - 5)"
                value={form.rating}
                onChange={handleChange}
            />
            <input
                className="w-full p-2 border mb-3 text-black"
                type="text"
                name="description"
                placeholder="Short Description"
                value={form.description}
                onChange={handleChange}
            />
            <input
                className="w-full p-2 border mb-3 text-black"
                type="url"
                name="image"
                placeholder="Image URL"
                value={form.image}
                onChange={handleChange}
            />

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add Product
            </button>
        </form>
    );
}

export default ProductForm;
