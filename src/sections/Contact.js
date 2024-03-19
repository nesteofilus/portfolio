import React from "react";
import "./Contact.css";

function Contact() {
  const sendEmail = () => {
    window.open(`mailto:agnesagathachang@gmail.com`);
  };

  const sendMessage = () => {
    window.open(`http://wa.me/6281282209870`);
  };

  return (
    <div id="contact" className="contact-container">
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/decorations/footer.png`}
          className="contact-image"
        />
      </div>
      <div className="contact-details">
        <div className="contact-header">Get in Touch</div>
        <div className="contact-info">
          <img
            src={`${process.env.PUBLIC_URL}/images/decorations/email.png`}
            className="contact-icon"
          />
          <span onClick={() => sendEmail()}>agnesagathachang@gmail.com</span>
        </div>
        <div className="contact-info" onClick={() => sendMessage()}>
          <img
            src={`${process.env.PUBLIC_URL}/images/decorations/phone.png`}
            className="contact-icon"
          />
          081282209870
        </div>
      </div>
    </div>
  );
}

export default Contact;
