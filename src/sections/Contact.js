import React, { useEffect } from "react";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    const handleIntersection = (entries, classToAdd, classToRemove) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd);
        } else {
          entry.target.classList.remove(classToRemove);
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      handleIntersection(entries, "show", "show");
    });
    const observer2 = new IntersectionObserver((entries) => {
      handleIntersection(entries, "bounce", "bounce");
    });

    const observeElements = (elements, observerInstance) => {
      elements.forEach((el) => observerInstance.observe(el));
    };

    const hiddenElements = document.querySelectorAll(".contact-details");
    const hiddenElements2 = document.querySelectorAll(".contact-title");

    observeElements(hiddenElements, observer);
    observeElements(hiddenElements2, observer2);

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElements2.forEach((el) => observer2.unobserve(el));
      observer.disconnect();
      observer2.disconnect();
    };
  }, []);

  const sendEmail = () => {
    window.open(`mailto:agnesagathachang@gmail.com`);
  };

  const sendMessage = () => {
    window.open(`http://wa.me/6281282209870`);
  };

  return (
    <div id="contact" className="contact-container">
      <div className="meteors">
        {[9, 8, 7].map((size, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/images/decorations/34.png`}
            alt="meteor"
            style={{ position: "absolute", height: `${size}vw` }}
            className={`meteor${index + 1}`}
          />
        ))}
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/decorations/footer.png`}
          alt="contact"
          className="contact-image"
        />
      </div>
      <div className="contact-wrapper">
        <div className="contact-title title">Get in Touch</div>
        <div className="contact-details" onClick={sendEmail}>
          <img
            src={`${process.env.PUBLIC_URL}/images/decorations/email.png`}
            alt="email"
            className="contact-icon"
          />
          <span className="contact-info">agnesagathachang@gmail.com</span>
        </div>
        <div className="contact-details" onClick={sendMessage}>
          <img
            src={`${process.env.PUBLIC_URL}/images/decorations/phone.png`}
            alt="phone"
            className="contact-icon"
          />
          <span className="contact-info">081282209870</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
