import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "../login-page/login-page.css";
import "./profile-page.css";
import { useNavigate } from "react-router-dom";

function ProfilePage({ mainURl }) {
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
      url: `${mainURl}ip/list/`,
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
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);
  return (
    <>
      {isSideBarVisible ? (
        <div
          className="dark_bg_overlay"
          onClick={() => setSidebarVisible(false)}
        ></div>
      ) : (
        ""
      )}
      <Sidebar
        setSidebarVisible={setSidebarVisible}
        isSideBarVisible={isSideBarVisible}
      />

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
                        <img src={camera} alt="video oqim" />
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
                <div className="big_wrapper profile_right_user_card">
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
                              <b>ID:</b> 010203
                            </p>
                            <p>
                              <b>Unvon:</b> Kapitan
                            </p>
                            <p>
                              <b>Lavozim:</b> Patrul boshlig'i
                            </p>
                            <p>
                              <b>Kayfiyat:</b> 78% neytral
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
