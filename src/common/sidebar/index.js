import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          Admin Panel <sup>2</sup>
        </div>
      </Link>
      <hr className="sidebar-divider my-0" />
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link to="/" className="nav-link">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>DashBoard</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/users">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Users</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/products">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Products</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/orders">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Orders</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/customers">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Customers</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/gallery">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Gallery</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
