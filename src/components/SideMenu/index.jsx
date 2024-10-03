import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { selectPatient } from "../../store/action/action";

const SideMenu = ({ data }) => {
  const dispatch = useDispatch();
  const handleSelectPatient = (patient) => {
    dispatch(selectPatient(patient));
  };

  return (
    <div className="sidemenu-container">
      <div className="sidemenu-search">
        <p>Patients</p>
        <img src="/images/svgs/search.svg" alt="search" />
      </div>
      <div className="patient-info-container">
        {data &&
          data.length &&
          data.map((item, id) => {
            const { name, profile_picture, gender, age } = item;
            return (
              <div
                key={id}
                className="sidemnu-user"
                onClick={() => handleSelectPatient(item)}
              >
                <div className="sidemenu-img-wrapper">
                  <img className="user-img" src={profile_picture} alt="user" />
                </div>
                <div className="patient-wrapper">
                  <p className="patient-name">{name}</p>
                  <div className="patient-info">
                    <p>{age}</p>,<p>{gender}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SideMenu;
