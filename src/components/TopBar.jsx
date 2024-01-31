import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/style.css';

function Header() {
  return (
    <div className="topbar">
      <div className="toggle">
        <ion-icon name="menu-outline"></ion-icon>
      </div>

      <div className="search">
        <label>
          <input type="text" placeholder="Search here" />
          <ion-icon name="search-outline"></ion-icon>
        </label>
      </div>

      <div className="user">
        <img src="../src/assets/imgs/interest-rate.png" alt="" />
      </div>
    </div>
  );
}

export default Header;
