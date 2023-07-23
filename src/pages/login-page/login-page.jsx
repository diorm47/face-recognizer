import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./login-page.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Snackbar from "../../components/snack-bar/snack-bar";

function LoginPage({ mainURl }) {
  const [idNumber, setIdNumber] = useState();
  const [password, setPassword] = useState();
  const [hidedSnack, setHidedSnack] = useState(true);
  const [snackBarText, setSnackBarText] = useState("");
  const navigate = useNavigate();

  const loginClick = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      username: idNumber,
      password: password,
    });

    let reqOptions = {
      url: `${mainURl}api/login/`,
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };
    if (idNumber && password) {
      await axios
        .request(reqOptions)
        .then((response) => {
          if (response.data.token && !response.data.status) {
            sessionStorage.setItem("token", response.data.token);
            navigate("/loading");
          }
        })
        .catch((error) => {
          setHidedSnack(false);
          setSnackBarText("Xatolik. Qaytadan urunib ko'ring");
          setTimeout(() => {
            setHidedSnack(true);
          }, 3000);
        });
    } else {
      setHidedSnack(false);
      if (!idNumber && !password) {
        setSnackBarText("Iltimos ma'lumotlarni kiriting");
      } else if (!password) {
        setSnackBarText("Iltimos parolni kiriting");
      } else if (!idNumber) {
        setSnackBarText("Iltimos ID raqamni kiriting");
      }

      setTimeout(() => {
        setHidedSnack(true);
      }, 3000);
    }
  };
  return (
    <>
      <Snackbar hidedSnack={hidedSnack} snackBarText={snackBarText} />
      <div className="login">
        <div className="container">
          <Logo className="lion_logo" />

          <div className="editor-field editor-field__textbox">
            <div className="editor-field__label-container">
              <label className="editor-field__label">ID number</label>
            </div>

            <div className="editor-field__container">
              <input
                type="text"
                onChange={(e) => setIdNumber(e.target.value)}
                className="editor-field__input"
              />
            </div>
            <span className="editor-field__bottom"></span>
            <div className="editor-field__noise"></div>
          </div>
          <div className="editor-field editor-field__textbox">
            <div className="editor-field__label-container">
              <label className="editor-field__label">password</label>
            </div>

            <div className="editor-field__container">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="editor-field__input"
              />
            </div>
            <span className="editor-field__bottom"></span>
            <div className="editor-field__noise"></div>
          </div>

          <div className="btn btn--primary login_btn" onClick={loginClick}>
            <div className="btn__container">Login</div>
            <div className="btn__bottom"></div>
            <div className="btn__noise"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
