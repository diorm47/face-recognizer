import React, { useState } from "react";
import "./users.css";
import { NavLink } from "react-router-dom";

function Users() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSideBarVisible, setSidebarVisible] = useState(false);

  const handleModalOverlay = () => {
    setFormVisible(false);
    setSidebarVisible(false);
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
            <div className="big_wrapper ">
              <div className="wrapper">
                <div className="label-container__top">
                  <label htmlFor="" className="label-inner">
                    ID
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <input type="text" className="editor-field__input" />
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
                    Unvon
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <input type="text" className="editor-field__input" />
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
                    I.F.SH
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <input type="text" className="editor-field__input" />
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
                    Lavozim
                  </label>
                </div>
                <div className="cyber_block">
                  <div className="cyber_block_inner">
                    <input type="text" className="editor-field__input" />
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
      )}
    </>
  );
}

export default Users;
