import React from "react";
import style from "./Products.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <main className={style.main}>
      <div>
        <Sidebar />
      </div>
      <div>
        <ProductItem />
      </div>
    </main>
  );
};

export default Products;
