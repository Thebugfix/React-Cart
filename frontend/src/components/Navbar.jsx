import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ShopEasy</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;