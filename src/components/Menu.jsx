import { useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    category: "Coffee",
    price: 160,
    description:
      "Rich espresso with steamed milk and creamy foam.",
    emoji: "☕",
  },

  {
    id: 2,
    name: "Cafe Latte",
    category: "Coffee",
    price: 180,
    description:
      "Smooth espresso blended with silky steamed milk.",
    emoji: "🥛",
  },

  {
    id: 3,
    name: "Cold Coffee",
    category: "Coffee",
    price: 190,
    description:
      "Chilled creamy coffee topped with chocolate.",
    emoji: "🧋",
  },

  {
    id: 4,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 320,
    description:
      "Classic pizza with tomato, mozzarella and basil.",
    emoji: "🍕",
  },

  {
    id: 5,
    name: "Farmhouse Pizza",
    category: "Pizza",
    price: 380,
    description:
      "Loaded with fresh vegetables and mozzarella.",
    emoji: "🍕",
  },

  {
    id: 6,
    name: "Classic Burger",
    category: "Burger",
    price: 280,
    description:
      "Juicy patty, fresh vegetables and signature sauce.",
    emoji: "🍔",
  },

  {
    id: 7,
    name: "Cheese Burger",
    category: "Burger",
    price: 320,
    description:
      "Classic burger topped with melted cheddar cheese.",
    emoji: "🍔",
  },

  {
    id: 8,
    name: "Chocolate Brownie",
    category: "Dessert",
    price: 180,
    description:
      "Warm chocolate brownie served with ice cream.",
    emoji: "🍫",
  },
];

const categories = [
  "All",
  "Coffee",
  "Pizza",
  "Burger",
  "Dessert",
];

function Menu() {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) =>
            item.category === activeCategory
        );

  return (

    <section id="menu" className="menu-section">

      {/* Heading */}

      <div className="menu-heading">

        <span className="section-label">
          OUR MENU
        </span>

        <h2>
          Something Delicious
          <br />
          <span>For Everyone</span>
        </h2>

        <p>
          Fresh ingredients, bold flavors and
          lots of love.
        </p>

      </div>


      {/* Category Buttons */}

      <div className="category-buttons">

        {categories.map((category) => (

          <button
            key={category}
            className={
              activeCategory === category
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() =>
              setActiveCategory(category)
            }
          >
            {category}
          </button>

        ))}

      </div>


      {/* Menu Cards */}

      <div className="menu-grid">

        {filteredItems.map((item) => (

          <div
            className="menu-card"
            key={item.id}
          >

            {/* Food Image */}

            <div className="menu-card-image">
              {item.emoji}
            </div>


            {/* Food Information */}

            <div className="menu-card-content">

              <div className="menu-title-row">

                <h3>
                  {item.name}
                </h3>

                <span className="price">
                  ₹{item.price}
                </span>

              </div>

              <span className="menu-category">
                {item.category}
              </span>

              <p>
                {item.description}
              </p>

              <button className="add-btn">
                + Add to Order
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Menu;