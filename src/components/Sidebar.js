
import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="user-avatar"></div>
                <div className="user-info">
                    <h4>Parveen</h4>
                    <p>Role: admin</p>
                </div>
            </div>

            <ul className="sidebar-menu">
                <li>
                    <Link to="/" className="menu-item">
                        {/* <i className="icon">🏠</i> */}
                        <i className="material-icons"> home</i>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/stocks" className="menu-item">
                        <i className="material-icons"> warehouse</i>
                        stocks
                        
                    </Link>
                </li>
                <li>
                    <Link to="/orders" className="menu-item">
                        <i className="material-icons">list_alt</i>
                        Orders
                    </Link>
                </li>
                <li>
                    <Link to="/furnitures" className="menu-item">
                        <i className="material-icons">shelves</i>
                        Furnitures
                    </Link>
                </li>
                <li>
                    <Link to="/payment" className="menu-item">
                        <i className="material-icons">credit_card</i>
                        Payment
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
