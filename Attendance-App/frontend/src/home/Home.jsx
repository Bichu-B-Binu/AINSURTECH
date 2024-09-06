import LoginPage from "../Page/LoginPage";
import { Route, Routes } from "react-router-dom";
import EmployeeScreen from "../screen/EmployeeScreen";
import HrScreen from "../screen/HrScreen";
import PraviteRoute from "../components/PraviteRoute";

export default function Home() {
  return (
    <div>
      <Routes>
        <Route element={<PraviteRoute />}>
          <Route path="/" element={<EmployeeScreen />} />
          <Route path="/hr" element={<HrScreen />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
