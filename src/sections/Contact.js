import React, { useEffect } from "react";

function Contact() {
  const sendEmail = () => {
    window.open(`mailto:mizueeholic@gmail.com?subject=Kemitraan`, "_self");
  };

  return (
    <div
      style={{
        padding: "5% 10% 5% 0",
        minHeight: "30vw",
        position: "relative",
      }}
    >
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/x.png`}
          style={{
            position: "absolute",
            width: "100%",
            bottom: "0",
          }}
        />
      </div>
      <div
        style={{
          float: "right",
          color: "#93da9e",
          paddingRight: "12%",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "3vw",
            marginBottom: "5%",
            color: "#D672B4",
          }}
        >
          Get in Touch
        </div>
        <div
          style={{
            margin: "40px 0",
            display: "flex",
            alignItems: "center",
            fontSize: "1.2vw",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/61.png`}
            style={{
              width: "2vw",
              marginRight: "15px",
            }}
          />
          <span
            onClick={() =>
              window.open(
                `mailto:mizueeholic@gmail.com?subject=Kemitraan`,
                "_self"
              )
            }
          >
            agnesagathachang@gmail.com
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "1.2vw",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/62.png`}
            style={{
              width: "2vw",
              marginRight: "15px",
            }}
          />
          081282209870
        </div>
      </div>
    </div>
  );
}

export default Contact;
