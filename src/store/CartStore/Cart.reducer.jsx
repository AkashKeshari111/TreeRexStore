import {
  Error,
  Loading,
  Remove_Cart_Item,
  Success,
  Update_Cart_Qty,
} from "./Cart.type";

export const Cart_Reducer = (cart_state, { type, payload }) => {
  switch (type) {
    case Loading: {
      return { ...cart_state, loading: true, error: false };
    }

    case Success: {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart_state.cart_data, payload])
      );
      return {
        ...cart_state,
        loading: false,
        error: false,
        cart_data: [...cart_state.cart_data, payload],
      };
    }

    case Error: {
      return { ...cart_state, loading: false, error: true };
    }

    case Update_Cart_Qty: {
      localStorage.setItem("cart", JSON.stringify(payload));
      return {
        ...cart_state,
        loading: false,
        error: false,
        cart_data: payload,
      };
    }

    case Remove_Cart_Item: {
      localStorage.setItem("cart", JSON.stringify(payload));
      return {
        ...cart_state,
        loading: false,
        error: false,
        cart_data: [...payload],
      };
    }
    default: {
      return cart_state;
    }
  }
};
