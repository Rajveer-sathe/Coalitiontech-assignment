import React from "react";
import "./index.scss";

const NavBarComp = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src="/images/svgs/TestLogo.svg" alt="logo" />
      </div>
      <div className="nav-items">
        <div className="nav-img-wrapper">
          <img src="/images/svgs/home.svg" alt="home" />
          <p>Overview</p>
        </div>
        <div className="nav-img-wrapper">
          <img src="/images/svgs/group.svg" alt="group" />
          <p>Patients</p>
        </div>
        <div className="nav-img-wrapper">
          <img src="/images/svgs/calendar.svg" alt="calendar" />
          <p>Schedule</p>
        </div>
        <div className="nav-img-wrapper">
          <img src="/images/svgs/chat.svg" alt="message" />
          <p>Message</p>
        </div>
        <div className="nav-img-wrapper">
          <img src="/images/svgs/credit-card.svg" alt="card" />
          <p>Transactions</p>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-wrapper">
          <img className="profile-img" src="/images/woman-doctor.png" alt="doctor-img" />
          <div className="user-name">
            <p>Dr. Jose Simmons</p>
            <p>General Practitioner</p>
          </div>
          <img className="setting" src="/images/svgs/setting.svg" alt="setting" />
          <img className="dot" src="/images/svgs/dot.svg" alt="dot" />
        </div>
      </div>
    </div>
  );
};

export default NavBarComp;
