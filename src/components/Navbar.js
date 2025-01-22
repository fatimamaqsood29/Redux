import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <h1 className="text-2xl font-bold">Navbar</h1>
      <div className="flex gap-4">
        <Link to="/" className="text-lg font-medium">All Product</Link>
        <Link to="/cart" className="bg-gray-200 text-black px-4 py-2 rounded-md shadow-md">
          CART ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;