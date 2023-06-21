import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import { gameCards, upcomingGames } from "../data/gameCard";
import GameCard from "./GameCard";
import { gameCardData } from "../data/types";

function Home() {
  const [games, setGames] = useState<gameCardData[]>([]);

  useEffect(() => {
    setGames(gameCards);
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="carousel-cont">
        <Carousel />
      </div>
      <div className="home-games-container">
        <div className="home-games-cont">
          <div className="featured-games">
            <h1>FEATURED GAMES</h1>
            <ul className="platforms-cont">
              <li>PC</li>
              <li>CONSOLE</li>
              <li>MOBILE</li>
            </ul>
          </div>

          <div className="game-cards-container">
            {games.map((game) => {
              return <GameCard key={game.id} game={game} />;
            })}
          </div>

          <div className="featured-games">
            <h1>UPCOMING</h1>
          </div>

          <div className="game-cards-container">
            {
              upcomingGames.map((game) => {
                return <GameCard key={game.id} game={game} />
              })
            }
          </div>

          <button className="main-button blue-button all-games-btn">See All Games</button>
        </div>
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
    </div>
  );
}

export default Home;
