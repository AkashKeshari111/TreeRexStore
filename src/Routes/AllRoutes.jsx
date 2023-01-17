import React from "react";
import Cart from "../pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Searchbar from "../Components/Searchbar/Searchbar";
import Products from "../pages/Products/Products";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Searchbar />
            <Products />
          </>
        }
      />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
