import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  ShoppingCart,
  FavoriteBorder,
  AccountCircle,
} from "@material-ui/icons";

import "./styles/HeaderOne.css";

class HeaderOne extends React.Component {
  render() {
    return (
      <div className="header-one">
        <Grid container>
          <Grid item xs={5} sm={5} md={2} lg={2}>
            <div className="header-title">
              <Typography variant="h6">PEPPER SHOP</Typography>
            </div>
          </Grid>
          <Grid item xs={3} sm={3} md={8} lg={8}></Grid>
          <Grid item xs={4} sm={4} md={2} lg={2}>
            <div className="header-menu">
              <ShoppingCart
                style={{ fontSize: 30 }}
                className="header-menu-item"
              />
              <FavoriteBorder
                style={{ fontSize: 30 }}
                className="header-menu-item"
              />
              <AccountCircle
                style={{ fontSize: 30 }}
                className="header-menu-item"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HeaderOne;
