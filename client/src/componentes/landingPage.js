import React from "react";
// import "./landingPage.css"
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    var history = useNavigate();
  return (
    <div className="banner">
      <div className="container-banner">
        <div className="title-banner">
        <div  className="title-banner">Welcome </div>
        <div className="subtit">Here you will </div>
        </div>
        <div>

          <button type="button" onClick={() => history("/home")}>
            <span></span>INGRESAR
          </button>
        </div>
      </div>
    </div>
  );
}