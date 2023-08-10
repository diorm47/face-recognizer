import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import "../login-page/login-page.css";
import "./profile-page.css";


function ProfilePage({ mainURl }) {
  const [isSideBarVisible, setSidebarVisible] = useState(false);
  const [camera, setCamera] = useState([]);

  const [cameras, setCameras] = useState([]);
  const [detectedUserData, setDetectedUserData] = useState([]);
  const [detectedEmotion, setDetectedEmotion] = useState([]);
  const [activeItem, setActiveItem] = useState();
  const [bufferData, setBufferData] = useState([]);
  const bufferDataRef = useRef(bufferData);
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    bufferDataRef.current = bufferData;
  }, [bufferData]);

  let headersList = {
    Accept: "*/*",
    Authorization: `Token ${token}`,
  };
  useEffect(() => {
    sessionStorage.setItem("active_camera_url", camera ? camera.address : "");
  }, [camera]);

  useEffect(() => {
    let reqOptions = {
      url: `${mainURl}ip/list/`,
      method: "GET",
      headers: headersList,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        setCameras(response.data);
        setCamera(response.data[0]);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);
  const getDetectedUserLocal = async () => {
    let reqOptions = {
      url: `${mainURl}stats/local`,
      method: "GET",
      headers: headersList,
    };
    axios
      .request(reqOptions)
      .then((response) => {
        if (
          response.data[0].camera_url ===
          sessionStorage.getItem("active_camera_url")
        ) {
          setBufferData((prevData) => [...prevData, ...response.data]);
          setDetectedUserData((prevData) => ({
            ...prevData,
            [response.data[0].user_id]: response.data[0] || [],
          }));
        }

        if (response.data[0]) {
          getDetectedUserLocal();
        }
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  };

  useEffect(() => {
    const getDetectedUser = async () => {
      let reqOptions = {
        url: `${mainURl}stats/exists`,
        method: "GET",
        headers: headersList,
      };
      axios
        .request(reqOptions)
        .then((response) => {
          if (
            response.data[0].camera_url ===
            sessionStorage.getItem("active_camera_url")
          ) {
            setBufferData((prevData) => [...prevData, ...response.data]);
            setDetectedUserData((prevData) => ({
              ...prevData,
              [response.data[0].user_id]: response.data[0] || [],
            }));
          }

          if (response.data[0]) {
            getDetectedUserLocal();
          }
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    };
    getDetectedUser();
  }, []);

  const getDetectedEmotion = async () => {
    let reqOptions = {
      url: `${mainURl}stats/emotion`,
      method: "GET",
      headers: headersList,
    };
    axios
      .request(reqOptions)
      .then((response) => {
        if (
          response.data[0].camera_url ===
          sessionStorage.getItem("active_camera_url")
        ) {
          setDetectedEmotion((prevData) => ({
            ...prevData,
            [response.data[0].user_id]: response.data[0] || [],
          }));
        }

        if (response.data[0]) {
          getDetectedEmotion();
        }
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  };
  useEffect(() => {
    const getEmotion = async () => {
      let reqOptions = {
        url: `${mainURl}stats/stream`,
        method: "GET",
        headers: headersList,
      };
      axios
        .request(reqOptions)
        .then((response) => {
          if (
            response.data[0].camera_url ===
            sessionStorage.getItem("active_camera_url")
          ) {
            setDetectedEmotion((prevData) => ({
              ...prevData,
              [response.data[0].user_id]: response.data[0] || [],
            }));
          }

          getDetectedEmotion();
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    };
    getEmotion();
  }, []);

  const setActiveCamera = (item) => {
    setCamera(item);

    if (item.address !== sessionStorage.getItem("active_camera_url")) {
      setDetectedUserData([]);
      setDetectedEmotion([]);
    }
    sessionStorage.setItem("active_camera_url", item.address);
  };

  useEffect(() => {
    const timers = Object.keys(detectedUserData).map((userId) =>
      setTimeout(() => {
        setDetectedUserData((prevData) => {
          delete prevData[userId];
          return { ...prevData };
        });
      }, 15000)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [detectedUserData]);

  useEffect(() => {
    const timers = Object.keys(detectedEmotion).map((userId) =>
      setTimeout(() => {
        setDetectedEmotion((prevData) => {
          delete prevData[userId];
          return { ...prevData };
        });
      }, 15000)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [detectedEmotion]);

  console.log(camera);
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
                          onClick={() => setActiveCamera(camera)}
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
                                  <p className="fz_14px"> {camera.address}</p>
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
                        {camera ? camera.name : "Nigoh Camera"}
                      </label>
                    </div>
                    <div className="cyber_block">
                      <div className="cyber_block_inner">
                        {/* <FaceDetector camera={camera} /> */}
                        <img
                          src={
                            mainURl + "/ip/stream/?camera=" +
                            camera.address
                          }
                          alt={camera.name}
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
              </div>

              <div className="camera-main-right">
                {detectedUserData &&
                  detectedEmotion &&
                  Object.keys(detectedUserData).map((userId, index) => {
                    const data = detectedUserData[userId];
                    const emotion = detectedEmotion[userId]?.emotion;

                    return (
                      <div
                        className={
                          activeItem === index
                            ? "big_wrapper profile_right_user_card z_index_top"
                            : "big_wrapper profile_right_user_card"
                        }
                        key={index}
                        onClick={() => setActiveItem(index)}
                      >
                        <div className="wrapper">
                          <div className="label-container__top">
                            <label htmlFor="" className="label-inner">
                              {data.last_name} {data.first_name[0]}.
                            </label>
                          </div>
                          <div className="cyber_block">
                            <div className="cyber_block_inner">
                              <div className="person-detected">
                                <img src={data.image} alt="detected_image" />
                                <div className="person-datas">
                                  <h2>
                                    {data.last_name} {data.first_name}
                                  </h2>
                                  <p>
                                    <b>ID:</b> {data.user_id}
                                  </p>
                                  <p>
                                    <b>Unvon:</b> {data.rank}
                                  </p>
                                  <p>
                                    <b>Lavozim:</b> {data.position}
                                  </p>
                                  <div className="emotions_list">
                                    <b>Kayfiyat:</b>
                                    {emotion?.neytral ? (
                                      <p>Neytral - {emotion.neytral} %</p>
                                    ) : null}
                                    {emotion?.jahldorlik ? (
                                      <p>Jahldorlik - {emotion.jahldorlik} %</p>
                                    ) : null}
                                    {emotion?.xursanchilik ? (
                                      <p>
                                        Xursandchilik - {emotion.xursanchilik} %
                                      </p>
                                    ) : null}
                                    {emotion?.xavotir ? (
                                      <p>Xavotir - {emotion.xavotir} %</p>
                                    ) : null}
                                    {emotion?.behuzur ? (
                                      <p>Behuzur - {emotion.behuzur} %</p>
                                    ) : null}
                                    {emotion?.gamgin ? (
                                      <p>G'amgin - {emotion.gamgin} %</p>
                                    ) : null}
                                    {emotion?.hayron ? (
                                      <p>Xayron - {emotion.hayron} %</p>
                                    ) : null}
                                  </div>
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
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;