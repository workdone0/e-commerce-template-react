import React from "react";

import "./styles/Banner.css";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner-div">
        <img
          alt="Discount Banner"
          className="banner-image"
          src={require("../assets/images/banners/Pepper-min.png")}
        />
      </div>
    );
  }
}

export default Banner;
