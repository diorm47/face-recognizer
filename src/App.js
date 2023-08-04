import { Route, Routes } from "react-router-dom";
import "./App.css";
import CameraPage from "./pages/camera-page/camera-page";
import LoadinPage from "./pages/loading-page/loading-page";
import LoginPage from "./pages/login-page/login-page";
import ProfilePage from "./pages/profile-page/profile-page";
import StatisticPage from "./pages/statistic-page/statistic-page";
import Users from "./pages/users-page/users";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {

  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  return (
    <>
      <Routes>
        <Route path="/" exact element={<LoginPage mainURl={localStorage.getItem("apiAdress")} />} />
        <Route
          path="/loading"
          exact
          element={<LoadinPage mainURl={localStorage.getItem("apiAdress")} />}
        />
        <Route path="/login" element={<LoginPage mainURl={localStorage.getItem("apiAdress")} />} />
        <Route path="/profile" element={<ProfilePage mainURl={localStorage.getItem("apiAdress")} />} />
        <Route path="/users" element={<Users mainURl={localStorage.getItem("apiAdress")} />} />
        <Route path="/camera" element={<CameraPage mainURl={localStorage.getItem("apiAdress")} />} />
        <Route
          path="/statistic"
          element={<StatisticPage mainURl={localStorage.getItem("apiAdress")} />}
        />
      </Routes>
    </>
  );
}

export default App;
