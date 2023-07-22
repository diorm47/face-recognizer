import React, { useEffect } from "react";
import "./camera-page.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Snackbar from "../../components/snack-bar/snack-bar";

function CameraPage() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [activeCamera, setActiveCamera] = useState(false);
  const [cameraID, setCameraID] = useState();
  const [cameraIP, setCameraIP] = useState();
  const [cameras, setCameras] = useState([]);
  const [isSideBarVisible, setSidebarVisible] = useState(false);
  const [activeActions, setActiveActions] = useState();
  const [hidedSnack, setHidedSnack] = useState(true);
  const [snackBarText, setSnackBarText] = useState("");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    let headersList = {
      Accept: "*/*",
      Authorization: `Token ${token}`,
    };

    let reqOptions = {
      url: "http://192.168.110.235:12345/ip/list/",
      method: "GET",
      headers: headersList,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        setCameras(response.data);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  }, []);
  const refreshCameraPage = () => {
    let headersList = {
      Accept: "*/*",
      Authorization: `Token ${token}`,
    };

    let reqOptions = {
      url: "http://192.168.110.235:12345/ip/list/",
      method: "GET",
      headers: headersList,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        setCameras(response.data);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  };

  const handleModalOverlay = () => {
    setFormVisible(false);
    setSidebarVisible(false);
  };
  const saveCamera = () => {
    setFormVisible(false);

    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };

    let bodyContent = JSON.stringify({
      name: cameraID,
      address: cameraIP,
    });

    let reqOptions = {
      url: "http://192.168.110.235:12345/ip/create/",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        setHidedSnack(false);
        setSnackBarText("Camera qo'shildi");
        refreshCameraPage();
        setTimeout(() => {
          setHidedSnack(true);
        }, 3000);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  };
  const deleteCamera = (name) => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };

    let reqOptions = {
      url: `http://192.168.110.235:12345/ip/${name}/delete`,
      method: "DELETE",
      headers: headersList,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        setHidedSnack(false);
        setSnackBarText("Camera o'chirildi");
        refreshCameraPage();
        setTimeout(() => {
          setHidedSnack(true);
        }, 3000);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  };
  const updateCamera = (camera) => {
    
  };
  return (
    <>
      <Snackbar hidedSnack={hidedSnack} snackBarText={snackBarText} />
      {isFormVisible || isSideBarVisible ? (
        <div className="dark_bg_overlay" onClick={handleModalOverlay}></div>
      ) : (
        ""
      )}
      <div className="right_sidebar users_page_sidebar">
        <div
          className={
            isSideBarVisible
              ? "sidebar_content"
              : "sidebar_content hided_sidebar"
          }
        >
          <div className="editor-field editor-field__textbox sidebar_wrapper">
            <div className="editor-field__label-container">
              <label
                onMouseEnter={() => setSidebarVisible(!isSideBarVisible)}
                className="editor-field__label sidebar_opener"
              >
                menu
              </label>
            </div>

            <div className="editor-field__container">
              <div className="sidebar_content_items">
                <NavLink to="/profile">
                  <div className="sidebar_content_link">
                    <p>Bosh sahifa</p>
                  </div>
                </NavLink>
                <NavLink to="/statistic">
                  <div className="sidebar_content_link">
                    <p>Statistika</p>
                  </div>
                </NavLink>
                <NavLink to="/users">
                  <div className="sidebar_content_link">
                    <p>Odamlar</p>
                  </div>
                </NavLink>
                <NavLink to="/camera">
                  <div className="sidebar_content_link">
                    <p>Camera</p>
                  </div>
                </NavLink>
              </div>
            </div>
            <span className="editor-field__bottom"></span>
            <div className="editor-field__noise"></div>
          </div>
        </div>
      </div>
      <div className="camera_page">
        <div className="camera_wrapper">
          <div className="camera_list_wrapper">
            <div className="camera_list">
              {cameras &&
                cameras.map((camera) => (
                  <div
                    key={camera.name}
                    className="camera_list_item"
                    onClick={() => setActiveCamera(camera.address)}
                  >
                    <div
                      className="big_wrapper"
                      onMouseEnter={() => setActiveActions(camera.name)}
                      onMouseLeave={() => setActiveActions(0)}
                    >
                      <div className="wrapper">
                        <div className="label-container__top">
                          <label htmlFor="" className="label-inner">
                            ID: {camera.name}
                          </label>
                        </div>
                        <div className="cyber_block">
                          <div className="cyber_block_inner">
                            {camera.address}
                          </div>
                        </div>

                        <div className="label-container__bottom">
                          <label htmlFor="" className="label-inner">
                            {" "}
                            - - -{" "}
                          </label>
                        </div>
                        <div
                          className={
                            activeActions === camera.name
                              ? "camera_item_actions"
                              : "camera_item_actions camera_item_actions_hided"
                          }
                        >
                          <button onClick={() => updateCamera(camera)}>
                            tahrirlash
                          </button>
                          <button onClick={() => deleteCamera(camera.name)}>
                            o'chirish
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="add_camera_btn">
              <div className="add_ser_btn">
                <div
                  className="btn btn--primary login_btn"
                  onClick={() => setFormVisible(true)}
                >
                  <div className="btn__container">Qo'shish</div>
                  <div className="btn__bottom"></div>
                  <div className="btn__noise"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="camera_item_view">
            <div className="big_wrapper">
              <div className="wrapper">
                <div className="label-container__top">
                  <label htmlFor="" className="label-inner">
                    ID: #########
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <img src={activeCamera} alt="video_feed" />
                  </div>
                </div>

                <div className="label-container__bottom">
                  <label htmlFor="" className="label-inner">
                    {" "}
                    - - -{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isFormVisible || (
        <div className="add_user_from">
          <div className="form_users">
            <div className="big_wrapper ">
              <div className="wrapper">
                <div className="label-container__top">
                  <label htmlFor="" className="label-inner">
                    Camera Id
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <input
                      type="text"
                      value={cameraID}
                      onChange={(e) => setCameraID(e.target.value)}
                      className="editor-field__input"
                    />
                  </div>
                </div>

                <div className="label-container__bottom">
                  <label htmlFor="" className="label-inner">
                    {" "}
                    - - -{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="big_wrapper ">
              <div className="wrapper">
                <div className="label-container__top">
                  <label htmlFor="" className="label-inner">
                    IP manzil
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <input
                      type="text"
                      className="editor-field__input"
                      value={cameraIP}
                      onChange={(e) => setCameraIP(e.target.value)}
                    />
                  </div>
                </div>

                <div className="label-container__bottom">
                  <label htmlFor="" className="label-inner">
                    {" "}
                    - - -{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="add_camera_btn">
              <div className="add_ser_btn">
                <div
                  className="btn btn--primary login_btn"
                  onClick={saveCamera}
                >
                  <div className="btn__container">Saqlash</div>
                  <div className="btn__bottom"></div>
                  <div className="btn__noise"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CameraPage;
