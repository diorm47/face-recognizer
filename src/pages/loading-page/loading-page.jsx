import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loading-page.css";
import axios from "axios";

function LoadinPage({ mainURl }) {
  const [loadingIncrement, incrementLoadinf] = useState([0]);
  const [cameras, setCameras] = useState([]);
  const [ipUser, setIpUser] = useState("");
  const [ipUserAdress, setIpUserAdress] = useState("");
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
      url: `${mainURl}ip/list/`,
      method: "GET",
      headers: headersList,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        setCameras(response.data);
        localStorage.setItem("camera", response.data[0].address);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  }, []);

  useEffect(() => {
    let reqOptions = {
      url: "https://ipwho.is/",
      method: "GET",
      headers: headersList,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        setIpUser(response.data);
        setIpUserAdress(response.data.ip);
        localStorage.setItem("ip", response.data.ip);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  }, []);

  console.log(ipUser);
  var today = new Date();

  var thisTime = today.toLocaleString();

  const data = [
    {
      AboutDevTypeText: `</span><br/><span>> AUTHORIZED SUCCESSFULY! </span><br/> <span>> ${thisTime}<br/>> CONNECTION ${localStorage.getItem(
        "ip"
      )}  </span><br/><span>> LOCATION 41.0058° N, 71.6436° E </span><br/>
      <span>> CAM CONNECTION ${localStorage.getItem("camera") || "CONNECTED"}</span>`,
    },
  ];
  useEffect(() => {
    const allElements = document.getElementsByClassName("typeing");
    for (let j = 0; j < allElements.length; j++) {
      const currentElementId = allElements[j].id;
      const currentElementIdContent = data[0][currentElementId];
      const element = document.getElementById(currentElementId);
      const devTypeText = currentElementIdContent;
      let i = 0;
      let isTag;
      let text;

      const type = () => {
        text = devTypeText.slice(0, ++i);
        if (text === devTypeText) return;
        element.innerHTML = text + `<span className='blinker'>&#32;</span>`;
        const char = text.slice(-1);
        if (char === "<") isTag = true;
        if (char === ">") isTag = false;
        if (isTag) return type();
        setTimeout(type, 20);
      };

      type();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      incrementLoadinf((prevElements) => {
        if (prevElements.length < 12) {
          return [...prevElements, prevElements.length + 1];
        }
        if (prevElements.length === 12) {
          navigate("/profile");
        }
        return prevElements;
      });
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, [navigate]);
  return (
    <div className="loading_page_wrapper">
      <div className="loading_animation_progress">
        <div className="box">
          <div className="cursor"></div>
          <div className="circle">
            <div className="circle2">
              <div className="circle3">
                <div className="circle4">
                  <div className="circle5">
                    <div className="circle6">
                      <div className="circle7">
                        <div className="circle8"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="editor-field editor-field__textbox">
          <div className="editor-field__label-container"></div>

          <div className="editor-field__container loading_step_bar">
            <div className="big_wrapper">
              <div className="wrapper">
                <div className="doodle_loader">
                  {loadingIncrement.map((inc) => (
                    <span key={inc} className="loader_square"></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="terminal_wrapper">
          <span id="AboutDevTypeText" className="typeing"></span>
          <span className="blinker">&#32;</span>
        </div>
      </div>
    </div>
  );
}

export default LoadinPage;
