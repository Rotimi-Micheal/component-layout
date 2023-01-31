import React, { Fragment } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <HeroSection />
      </Layout>
    </Fragment>
  );
};

export default App;
