import React, { useState } from "react";
import PropTypes from "prop-types";


const userdata = [
  {
    name: "Prabha",
    city: "Newyork",
    description: "front end development",
    skills: ["ui/ux", "html", "css", "javascript", "react", "node"],
    online: true,
    profile: "images/1.jpg",
  },
  {
    name: "Muthu",
    city: "Ooty",
    description: "front end development",
    skills: ["ui/ux", "html", "css", "javascript", "react", "node"],
    online: true,
    profile: "images/2.jpg",
  },
  {
    name: "Sankereswari",
    city: "Chennai",
    description: "front end development",
    skills: ["ui/ux", "html", "css", "javascript", "react", "node"],
    online: true,
    profile: "images/3.jpg",
  },
];

function User({ name, city, description, skills, online, profile }) {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState(""); 
  const [error, setError] = useState(""); 

  const handleMessageClick = () => {
    setShowMessageBox(true);
  };

  const handleCloseMessageBox = () => {
    setShowMessageBox(false);
    setMessage(""); 
    setError(""); 
  };

  const handleSendMessage = () => {
    if (!message.trim()) {
      setError("Message cannot be empty!");
      return;
    }
    setError("");
    alert(`Message sent to ${name}: ${message}`);
    handleCloseMessageBox(); 
  };

  return (
    <div className="card-container">
      
      <span className={online ? "pro online" : "pro offline"}>
        {online ? "online" : "offline"}
      </span>

      <img src={profile} className="img" alt="User" />
      <h3>{name}</h3>
      <h3>{city}</h3>
      <p>{description}</p>

      <div className="buttons">
        <button className="primary" onClick={handleMessageClick}>
          Message
        </button>
      </div>

      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      
      {showMessageBox && (
        <div className="message-box">
          <div className="message-content">
            <h3>Send a Message to {name}</h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="message-buttons">
              <button className="send-btn" onClick={handleSendMessage}>
                Send
              </button>
              <button className="close-btn" onClick={handleCloseMessageBox}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
};

export const UserCard = () => {
  return (
    <>
      {userdata.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          online={user.online}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </>
  );
};

export default UserCard;
