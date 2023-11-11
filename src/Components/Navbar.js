import React, { useState } from "react";
import styles from './Navbar.scss'
import ham from  './ham.png'

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
            <img className="w-12  "
              src={item[1]}
              alt={item[1]}
              style={{ paddingLeft: window === false ? 27 : 17 }}
            />
            <li
              className="navbar__li whitespace-nowrap text-sm"
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              {item[0]}
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default CustomNav;
