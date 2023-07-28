import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loading-page.css";

function LoadinPage() {
  const [loadingIncrement, incrementLoadinf] = useState([0]);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);
  const data = [
    {
      AboutDevTypeText:
        "<span>> Are you gay ?<br/>> And why are you gay ?</span><br/><span>> You are gay!</span><br/><span>> Hello my neighbours!</span><br/><span>> Ey fuck you!</span><br/><span>> Yes, yes, fuck you tooo!</span><br/>",
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
        setTimeout(type, 60);
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
    }, 500);

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
