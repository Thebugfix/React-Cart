import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  const addToCart = () => {
    axios.post('http://localhost:5000/api/cart', product)
      .then(() => alert('Added to cart!'));
  };

  return product ? (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
      <img src={product.image} alt={product.title} className="h-64 object-contain mx-auto" />
      <div>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-blue-600 text-xl font-semibold mb-4">${product.price}</p>
        <button
          onClick={addToCart}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  ) : <p className="text-center mt-10">Loading...</p>;
}
export default ProductDetail;