import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Sidebar from "../../components/sidebar/sidebar";
import "./statistic-page.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StatisticPage({ mainURl }) {
  const [series, setSeries] = useState([25, 55, 13, 33, 22, 10, 50]);
  const [usersSeries, setUsersSeries] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSideBarVisible, setSidebarVisible] = useState(false);

  const handleModalOverlay = () => {
    setFormVisible(false);
    setSidebarVisible(false);
  };

  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

  useEffect(() => {
    let reqOptions = {
      url: `${mainURl}stats/list/`,
      method: "GET",
      headers: headersList,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        setUsersSeries(response.data.results);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  }, []);

  const options = {
    chart: {
      width: 500,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },

    // legend: {

    //   position: "left",
    //   offsetY: 100,
    //   height: 230,
    //   fontSize: 19,
    //   color: "white",
    // },
  };

  const randomize = () => {
    setSeries(series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1));
  };

  const reset = () => {
    setSeries([44, 55, 13, 33, 44, 55, 13]);
  };

  return (
    <>
      {isFormVisible || isSideBarVisible ? (
        <div className="dark_bg_overlay" onClick={handleModalOverlay}></div>
      ) : (
        ""
      )}
      <Sidebar
        setSidebarVisible={setSidebarVisible}
        isSideBarVisible={isSideBarVisible}
      />
      <div className="stats_page">
        <div className="stats_wrapper">
          <div className="left_stats_list">
            <div className="left_stats_list_items">
              {usersSeries &&
                usersSeries.map((employer) => (
                  <div key={employer.camera_id} className="stats_list_item">
                    <div className="big_wrapper">
                      <div className="wrapper">
                        <div className="label-container__top">
                          <label htmlFor="" className="label-inner">
                            {employer.user_id}
                          </label>
                        </div>
                        <div className="cyber_block">
                          <div className="cyber_block_inner">
                            {employer.camera_url}
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
                <div className="chart_legends">
                  <div className="item_self">
                    <div></div>
                    <p>Jaxldorlik</p>
                  </div>
                  <div className="item_self">
                    <div></div>
                    <p>Bexuzur</p>
                  </div>
                  <div className="item_self">
                    <div></div>
                    <p>Xayajon</p>
                  </div>
                  <div className="item_self">
                    <div></div>
                    <p>Hursandchilik</p>
                  </div>
                  <div className="item_self">
                    <div></div>
                    <p>G'amgin</p>
                  </div>
                  <div className="item_self">
                    <div></div>
                    <p>Hayron</p>
                  </div>
                  <div className="item_self">
                    <div></div>
                    <p>Neytral</p>
                  </div>
                </div>
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
