import React from "react";
import { Typography } from "@material-ui/core";

import "./styles/FeaturedCard.css";

class FeaturedCard extends React.Component {
  render() {
    return (
      <div className="featured-card-container">
        <div>
          <img
            className="featured-product-image"
            src={this.props.image}
            alt={this.props.productName}
          />
        </div>
        <div>
          <Typography variant="h5">{this.props.productName}</Typography>
        </div>
      </div>
    );
  }
}

export default FeaturedCard;
