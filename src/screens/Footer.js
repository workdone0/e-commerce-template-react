import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";

import "./styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-div">
        <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography
              gutterBottom={true}
              style={{ fontWeight: "bold" }}
              variant="h6"
            >
              Pepper Shop
            </Typography>
            <Typography
              gutterBottom={true}
              style={{ fontWeight: "bold" }}
              variant="body2"
            >
              An online Store for all your needs.
            </Typography>
            <Divider style={{ margin: "2%" }} />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <div className="list-div">
              <Typography variant="h6">Customer Service</Typography>
              <List>
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText>Contact Us</ListItemText>
                </ListItem>
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText>Track Order</ListItemText>
                </ListItem>
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText>Return Order</ListItemText>
                </ListItem>
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText>Cancel Order</ListItemText>
                </ListItem>
              </List>
            </div>
          </Grid>

          <Grid item xs={6} sm={6} md={3} lg={3}>
            <div className="list-div">
              <Typography variant="h6">Company</Typography>
              <List>
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText>About Us</ListItemText>
                </ListItem>
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText>We're Hiring</ListItemText>
                </ListItem>
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText>Terms and Conditions</ListItemText>
                </ListItem>
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText>Privacy Policy</ListItemText>
                </ListItem>
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText>Blog</ListItemText>
                </ListItem>
              </List>
            </div>
          </Grid>

          <Grid item xs={6} sm={6} md={3} lg={3}>
            <div className="list-div">
              <Typography variant="h6">Connect with Us</Typography>
              <List>
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText>Facebook</ListItemText>
                </ListItem>
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText>Twitter</ListItemText>
                </ListItem>
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText>Instagram</ListItemText>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
        <Divider style={{ margin: "2%" }} />
        <Grid container>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            item
            style={{ textAlign: "center" }}
          >
            <Typography variant="body2">
              copyright2020@PEPPERSHOP. All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Footer;
