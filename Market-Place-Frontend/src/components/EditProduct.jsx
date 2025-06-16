import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const found = products.find((p) => p.id === parseInt(id));
    if (found) setProduct(found);
  }, [id]);

  const handleUpdate = (updatedProduct) => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const updated = products.map((p) => (p.id === parseInt(id) ? updatedProduct : p));
    localStorage.setItem("products", JSON.stringify(updated));
    navigate("/");
  };

  return product ? <ProductForm initialData={product} onAdd={handleUpdate} /> : <p>Loading...</p>;
}

export default EditProduct;
