import React from "react";
import { TextField, InputAdornment, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import "./styles/SearchComponent.css";

class SearchComponent extends React.Component {
  render() {
    return (
      <div>
        <form className="search-form">
          <TextField
            className="search-bar"
            variant="outlined"
            margin="normal"
            name="search"
            label={
              <Typography
                align="justify"
                variant="body1"
                style={{
                  fontWeight: "bold",
                  color: "gray",
                  marginButtom: "2%",
                }}
              >
                Try "Laptop"
              </Typography>
            }
            type="text"
            id="search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" variant="outlined">
                  <button className="search-button" type="submit">
                    <Search fontSize="large" />
                  </button>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
    );
  }
}

export default SearchComponent;
