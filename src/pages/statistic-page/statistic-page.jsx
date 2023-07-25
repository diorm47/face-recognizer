import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Sidebar from "../../components/sidebar/sidebar";
import "./statistic-page.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StatisticPage({ mainURl }) {
  const [series, setSeries] = useState([12, 5, 10, 3, 40, 20, 10]);
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
  };

  const allStat = () => {
    setSeries([12, 5, 10, 3, 40, 20, 10]);
  };
  const weekStat = () => {
    setSeries([16, 1, 16, 9, 20, 40, 18]);
  };
  const monthStat = () => {
    setSeries([7, 12, 10, 10, 35, 26, 8]);
  };
  const yearStat = () => {
    setSeries([12, 5, 10, 3, 40, 20, 10]);
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
                <button onClick={allStat}>Umumiy</button>
                <button onClick={weekStat}>Hafta</button>
                <button onClick={monthStat}>Oy</button>
                <button onClick={yearStat}>Yil</button>
              </div>
              <div id="chart">
                <div className="chart_legends">
                  <div className="item_self">
                    <div></div>
                    <p>
                      Jaxldorlik - <span>{series[1]}%</span>
                    </p>
                  </div>
                  <div className="item_self">
                    <div></div>
                    <p>
                      Bexuzur - <span>{series[2]}%</span>
                    </p>
                  </div>
                  <div className="item_self">
                    <div></div>
                    <p>
                      Xayajon - <span>{series[3]}%</span>
                    </p>
                  </div>
                  <div className="item_self">
                    <div></div>
                    <p>
                      Hursandlik - <span>{series[4]}%</span>
                    </p>
                  </div>
                  <div className="item_self">
                    <div></div>
                    <p>
                      G'amgin - <span>{series[5]}%</span>
                    </p>
                  </div>
                  <div className="item_self">
                    <div></div>
                    <p>
                      Hayron - <span>{series[6]}%</span>
                    </p>
                  </div>
                  <div className="item_self">
                    <div></div>
                    <p>
                      Neytral - <span>{series[0]}%</span>
                    </p>
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
