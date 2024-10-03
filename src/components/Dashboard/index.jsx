import React, { useEffect, useState } from "react";
import "./index.scss";
import LineChartComp from "../common/LineChart/Index";
import CardComp from "../common/Card";
import ProfileComp from "../common/Profile";

const DashboardComp = ({ selectedPatient }) => {
  const [selectPatient, setSelectPatients] = useState({});
  useEffect(() => {
    setSelectPatients(selectedPatient);
  }, [selectedPatient]);
  return (
    <div className="dashboard-wrapper">
      <div className="line-chart-container">
        <div>
          <p>Diagnosis History</p>
          {/* <LineChartComp data={diagnosis_history} /> */}
        </div>
        <div>
          <CardComp data={selectPatient} />
        </div>
      </div>
      {selectPatient && <ProfileComp selectPatient={selectPatient} />}
    </div>
  );
};
export default DashboardComp;
