import React, { useState } from "react";


function Item({ name, category }) {
  const [ inCart, setInCart ] = useState(false)

  function cartAction () {
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartAction} className="add">{inCart ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
