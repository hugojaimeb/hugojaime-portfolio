import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MnavBar } from "./components/MNavBar";
import { Banner } from "./components/Banner";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Helmet } from "react-helmet";
import { Footer } from "./components/Footer";
import CubeBox from "./components/cube/CubeBox";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hugo Jaime</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Hugo Jaime Developer Profile" />
      </Helmet>
      <MnavBar />
      <Banner />
      {/* <Profile />
      <div className="divline" />
      <Projects />
      <Contact />
      <Footer />
      <div className="divline" /> */}

      {/* <CubeBox /> */}
    </div>
  );
}

export default App;
