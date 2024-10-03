import { useEffect } from "react";
import NavBarComp from "./components/NavBar";
import SideMenu from "./components/SideMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./utils/fetchData";
import "./App.scss";
import DashboardComp from "./components/Dashboard";

function App() {
  const dispatch = useDispatch();
  const { data, selectedPatient } = useSelector((state) => state?.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="App">
      <NavBarComp />
      <div className="dashboard-container">
        <SideMenu data={data} />
        <DashboardComp selectedPatient={selectedPatient} />
      </div>
    </div>
  );
}

export default App;
