import "./checkout.css";
import { useState } from "react";

function Checkout({ cart }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [instructions, setInstructions] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = (e) => {
    e.preventDefault();

    let items = "";

    cart.forEach((item) => {
      items += `${item.name} × ${item.quantity} - ₹${item.price * item.quantity}%0A`;
    });
    

    const message =
      `🍱 *New Order - Tej Vantillu*%0A%0A` +
      `👤 Name: ${name}%0A` +
      `📞 Phone: ${phone}%0A%0A` +
      `📍 Address:%0A${address}%0A%0A` +
      `🛒 Order Items:%0A${items}%0A` +
      `💰 Total: ₹${total}%0A%0A` +
      `📝 Instructions:%0A${instructions}`;

    window.open(
      `https://wa.me/919063991106?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="checkout-page">

      <h1>Checkout 😋🍗</h1>

      <form
        className="checkout-form"
        onSubmit={placeOrder}
      >

        <input
          type="text"
          placeholder="👤 Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

       <input
  type="tel"
  placeholder="📞 Mobile Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  pattern="[0-9]{10}"
  minLength="10"
  maxLength="10"
  required
  
/>


        <textarea
          placeholder="📍 Delivery Address"
          rows="4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <textarea
          placeholder="📝 Special Instructions (Optional)"
          rows="3"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />

        <button type="submit">
          PLACE ORDER
        </button>

      </form>

    </div>
  );
}

export default Checkout;