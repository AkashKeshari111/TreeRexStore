import {
  Error,
  Filter_Products,
  Filter_byCheckbox,
  Loading,
  SET_FILTERS,
  Success,
} from "./Products.type";

export const getData = (dispatch) => {
  dispatch({ type: Loading });

  fetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  )
    .then((res) => res.json())
    .then((res) => {
      // console.log(res)

      dispatch({ type: Success, payload: res });
    })
    .catch((err) => {
      dispatch({ type: Error });
    });
};

export const FilteredDataFun = (dispatch, creds) => {
  // console.log("credsssss", creds);
  dispatch({ type: Filter_Products, payload: creds });
};


export const FilterCheckboxFun=(dispatch,creds)=>{

  // console.log("action",creds)
   dispatch({type:Filter_byCheckbox,payload: creds})
   FilteredDataFun(dispatch,creds)
}