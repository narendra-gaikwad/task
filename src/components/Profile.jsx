import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../components/profile.css";
import "../components/common.css";

const Profile = (props) => {
  const location = useLocation();
  const { uname } = location.state;
  return (
    <div className={"profile-flex-container"}>
      <div className="image-container">
        <img src="/assets/image.jpg" alt="Image" />
      </div>
      <div
        className={`${
          uname === "admin" ? "profile-container-admin" : "profile-container"
        }`}
      >
        <div className="profile-header">
          <h2>Profile</h2>
        </div>
        <div className="profile-body">
          <form>
            <div className="form-group">
              <div className="profile-photo-container">
                <input type="file" id="profilePhoto" accept="image/*" />
                <div className="profile-photo-preview"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" id="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="text" id="firstName" placeholder="First Name" />
            </div>
            <div className="form-group">
              <input type="text" id="lastName" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="tel" id="mobile" placeholder="Mobile Number" />
            </div>

            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
