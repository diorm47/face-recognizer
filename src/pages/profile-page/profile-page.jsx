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

  useEffect(() => {
    bufferDataRef.current = bufferData;
  }, [bufferData]);

  const token = sessionStorage.getItem("token");
  let headersList = {
    Accept: "*/*",
    Authorization: `Token ${token}`,
  };

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

  const navigate = useNavigate();
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
        const filteredData = response.data.filter(
          (item) => item.camera_url === camera
        );
        setBufferData((prevData) => [...prevData, ...filteredData]);
        setDetectedUserData((prevArray) => [...prevArray, filteredData[0]]);
        getDetectedUserLocal();
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
          const filteredData = response.data.filter(
            (item) => item.camera_url === camera.address
          );
          console.log(response.data[0].camera_url);
          setBufferData((prevData) => [...prevData, ...filteredData]);
          setDetectedUserData((prevArray) => [...prevArray, ...filteredData]);
          if (response.data[0]) {
            getDetectedUserLocal();
          }

          console.log("filteredData", filteredData);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    };
    getDetectedUser();
  }, []);
  console.log(camera.address);

  const getDetectedEmotion = async () => {
    let reqOptions = {
      url: `${mainURl}stats/emotion`,
      method: "GET",
      headers: headersList,
    };
    axios
      .request(reqOptions)
      .then((response) => {
        const filteredData = response.data.filter(
          (item) => item.camera_url === camera.address
        );
        setDetectedEmotion((prevArray) => [...prevArray, filteredData[0]]);
        getDetectedEmotion();
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
          const filteredData = response.data.filter(
            (item) => item.camera_url === camera.address
          );
          setDetectedEmotion((prevArray) => [...prevArray, filteredData[0]]);
          getDetectedEmotion();
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    };
    getEmotion();
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setDetectedUserData((prevData) => {
  //       if (prevData.length > 0) {
  //         return prevData.slice(1);
  //       }
  //       return prevData;
  //     });
  //   }, 15000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

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
                          onClick={() => setCamera(camera)}
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
                        {camera.name || "Nigoh Camera"}
                      </label>
                    </div>
                    <div className="cyber_block">
                      <div className="cyber_block_inner">
                        <img src={camera.address} alt="video oqim" />
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
                  detectedUserData.map((data, index) => (
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
                                <p className="emotions_list">
                                  <b>Kayfiyat:</b>
                                  {detectedEmotion &&
                                  detectedEmotion[index] &&
                                  detectedEmotion[index].emotion &&
                                  detectedEmotion[index].emotion.neytral ? (
                                    <p>
                                      Neytral -{" "}
                                      {detectedEmotion &&
                                        detectedEmotion[index] &&
                                        detectedEmotion[index].emotion &&
                                        detectedEmotion[index].emotion
                                          .neytral}{" "}
                                      %
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                  {detectedEmotion &&
                                  detectedEmotion[index] &&
                                  detectedEmotion[index].emotion &&
                                  detectedEmotion[index].emotion.jahldorlik ? (
                                    <p>
                                      Jahldorlik -
                                      {detectedEmotion &&
                                        detectedEmotion[index] &&
                                        detectedEmotion[index].emotion &&
                                        detectedEmotion[index].emotion
                                          .jahldorlik}{" "}
                                      %
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                  {detectedEmotion &&
                                  detectedEmotion[index] &&
                                  detectedEmotion[index].emotion &&
                                  detectedEmotion[index].emotion
                                    .xursandchilik ? (
                                    <p>
                                      Xursandchilik -
                                      {detectedEmotion &&
                                        detectedEmotion[index] &&
                                        detectedEmotion[index].emotion &&
                                        detectedEmotion[index].emotion
                                          .xursandchilik}{" "}
                                      %
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                  {detectedEmotion &&
                                  detectedEmotion[index] &&
                                  detectedEmotion[index].emotion &&
                                  detectedEmotion[index].emotion.havotir ? (
                                    <p>
                                      Havotir -
                                      {detectedEmotion &&
                                        detectedEmotion[index] &&
                                        detectedEmotion[index].emotion &&
                                        detectedEmotion[index].emotion
                                          .havotir}{" "}
                                      %
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                  {detectedEmotion &&
                                  detectedEmotion[index] &&
                                  detectedEmotion[index].emotion &&
                                  detectedEmotion[index].emotion.behuzur ? (
                                    <p>
                                      Behuzur -
                                      {detectedEmotion &&
                                        detectedEmotion[index] &&
                                        detectedEmotion[index].emotion &&
                                        detectedEmotion[index].emotion
                                          .behuzur}{" "}
                                      %
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                  {detectedEmotion &&
                                  detectedEmotion[index] &&
                                  detectedEmotion[index].emotion &&
                                  detectedEmotion[index].emotion.gamgin ? (
                                    <p>
                                      G'amgin -
                                      {detectedEmotion &&
                                        detectedEmotion[index] &&
                                        detectedEmotion[index].emotion &&
                                        detectedEmotion[index].emotion
                                          .gamgin}{" "}
                                      %
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                  {detectedEmotion &&
                                  detectedEmotion[index] &&
                                  detectedEmotion[index].emotion &&
                                  detectedEmotion[index].emotion.xayron ? (
                                    <p>
                                      Xayron -
                                      {detectedEmotion &&
                                        detectedEmotion[index] &&
                                        detectedEmotion[index].emotion &&
                                        detectedEmotion[index].emotion
                                          .xayron}{" "}
                                      %
                                    </p>
                                  ) : (
                                    ""
                                  )}
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
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
