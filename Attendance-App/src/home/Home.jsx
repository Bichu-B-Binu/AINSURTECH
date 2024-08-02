import LoginPage from "../Page/LoginPage";
import { Route, Routes } from "react-router-dom";
import EmployeeScreen from "../screen/EmployeeScreen";
import HrScreen from "../screen/HrScreen";

export default function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<EmployeeScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/hr" element={<HrScreen />} />
      </Routes>
    </div>
  );
}
