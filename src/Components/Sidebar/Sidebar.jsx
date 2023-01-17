import React, { useContext } from "react";
import style from "./Sidebar.module.css";
import { ProductContext } from "../../Context/ProductContext";
import CheckboxFilter from "./CheckboxFilter";
import { FilterCheckboxFun } from "../../store/ProrductStore/Products.action";
const Sidebar = () => {
  const { state, dispatch } = useContext(ProductContext);
  const { filters } = state;

  const handleFilterChange = (category, value) => {
    if (filters[category].includes(value)) {
      filters[category] = filters[category].filter((val) => val !== value);
    } else {
      filters[category].push(value);
    }
    const filteredData = state?.data?.filter((el) => {
      return (
        filters.colors.includes(el.color) ||
        filters.gender.includes(el.gender) ||
        filters.types.includes(el.type) 
        // ||filters.price.includes(el.price)
      );
    });
    console.log("fill", filters);
    FilterCheckboxFun(dispatch, filteredData);
    
  };


  return (
    <aside className={style.aside}>
      <form>
        <CheckboxFilter
          options={["Red", "Blue", "Green"]}
          category="colors"
          filters={filters.colors}
          onChange={handleFilterChange}
        />
        <CheckboxFilter
          options={["Men", "Women"]}
          category="gender"
          filters={filters.gender}
          onChange={handleFilterChange}
        />

        <CheckboxFilter
          options={["Hoodie", "Polo", "Basic"]}
          category="types"
          filters={filters.types}
          onChange={handleFilterChange}
        />

        {/* <CheckboxFilter
          options={["Rs0 - Rs100","Rs101 - Rs.200","Rs201 & above"]}
  
          category="price"
          filters={filters.price}
          onChange={handleFilterChange}
        /> */}
      </form>
    </aside>
  );
};

export default Sidebar;
