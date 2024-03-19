import React from "react";
import "./Contact.css";

function Contact() {
  const sendEmail = () => {
    window.open(`mailto:mizueeholic@gmail.com?subject=Kemitraan`, "_self");
  };

  return (
    <div id="contact" className="contact-container">
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/x.png`}
          className="contact-image"
        />
      </div>
      <div className="contact-details">
        <div className="contact-header">Get in Touch</div>
        <div className="contact-info">
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/61.png`}
            className="contact-icon"
          />
          <span onClick={sendEmail}>agnesagathachang@gmail.com</span>
        </div>
        <div className="contact-info">
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/62.png`}
            className="contact-icon"
          />
          081282209870
        </div>
      </div>
    </div>
  );
}

export default Contact;
