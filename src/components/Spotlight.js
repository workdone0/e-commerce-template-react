import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SpotlightCard from "./SpotlightCard";

import "./styles/Spotlight.css";

class Spotlight extends React.Component {
  render() {
    return (
      <div className="spotlight-div">
        <Typography variant="h6">Spotlight</Typography>
        <Grid className="main-card-div" container spacing={2}>
          <Grid
            className="secondary-card-div"
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
          >
            <SpotlightCard
              image={require("../assets/images/banners/recent-arrival.png")}
              message="Brand New Arrivals"
            />
          </Grid>
          <Grid
            className="secondary-card-div"
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
          >
            <SpotlightCard
              image={require("../assets/images/banners/best-selling.png")}
              message="Best Selling Products"
            />
          </Grid>
          <Grid
            className="secondary-card-div"
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
          >
            <SpotlightCard
              image={require("../assets/images/banners/discount.png")}
              message="Most Discounted"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Spotlight;
