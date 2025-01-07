
import React, { useState } from "react";
import "./Furniture.css";

const Furniture = () => {
    const [furnitureData, setFurnitureData] = useState([
        { id: 1, product: "Chair", brand: "Teak", quantity: 10 },
        { id: 2, product: "Table", brand: "Teak", quantity: 15 },
        { id: 3, product: "Sofa", brand: "Teak", quantity: 5 },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [deletePopup, setDeletePopup] = useState({ show: false, furnitureId: null });
    const [editPopup, setEditPopup] = useState({ show: false, furniture: null });
    const [addPopup, setAddPopup] = useState(false);
    const [newFurniture, setNewFurniture] = useState({ product: "", brand: "", quantity: 0 });

    const handleDelete = (furnitureId) => {
        setFurnitureData(furnitureData.filter((item) => item.id !== furnitureId));
        setDeletePopup({ show: false, furnitureId: null });
    };

    const handleEdit = (updatedFurniture) => {
        setFurnitureData(
            furnitureData.map((item) =>
                item.id === updatedFurniture.id ? { ...item, ...updatedFurniture } : item
            )
        );
        setEditPopup({ show: false, furniture: null });
    };

    const handleAddItem = () => {
        if (newFurniture.product && newFurniture.brand && newFurniture.quantity > 0) {
            const newItem = {
                ...newFurniture,
                id: furnitureData.length + 1, // Generate a new ID based on length
            };
            setFurnitureData([...furnitureData, newItem]);
            setAddPopup(false);
            setNewFurniture({ product: "", brand: "", quantity: 0 }); // Reset form
        }
    };

    const filteredData = furnitureData.filter(
        (item) =>
            item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="furniture-container">
            <h2>Furnitures</h2>

            {/* Search Field */}
            <div className="actions">
                <input
                    type="text"
                    placeholder="Search product"
                    className="search-bar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="add-item-btn" onClick={() => setAddPopup(true)}>
                    + Add Item
                </button>
            </div>

            {/* Furniture Table */}
            <table className="furniture-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Brand</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.product}</td>
                            <td>{item.brand}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button
                                    className="edit-btn"
                                    onClick={() => setEditPopup({ show: true, furniture: item })}
                                >
                                    Edit
                                </button>
                                <button
                                    className="delete-btn"
                                    onClick={() => setDeletePopup({ show: true, furnitureId: item.id })}
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
                        <h3>Are you sure you want to delete this furniture item?</h3>
                        <div className="popup-buttons">
                            <button
                                className="confirm-btn"
                                onClick={() => handleDelete(deletePopup.furnitureId)}
                            >
                                Delete
                            </button>
                            <button
                                className="cancel-btn"
                                onClick={() => setDeletePopup({ show: false, furnitureId: null })}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Furniture Popup */}
            {editPopup.show && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Edit Furniture</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleEdit(editPopup.furniture);
                            }}
                        >
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    value={editPopup.furniture.product}
                                    onChange={(e) =>
                                        setEditPopup({
                                            ...editPopup,
                                            furniture: { ...editPopup.furniture, product: e.target.value },
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Brand</label>
                                <input
                                    type="text"
                                    value={editPopup.furniture.brand}
                                    onChange={(e) =>
                                        setEditPopup({
                                            ...editPopup,
                                            furniture: { ...editPopup.furniture, brand: e.target.value },
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Quantity</label>
                                <input
                                    type="number"
                                    value={editPopup.furniture.quantity}
                                    onChange={(e) =>
                                        setEditPopup({
                                            ...editPopup,
                                            furniture: {
                                                ...editPopup.furniture,
                                                quantity: parseInt(e.target.value),
                                            },
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
                                    onClick={() => setEditPopup({ show: false, furniture: null })}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Item Popup */}
            {addPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Add Furniture</h3>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input
                                type="text"
                                value={newFurniture.product}
                                onChange={(e) => setNewFurniture({ ...newFurniture, product: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Brand</label>
                            <input
                                type="text"
                                value={newFurniture.brand}
                                onChange={(e) => setNewFurniture({ ...newFurniture, brand: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input
                                type="number"
                                value={newFurniture.quantity}
                                onChange={(e) =>
                                    setNewFurniture({ ...newFurniture, quantity: parseInt(e.target.value) })
                                }
                            />
                        </div>
                        <div className="popup-buttons">
                            <button className="confirm-btn" onClick={handleAddItem}>
                                Add
                            </button>
                            <button className="cancel-btn" onClick={() => setAddPopup(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Furniture;

