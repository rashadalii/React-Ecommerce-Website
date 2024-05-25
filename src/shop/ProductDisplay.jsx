import React, { useState } from "react";

const desc =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est esse in optio consectetur ab quis. o harum facilis totam, obcaecati repellat!";
const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity } = item;

  const [prequantity, setprequantity] = useState(quantity);
  const [coupon, setcoupon] = useState("");
  const [size, setsize] = useState("Select Size");
  const [color, setcolor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setsize(e.target.value);
  };

  const handleColorChange = (e) => {
    setcolor(e.target.value);
  };

  const handleDecrease = () => {
    if (prequantity > 1) {
      setprequantity(prequantity - 1);
    }
  };

  const handleIncrease = () => {
    setprequantity(prequantity + 1);
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} review</span>
        </p>
        <h4>{price}$</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* cart component */}
      <div>
        <form>
          {/* size */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* color */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>White</option>
              <option>Blue</option>
              <option>Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* cart plus minus */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setprequantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;