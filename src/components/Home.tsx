import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import { gameCards } from "../data/gameCard";
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
        </div>
      </div>
    </div>
  );
}

export default Home;
