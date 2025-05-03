import React from "react";
import "./Main.css";
import { assets2 } from "../../assets2/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Hitayu-AI</p>
        <img src={assets2.user_icon} alt="" srcset="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Welcome to Hitayu-AI!!</span>
          </p>
          <p>How Can I Help You?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>
              - A solution aims to bridge the gap between patients and
              healthcare .
            </p>
            <img src={assets2.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Harnessing advanced technology , DOC AI is designed to accelerate
              diagnosis , eliminate uncertainty about diseases and provide early
              predictions .
            </p>
            <img src={assets2.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>
              With a mission to reach each and every individual , DOC AI
              integrates multilingual support , ensuring that language is never
              a barrier to receive medical assistance .
            </p>
            <img src={assets2.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>
              DOC AI is built to streamline the journey from symptoms to
              solutions - minimizing delays , reducing cost and ensuring precise
              diagnosis .
            </p>
            <img src={assets2.message_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div class="search-box">
            <input type="text" placeholder="Enter Your Prompt here" />
            <div class="icons">
              <img src={assets2.gallery_icon} alt="Upload" />
              <img src={assets2.mic_icon} alt="Mic" />
              <img src={assets2.send} alt="Send" />
            </div>
          </div>

          <p className="bottom-info">
            Hitayu-AI may display inaccurate info, may check the info correctly
            and use the problem solution insufficiently. It doesnot provide an
            inaccurate solution.Your privacy depends on yours so dont provide
            any privacy and double check it before providing it.
          </p>
          <p className="copy">
            Copyright @Hitayu-AI - 2025 <br />
            Developed by ~ Akshat Kumar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
