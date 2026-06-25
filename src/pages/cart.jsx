import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="cart-title">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 😔</h2>
          <p>Add delicious food items to get started.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-details">
                  <h3>{item.name}</h3>

                  <p>{item.category}</p>

                  <div className="quantity-box">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <h4>
                    ₹{item.price * item.quantity}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-items">
              {cart.map((item) => (
                <div className="summary-row" key={item.id}>
                  <div className="summary-left">
                    <span>{item.name}</span>
                    <small>x {item.quantity}</small>
                  </div>

                  <span>
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-total">
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;