import React from 'react';
import './Statistics.css'; // Make sure to create this CSS file

const Statistics = () => {
    return (
        <div className="statistics-container">
            <div className="statistics-grid">
                {/* Card 1 */}
                <div className="statistics-card">
                    <div className="icon-bg">
                        <i className="fas fa-store icon"></i>
                    </div>
                    <h2 className="statistics-number">10.5k</h2>
                    <p className="statistics-description">Sellers active on our site</p>
                </div>
                {/* Card 2 (Highlighted in red) */}
                <div className="statistics-card highlighted">
                    <div className="icon-bg">
                        <i className="fas fa-dollar-sign icon red-icon"></i>
                    </div>
                    <h2 className="statistics-number">33k</h2>
                    <p className="statistics-description">Monthly Product Sale</p>
                </div>
                {/* Card 3 */}
                <div className="statistics-card">
                    <div className="icon-bg">
                        <i className="fas fa-shopping-bag icon"></i>
                    </div>
                    <h2 className="statistics-number">45.5k</h2>
                    <p className="statistics-description">Customers active on our site</p>
                </div>
                {/* Card 4 */}
                <div className="statistics-card">
                    <div className="icon-bg">
                        <i className="fas fa-coins icon"></i>
                    </div>
                    <h2 className="statistics-number">25k</h2>
                    <p className="statistics-description">Annual gross sale on our site</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
