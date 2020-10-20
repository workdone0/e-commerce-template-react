import React from "react";
import { Grid, Typography } from "@material-ui/core";

import "./styles/SpotlightCard.css";

class SpotlightCard extends React.Component {
  render() {
    return (
      <Grid container className="card-container">
        <Grid className="card-image-div" item xs={6} sm={6} lg={6} md={6}>
          <img
            className="card-image"
            src={this.props.image}
            alt={this.props.message}
          />
        </Grid>
        <Grid className="card-message" item xs={6} sm={6} lg={6} md={6}>
          <Typography variant="h5">{this.props.message}</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default SpotlightCard;
