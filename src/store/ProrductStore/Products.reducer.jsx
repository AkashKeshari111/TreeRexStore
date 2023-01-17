import {
  Error,
  Filter_Products,
  Filter_byCheckbox,
  Loading,
  Success,
} from "./Products.type";

export const Product_Reducer = (state, { type, payload }) => {
  switch (type) {
    case Loading: {
      return { ...state, loading: true, error: false };
    }

    case Success: {
      return { ...state, loading: false, error: false, data: payload };
    }

    case Error: {
      return { ...state, loading: false, error: true };
    }

    case Filter_Products: {
      return { ...state, loading: false, error: false, filterData: payload };
    }

    case Filter_byCheckbox:{
      // console.log("reducer",payload)

      return { ...state,loading: false, error: false, filters:{...state.filters,payload}};
    }

    default: {
      return state;
    }
  }
};
