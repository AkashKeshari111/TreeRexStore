import {
  Error,
  Loading,
  Remove_Cart_Item,
  Success,
  Update_Cart_Qty,
} from "./Cart.type";

export const addtoCart = (dispatch, props) => {
  dispatch({ type: Loading });
  try {
    dispatch({ type: Success, payload: props });
    alert("Product added to cart Successfully!");
  } catch (err) {
    dispatch({ type: Error });
  }
};

export const UpdateQuantity = (dispatch, creds) => {
  try {
    dispatch({ type: Update_Cart_Qty, payload: creds });
    // console.log(creds);
  } catch (error) {
    console.log(error);
  }
};

export const RemoveItem = (dispatch, creds) => {
  dispatch({ type: Remove_Cart_Item, payload: creds });
};
