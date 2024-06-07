import React, { useState } from "react";

function Item({ name, category }) {
  // Create a state variable 'inCart' that can be toggled between true and false
  const [inCart, setInCart] = useState(false);

  // Use the 'inCart' state variable to determine the className and button text
  const itemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  // Create an event handler for the button
  const handleButtonClick = () => {
    setInCart(!inCart);
  };

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButtonClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
