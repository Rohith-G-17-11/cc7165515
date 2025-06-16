import { useState, useEffect } from 'react';

function ProductForm({ onAdd, initialData = null }) {
  const [form, setForm] = useState({
    name: '',
    price: '',
    rating: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return alert("Name and Price are required");
    onAdd(form);
    setForm({ name: '', price: '', rating: '', description: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl text-black space-y-4 font-doodle">
      <h2 className="text-2xl font-bold">{initialData ? "Edit Product" : "Add New Product"}</h2>
      <input type="text" name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="number" name="price" placeholder="Price (₹)" value={form.price} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="number" step="0.1" max="5" name="rating" placeholder="Rating (0 - 5)" value={form.rating} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="description" placeholder="Short Description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="url" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="w-full p-2 border rounded" />
      <button type="submit" className="bg-lime-500 hover:bg-lime-600 text-white p-2 rounded">{initialData ? "Update" : "Add Product"}</button>
    </form>
  );
}

export default ProductForm;
