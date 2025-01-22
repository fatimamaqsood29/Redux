import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    toast.error('Item removed from cart');
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
    toast.info('Increased item quantity');
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
    toast.warning('Decreased item quantity');
  };

  return (
    <div className="p-8 bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Cart - {cartItems.length} items</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center gap-6 border-b pb-4 mb-4">
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-lg" />
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-600">₹ {item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                >
                  🗑
                </button>
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                  ➖
                </button>
                <span className="text-lg font-bold">{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                  ➕
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartScreen;