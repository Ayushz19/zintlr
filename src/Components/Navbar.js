import React, { useState } from "react";
import styles from "./Navbar.scss";
import ham from "./ham.png";

const CustomNav = ({ li }) => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <nav className="navbar-menu" style={{ width: window === false ? 250 : 60 }}>
      <div className="burger" onClick={() => openClose()}>
        <img src={ham} alt="burger" />
      </div>
      <ul className="navbar__list  ">
        {li.map((item, i) => (
          <div className="navbar__li-box flex mx-[-12px]" key={i}>
            <img
              className=" "
              src={item[1]}
              alt={item[1]}
              style={{ paddingLeft: window === false ? 27 : 17 }}
            />
            <li
              className="navbar__li  text-sm"
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              {item[0]}
            </li>
          </div>
        ))}
      </ul>
      <div className="stock mt-10 p-2">
        <h3 className="mx-3"> Your Stock</h3>
        <div className="stock-1 p-3 text-xs border-6  rounded-lg bg-blue-200">
          <div className="tru-gold whitespace-nowrap ">
            <p className="flex">
              TrueCoin <span className="text-red-500">Gold{" "}</span>
              <span className="mx-3 whitespace-nowrap ">7.3k gm</span>
            </p>

            <p className="text-green-500">6.18(+2.26%)</p>
          </div>
          <div className="tru-gold whitespace-nowrap mt-2 ">
            <p className="flex">
              TrueCoin <span className="text-red-500">Silver{" "}</span>
              <span className="mx-3 whitespace-nowrap ">7.3k gm</span>
            </p>

            <p className="text-green-500">6.18(+56%)</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNav;
