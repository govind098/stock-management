
import React, { useState } from "react";
import "./Stocks.css";

const Stocks = () => {
    const [stocks, setStocks] = useState([
        { id: 1, product: "Basmati Rice", category: "Rice", brand: "India Gate", quantity: 50, price: 100 },
        { id: 2, product: "Wheat Flour", category: "Flour", brand: "Aashirvaad", quantity: 30, price: 40 },
        { id: 3, product: "Sugar", category: "Sugar", brand: "Dhampur", quantity: 25, price: 30 },
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const [deletePopup, setDeletePopup] = useState({ show: false, productId: null });
    const [editPopup, setEditPopup] = useState({ show: false, product: null });
    const [addPopup, setAddPopup] = useState(false);
    const [newProduct, setNewProduct] = useState({
        product: "",
        category: "",
        brand: "",
        quantity: "",
        price: "",
    });

    const handleDelete = (productId) => {
        setStocks(stocks.filter((stock) => stock.id !== productId));
        setDeletePopup({ show: false, productId: null });
    };

    const handleEdit = (updatedProduct) => {
        setStocks(
            stocks.map((stock) =>
                stock.id === updatedProduct.id ? { ...stock, ...updatedProduct } : stock
            )
        );
        setEditPopup({ show: false, product: null });
    };

    const handleAddProduct = () => {
        const newId = stocks.length ? stocks[stocks.length - 1].id + 1 : 1;
        setStocks([...stocks, { id: newId, ...newProduct }]);
        setAddPopup(false);
        setNewProduct({ product: "", category: "", brand: "", quantity: "", price: "" });
    };

    const filteredStocks = stocks.filter((stock) =>
        stock.product.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="stocks-container">
            <h2>Stocks</h2>

            {/* Search and Add Items */}
            <div className="stocks-controls">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="add-item-btn" onClick={() => setAddPopup(true)}>
                    + Add Item
                </button>
            </div>

            {/* Stocks Table */}
            <table className="stocks-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStocks.map((stock) => (
                        <tr key={stock.id}>
                            <td>{stock.product}</td>
                            <td>{stock.category}</td>
                            <td>{stock.brand}</td>
                            <td>{stock.quantity}</td>
                            <td>{stock.price}</td>
                            <td>
                                <button
                                    className="edit-btn"
                                    onClick={() => setEditPopup({ show: true, product: stock })}
                                >
                                    Edit
                                </button>
                                <button
                                    className="delete-btn"
                                    onClick={() => setDeletePopup({ show: true, productId: stock.id })}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Delete Confirmation Popup */}
            {deletePopup.show && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Are you sure you want to delete this product?</h3>
                        <div className="popup-buttons">
                            <button
                                className="confirm-btn"
                                onClick={() => handleDelete(deletePopup.productId)}
                            >
                                Delete
                            </button>
                            <button
                                className="cancel-btn"
                                onClick={() => setDeletePopup({ show: false, productId: null })}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Product Popup */}
            {editPopup.show && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Edit Product</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleEdit(editPopup.product);
                            }}
                        >
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    value={editPopup.product.product}
                                    onChange={(e) =>
                                        setEditPopup({
                                            ...editPopup,
                                            product: { ...editPopup.product, product: e.target.value },
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input
                                    type="text"
                                    value={editPopup.product.category}
                                    onChange={(e) =>
                                        setEditPopup({
                                            ...editPopup,
                                            product: { ...editPopup.product, category: e.target.value },
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Brand</label>
                                <input
                                    type="text"
                                    value={editPopup.product.brand}
                                    onChange={(e) =>
                                        setEditPopup({
                                            ...editPopup,
                                            product: { ...editPopup.product, brand: e.target.value },
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Quantity</label>
                                <input
                                    type="number"
                                    value={editPopup.product.quantity}
                                    onChange={(e) =>
                                        setEditPopup({
                                            ...editPopup,
                                            product: { ...editPopup.product, quantity: parseInt(e.target.value) },
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="number"
                                    value={editPopup.product.price}
                                    onChange={(e) =>
                                        setEditPopup({
                                            ...editPopup,
                                            product: { ...editPopup.product, price: parseFloat(e.target.value) },
                                        })
                                    }
                                />
                            </div>
                            <div className="popup-buttons">
                                <button className="confirm-btn" type="submit">
                                    Save
                                </button>
                                <button
                                    className="cancel-btn"
                                    onClick={() => setEditPopup({ show: false, product: null })}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Product Popup */}
            {addPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Add New Product</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleAddProduct();
                            }}
                        >
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    value={newProduct.product}
                                    onChange={(e) =>
                                        setNewProduct({ ...newProduct, product: e.target.value })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input
                                    type="text"
                                    value={newProduct.category}
                                    onChange={(e) =>
                                        setNewProduct({ ...newProduct, category: e.target.value })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Brand</label>
                                <input
                                    type="text"
                                    value={newProduct.brand}
                                    onChange={(e) =>
                                        setNewProduct({ ...newProduct, brand: e.target.value })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Quantity</label>
                                <input
                                    type="number"
                                    value={newProduct.quantity}
                                    onChange={(e) =>
                                        setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="number"
                                    value={newProduct.price}
                                    onChange={(e) =>
                                        setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
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
        </div>
    );
};

export default Stocks;
