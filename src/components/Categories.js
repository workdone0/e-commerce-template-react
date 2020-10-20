import React from "react";
import { Typography, Grid } from "@material-ui/core";

import "./styles/Categories.css";

class Categories extends React.Component {
  render() {
    return (
      <div className="categories-div">
        <Grid container>
          <Grid item xs={6} sm={6} lg={6} md={6}>
            <Typography variant="h6">Categories</Typography>
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
                src={require("../assets/images/icons/computer.png")}
                alt="computer"
              />
              <Typography variant="body1">Laptop</Typography>
            </div>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/men-fashion.png")}
                alt="Men"
              />
              <Typography variant="body1">Men</Typography>
            </div>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/women-fashion.png")}
                alt="Women"
              />
              <Typography variant="body1">Women</Typography>
            </div>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/watch.png")}
                alt="watches"
              />
              <Typography variant="body1">Watches</Typography>
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
                src={require("../assets/images/icons/beauty.png")}
                alt="Beauty Care"
              />
              <Typography variant="body1">Beauty</Typography>
            </div>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/home.png")}
                alt="Home Care"
              />
              <Typography variant="body1">Home</Typography>
            </div>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/stationary.png")}
                alt="Stationary"
              />
              <Typography variant="body1">Stationary</Typography>
            </div>
            <div className="icons-div">
              <img
                className="icon"
                src={require("../assets/images/icons/toy.png")}
                alt="Toys"
              />
              <Typography variant="body1">Toys</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Categories;
