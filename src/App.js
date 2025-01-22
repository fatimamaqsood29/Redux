import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartScreen from './components/CartScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
    </Router>
  );
}

export default App;