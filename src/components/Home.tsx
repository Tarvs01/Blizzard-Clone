import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GamesContainer from "./GamesContainer";

function Home() {

  return (
    <div className="home">
      <Navbar />
      <div className="carousel-cont">
        <Carousel />
      </div>
      <div className="home-games-container">
        <GamesContainer />
      </div>

      <div className="download-battlenet-container">
          <div className="download-battlenet-cont">
            <div className="download-bn-words-cont">
              <img src="../pictures/Bnet_Logo.webp" alt="battlenet logo" />
              <h1>Download Battle.net</h1>
              <p>All your Blizzard games in one place.</p>
              <div className="download-bn-buttons-cont">
                <button className="main-button blue-button bn-btn">Download</button>
                <button className="main-button gray-button bn-btn">Learn More</button>
              </div>
            </div>
          </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
