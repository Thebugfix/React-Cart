import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded shadow hover:shadow-lg transition duration-200 p-4">
            <img src={product.image} alt={product.title} className="h-48 object-contain w-full mb-2" />
            <h4 className="text-lg font-medium truncate">{product.title}</h4>
            <p className="text-blue-600 font-semibold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default ProductList;