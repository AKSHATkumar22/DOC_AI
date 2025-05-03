import React, { useState } from "react";
import "./Sidebar.css";
import { assets2 } from "../../assets2/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div class="top-section">
        <img
          onClick={() => setExtended((prev) => !prev)}
          src={assets2.menu_icon}
          alt=""
        />
        <div class="new-chat">
          {" "}
          <img src={assets2.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div class="recent">
            <div class="recent-title">Recent</div>
            <div class="recent-entry">
              <img src={assets2.message_icon} alt="" />
              <p>What is Hitayu-AI</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets2.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets2.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets2.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
