import React, { useContext } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const { cart_state } = useContext(CartContext);
  const count = cart_state.cart_data.length;

  return (
    <nav className={style.nav}>
      <div>
        <div className={style.left}>
          <Link to="/" className={style.a}>
            <span>TeeRex Store</span>
          </Link>
        </div>

        <div className={style.right}>
          <Link to="/" className={style.a}>
            <span>Products</span>
          </Link>
          <Link to="/cart" className={style.a}>
            <div>
              <text>
                <FaCartArrowDown />
              </text>
              <sup>{count}</sup>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
