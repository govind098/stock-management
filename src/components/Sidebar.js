// import React from "react";
// import "./Sidebar.css";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//             <h2>Parveen</h2>
//             <p>Role: Admin</p>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/stocks">Stocks</Link></li>
//                 <li><Link to="/orders">Orders</Link></li>
//                 <li><Link to="/furniture">Furniture</Link></li>
//                 <li><Link to="/payment">Payment</Link></li>
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;
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
                    <Link to="/" className="menu-item active">
                        <i className="icon">🏠</i>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/stocks" className="menu-item">
                        <i className="icon">📦</i>
                        Stocks
                    </Link>
                </li>
                <li>
                    <Link to="/orders" className="menu-item">
                        <i className="icon">📋</i>
                        Orders
                    </Link>
                </li>
                <li>
                    <Link to="/furnitures" className="menu-item">
                        <i className="icon">🛋</i>
                        Furnitures
                    </Link>
                </li>
                <li>
                    <Link to="/payment" className="menu-item">
                        <i className="icon">💳</i>
                        Payment
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
