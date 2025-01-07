import React from "react";
import "./Stocks.css";

const Stocks = () => {
    const stockData = [
        { product: "Basmati Rice", category: "Rice", brand: "India Gate", quantity: 25, MRP: 80 },
        { product: "Wheat Flour", category: "Flour", brand: "Ashirvad", quantity: 50, MRP: 40 },
        { product: "Milk", category: "Dairy", brand: "Amul", quantity: 15, MRP: 25 },
        { product: "Soap", category: "Hygiene", brand: "Dove", quantity: 30, MRP: 50 },
        { product: "Sugar", category: "Grocery", brand: "Generic", quantity: 20, MRP: 35 },
        // Add more rows as needed
    ];

    return (
        <div className="stocks-page">
            <div className="header">
                <h2>Stock</h2>
                <div className="actions">
                    <input type="text" placeholder="Search" className="search-bar" />
                    <button className="filter-btn">Filter</button>
                    <button className="new-stock-btn">+ Add Stock</button>
                </div>
            </div>
            <table className="stocks-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>MRP</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stockData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.product}</td>
                            <td>{item.category}</td>
                            <td>{item.brand}</td>
                            <td>{item.quantity}</td>
                            <td>{item.MRP}</td>
                            <td>
                                <button className="edit-btn">✏️</button>
                                <button className="delete-btn">🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Stocks;
