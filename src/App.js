import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoadinPage from "./pages/loading-page/loading-page";
import LoginPage from "./pages/login-page/login-page";
import ProfilePage from "./pages/profile-page/profile-page";
import Users from "./pages/users-page/users";
import CameraPage from "./pages/camera-page/camera-page";
import StatisticPage from "./pages/statistic-page/statistic-page";
import FaceDetection from "./pages/stream";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const mainURl = `http://192.168.110.235:12345/`;
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
        <Route path="/" exact element={<LoginPage mainURl={mainURl} />} />
        <Route path="/loading" exact element={<LoadinPage />} />
        <Route path="/login" element={<LoginPage mainURl={mainURl} />} />
        <Route path="/profile" element={<ProfilePage mainURl={mainURl} />} />
        <Route path="/users" element={<Users mainURl={mainURl} />} />
        <Route path="/camera" element={<CameraPage mainURl={mainURl} />} />
        <Route path="/cass" element={<FaceDetection mainURl={mainURl} />} />
        <Route
          path="/statistic"
          element={<StatisticPage mainURl={mainURl} />}
        />
      </Routes>
    </>
  );
}

export default App;
