import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./statistic-page.css";
import ReactApexChart from "react-apexcharts";

function StatisticPage() {
  const [series, setSeries] = useState([44, 55, 13, 33]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSideBarVisible, setSidebarVisible] = useState(false);
  const [employers, setEmployers] = useState([
    {
      camera_id: "CAM001",
      ip_adress: "https://192.168.255.88",
    },
    {
      camera_id: "CAM002",
      ip_adress: "https://192.168.255.88",
    },
    {
      camera_id: "CAM003",
      ip_adress: "https://192.168.255.88",
    },
    {
      camera_id: "CAM004",
      ip_adress: "https://192.168.255.88",
    },
    {
      camera_id: "CAM005",
      ip_adress: "https://192.168.255.88",
    },
    {
      camera_id: "CAM006",
      ip_adress: "https://192.168.255.88",
    },
    {
      camera_id: "CAM007",
      ip_adress: "https://192.168.255.88",
    },
  ]);
  const handleModalOverlay = () => {
    setFormVisible(false);
    setSidebarVisible(false);
  };

  const options = {
    chart: {
      width: 500,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },

    legend: {
      position: "left",
      offsetY: 100,
      height: 230,
      fontSize: 19,
      color: "white",
    },
  };

  const randomize = () => {
    setSeries(series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1));
  };

  const reset = () => {
    setSeries([44, 55, 13, 33]);
  };

  return (
    <>
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
      <div className="stats_page">
        <div className="stats_wrapper">
          <div className="left_stats_list">
            <div className="left_stats_list_items">
              {employers &&
                employers.map((employer) => (
                  <div key={employer.camera_id} className="stats_list_item">
                    <div className="big_wrapper">
                      <div className="wrapper">
                        <div className="label-container__top">
                          <label htmlFor="" className="label-inner">
                            ID: {employer.camera_id}
                          </label>
                        </div>
                        <div className="cyber_block">
                          <div className="cyber_block_inner">
                            {employer.ip_adress}
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
          <div className="right_chart">
            <div className="chart-wrap">
              <div className="right_chart_actions">
                <button onClick={randomize}>RANDOMIZE</button>&nbsp;
                <button onClick={reset}>RESET</button>
              </div>
              <div id="chart">
                <ReactApexChart
                  options={options}
                  series={series}
                  type="donut"
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatisticPage;
