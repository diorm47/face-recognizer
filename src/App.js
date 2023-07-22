import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoadinPage from "./pages/loading-page/loading-page";
import LoginPage from "./pages/login-page/login-page";
import ProfilePage from "./pages/profile-page/profile-page";
import Users from "./pages/users-page/users";
import CameraPage from "./pages/camera-page/camera-page";
import StatisticPage from "./pages/statistic-page/statistic-page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/loading" exact element={<LoadinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/statistic" element={<StatisticPage />} />
      </Routes>
    </>
  );
}

export default App;
