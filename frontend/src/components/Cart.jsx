import { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cart')
      .then(res => setCart(res.data));
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, idx) => (
              <div key={idx} className="flex gap-4 bg-white p-4 rounded shadow">
                <img src={item.image} alt={item.title} className="h-20 object-contain" />
                <div>
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  <p className="text-blue-600 font-semibold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-bold mt-6">Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}
export default Cart;