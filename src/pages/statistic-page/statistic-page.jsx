import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Sidebar from "../../components/sidebar/sidebar";
import "./statistic-page.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StatisticPage({ mainURl }) {
  const [series, setSeries] = useState([40, 5, 10, 3, 10, 20, 10]);
  const [usersSeries, setUsersSeries] = useState([]);
  const [serchingItem, setSerchingItem] = useState("");
  const [serchingUserId, setSerchingUserId] = useState("");
  const [employeesList, setEmployeesList] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSideBarVisible, setSidebarVisible] = useState(false);

  const [firstDate, setFirstDate] = useState("");

  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);
  useEffect(() => {
    let reqOptions = {
      url: `${mainURl}employees/list/`,
      method: "GET",
      headers: headersList,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        setEmployeesList(response.data);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  }, []);
  useEffect(() => {
    let reqOptions = {
      url: `${mainURl}stats/list/`,
      method: "GET",
      headers: headersList,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        setUsersSeries(response.data);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  }, []);
  useEffect(() => {
    setSeries([
      Math.round(usersSeries.neutral),
      Math.round(usersSeries.angry),
      Math.round(usersSeries.anxious),
      Math.round(usersSeries.disguised),
      Math.round(usersSeries.happy),
      Math.round(usersSeries.sad),
      Math.round(usersSeries.surprise),
    ]);
  }, [usersSeries]);

  const search = (employeesList) => {
    return employeesList
      .flat()
      .filter((employeesList) =>
        employeesList.last_name
          .toLowerCase()
          .startsWith(serchingItem.toLowerCase())
      );
  };
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
  };

  const allStat = () => {
    let reqOptions = {
      url: `${mainURl}stats/list/?user=${serchingUserId}`,
      method: "GET",
      headers: headersList,
    };
    let reqOptionsAll = {
      url: `${mainURl}stats/list/`,
      method: "GET",
      headers: headersList,
    };
    if (serchingUserId) {
      axios
        .request(reqOptions)
        .then((response) => {
          setUsersSeries(response.data);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    } else {
      axios
        .request(reqOptionsAll)
        .then((response) => {
          setUsersSeries(response.data);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    }
  };
  const dayStat = () => {
    let reqOptions = {
      url: `${mainURl}stats/list/?user=${serchingUserId}&duration=day`,
      method: "GET",
      headers: headersList,
    };
    let reqOptionsAll = {
      url: `${mainURl}stats/list/?duration=day`,
      method: "GET",
      headers: headersList,
    };
    if (serchingUserId) {
      axios
        .request(reqOptions)
        .then((response) => {
          setUsersSeries(response.data);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    } else {
      axios
        .request(reqOptionsAll)
        .then((response) => {
          setUsersSeries(response.data);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    }
  };
  const weekStat = () => {
    let reqOptions = {
      url: `${mainURl}stats/list/?user=${serchingUserId}&duration=week`,
      method: "GET",
      headers: headersList,
    };
    let reqOptionsAll = {
      url: `${mainURl}stats/list/?duration=week`,
      method: "GET",
      headers: headersList,
    };
    if (serchingUserId) {
      axios
        .request(reqOptions)
        .then((response) => {
          setUsersSeries(response.data);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    } else {
      axios
        .request(reqOptionsAll)
        .then((response) => {
          setUsersSeries(response.data);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    }
  };
  const monthStat = () => {
    let reqOptions = {
      url: `${mainURl}stats/list/?user=${serchingUserId}&duration=month`,
      method: "GET",
      headers: headersList,
    };
    let reqOptionsAll = {
      url: `${mainURl}stats/list/?duration=month`,
      method: "GET",
      headers: headersList,
    };
    if (serchingUserId) {
      axios
        .request(reqOptions)
        .then((response) => {
          setUsersSeries(response.data);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    } else {
      axios
        .request(reqOptionsAll)
        .then((response) => {
          setUsersSeries(response.data);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    }
  };
  const yearStat = () => {
    let reqOptions = {
      url: `${mainURl}stats/list/?user=${serchingUserId}&duration=year`,
      method: "GET",
      headers: headersList,
    };
    let reqOptionsAll = {
      url: `${mainURl}stats/list/?duration=year`,
      method: "GET",
      headers: headersList,
    };
    if (serchingUserId) {
      axios
        .request(reqOptions)
        .then((response) => {
          setUsersSeries(response.data);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    } else {
      axios
        .request(reqOptionsAll)
        .then((response) => {
          setUsersSeries(response.data);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    }
  };
  const handleDateChange = (event) => {
    let date = event.target.value;
    setFirstDate(date);
    const selectedDate = new Date(date);
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    let reqOptions = {
      url: `${mainURl}stats/interval/?user=${serchingUserId}&year=${year}&month=${month}&day=${day}`,
      method: "GET",
      headers: headersList,
    };
    let reqOptionsAll = {
      url: `${mainURl}stats/interval/?year=${year}&month=${month}&day=${day}`,
      method: "GET",
      headers: headersList,
    };
    if (serchingUserId) {
      axios
        .request(reqOptions)
        .then((response) => {
          setUsersSeries(response.data);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    } else {
      axios
        .request(reqOptionsAll)
        .then((response) => {
          setUsersSeries(response.data);
        })
        .catch((error) => {
          console.error("Ошибка", error);
        });
    }
  };

  const setIntervalValue = (event) => {
    const secondDate = event.target.value;

    const selectedDateTo = new Date(secondDate);
    const yearTo = selectedDateTo.getFullYear();
    const monthTo = selectedDateTo.getMonth() + 1;
    const dayTo = selectedDateTo.getDate();

    const selectedDateFrom = new Date(firstDate);
    const yearFrom = selectedDateFrom.getFullYear();
    const monthFrom = selectedDateFrom.getMonth() + 1;
    const dayFrom = selectedDateFrom.getDate();

    let reqOptions = {
      url: `${mainURl}stats/period/?user=${serchingUserId}&year_one=${yearFrom}&year_two=${yearTo}&month_one=${monthFrom}&month_two=${monthTo}&day_one=${dayFrom}&day_two=${dayTo}`,
      method: "GET",
      headers: headersList,
    };
    let reqOptionsAll = {
      url: `${mainURl}stats/period/?year_one=${yearFrom}&year_two=${yearTo}&month_one=${monthFrom}&month_two=${monthTo}&day_one=${dayFrom}&day_two=${dayTo}`,
      method: "GET",
      headers: headersList,
    };
    if (firstDate) {
      if (serchingUserId) {
        axios
          .request(reqOptions)
          .then((response) => {
            setUsersSeries(response.data);
          })
          .catch((error) => {
            console.error("Ошибка", error);
          });
      } else {
        axios
          .request(reqOptionsAll)
          .then((response) => {
            setUsersSeries(response.data);
          })
          .catch((error) => {
            console.error("Ошибка", error);
          });
      }
    }
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
              <div className="search_input w_400p">
                <div className="big_wrapper">
                  <div className="wrapper">
                    <div className="label-container__top">
                      <label htmlFor="" className="label-inner">
                        Qidirish
                      </label>
                    </div>
                    <div className="cyber_block">
                      <div className="cyber_block_inner">
                        <input
                          type="text"
                          onChange={(e) => setSerchingItem(e.target.value)}
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
              {employeesList &&
                search(employeesList)
                  .slice(0, 10)
                  .map((employer) => (
                    <div
                      key={employer.employee_id}
                      className={
                        serchingUserId === employer.employee_id
                          ? "stats_list_item stats_list_item_active"
                          : "stats_list_item"
                      }
                      onClick={() => setSerchingUserId(employer.employee_id)}
                    >
                      <div className="big_wrapper">
                        <div className="wrapper">
                          <div className="label-container__top">
                            <label htmlFor="" className="label-inner">
                              {employer.employee_id}
                            </label>
                          </div>
                          <div className="cyber_block">
                            <div className="cyber_block_inner">
                              <p>
                                {" "}
                                {employer.last_name} {employer.first_name[0]}.
                              </p>
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
                <div className="from_to_date">
                  <input
                    type="date"
                    className="date_calendar"
                    onChange={handleDateChange}
                  />
                  <input
                    type="date"
                    className="date_calendar"
                    onChange={setIntervalValue}
                    disabled={!firstDate}
                  />
                </div>

                <button onClick={allStat}>Umumiy</button>
                <button onClick={dayStat}>Kun</button>

                <button onClick={weekStat}>Hafta</button>
                <button onClick={monthStat}>Oy</button>
                <button onClick={yearStat}>Yil</button>
              </div>
              <div id="chart">
                {usersSeries.angry ? (
                  <>
                    <div className="chart_legends">
                      <div className="item_self">
                        <div></div>
                        <p>
                          Jaxldorlik - <span>{series[1] || 0}%</span>
                        </p>
                      </div>
                      <div className="item_self">
                        <div></div>
                        <p>
                          Bexuzur - <span>{series[2] || 0}%</span>
                        </p>
                      </div>
                      <div className="item_self">
                        <div></div>
                        <p>
                          Xayajon - <span>{series[3] || 0}%</span>
                        </p>
                      </div>
                      <div className="item_self">
                        <div></div>
                        <p>
                          Hursandlik - <span>{series[4] || 0}%</span>
                        </p>
                      </div>
                      <div className="item_self">
                        <div></div>
                        <p>
                          G'amgin - <span>{series[5] || 0}%</span>
                        </p>
                      </div>
                      <div className="item_self">
                        <div></div>
                        <p>
                          Hayron - <span>{series[6] || 0}%</span>
                        </p>
                      </div>
                      <div className="item_self">
                        <div></div>
                        <p>
                          Neytral - <span>{series[0] || 0}%</span>
                        </p>
                      </div>
                    </div>
                    <ReactApexChart
                      options={options}
                      series={series}
                      type="donut"
                      width={500}
                    />
                  </>
                ) : (
                  <div>
                    <p>Ma'lumot yo'q</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatisticPage;
