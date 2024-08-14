import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';

function App() {
  const show = useSelector(state=>state.ui.cartIsVisible);
  const cart = useSelector((state)=>state.cart);
  useEffect(()=>{
    fetch('https://shopping-cart-82b47-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',{method: 'PUT',
      body: JSON.stringify(cart),
    });
  },[cart]);
  return (
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
