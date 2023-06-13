import React from "react";
import { gameCardData } from "../data/types";

function GameCard({ game }: { game: gameCardData }) {
  return (
    <div className="game-card-cont">
      <div
        className="top-img"
        style={{ backgroundImage: `url(pictures/${game.bgImage})` }}
      >
        <img src={`../pictures/${game.image}`} alt="" />
        {game.isNew && <div className="new-game">NEW</div>}
      </div>
      <div className="game-card-words">
        <h3>{game.name}</h3>
        <h4>{game.genre}</h4>
        <div className="gaming-platforms">
          {game.platforms.includes("battle.net") && (
            <div className="icon-cont">
              <svg
                width="14px"
                height="14px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 24.8 24.6"
                enableBackground="new 0 0 24.8 24.6"
                fill="currentColor"
              >
                <path
                  d="M20.6,8.9C21.3,6.6,21.5,4.6,21,3V2.9c-0.1-0.1-0.1-0.3-0.2-0.3c-0.1,0-0.1,0.1-0.1,0.2c0,0,0,0,0,0.1
	                c0.2,1.4-0.3,3.4-1.1,5.5c-1.7-0.8-3.8-1.4-6.1-1.8c-2.1-0.3-4-0.4-5.8-0.3c0.2-1.4,0.8-2.5,1.6-2.6c1.2-0.3,2.5,0.5,3.7,2
	                c0.2,0.1,0.4,0.1,0.7,0.1c0.6,0.1,1.2,0.2,1.8,0.4c-2.2-4.4-5.3-6.8-7.6-5.9C6.1,0.8,5.3,3.3,5.4,6.6C3.1,7.1,1.3,8,0.2,9.3
	                c0,0,0,0-0.1,0.1S0,9.5,0,9.6c0.1,0.1,0.2,0,0.2-0.1c0,0,0,0,0.1,0c1.1-0.8,3-1.5,5.2-1.7c0.2,1.9,0.7,4,1.5,6.3
	                c0.8,2,1.7,3.8,2.7,5.3C8.3,20,7.2,20,6.6,19.3c-0.8-0.9-0.8-2.5-0.2-4.3c-0.1-0.2-0.2-0.4-0.2-0.6c-0.2-0.6-0.4-1.2-0.6-1.7
	                c-2.6,4.2-3.1,8-1.2,9.6c1.5,1.2,4,0.8,6.7-1c1.6,1.7,3.2,2.9,4.8,3.3h0.1c0.1,0,0.3,0.1,0.3-0.1c0.1-0.1-0.1-0.1-0.1-0.2
	                c0,0,0,0-0.1,0c-1.3-0.5-2.7-1.9-4.1-3.7c1.5-1.1,3.1-2.6,4.6-4.5c1.3-1.6,2.4-3.3,3.1-5c1.1,0.9,1.7,1.9,1.4,2.7
	                c-0.3,1.2-1.7,2-3.5,2.3c-0.1,0.2-0.3,0.3-0.4,0.5c-0.4,0.5-0.8,1-1.2,1.4c4.8,0.2,8.4-1.3,8.7-3.8C25.2,12.4,23.5,10.4,20.6,8.9z
	                M16.5,13.8c-1.7,2.1-3.8,3.9-5.7,5c-0.7-1.1-1.3-2.4-1.8-3.7C8,12.5,7.6,9.8,7.6,7.6c1.3-0.1,2.7,0.1,4,0.3
	                c2.6,0.4,5.2,1.4,7.1,2.5C18.1,11.5,17.3,12.8,16.5,13.8L16.5,13.8z"
                />
              </svg>
            </div>
          )}

          {game.platforms.includes("xbox") && (
            <div className="icon-cont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.202 15.967a7.987 7.987 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33Zm-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.372 8.372 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.495 9.495 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4.171 4.171 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.778 7.778 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12.246 12.246 0 0 1-.654-.319Z" />
              </svg>
            </div>
          )}

          {game.platforms.includes("playstation") && (
            <div className="icon-cont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356ZM9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.454 8.454 0 0 1-4.018-.323Z" />
              </svg>
            </div>
          )}

          {game.platforms.includes("switch") && (
            <div className="icon-cont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05 1.73.298 3.045 1.6 3.373 3.326.046.242.053.809.053 4.61 0 4.06.005 4.537-.123 4.976-.022.076-.048.15-.08.242a4.136 4.136 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013-.05-.02-.053-.752-.053-7.979Zm4.675.269a1.621 1.621 0 0 0-1.113-1.034 1.609 1.609 0 0 0-1.938 1.073 1.9 1.9 0 0 0-.014.935 1.632 1.632 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028.11-.285.113-.742.003-1.053ZM3.71 3.317c-.208.04-.526.199-.695.348-.348.301-.52.729-.494 1.232.013.262.03.332.136.544.155.321.39.556.712.715.222.11.278.123.567.133.261.01.354 0 .53-.06.719-.242 1.153-.94 1.03-1.656-.142-.852-.95-1.422-1.786-1.256Z" />
                <path d="M3.425.053a4.136 4.136 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39.368 1.66 1.548 2.844 3.224 3.235.22.05.497.06 2.29.07 1.856.012 2.048.009 2.097-.04.05-.05.053-.69.053-7.94 0-5.374-.01-7.906-.033-7.952-.033-.06-.09-.063-2.03-.06-1.578.004-2.052.014-2.26.05Zm3 14.665-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.845 2.845 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z" />
              </svg>
            </div>
          )}

          {game.platforms.includes("apple") && (
            <div className="icon-cont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
              </svg>
            </div>
          )}

          {game.platforms.includes("googleplay") && (
            <div className="icon-cont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameCard;
