import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryshowCase from "./CategoryshowCase";
import Register from "./Register";
import Location from "./Location";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeCategory />
      <CategoryshowCase />
      <Register />
      <Location />
      <AboutUs />
      <AppSection />
    </>
  );
};

export default Home;
