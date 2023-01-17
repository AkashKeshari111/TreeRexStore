import React, { useContext } from "react";
import style from "./Products.module.css";
import { useReducer } from "react";
import { useEffect } from "react";
import { addtoCart } from "../../store/CartStore/Cart.action";
import {
  FilteredDataFun,
  getData,
} from "../../store/ProrductStore/Products.action";
import { Cart_Reducer } from "../../store/CartStore/Cart.reducer";
import { ProductContext } from "../../Context/ProductContext";
import { CartContext } from "../../Context/CartContext";
import { useState } from "react";

const ProductItem = () => {
  const { state, dispatch } = useContext(ProductContext);
  const { cart_state, cart_dispatch } = useContext(CartContext);

  const handleCart = (props) => {
    const haveArticle = cart_state?.cart_data?.find((el) => {
      return el.id == props.id;
    });
    if (haveArticle !== undefined) {
      alert("Item is already Added!");
    } else {
      props = { ...props, qty: 1 };
      addtoCart(cart_dispatch, props);
    }
  };

  useEffect(() => {
    getData(dispatch);
  }, [dispatch, cart_dispatch]);

  return (
    <article className={style.article}>
      {(state.filterData.length==0?(state.data):(state.filterData)).map((el) => {
        return (
          <section key={el.id}>
            <div>
              <div className={style.heading}>
                <h4>{el.name}</h4>
              </div>

              <div className={style.productImgDiv}>
                <img alt="product" src={el.imageURL}></img>
              </div>
            </div>
            <div className={style.bottomDiv}>
              <strong>Rs {el.price}</strong>
              <button onClick={() => handleCart(el)}>Add to cart</button>
            </div>
          </section>
        );
      })}
    </article>
  );
};

export default ProductItem;
