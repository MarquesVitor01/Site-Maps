import React from "react";
import './banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content banner-top-shadow banner-bottom-shadow">
        <div className="image-container">
          <img src="../../../img/banner.webp" alt="Banner" className="banner-image" />
        </div>
        <div className="text-container">
          <h1 className="first-text">A NOSSA EXPERIÊNCIA IMPULSIONA O SEU NEGÓCIO</h1>
          <p className="second-text">deixe por nossa conta, iremos alavancar sua empresa.</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;