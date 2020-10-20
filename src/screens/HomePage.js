import React from "react";
import SearchBox from "../components/SearchBox";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Spotlight from "../components/Spotlight";
import Featured from "../components/Featured";
import FeaturedBrands from "../components/FeaturedBrands";
import Newsletter from "../components/Newsletter";
import Footer from "./Footer";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchBox />
        <Banner />
        <Categories />
        <Spotlight />
        <Featured />
        <FeaturedBrands />
        <Newsletter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
