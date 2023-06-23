import React, {useState, useEffect, BaseSyntheticEvent} from 'react'
import { gameCards, upcomingGames } from "../data/gameCard";
import GameCard from "./GameCard";
import { gameCardData } from "../data/types";

function GamesContainer() {
    const [games, setGames] = useState<gameCardData[]>([]);
  const [renderedGames, setRenderedGames] = useState<gameCardData[]>(games);
  const [currentCategory, setCurrentCategory] = useState<HTMLLIElement | null>(null)

  useEffect(() => {
    setGames(gameCards);
    setRenderedGames(gameCards);
  }, []);

  function filterGames(category : string, element: BaseSyntheticEvent){
    let newGames = games.filter((game) => {
      return game.generalPlatforms.includes(category);
    });
    
    let ele = element.target as HTMLLIElement;
    currentCategory?.classList.add("inactive-category");
    currentCategory?.classList.remove("active-category");
    setCurrentCategory(ele);
    ele.classList.add("active-category");
    ele.classList.remove("inactive-category");

    setRenderedGames(newGames);
  }
  return (
    <div className="home-games-cont">
          <div className="featured-games">
            <h1>FEATURED GAMES</h1>
            <ul className="platforms-cont">
              <li onClick={(event) => {
                filterGames("pc", event);
              }}>PC</li>
              <li onClick={(event) => {
                filterGames("console", event);
              }}>CONSOLE</li>
              <li onClick={(event) => {
                filterGames("mobile", event);
              }}>MOBILE</li>
            </ul>
          </div>

          <div className="game-cards-container">
            {renderedGames.map((game) => {
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
  )
}

export default GamesContainer