import React from "react";
import "./index.scss";
import { FormatDate } from "../../../utils/formatDate";

const ProfileComp = ({ selectPatient }) => {
  const {
    profile_picture,
    name,
    date_of_birth,
    gender,
    insurance_type,
    emergency_contact,
    phone_number,
  } = selectPatient;
  return (
    <div className="Profile-container">
      <div>
        <img src={profile_picture} alt="user" />
        <p>{name}</p>
      </div>
      <div className="">
        <div>
          <img />
          <div>
            <p>Date Of Birth</p>
            <p>{FormatDate(date_of_birth)}</p>
          </div>
        </div>
        <div>
          <img />
          <div>
            <p>Gender</p>
            <p>{gender}</p>
          </div>
        </div>
        <div>
          <img />
          <div>
            <p>Contact Info.</p>
            <p>{phone_number}</p>
          </div>
        </div>
        <div>
          <img />
          <div>
            <p>Emergency Contacts</p>
            <p>{emergency_contact}</p>
          </div>
        </div>
        <div>
          <img />
          <div>
            <p>Insurance Provider</p>
            <p>{insurance_type}</p>
          </div>
        </div>
        <button>Show All Information</button>
      </div>
    </div>
  );
};

export default ProfileComp;
