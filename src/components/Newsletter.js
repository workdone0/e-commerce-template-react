import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";

import "./styles/Newsletter.css";

class Newsletter extends React.Component {
  render() {
    return (
      <div className="newsletter-div">
        <Divider style={{ marginBottom: "2%" }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="newsletter-text-div">
              <Typography
                align="center"
                style={{ fontWeight: "bold", color: "#0c1c31" }}
                gutterBottom
                variant="h4"
              >
                Sign up to see new deals in your inbox first.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="newsletter-form">
              <TextField
                className="input-email-newsletter"
                id="filled-basic"
                label="Enter email"
                variant="filled"
              />
              <Button
                style={{ marginLeft: "2%" }}
                size="small"
                color="secondary"
                variant="outlined"
              >
                Subscribe
              </Button>
            </div>
          </Grid>
        </Grid>
        <Divider style={{ marginTop: "2%" }} />
      </div>
    );
  }
}

export default Newsletter;
