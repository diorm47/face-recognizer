import React, { useEffect, useState } from "react";
import "./users.css";
import Snackbar from "../../components/snack-bar/snack-bar";
import axios from "axios";
import Sidebar from "../../components/sidebar/sidebar";

function Users({ mainURl }) {
  const [isFormVisible, setFormVisible] = useState(false);
  const [employeesList, setEmployeesList] = useState(false);
  const [isSideBarVisible, setSidebarVisible] = useState(false);
  const [hidedSnack, setHidedSnack] = useState(true);
  const [snackBarText, setSnackBarText] = useState("");
  const [employerID, setEmployerID] = useState("");
  const [employerRank, setEmployerRank] = useState("");

  const [employerPostion, setEmployerPostion] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerAvatar, setEmployerAvatar] = useState(null);

  const [employerLastName, setEmployerLastName] = useState("");
  const [employerMiddleName, setEmployerMiddleName] = useState("");

  const token = sessionStorage.getItem("token");

  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

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
  const refreshUsersPage = () => {
    let reqOptions = {
      url: `${mainURl}employees/list/`,
      method: "GET",
      headers: headersList,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        console.log(response);
        setEmployeesList(response.data);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  };
  const handleModalOverlay = () => {
    setFormVisible(false);
    setSidebarVisible(false);
  };
  const addEmployer = () => {
    let bodyContent = JSON.stringify({
      employee_id: employerID,
      first_name: employerName,
      rank: employerRank,
      position: employerPostion,
      main_image: employerAvatar,
      last_name: employerLastName,
      middle_name: employerMiddleName,
    });

    let reqOptions = {
      url: `${mainURl}employees/create/`,
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        setHidedSnack(false);
        setSnackBarText("Camera qo'shildi");
        refreshUsersPage();
        setTimeout(() => {
          setHidedSnack(true);
        }, 3000);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  };

  const saveImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setEmployerAvatar(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <Snackbar hidedSnack={hidedSnack} snackBarText={snackBarText} />
      {isFormVisible || isSideBarVisible ? (
        <div className="dark_bg_overlay" onClick={handleModalOverlay}></div>
      ) : (
        ""
      )}
      <Sidebar
        setSidebarVisible={setSidebarVisible}
        isSideBarVisible={isSideBarVisible}
      />
      <div className="users_page">
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
        <div className="users_list">
          <div className="users_col">
            {employeesList &&
              employeesList.map((employer) => (
                <div className="users_list_item" key={employer.employee_id}>
                  <div className="big_wrapper">
                    <div className="wrapper">
                      <div className="label-container__top">
                        <label htmlFor="" className="label-inner">
                          {employer.last_name} {employer.first_name[0]}.
                        </label>
                      </div>
                      <div className="cyber_block">
                        <div className="cyber_block_inner employer_card">
                          <div className="employer_left_img">
                            <img src={employer.main_image} alt="" />
                          </div>
                          <div className="right_employer_desc">
                            <div>
                              <p>ID:</p>
                              <p>{employer.employee_id}</p>
                            </div>
                            <div>
                              <p>Unvon:</p>
                              <p>{employer.rank}</p>
                            </div>
                            <div>
                              <p>Lavozim:</p>
                              <p>{employer.position}</p>
                            </div>
                            <div>
                              <p>Ism:</p>
                              <p>{employer.first_name}</p>
                            </div>
                            <div>
                              <p>Familiya:</p>
                              <p>{employer.last_name}</p>
                            </div>
                            <div>
                              <p>Otasini ismi:</p>
                              <p>{employer.middle_name}</p>
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
              ))}
          </div>
          <div className="users_col">
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
          <div className="users_col">
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
          <div className="users_col">
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
            <div className="users_list_item">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      User
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto impedit assumenda quo maiores excepturi sequi,
                      praesentium non asperiores dolores in, quas eius
                      voluptatum quisquam. Excepturi laboriosam aliquid sapiente
                      at recusandae.
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
      {!isFormVisible || (
        <div className="add_user_from">
          <div className="form_users">
            <div className="big_wrapper">
              <div className="wrapper">
                <div className="label-container__top">
                  <label htmlFor="" className="label-inner">
                    ID
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <input
                      type="text"
                      className="editor-field__input"
                      value={employerID}
                      onChange={(e) => setEmployerID(e.target.value)}
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
            <div className="big_wrapper">
              <div className="wrapper">
                <div className="label-container__top">
                  <label htmlFor="" className="label-inner">
                    Unvon
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <input
                      type="text"
                      className="editor-field__input"
                      value={employerRank}
                      onChange={(e) => setEmployerRank(e.target.value)}
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
            <div className="big_wrapper">
              <div className="wrapper">
                <div className="label-container__top">
                  <label htmlFor="" className="label-inner">
                    Lavozim
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <input
                      type="text"
                      className="editor-field__input"
                      value={employerPostion}
                      onChange={(e) => setEmployerPostion(e.target.value)}
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
            <div className="big_wrapper">
              <div className="wrapper">
                <div className="label-container__top">
                  <label htmlFor="" className="label-inner">
                    Ism
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <input
                      type="text"
                      className="editor-field__input"
                      value={employerName}
                      onChange={(e) => setEmployerName(e.target.value)}
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
            <div className="big_wrapper">
              <div className="wrapper">
                <div className="label-container__top">
                  <label htmlFor="" className="label-inner">
                    Familiya
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <input
                      type="text"
                      className="editor-field__input"
                      value={employerLastName}
                      onChange={(e) => setEmployerLastName(e.target.value)}
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
            <div className="big_wrapper">
              <div className="wrapper">
                <div className="label-container__top">
                  <label htmlFor="" className="label-inner">
                    Ota ismi
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <input
                      type="text"
                      className="editor-field__input"
                      value={employerMiddleName}
                      onChange={(e) => setEmployerMiddleName(e.target.value)}
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
            <div className="file_ipload_input">
              <div className="big_wrapper">
                <div className="wrapper">
                  <div className="label-container__top">
                    <label htmlFor="" className="label-inner">
                      Surati
                    </label>
                  </div>
                  <div className="cyber_block">
                    <div className="cyber_block_inner employer_img">
                      {employerAvatar && (
                        <img src={employerAvatar} alt="user avatar" />
                      )}
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
              <div className="right_employer_input">
                <label htmlFor="employer_avatar">
                  <div className="add_ser_btn save_employer">
                    <div className="btn btn--primary login_btn">
                      <div className="btn__container">Yuklash</div>
                      <div className="btn__bottom"></div>
                      <div className="btn__noise"></div>
                    </div>
                  </div>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="employer_avatar"
                  className="editor-field__input"
                  placeholder="Surat tanlang"
                  onChange={saveImage}
                />
                <div className="add_ser_btn save_employer">
                  <div
                    className="btn btn--primary login_btn"
                    onClick={addEmployer}
                  >
                    <div className="btn__container">Saqlash</div>
                    <div className="btn__bottom"></div>
                    <div className="btn__noise"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Users;
