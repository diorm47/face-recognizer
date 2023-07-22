import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../login-page/login-page.css";
import "./profile-page.css";

function ProfilePage() {
  const [isSideBarVisible, setSidebarVisible] = useState(false);
  const [camera, setCamera] = useState("");
  const [cameras, setCameras] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
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

  return (
    <>
      {isSideBarVisible ? (
        <div className="dark_bg_overlay" onClick={!setSidebarVisible}></div>
      ) : (
        ""
      )}
      <div className="right_sidebar profile_sidebar">
        <div
          className={
            isSideBarVisible
              ? "sidebar_content "
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

      <div className="profile_page">
        <div className="profile_wrapper">
          <div className="main_content">
            <div className="camera-container">
              <div className="camera-main-left">
                <div>
                  <div className="cameras_menu">
                    {cameras &&
                      cameras.map((camera) => (
                        <div
                          key={camera.name}
                          className="camera_list_item"
                          onClick={() => setCamera(camera.address)}
                        >
                          <div className="big_wrapper">
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
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="center_camera_wrapper">
                <div className="big_wrapper for_camvideo">
                  <div className="wrapper">
                    <div className="label-container__top">
                      <label htmlFor="" className="label-inner">
                        Nigoh Camera
                      </label>
                    </div>
                    <div className="cyber_block">
                      <div className="cyber_block_inner">
                        <img src={camera} alt="video_feed" />
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

              <div className="camera-main-right">
                <div className="big_wrapper">
                  <div className="wrapper">
                    <div className="label-container__top">
                      <label htmlFor="" className="label-inner">
                        G'ulomjonov J.
                      </label>
                    </div>
                    <div className="cyber_block">
                      <div className="cyber_block_inner">
                        <div className="person-detected">
                          <img src="https://i.pravatar.cc/300?img=3" alt="" />
                          <div className="person-datas">
                            <h2>G'ulomjonov Javohir</h2>
                            <p>
                              <b>Xodim ID</b> : 010203
                            </p>
                            <p>
                              <b>Unvon</b> : Kapitan
                            </p>
                            <p>
                              <b>Lavozim</b> : Patrul boshlig'i
                            </p>
                            <p>
                              <b>Kayfiyat</b> : 78% neytral
                            </p>
                          </div>
                        </div>
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
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
