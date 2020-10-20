import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SearchComponent from "./SearchComponent";

import "./styles/SearchBox.css";

class SearchBox extends React.Component {
  render() {
    return (
      <div className="search-box">
        <Grid container>
          <Grid item xs={12} lg={12} md={12} sm={12}>
            <Typography
              align="center"
              variant="h2"
              style={{
                fontWeight: "bold",
                color: "#0c1c31",
                fontSize: "5.9vw",
              }}
            >
              Search for all your needs in one go.
            </Typography>
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <SearchComponent />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SearchBox;
