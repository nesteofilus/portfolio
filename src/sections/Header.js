import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const handleIntersection = (entries, classToAdd, classToRemove) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd);
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      handleIntersection(entries, "show", "show");
    });
    const observer2 = new IntersectionObserver((entries) => {
      handleIntersection(entries, "bounce-header", "bounce-header");
    });

    const observeElements = (elements, observerInstance) => {
      elements.forEach((el) => observerInstance.observe(el));
    };

    const hiddenElements = document.querySelectorAll(
      ".intro-text-hidden, .button-wrapper"
    );
    const hiddenElements2 = document.querySelectorAll(".highlighted-text");

    observeElements(hiddenElements, observer);
    observeElements(hiddenElements2, observer2);

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElements2.forEach((el) => observer2.unobserve(el));
      observer.disconnect();
      observer2.disconnect();
    };
  }, []);

  const scrollToAboutMe = () => {
    const element = document.getElementById("about-me");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div id="header" className="header-container">
        <div className="header-content">
          <div className="intro-text intro-text-hidden">
            I'm&nbsp;
            <div className="highlighted-text">Agnes Agatha Chang</div>, <br /> a
            software engineer.
          </div>
          <div className="button-wrapper">
            <button onClick={scrollToAboutMe} className="button-hidden">
              Get to know me better
            </button>
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/decorations/astronaut.webp`}
          className="header-image"
          alt="Astronaut"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/decorations/planet.webp`}
          className="header-background planet"
          alt="Background"
        />
      </div>
    </div>
  );
}

export default Header;
