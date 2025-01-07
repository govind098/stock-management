
import React, { useState } from "react";
import "./Orders.css";

const Orders = () => {
    const [orders, setOrders] = useState([
        { id: 1, product: "Basmati Rice", brand: "India Gate", quantity: 10, date: "2025-01-05", vendor: "Vendor A", status: "Pending" },
        { id: 2, product: "Milk", brand: "Amul", quantity: 20, date: "2025-01-04", vendor: "Vendor B", status: "Completed" },
        { id: 3, product: "Soap", brand: "Dove", quantity: 15, date: "2025-01-03", vendor: "Vendor C", status: "Pending" },
    ]);

    const [addPopup, setAddPopup] = useState(false);
    const [newOrder, setNewOrder] = useState({
        product: "",
        brand: "",
        quantity: "",
        date: "",
        vendor: "",
        status: "Pending",
    });

    const [viewPopup, setViewPopup] = useState({ show: false, order: null });
    const [deletePopup, setDeletePopup] = useState({ show: false, orderId: null });

    // Add Order Functionality
    const handleAddOrder = () => {
        const newId = orders.length ? orders[orders.length - 1].id + 1 : 1; // Generate unique ID
        setOrders([...orders, { id: newId, ...newOrder }]);
        setAddPopup(false);
        setNewOrder({ product: "", brand: "", quantity: "", date: "", vendor: "", status: "Pending" });
    };

    // Delete Order Functionality
    const handleDeleteOrder = (orderId) => {
        setOrders(orders.filter((order) => order.id !== orderId));
        setDeletePopup({ show: false, orderId: null });
    };

    return (
        <div className="orders-page">
            <div className="header">
                <h2>Orders</h2>
                <div className="actions">
                    <input type="text" placeholder="Search" className="search-bar" />
                    <button className="export-btn">Export to Excel</button>
                    <button className="new-order-btn" onClick={() => setAddPopup(true)}>
                        + Add Order
                    </button>
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
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.product}</td>
                            <td>{order.brand}</td>
                            <td>{order.quantity}</td>
                            <td>{order.date}</td>
                            <td>{order.vendor}</td>
                            <td>
                                <button
                                    className="view-btn"
                                    onClick={() => setViewPopup({ show: true, order })}
                                >
                                    View
                                </button>
                                <button
                                    className="delete-btn"
                                    onClick={() => setDeletePopup({ show: true, orderId: order.id })}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add Order Popup */}
            {addPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Add New Order</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleAddOrder();
                            }}
                        >
                            <div className="form-group">
                                <label>Product</label>
                                <input
                                    type="text"
                                    value={newOrder.product}
                                    onChange={(e) =>
                                        setNewOrder({ ...newOrder, product: e.target.value })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Brand</label>
                                <input
                                    type="text"
                                    value={newOrder.brand}
                                    onChange={(e) =>
                                        setNewOrder({ ...newOrder, brand: e.target.value })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Quantity</label>
                                <input
                                    type="number"
                                    value={newOrder.quantity}
                                    onChange={(e) =>
                                        setNewOrder({ ...newOrder, quantity: parseInt(e.target.value) })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input
                                    type="date"
                                    value={newOrder.date}
                                    onChange={(e) =>
                                        setNewOrder({ ...newOrder, date: e.target.value })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Vendor</label>
                                <input
                                    type="text"
                                    value={newOrder.vendor}
                                    onChange={(e) =>
                                        setNewOrder({ ...newOrder, vendor: e.target.value })
                                    }
                                />
                            </div>
                            <div className="popup-buttons">
                                <button className="confirm-btn" type="submit">
                                    Add
                                </button>
                                <button
                                    className="cancel-btn"
                                    onClick={() => setAddPopup(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* View Order Popup */}
            {viewPopup.show && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Order Details</h3>
                        <p><strong>Product:</strong> {viewPopup.order.product}</p>
                        <p><strong>Brand:</strong> {viewPopup.order.brand}</p>
                        <p><strong>Quantity:</strong> {viewPopup.order.quantity}</p>
                        <p><strong>Date:</strong> {viewPopup.order.date}</p>
                        <p><strong>Vendor:</strong> {viewPopup.order.vendor}</p>
                        <p><strong>Status:</strong> {viewPopup.order.status}</p>
                        <div className="popup-buttons">
                            <button
                                className="cancel-btn"
                                onClick={() => setViewPopup({ show: false, order: null })}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Popup */}
            {deletePopup.show && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Are you sure you want to delete this order?</h3>
                        <div className="popup-buttons">
                            <button
                                className="confirm-btn"
                                onClick={() => handleDeleteOrder(deletePopup.orderId)}
                            >
                                Delete
                            </button>
                            <button
                                className="cancel-btn"
                                onClick={() => setDeletePopup({ show: false, orderId: null })}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Orders;
