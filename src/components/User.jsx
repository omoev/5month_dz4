import React, { useState } from "react";
import "./User.css"

const User = ({ user }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleGetMoreClick = () => {

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())

            .then((data) => {
                console.log(data);

                setShowDetails(true);


            })
            .catch((error) => {
                console.error("Failed to fetch additional data:", error);
            });
    };

    return (
        <div className={`user-container ${showDetails ? "expanded" : ""}`}>
            <p className="user-info">Name: {user.name}</p>
            <p className="user-info">Username: {user.username}</p>
            <p className="user-info">Email: {user.email}</p>
            {showDetails && (
                <div className="user-details">
                    <p className="user-info">Website: {user.website}</p>
                    <p className="user-info">address: {user.address.city}, street: {user.address.street}</p>
                    <p className="user-info">Zipcode: {user.address.zipcode}</p>
                    <p className="user-info">Company: {user.company.name}</p>
                </div>
            )}
            <button className="get-more-button" onClick={handleGetMoreClick}>Get More</button>
        </div>
    );
};

export default User;
