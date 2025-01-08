import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    const handleOrderClick = () => {
        navigate("/orders"); // Navigate to Orders page
    };

    const handleViewClick = () => {
        navigate("/stocks"); // Navigate to Stocks page
    };

    return (
        <div className="home-container">
           

            <div className="home-content">
                {/* Daily Draft Section */}
                <div className="daily-draft">
                    <h3>Daily Demand</h3>
                    <textarea
                        placeholder="Write your demand here..."
                        rows="10"
                        cols="30"
                        className="draft-textarea"
                    >
                        
                        


                    </textarea>
                    <button className="approve-btn">Approve</button>
                </div>

                {/* Stock Alert Section */}
                <div className="stock-alert-section">
                    <h2>Stock Alert</h2>
                    <table className="stock-alert-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th className="alart">Alert Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Basmati rice</td>
                                <td>Rice</td>
                                <td>India Gate</td>
                                <td>200</td>
                                <td>
                                    <button className="view-btn" onClick={handleViewClick}>
                                        View
                                    </button>
                                    <button className="order-btn" onClick={handleOrderClick}>
                                        Order
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Wheat Flour</td>
                                <td>Flour</td>
                                <td>India Gate</td>
                                <td>250</td>
                                <td>
                                    <button className="view-btn" onClick={handleViewClick}>
                                        View
                                    </button>
                                    <button className="order-btn" onClick={handleOrderClick}>
                                        Order
                                    </button>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;
