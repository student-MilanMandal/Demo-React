import React, { useState } from "react";

import ProductDate from "./ProductDate";
import Card from "./Card";

import "./ProductItem1.css";

const ProductItem1 = (props) => {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("popcon");
    console.log("Button submit");
  }

  return (
    <Card>
      <div className="product-item">
        <ProductDate date={props.date} />
        <div className="product-item_description">
          <h2>{title}</h2>
        </div>
        <button onClick={clickHandler}>Add to cart</button>
      </div>
    </Card>
  );
};
export default ProductItem1;
