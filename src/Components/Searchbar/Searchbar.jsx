import React, { useContext } from "react";
import style from "./Searchbar.module.css";

import { ProductContext } from "../../Context/ProductContext";
import {
  FilteredDataFun,
  getData,
} from "../../store/ProrductStore/Products.action";
import { FaSearchengin } from "react-icons/fa";
import { BiFilterAlt } from "react-icons/bi";

const Searchbar = () => {
  const { state, dispatch } = useContext(ProductContext);
  const handleSearchChange = (e) => {
    if (e.target.value == null) {
      getData(dispatch);
    } else {
      const filterData = state?.data?.filter((el) =>
        el.name.toLowerCase().includes(e.target.value.toLowerCase()) || el.gender.toLowerCase().includes(e.target.value.toLowerCase()) ||  el.type.toLowerCase().includes(e.target.value.toLowerCase())
       
      );

      console.log("abcd", filterData);
      FilteredDataFun(dispatch, filterData);
    }
  };

  

  return (
    <header>
      <div></div>
      <div>
        <form>
          <label></label>
          <input
            type="search"
            name="text"
            onChange={(e) => handleSearchChange(e)}
          />
          &nbsp;
          <FaSearchengin />
          &nbsp;
          <text className={style.fill}>
            <BiFilterAlt />
          </text>
        </form>
      </div>
    </header>
  );
};

export default Searchbar;
