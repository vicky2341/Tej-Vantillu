import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

function App() {

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>

      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/menu"
          element={
            <Menu
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
               setCart={setCart}
            />
          }
        />
       <Route
  path="/checkout"
  element={<Checkout cart={cart} />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;