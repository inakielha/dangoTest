import './App.css';
import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import { useCallback, useState } from 'react';


function App() {
  const [totalCart, setTotalCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const products = useCallback(() => {
    return totalCart.reduce((accumulator, currentValue) => {
      if (currentValue) {
        return accumulator + parseInt(currentValue.amount);
      }
      return accumulator; // Es importante incluir un valor de retorno aquí si currentValue no cumple la condición.
    }, 0); // 0 es el valor inicial del acumulador
  }, [totalCart]);

  return (
    <>
      <Navbar setShowCart={setShowCart} showCart={showCart} products={products}/>
      <Landing totalCart={totalCart} setTotalCart={setTotalCart} showCart={showCart} setShowCart={setShowCart} products={products}/>
    </>
  );
}

export default App;
