import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="daily-draft">
                <h3>Daily Demand Draft</h3>
                <textarea placeholder="Write your draft here..."></textarea>
                <button>Approve</button>
            </div>

            <div className="stock-alert">
                <h3>Stock Alert</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Alert Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Basmati rice</td>
                            <td>Rice</td>
                            <td>India Gate</td>
                            <td>1850</td>
                            <td>
                                <button className="view-btn">👁</button>
                                <button className="order-btn">Order</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Wheat flour</td>
                            <td>Flour</td>
                            <td>India Gate</td>
                            <td>1850</td>
                            <td>
                                <button className="view-btn">👁</button>
                                <button className="order-btn">Order</button>
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
