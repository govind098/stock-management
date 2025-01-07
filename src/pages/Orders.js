import React from "react";
import "./Orders.css";

const Orders = () => {
    const orderData = [
        { product: "Basmati Rice", brand: "India Gate", quantity: 10, date: "2025-01-05", vendor: "Vendor A" },
        { product: "Milk", brand: "Amul", quantity: 20, date: "2025-01-04", vendor: "Vendor B" },
        { product: "Soap", brand: "Dove", quantity: 15, date: "2025-01-03", vendor: "Vendor C" },
        // Add more rows as needed
    ];

    return (
        <div className="orders-page">
            <div className="header">
                <h2>Orders</h2>
                <div className="actions">
                    <input type="text" placeholder="Search" className="search-bar" />
                    <button className="export-btn">Export to Excel</button>
                    <button className="new-order-btn">+ Add Order</button>
                </div>
            </div>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>Date</th>
                        <th>Vendor</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.product}</td>
                            <td>{item.brand}</td>
                            <td>{item.quantity}</td>
                            <td>{item.date}</td>
                            <td>{item.vendor}</td>
                            <td>
                                <button className="view-btn">👁</button>
                                <button className="delete-btn">🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
