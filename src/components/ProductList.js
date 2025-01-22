import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Samsung Galaxy S21', price: 70000, image: 'https://www.whatmobile.com.pk/control/news/assets/28122023/41532025ef352de44f4fc6009914cb28.jpg' },
  { id: 2, name: 'iPhone 13', price: 80000, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1631652955000' },
  { id: 3, name: 'OnePlus 9', price: 60000, image: 'https://images-cdn.ubuy.co.in/649c382a7e0a1a2cd85ec424-lnjyigj-smart-phone-android-8-1.jpg' },
  { id: 4, name: 'Google Pixel 6', price: 75000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7m0mf9TkTuPpjJf0Zy4utdURbMwxJEDNGpQ&s' },
  { id: 5, name: 'Xiaomi Mi 11', price: 50000, image: 'https://www.whatmobile.com.pk/control/news/assets/28122023/41532025ef352de44f4fc6009914cb28.jpg' },
  { id: 6, name: 'Sony Xperia 1 III', price: 95000, image: 'https://media.istockphoto.com/id/2063514315/photo/hand-holding-iphone-14-pro-max-back-side-view-with-camera-block.jpg?s=612x612&w=0&k=20&c=qFpT2qXrynDZyDCxQRyxhdvdKPcYJxCPbVQb0vORcwg=' },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          // <div key={product.id} className="border p-4 rounded-lg shadow-lg">
          //   <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md" />
          //   <h2 className="text-xl font-semibold">{product.name}</h2>
          //   <p className="text-lg text-gray-700">₹ {product.price}</p>
          //   <button
          //     onClick={() => dispatch(addToCart(product))}
          //     className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          //   >
          //     Add to Cart
          //   </button>
          // </div>
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
  <img 
    src={product.image} 
    alt={product.name} 
    className="w-full h-190 object-cover mb-4 rounded-md" 
  />
  <h2 className="text-xl font-semibold">{product.name}</h2>
  <p className="text-lg text-gray-700">₹ {product.price}</p>
  <button
    onClick={() => dispatch(addToCart(product))}
    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
  >
    Add to Cart
  </button>
</div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;