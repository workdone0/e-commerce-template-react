import React from "react";
import { Grid, Typography } from "@material-ui/core";
import FeaturedCard from "./FeaturedCard";

import "./styles/Featured.css";

class Featured extends React.Component {
  render() {
    return (
      <div className="featured-container">
        <Typography variant="h6">Featured Products</Typography>
        <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FeaturedCard
              image={require("../assets/images/banners/macbook-pro.jpg")}
              productName="Macbook Pro"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FeaturedCard
              image={require("../assets/images/banners/iphone.jpg")}
              productName="iPhone 11"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FeaturedCard
              image={require("../assets/images/banners/headphone.jpg")}
              productName="Headphones"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FeaturedCard
              image={require("../assets/images/banners/watch.jpg")}
              productName="Apple Watch"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Featured;
