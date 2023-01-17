import React, { useContext, useReducer } from "react";
import style from "./Cart.module.css";
import { Cart_Reducer } from "../../store/CartStore/Cart.reducer";
import { CartContext } from "../../Context/CartContext";
import { RemoveItem, UpdateQuantity } from "../../store/CartStore/Cart.action";
const Cart = () => {
  const { cart_state, cart_dispatch } = useContext(CartContext);
  // console.log(cart_state.cart_data)

  const TotalPrice = cart_state?.cart_data.reduce((acc, el) => {
    return acc + el.qty * el.price;
  }, 0);

  const handleQty = (value, id, quantity) => {
    const UpdateQty = cart_state?.cart_data?.map((el) => {
      if (el.id == id) {
        return { ...el, qty: el.qty + value };
      } else {
        return el;
      }
    });
    UpdateQuantity(cart_dispatch, UpdateQty);
  };

  const handleDelete = (id) => {
    cart_state?.cart_data.splice(id, 1);
    RemoveItem(cart_dispatch, cart_state?.cart_data);
  };

  return (
    <main>
      <h3>Shopping Cart</h3>
      <section>
        <div className={style.cartProduct}>
          {cart_state?.cart_data?.map((el, index) => {
            return (
              <section>
                <div className={style.imageDiv}>
                  <img alt="img" src={el.imageURL}></img>
                </div>
                <div className={style.title}>
                  <h4>{el.name}</h4>
                  <h5>Rs {el.price * el.qty}</h5>
                </div>
                <div className={style.qty}>
                  <button
                    onClick={() => handleQty(-1, el.id, el.quantity)}
                    disabled={el.qty == 1}
                  >
                    -
                  </button>
                  <text>Qty {el.qty}</text>
                  <button
                    onClick={() => handleQty(1, el.id, el.quantity)}
                    disabled={el.qty == el.quantity}
                  >
                    +
                  </button>
                </div>
                <div className={style.delete}>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </section>
            );
          })}
        </div>
        <div className={style.cartTotal}>
          <strong>Total Price</strong> <span>Rs {TotalPrice}</span>
        </div>
      </section>
    </main>
  );
};

export default Cart;
