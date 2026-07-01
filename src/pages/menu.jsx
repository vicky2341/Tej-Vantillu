import "./menu.css";
import kobbaari from "../assets/kobbaari.png";

function Menu({ cart, setCart }) {

  const foods = [
    {
      id: 1,
      name: "Konaseema Kodi Pulav",
      category: "Chicken Special",
      price: 210,
      image: "https://i.ytimg.com/vi/Mf_ZZmJi4-c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAdkKAi6FNOS6zasiwS8I-61770_A"
    },

    {
      id: 2,
      name: "Chicken Curry with Bagara Rice",
      category: "Chicken Special",
      price: 210,
      image: "https://b.zmtcdn.com/data/dish_photos/485/6772b7a1aec59f59791fc6ddbf9e0485.jpeg"
    },

    {
      id: 3,
      name: "Chicken Fry with Bagara Rice",
      category: "Chicken Special",
      price: 210,
      image: "https://b.zmtcdn.com/data/dish_photos/7fd/d0241b1ec409f0a15644f1840b2b77fd.jpg"
    },

    {
      id: 4,
      name: "Kobbarannam with Chicken Curry",
      category: "Chicken Special",
      price: 210,
      image: "https://i.ytimg.com/vi/pLsIRJNY3bQ/sddefault.jpg"
    },

    {
      id: 5,
      name: "Kobbarannam with Chicken Fry",
      category: "Chicken Special",
      price: 210,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g4ILF2eaoaofJ5C5eGk2zhnHBqb4iT0kcA&s"
    },

    {
      id: 6,
      name: "Mutton Curry with Bagara Rice",
      category: "Mutton Special",
      price: 349,
      image: "https://static.wixstatic.com/media/748bfd_a40404f36e404120818b6bb9ea679022~mv2.jpg/v1/fill/w_568,h_758,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/748bfd_a40404f36e404120818b6bb9ea679022~mv2.jpg"
    },

    {
      id: 7,
      name: "Mutton Curry with Kobbarannam",
      category: "Mutton Special",
      price: 349,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXO2WQR9wXjFOjVJMEbheN-cNRwd0og-tYCA&s"
    },

    {
      id: 8,
      name: "Royyala Pulav",
      category: "Prawn Special",
      price: 310,
      image: "https://www.foodiaq.com/wp-content/uploads/2024/12/Prawn-Pulao.jpg"
    },

    {
      id: 9,
      name: "Royyala Eguru",
      category: "Prawn Special",
      price: 310,
      image: "https://static.asianetnews.com/images/w-412,h-232,imgid-01k96xj1zqj0tjjftb91pq9jzx,imgname-1-1762242660343.jpg"
    },

    {
      id: 10,
      name: "Royyala Fry",
      category: "Prawn Special",
      price: 310,
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyH3Hmm_n76lQQbCU32eryEzW2qq9PC68iOacYqJ9BI-lpmmkPE44xQWSCYFwMOhwdH_hJCGcJsCl58_Vs3H2NjGo0UcMjielCQ7dXEd4vRM0UhYWD3DNjmDE-XfaekNKkiKfZ5Q1xl4A/s1600/DSC_0046.JPG"
    },

    {
      id: 11,
      name: "Fish Pulusu",
      category: "Fish Special",
      price: 229,
      image: "https://www.lekhafoods.com/media/1051069/andhra-spicy-fish-curry.jpg"
    },

    {
      id: 12,
      name: "Fish Fry",
      category: "Fish Special",
      price: 229,
      image: "https://i0.wp.com/spiceindiaonline.com/wp-content/uploads/2017/04/Meen-Varuval-Tilapia-Fish-Fry-2.jpg?fit=1000%2C667&ssl=1"
    }
  ];
  const addToCart = (food) => {

  const existingItem = cart.find(
    (item) => item.id === food.id
  );

  if (existingItem) {

    setCart(
      cart.map((item) =>
        item.id === food.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  } else {

    setCart([
      ...cart,
      {
        ...food,
        quantity: 1
      }
    ]);

  }
};

  return (
    <div className="menu-page">
      <div className="floating-offer">
  🚚 We Deliver All Over Kurnool • ⚡ Fast Delivery • 📦 Even One Order Accepted • 🍱 Bulk Orders Welcome
</div>

      <h1>Our Special Menu</h1>
     

      <div className="food-grid">

        {foods.map((food) => (
          <div className="food-card" key={food.id}>

            <img src={food.image} alt="" />

            <div className="food-info">

              <span className="category">
                {food.category}
              </span>

              <h3>{food.name}</h3>

              <div className="bottom">

                <h2>₹{food.price}</h2>

            <button
  className={
    cart.some((item) => item.id === food.id)
      ? "added-btn"
      : "cart-btn"
  }
  onClick={() => addToCart(food)}
>
  {cart.some((item) => item.id === food.id)
    ? "✓ Added"
    : "🛒 Add to Cart"}
</button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Menu;