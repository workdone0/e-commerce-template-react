import React from "react";
import { Typography, Grid } from "@material-ui/core";

import "./styles/FeaturedBrands.css";

class FeaturedBrands extends React.Component {
  render() {
    return (
      <div className="featured-brands-div">
        <Grid container>
          <Grid item xs={6} sm={6} lg={6} md={6}>
            <Typography variant="h6">Featured Brands</Typography>
          </Grid>
          <Grid item xs={6} sm={6} lg={6} md={6}>
            <Typography
              color="secondary"
              style={{ float: "right" }}
              variant="body1"
            >
              Show all
            </Typography>
          </Grid>
        </Grid>
        <Grid
          className="icons-container"
          container
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/apple.png")}
                alt="Apple"
              />
              <Typography variant="body1">Apple</Typography>
            </div>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/samsung.png")}
                alt="Samsung"
              />
              <Typography variant="body1">Samsung</Typography>
            </div>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/hp.png")}
                alt="HP"
              />
              <Typography variant="body1">HP</Typography>
            </div>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/intel.png")}
                alt="Intel"
              />
              <Typography variant="body1">Intel</Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="inner-icons-container-right"
          >
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/motorola.png")}
                alt="Motorola"
              />
              <Typography variant="body1">Motorola</Typography>
            </div>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/dell.png")}
                alt="Dell"
              />
              <Typography variant="body1">Dell</Typography>
            </div>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/android.png")}
                alt="Android"
              />
              <Typography variant="body1">Android</Typography>
            </div>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/microsoft.png")}
                alt="Microsoft"
              />
              <Typography variant="body1">Microsoft</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default FeaturedBrands;
