import { useState, useEffect } from "react";

export const Cart = () => {
  const [productsArray, setProductsArray] = useState([
    { name: "monitor", qty: 0, price: 6000 },
    { name: "mouse", qty: 0, price: 2500 },
    { name: "keyboard", qty: 0, price: 1800 },
    { name: "speaker", qty: 0, price: 4500 },
    { name: "headphones", qty: 0, price: 2300 },
    { name: "laptop", qty: 0, price: 55000 }
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  var [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    setTotalPrice(productsArray.reduce((r, t) => r + t.price * t.qty, 0));
    setTotalQty(productsArray.reduce((r, t) => r + t.qty, 0));
  }, [productsArray]);

  const handleClick = (index, qty) => {
    var chnageqty = [...productsArray];
    chnageqty[index] = { ...chnageqty[index], qty: qty };
    setProductsArray(chnageqty);
  };

  return (
    <div>
      <div>
        <h1>Cart</h1>
      </div>
      {productsArray?.map((item, i) => (
        <div key={i}>
          <h2>
            {item.name} = Price:{item.price} Qty:{item.qty}
          </h2>
          <div>
            <button
              onClick={() => handleClick(i, item.qty + 1)}
              style={{ marginRight: "15px" }}
            >
              +
            </button>
            <button
              onClick={() =>
                item.qty != 0 ? handleClick(i, item.qty - 1) : null
              }
            >
              -
            </button>
          </div>
        </div>
      ))}
      <div>
        <h2>Total item:{totalQty}</h2>
        <h2>total Amount:{totalPrice}</h2>
      </div>
    </div>
  );
};
