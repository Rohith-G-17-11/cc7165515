import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(stored);
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {products.length === 0 ? (
                <p className="text-center col-span-full text-gray-500">No products added yet.</p>
            ) : (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </div>
    );
}

export default Home;
