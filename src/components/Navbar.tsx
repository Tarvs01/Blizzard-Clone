import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const breakPoint = 600;
  const [size, setSize] = useState(window.innerWidth);
  const [show, setShow] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showLeftNav, setShowLeftNav] = useState(false);
  const [showRightNav, setShowRightNav] = useState(false);
  const [showWarcraft, setShowWarcraft] = useState(false);
  const [showDiablo, setShowDiablo] = useState(false);
  const [showOverwatch, setShowOverwatch] = useState(false);
  const [showStarcraft, setShowStarcraft] = useState(false);

  useEffect(() => {
    let body: HTMLBodyElement | null = document.querySelector("body");
    if (showOverlay) {
      body!.style.overflow = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [showOverlay]);

  const checkSize = () => {
    setSize(window.innerWidth);
    if (size > breakPoint) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  function closeAll() {
    setShowLeftNav(false);
    setShowRightNav(false);
    setShowOverlay(false);
  }

  function showLeftNavbar() {
    setShowLeftNav(true);
    setShowRightNav(false);
    setShowOverlay(true);
  }

  function showRightNavbar() {
    setShowRightNav(true);
    setShowLeftNav(false);
    setShowOverlay(true);
  }

  function closeSubItems(current: number) {
    let subItems = [setShowWarcraft, setShowDiablo, setShowOverwatch, setShowStarcraft];
    for (let i = 0; i < subItems.length; i++) {
      if (i === current) {
        continue;
      } else {
        subItems[i](false);
      }
    }
  }

  return (
    <>
      {size > 980 && (
        <nav>
          <ul className="nav-left">
            <li>
              <div className="main-nav-logo">
                <svg>
                  <use
                    href="../pictures/blizzard_logo.svg#blizzard-logo"
                    xlinkHref="../pictures/blizzard_logo.svg#blizzard-logo"
                  ></use>
                </svg>
              </div>
            </li>
            <li>
              <div className="nav-left-item">
                <span>Warcraft</span>
                <div className="down-arrow">
                  <svg>
                    <use
                      href="../pictures/down_arrow.svg#down-arrow"
                      xlinkHref="../pictures/down_arrow.svg#down-arrow"
                    ></use>
                  </svg>
                </div>

                <div className="nav-hover-container">
                  <div className="nav-hover-cont">
                    <div className="nav-hover-arrow"></div>
                    <div className="nav-hover-main">
                      <div className="nav-hover-item nav-hover-left">
                        <img
                          src="../pictures/world-of-warcraft.webp"
                          alt="wow"
                        />
                        <div className="nav-hover-words">
                          <p className="nav-hover-title">World of Warcraft</p>
                          <p className="nav-hover-genre">MMORPG</p>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-left">
                        <svg>
                          <use
                            href="../pictures/wow_classic.svg#wow-classic"
                            xlinkHref="../pictures/wow_classic.svg#wow-classic"
                          ></use>
                        </svg>
                        <div className="nav-hover-words">
                          <p className="nav-hover-title">
                            World of Warcraft Classic
                          </p>
                          <p className="nav-hover-genre">MMORPG</p>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-left">
                        <img
                          src="../pictures/hearthstone.webp"
                          alt="heartstone"
                        />
                        <div className="nav-hover-words">
                          <p className="nav-hover-title">Hearthstone</p>
                          <p className="nav-hover-genre">Strategy Card Game</p>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-left">
                        <img
                          src="../pictures/warcraft-III.webp"
                          alt="warcraft 3"
                        />
                        <div className="nav-hover-words">
                          <p className="nav-hover-title">
                            Warcraft III: Reforged
                          </p>
                          <p className="nav-hover-genre">Real-Time Strategy</p>
                        </div>
                      </div>
                    </div>

                    <div className="nav-hover-submain">
                      <p>UPCOMING</p>

                      <div className="nav-hover-item nav-hover-left">
                        <svg>
                          <use
                            href="../pictures/warcraft_arclight.svg#warcraft-arclight"
                            xlinkHref="../pictures/warcraft_arclight.svg#warcraft-arclight"
                          ></use>
                        </svg>
                        <div className="nav-hover-words">
                          <div className="nav-hover-title">
                            Warcraft Arclight Rumble
                          </div>
                          <div className="nav-hover-genre">
                            Mobile Action Strategy
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-left-item">
                <span> Diablo</span>
                <div className="down-arrow">
                  <svg>
                    <use
                      href="../pictures/down_arrow.svg#down-arrow"
                      xlinkHref="../pictures/down_arrow.svg#down-arrow"
                    ></use>
                  </svg>
                </div>

                <div className="nav-hover-container">
                  <div className="nav-hover-cont">
                    <div className="nav-hover-arrow"></div>
                    <div className="nav-hover-main">
                      <div className="nav-hover-item nav-hover-left">
                        <img src="../pictures/diablo-IV.webp" alt="Diablo 4" />
                        <div className="nav-hover-words">
                          <div className="nav-hover-title">Diablo IV</div>
                          <div className="nav-hover-genre">
                            Action RPG{" "}
                            <span className="nav-hover-new">NEW</span>
                          </div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-left">
                        <img
                          src="../pictures/diablo-immortal (1).webp"
                          alt="Diablo imortal"
                        />
                        <div className="nav-hover-words">
                          <div className="nav-hover-title">Diablo Immortal</div>
                          <div className="nav-hover-genre">Action RPG</div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-left">
                        <img src="../pictures/diablo-II.webp" alt="Diablo 2" />
                        <div className="nav-hover-words">
                          <div className="nav-hover-title">
                            Diablo II: Resurrected
                          </div>
                          <div className="nav-hover-genre">Action RPG</div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-left">
                        <img src="../pictures/diablo-III.webp" alt="Diablo 3" />
                        <div className="nav-hover-words">
                          <div className="nav-hover-title">Diablo III</div>
                          <div className="nav-hover-genre">Action RPG</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {size > 1125 && (
              <li>
                <div className="nav-left-item">
                  <span>Overwatch</span>
                  <div className="down-arrow">
                    <svg>
                      <use
                        href="../pictures/down_arrow.svg#down-arrow"
                        xlinkHref="../pictures/down_arrow.svg#down-arrow"
                      ></use>
                    </svg>
                  </div>

                  <div className="nav-hover-container">
                    <div className="nav-hover-cont">
                      <div className="nav-hover-arrow"></div>

                      <div className="nav-hover-main">
                        <div className="nav-hover-item nav-hover-left">
                          <img
                            src="../pictures/overwatch-2.webp"
                            alt="Overwatch"
                          />
                          <div className="nav-hover-words">
                            <div className="nav-hover-title">Overwatch 2</div>
                            <div className="nav-hover-genre">
                              Team-Based Action
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )}
            {size > 1256 && (
              <li>
                <div className="nav-left-item">
                  <span>StarCraft</span>
                  <div className="down-arrow">
                    <svg>
                      <use
                        href="../pictures/down_arrow.svg#down-arrow"
                        xlinkHref="../pictures/down_arrow.svg#down-arrow"
                      ></use>
                    </svg>
                  </div>

                  <div className="nav-hover-container">
                    <div className="nav-hover-cont">
                      <div className="nav-hover-arrow"></div>

                      <div className="nav-hover-main nav-hover-left">
                        <div className="nav-hover-item">
                          <img
                            src="../pictures/starcraft-II.webp"
                            alt="Starcraft 2"
                          />

                          <div className="nav-hover-words">
                            <div className="nav-hover-title">StarCraft II</div>
                            <div className="nav-hover-genre">
                              Real-Time Strategy
                            </div>
                          </div>
                        </div>

                        <div className="nav-hover-item">
                          <img
                            src="../pictures/starcraft.webp"
                            alt="Starcraft"
                          />

                          <div className="nav-hover-words">
                            <div className="nav-hover-title">
                              StarCraft: Remastered
                            </div>
                            <div className="nav-hover-genre">
                              Real-Time Strategy
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )}
            <li>
              <div className="nav-left-item nav-more">
                <div className="dot-svg-cont">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </div>

                <div className="nav-hover-container">
                  <div className="nav-hover-cont">
                    <div className="nav-hover-arrow"></div>

                    <div className="nav-hover-main">
                      {size <= 1125 && (
                        <div className="nav-hover-item nav-hover-left">
                          <img
                            src="../pictures/overwatch-2.webp"
                            alt="Overwatch"
                          />
                          <div className="nav-hover-words">
                            <div className="nav-hover-title">Overwatch 2</div>
                            <div className="nav-hover-genre">
                              Team-Based Action
                            </div>
                          </div>
                        </div>
                      )}
                      {size <= 1256 && (
                        <>
                          <div className="nav-hover-item nav-hover-left">
                            <img
                              src="../pictures/starcraft-II.webp"
                              alt="Starcraft 2"
                            />

                            <div className="nav-hover-words">
                              <div className="nav-hover-title">
                                StarCraft II
                              </div>
                              <div className="nav-hover-genre">
                                Real-Time Strategy
                              </div>
                            </div>
                          </div>

                          <div className="nav-hover-item nav-hover-left">
                            <img
                              src="../pictures/starcraft.webp"
                              alt="Starcraft"
                            />

                            <div className="nav-hover-words">
                              <div className="nav-hover-title">
                                StarCraft: Remastered
                              </div>
                              <div className="nav-hover-genre">
                                Real-Time Strategy
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      <div className="nav-hover-item nav-hover-left">
                        <img
                          src="../pictures/heroes-of-the-storm.webp"
                          alt="Heroes of the storm"
                        />

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">
                            Heroes of the Storm
                          </div>
                          <div className="nav-hover-genre">MOBA</div>
                        </div>
                      </div>

                      <div className="nav-hover-button">
                        <div className="nav-button-items">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3H3V10H10V3Z"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M21 3H14V10H21V3Z"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M21 14H14V21H21V14Z"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M10 14H3V21H10V14Z"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          All Games
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <ul className="nav-right">
            <li>
              <div className="nav-right-item">
                <span>About</span>
                <div className="down-arrow">
                  <svg>
                    <use
                      href="../pictures/down_arrow.svg#down-arrow"
                      xlinkHref="../pictures/down_arrow.svg#down-arrow"
                    ></use>
                  </svg>
                </div>

                <div className="nav-hover-container">
                  <div className="nav-hover-cont">
                    <div className="nav-hover-arrow"></div>
                    <div className="nav-hover-main">
                      <div className="nav-hover-item nav-hover-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 20"
                          fill="currentColor"
                        >
                          <path
                            className="st0"
                            d="M8,1.7C8.2,1.8,8.2,1.9,8.4,2c0.1,0,0.1,0,0.2,0C8.8,2.2,9,2.5,9.3,2.7c0,0.2,0,0.4,0,0.7c0,0.2,0,0.5,0,0.7
	                  c0,0.1-0.1,0.1-0.2,0.2c0,0.2,0.2,0.2,0.3,0.3c0,0.2,0,0.4,0,0.6c0,0.1-0.1,0.1-0.1,0.2c0,0.7,0,1.4,0,2.2c0,0.2-0.1,0.5,0,0.7
	                  c0,0.1,0.2,0.2,0.3,0.3c0,0.1,0.1,0.3,0.1,0.5c0,0.7,0,1.4,0,2.1c0,0.2,0,0.3,0,0.4c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.3,0.1,0.7,0,0.9
	                  c0,0.1,0.1,0.1,0.1,0.2c0,0.2,0,0.6,0,0.8c-0.1,0.1-0.1,0.1-0.2,0.2c0,0-0.1,0.2-0.1,0.2c0,0.1,0.2,0.2,0.1,0.5c0,0.1,0,0.1-0.1,0.2
	                  c0,0.2,0.1,0.4,0,0.6c0,0.1-0.1,0.1-0.2,0.2c-0.1,0.2,0.1,0.6,0,0.9c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0.2,0.3,0.1,0.5c0.2,0,0.3,0,0.5,0
	                  c0.2,0,0.4,0,0.5,0c0.1,0,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.3,0,0.5,0.1c0.3,0.1,0.9,0.2,1.2,0
	                  c0.1,0,0.1-0.1,0.2-0.2c0.2-0.1,0.6-0.1,0.9-0.1c1.2-0.1,2.7,0,3.9,0c0,0.3,0,0.6,0,0.9c0,0.3,0,0.6,0,0.9c0,0.3,0.3,0.4,0.3,0.6
	                  c-0.4,0-1,0-1.4,0c-0.2,0-0.4,0-0.5,0c-0.1,0-0.1-0.1-0.2-0.2c-0.3,0-0.5,0-0.6-0.2c-0.2,0-0.3-0.1-0.4-0.2c-0.2,0-0.4,0-0.7,0
	                  c-0.4,0-0.8,0.1-0.9-0.2c-1.1,0-2.3,0-3.5,0C9.4,18,9,17.8,8.7,17.9c-0.1,0-0.2,0.1-0.4,0.2C8.2,18.3,8,18.3,8,18.4
	                  c-0.1,0.1-0.2,0.2-0.2,0.3c-0.4-0.1-0.9-0.2-1.3,0c-0.1,0-0.1-0.2-0.2-0.2c0-0.1,0.2-0.2,0.2-0.3C6.7,18,7,17.8,7.3,17.5
	                  c0-0.2,0-0.4,0-0.6c0-0.1,0.1-0.1,0.2-0.2c0-0.1-0.1-0.1-0.2-0.2c0.1-0.4-0.1-0.7,0-1c0-0.1,0.1-0.1,0.2-0.2c0-0.1,0-0.3,0-0.4
	                  c0-0.1,0.1-0.1,0.1-0.2c0-0.3-0.2-0.4-0.3-0.5c0-0.6,0-1.2,0-1.9c0-0.1,0.1-0.1,0.2-0.2c0-0.3-0.1-0.7,0-1c0-0.1,0.1-0.1,0.1-0.2
	                  c0-0.2,0-0.5,0-0.7c0-0.2,0-0.5,0-0.7c0-0.2,0.2-0.2,0.2-0.4c0-0.2-0.1-0.2-0.2-0.3c0-0.4,0-1,0-1.5c0-0.2,0-0.4,0-0.5
	                  c0-0.1-0.1-0.1-0.1-0.2c0-0.2,0-0.3,0-0.5c0-0.2,0-0.4,0-0.5c0-0.2,0.2-0.2,0.3-0.3c0-0.4,0.2-1-0.2-1.1C7.6,4,7.8,3.8,7.8,3.5
	                  c0-0.3-0.2-0.6-0.3-0.9c-0.1,0-0.3,0-0.4,0C7.1,2.4,6.9,2.2,6.7,2.1C6.7,2,6.4,1.9,6.4,1.8c0,0,0.2-0.2,0.2-0.3c0,0,0-0.1,0-0.1
	                  c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.2,0.2C7.3,1.7,7.7,1.7,8,1.7z"
                          ></path>
                          <path
                            className="st0"
                            d="M23.5,1.9c0,0.1-0.1,0.2-0.1,0.4c-0.1,0.3-0.2,0.6-0.5,0.9c0,0.3,0,0.5-0.1,0.7c-0.1,0.1-0.3,0.2-0.3,0.4
	                  c0,0.1,0,0.2,0,0.3c0,0.2-0.2,0.3-0.3,0.4c-0.1,0.4-0.1,0.9-0.2,1.2c-0.1,0.1-0.2,0.3-0.2,0.4c0,0.1,0,0.1,0,0.2c0,0.2,0,0.5,0,0.7
	                  c0,0.2,0,0.4,0,0.6c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.2-0.1,0.4-0.2,0.6c-0.1,0.2-0.1,0.4-0.3,0.5c0,0.2,0,0.3,0,0.5
	                  c-0.1,0.2-0.4,0.3-0.4,0.6c0,0.2,0,0.5,0,0.8c0,0.3,0,0.5,0,0.8c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.2-0.2,0.4-0.2,0.6c0,0.2,0,0.5,0,0.7
	                  c0,0.5-0.3,0.8-0.5,1.2c0,0.4-0.2,0.6-0.2,0.9c0.1,0.1,0.1-0.1,0.2-0.1c0.2,0.2,0.5,0,0.8,0c0.1-0.2,0.1-0.3,0.2-0.5
	                  c0.1-0.2,0.5-0.2,0.7-0.3c0.1,0,0.3-0.2,0.4-0.2c0.4-0.2,0.7-0.3,0.9-0.7c0.1,0,0.1,0.2,0.2,0.2c0.2,0.1,0.5-0.1,0.6,0
	                  c0.1,0,0.3,0.3,0.3,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.2,0.1,0.3c0,0.2,0,0.4,0,0.7c0,0.2,0,0.5,0,0.6
	                  c0,0.1-0.2,0.2-0.2,0.3c-0.7,0-1.4,0-2.1,0c-0.1,0-0.1-0.1-0.2-0.2c-0.2,0-0.4-0.1-0.6-0.1c-0.2,0-0.3,0.3-0.5,0.3
	                  c-0.4,0.1-0.8,0-1.2,0c-0.3,0-0.5,0.3-0.8,0.3c-0.1-0.1-0.1-0.3-0.1-0.6c0-0.2,0-0.4,0-0.5c0-0.1,0.2-0.2,0.2-0.3
	                  c0-0.1,0-0.3-0.1-0.4c0.1-0.1,0.2-0.1,0.3-0.3c0-0.1,0-0.3,0-0.5c0.1-0.1,0.2-0.1,0.2-0.2c0-0.1,0-0.2,0-0.4c0-0.1,0.1-0.2,0.1-0.3
	                  c0-0.1,0.1-0.3,0.1-0.4c0-0.2,0-0.4-0.1-0.6c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.3-0.1-0.8-0.1-1.2c0-0.4,0-0.8,0.1-1.2
	                  c0-0.2,0.1-0.4,0.2-0.6c0.2-0.5,0.4-1.1,0.6-1.6c0-0.1-0.1-0.1-0.1-0.3c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0-0.3,0-0.4
	                  c0-0.1,0.1-0.3,0.2-0.4c0.1-0.2,0.2-0.3,0.2-0.5c0-0.1,0-0.3,0-0.5c0-0.2,0.1-0.3,0.2-0.5C20.6,5,20.8,4.6,21,4.3
	                  c0.1-0.1,0.1-0.1,0.2-0.2c0-0.1,0-0.3,0-0.4c0-0.1,0.1-0.1,0.1-0.2c-0.2-0.2-0.5,0-0.8-0.1c-0.1,0-0.1-0.2-0.2-0.2
	                  c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0.1c-0.2,0.1-0.3,0.7-0.4,1c-0.1,0.4-0.1,0.9-0.4,1.1c-0.2,0.1-0.3,0-0.4,0.2
	                  c-0.1-0.1-0.2-0.2-0.3-0.2c0-0.1,0.1-0.2,0.1-0.3c0-0.2-0.1-0.3-0.1-0.4c0-0.1,0.2-0.2,0.2-0.3c0-0.2,0-0.4,0-0.6c0-0.6,0-1.3,0-1.9
	                  c0,0,0,0,0.1,0c1.6,0,3.1,0,4.7,0c0.1,0,0.1,0.1,0.1,0.2C23.4,1.8,23.5,1.8,23.5,1.9z"
                          ></path>
                          <path
                            className="st0"
                            d="M9.8,1.9c0.8,0.1,1.9,0.1,2.6,0c0.1,0.1,0.3,0.2,0.2,0.5c-0.3,0.1-0.8,0.3-0.7,0.7c0,0.1,0.2,0.2,0.2,0.4
	                  c0,0.2-0.2,0.2-0.2,0.4c0,0.2,0,0.5,0,0.8c0,0.9,0.1,1.8,0,2.7c0,0.2,0,0.3,0,0.4c0,0.1,0,0.1,0.1,0.2C12,8.2,12,8.4,12.1,8.7
	                  c-0.1,0.1-0.2,0.2-0.3,0.4c0,0.2,0,0.8,0.1,1c0,0.1,0,0.2,0,0.3c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.4,0,0.5c0,0.1-0.2,0.2-0.3,0.3
	                  c0,0.1,0,0.3,0.1,0.5c0,0.2,0,0.3,0.1,0.5c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.3,0,0.5c0,0.2,0,0.4,0,0.5
	                  c0,0.1-0.2,0.2-0.2,0.3c0,0.1,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.3,0.2,0.4,0.3c0,0.2,0,0.3,0.1,0.5
	                  c-0.2-0.1-0.5-0.1-0.7,0c-0.3-0.1-0.6-0.1-1-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0.1-0.2,0.3-0.4,0.3c-0.2,0-0.2-0.2-0.3-0.2
	                  c0.2-0.2,0.4-0.5,0.7-0.7c0.1-0.4,0.1-0.9,0.1-1.4c0-0.2,0-0.4,0-0.5c0-0.1,0.1-0.1,0.1-0.2c0-0.1-0.1-0.2-0.1-0.4
	                  c0-0.1,0-0.3,0-0.5c0-0.1,0.1-0.2,0.1-0.3c0-0.2,0-0.6,0-0.9c0-1.4,0-2.9,0-4.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.1,0.1-0.2
	                  c0-0.1-0.1,0-0.1-0.1C10.7,5,10.7,4,10.6,3.1c0-0.1,0-0.3,0-0.4c-0.1-0.3-0.5-0.1-0.6-0.4c-0.1,0-0.1,0-0.2,0
	                  C9.8,2.3,9.7,2.2,9.6,2.1C9.6,2,9.7,2,9.8,1.9z"
                          ></path>
                          <path
                            className="st0"
                            d="M13.4,1.9c1.4-0.1,2.8,0,4.2,0c0,0.2,0,0.5,0,0.8c0,0.1,0.1,0.2,0.1,0.3c0,0.2,0,0.4,0,0.7c0,0.6,0,1.3,0,1.9
	                  c0,0.1-0.1,0.1-0.2,0.2c-0.1,0.2,0,0.5,0,0.7c-0.5,0.4-0.6,1.2-0.9,1.8c0,0.2,0,0.4,0,0.6c-0.4,0.2-0.9,0.4-0.7,1.2
	                  c0,0.1-0.1,0.1-0.2,0.2c-0.2,0.2-0.4,0.7-0.6,1c-0.1,0.2-0.2,0.4-0.2,0.6c-0.1,0.2-0.2,0.4-0.2,0.6c0,0.1,0,0.2,0,0.4
	                  c0,0.1-0.1,0.4-0.2,0.5c-0.2,0.5-0.3,0.9-0.5,1.3c0,0.1-0.1,0.2-0.1,0.2c0.2,0.1,0.3,0,0.5-0.1c0.1-0.1,0.3-0.2,0.4-0.2
	                  c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.3-0.4c0.2-0.3,0.5-0.7,0.9-0.8c0.1-0.3,0.1-0.5,0.3-0.6
	                  c0.1,0,0.1,0.1,0.1,0.2c0.3-0.1,0.3-0.5,0.5-0.7c0.1,0,0.3,0,0.4,0c0,0.3,0,0.7,0.1,0.9c0,0.1-0.1,0.1-0.2,0.1c0,0,0,0.1-0.1,0.2
	                  c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.6,0,1.4,0,2c-0.3,0-0.5,0.1-0.6,0.3c-0.5,0-1,0-1.5,0c-0.1,0-0.1-0.1-0.2-0.2c-0.1,0-0.2,0-0.3,0
	                  c-0.2,0.1-0.2,0.3-0.4,0.3c-0.2,0-0.4-0.1-0.5-0.2c-0.3,0-0.7,0-1,0c-0.1-0.1-0.2-0.2-0.2-0.3c0-0.1,0.1-0.2,0.2-0.3
	                  c0-0.3-0.1-0.6,0-0.8c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.2-0.5-0.3-0.6c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.2-0.1-0.3
	                  c-0.1-0.3,0-0.6,0.1-0.9c0-0.2,0-0.4,0.1-0.5c0-0.1,0.1-0.2,0.1-0.2c0.1-0.2,0-0.4,0.1-0.6c0.1-0.3,0.4-0.5,0.5-0.8
	                  c0.1-0.5,0.3-0.9,0.6-1.2c0.1-0.4,0.2-0.9,0.3-1.3c0.1-0.3,0.2-0.5,0.5-0.6c0.1-0.3,0.4-0.5,0.6-0.7C16,5.6,16,5.3,16.1,5
	                  c0.1-0.1,0.2-0.1,0.2-0.2c0.3-0.3,0.5-0.7,0.7-1c0-0.3,0-0.6,0-0.9c-0.3,0-0.5,0-0.8,0c-0.2,0-0.5,0-0.7,0c-0.1,0-0.3,0.1-0.4,0.2
	                  c-0.3,0.2-0.5,0.4-0.5,0.9c-0.3,0-0.4,0.1-0.6,0.3c0,0.4,0.1,0.8,0,1.2c0,0.1-0.1,0.2-0.2,0.3C14,5.9,13.9,6,13.8,6.1
	                  c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.1-0.1-0.1-0.2-0.2c0-0.2-0.1-0.6-0.1-0.7c0.1-0.3,0.2-0.6,0.1-0.9c-0.1-0.1-0.2-0.2-0.2-0.3
	                  c0.1-0.4-0.1-0.9,0-1.3C13.3,2.1,13.4,2,13.4,1.9C13.4,1.9,13.4,1.9,13.4,1.9z"
                          ></path>
                          <path
                            className="st0"
                            d="M5.1,7.3c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0,0.4,0,0.4,0.1C6,7.9,5.6,8.2,5.7,8.4c0.1,0.1,0.1,0,0.2,0
	                  C6,8.5,6.1,8.8,6.3,8.9c-0.1,0.5-0.2,1.2,0,1.6c0.1,0.2,0.2,0.2,0.3,0.3c-0.2,0.8,0.2,1.9-0.1,2.6c0,0.1-0.2,0.2-0.2,0.3
	                  c0,0.1,0,0.3,0.1,0.4c0.1,0.3,0.1,0.6,0,0.9c0,0.1-0.1,0.3-0.2,0.4c-0.1,0.3-0.3,0.5-0.4,0.7c-0.1,0.3-0.1,0.6-0.2,1
	                  c-0.4,0.2-0.8,0.4-1.1,0.6C4.3,18,4.1,18.1,4,18.3c-0.4,0.1-0.8,0.1-1.1,0.3c-0.1,0-0.2-0.2-0.3-0.2c-0.1,0-0.2,0.2-0.3,0.2
	                  c-0.1,0-0.3,0-0.4,0c-0.3,0-0.5,0-0.8-0.1c-0.1,0.1-0.3,0-0.5,0c0,0-0.1,0-0.1,0c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.2-0.2-0.3-0.3
	                  c0.2-0.1,0.4-0.1,0.5-0.3c0.1-0.4,0.3-0.8,0.3-1.2c0-0.2,0-0.3,0-0.5C0.9,16,1,15.6,1,15.2c0-0.7-0.1-1.3-0.2-2c0-0.9,0.1-1.8,0-2.7
	                  c0-0.1,0.2-0.1,0.2-0.1c0-0.2,0-0.5,0-0.7c0-0.1-0.1-0.2-0.1-0.2c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.1,0.1-0.2,0.2-0.3
	                  c0.1-0.3,0-0.5-0.2-0.7c0-0.8,0-1.8,0-2.6c0-0.3-0.1-0.6,0-0.9c0-0.1,0.1-0.1,0.2-0.2c0-0.2,0-0.3,0-0.4c-0.1-0.1-0.2,0-0.3,0
	                  c-0.1,0,0-0.1-0.1-0.2C0.6,3,0.3,2.9,0.2,2.7C0.1,2.7,0.1,2.6,0,2.5c0-0.1,0-0.2,0-0.3C0,2.1,0.2,2,0.2,2c0.2,0,0.4,0,0.7,0
	                  c0.1,0,0.3-0.1,0.4-0.1C2,1.7,3,1.8,3.9,1.7c0.3,0,0.6,0,0.9,0C4.9,1.8,4.9,1.9,5,2C5,2.1,5.2,2.1,5.3,2.2c0.5,0,0.7,0.3,0.9,0.6
	                  c0.1,0.2,0.3,0.5,0.3,0.8c0,0.2,0,0.4,0,0.6c0,0.3,0.1,0.5,0,0.8c0,0.1-0.1,0.2-0.2,0.3C5.9,6,5.5,6.9,5.1,7.3z M3.3,3.9
	                  C3.3,4,3.2,4,3.2,4.1c0,0.9,0,1.7,0,2.6c0.1,0,0.2,0,0.3,0c0.2-0.1,0.2-0.3,0.3-0.5C3.9,6,4.2,5.9,4.5,5.8c0-0.4-0.1-0.9,0.1-1.2
	                  C4.5,4.5,4.5,4.4,4.5,4.2c0-0.1,0.2-0.1,0.2-0.2C4.5,4,4.4,4,4.3,4C4.2,3.9,4.1,3.7,4,3.7C3.8,3.6,3.6,3.8,3.4,3.7
	                  c0,0,0.1-0.1,0-0.1C3.4,3.7,3.3,3.8,3.3,3.9z M3.2,9.8c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.3,0.1,0.6,0.1,0.9c0,0.2-0.1,0.4-0.1,0.7
	                  c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.1,0.2,0.2c0,0.9,0,1.7,0,2.6c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.3,0,0.7,0,1.1c0,0.2,0,0.4,0.1,0.5
	                  c-0.1,0.2-0.2,0.3-0.2,0.5c0.4,0,0.5-0.3,0.8-0.4C3.7,16.3,3.8,16.1,4,16c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.3,0-0.7,0.1-1.1
	                  c0.2-0.3,0.3-0.8,0.3-1.3c0-0.1-0.1-0.1-0.1-0.1c0.2-0.1,0.1-0.3,0-0.5c-0.1-0.2-0.1-0.3-0.1-0.5c0-0.1,0.1-0.1,0.2-0.2
	                  c0.1-0.3-0.1-0.4-0.2-0.5c-0.1-0.3,0.1-0.6,0.1-0.9c0-0.1-0.1-0.1-0.1-0.1c0.2-0.2-0.1-0.5-0.1-0.6c0,0,0.1,0,0.1,0
	                  C4.3,9.8,4.3,9.7,4.3,9.6c0-0.1,0.1-0.1,0.1-0.2C4.2,9.3,4.1,9.2,3.9,9C3.7,8.9,3.4,8.6,3.2,8.4C3.2,8.9,3.3,9.3,3.2,9.8z"
                          ></path>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">About Blizzard</div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8M14 2L20 8M14 2V8H20M16 13H8M16 17H8M10 9H8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">News</div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21M4 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">Careers</div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 4C15.5 5.5 13.7 6 12 6C10.3 6 8.5 5.5 8 4L2 6L3 12L6 11V15V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V15V11L21 12L22 6L16 4Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">
                            Gear
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              focusable="false"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              role="presentation"
                              fill="none"
                              strokeWidth="3px"
                              viewBox="0 0 24 24"
                            >
                              <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-right-item">Shop</div>
            </li>
            <li>
              <div className="nav-right-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="account-icon"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Account</span>
                <div className="down-arrow">
                  <svg>
                    <use
                      href="../pictures/down_arrow.svg#down-arrow"
                      xlinkHref="../pictures/down_arrow.svg#down-arrow"
                    ></use>
                  </svg>
                </div>

                <div className="nav-hover-container">
                  <div className="nav-hover-cont">
                    <div className="nav-hover-arrow"></div>

                    <div className="nav-hover-main">
                      <div className="nav-hover-button">
                        <div className="nav-button-items">
                          <svg>
                            <use
                              href="../pictures/bnet-logo-01.svg#Layer_1"
                              xlinkHref="../pictures/bnet-logo-01.svg#Layer_1"
                            ></use>
                          </svg>
                          Log In
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg>
                          <use
                            href="../pictures/clog.svg#clog"
                            xlinkHref="../pictures/clog.svg#clog"
                          ></use>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">
                            Account Settings
                          </div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg>
                          <use
                            href="../pictures/signup_icon.svg#signup"
                            xlinkHref="../pictures/signup_icon.svg"
                          ></use>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">Sign Up</div>
                        </div>
                      </div>
                    </div>

                    <div className="nav-hover-submain">
                      <div className="nav-hover-item nav-hover-right">
                        <svg>
                          <use
                            href="../pictures/support_icon.svg#support"
                            xlinkHref="../pictures/support_icon.svg#support"
                          ></use>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">Support</div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg>
                          <use
                            href="../pictures/shop_icon.svg#shop"
                            xlinkHref="../pictures/shop_icon.svg#shop"
                          ></use>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">Shop</div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg>
                          <use
                            href="../pictures/download_icon.svg#download"
                            xlinkHref="../pictures/download_icon.svg#download"
                          ></use>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">
                            Download Battle.net
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-right-item" id="nav-last">
                <button className="nav-button">
                  <svg>
                    <use
                      href="../pictures/bnet-logo-01.svg#Layer_1"
                      xlinkHref="../pictures/bnet-logo-01.svg#Layer_1"
                    ></use>
                  </svg>
                  <span>Download Battle.net</span>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      )}

      {size <= 980 && (
        <div className="small-nav">
          <div className="small-nav-left" onClick={() => showLeftNavbar()}>
            <svg>
              <use
                href="../pictures/menu_icon.svg#menu"
                xlinkHref="../pictures/menu_icon.svg#menu"
              ></use>
            </svg>
          </div>

          <div className="small-nav-logo">
            <svg>
              <use
                xlinkHref="../pictures/blizzard_logo.svg#blizzard-logo"
                href="../pictures/blizzard_logo.svg#blizzard-logo"
              ></use>
            </svg>
          </div>

          <div className="small-nav-right" onClick={() => showRightNavbar()}>
            <svg>
              <use
                href="../pictures/profile_icon.svg#profile"
                xlinkHref="../pictures/profile_icon.svg#profile"
              ></use>
            </svg>
          </div>

          <AnimatePresence>
            {showLeftNav && (
              <motion.div
                className="small-left-nav"
                key="leftNav"
                initial={{ left: "-480px" }}
                animate={{ left: "0" }}
                exit={{ left: "-480px" }}
              >
                <div className="top">
                  <div className="small-nav-left" onClick={() => closeAll()}>
                    <svg>
                      <use
                        href="../pictures/sm-cancel.svg#cancel"
                        xlinkHref="../pictures/sm-cancel.svg#cancel"
                      ></use>
                    </svg>
                  </div>

                  <div className="small-nav-logo" id="small-menu-logo">
                    <svg>
                      <use
                        xlinkHref="../pictures/blizzard_logo.svg#blizzard-logo"
                        href="../pictures/blizzard_logo.svg#blizzard-logo"
                      ></use>
                    </svg>
                  </div>

                  <div className="left-top-placeholder"></div>
                </div>

                <div className="small-nav-left-container">
                  <div className="small-nav-left-main-cont">
                    <div
                      className="small-nav-left-main"
                      style={{
                        backgroundColor: `${
                          showWarcraft ? "#10111B" : "#171926"
                        }`,
                      }}
                    >
                      <div
                        className="small-nav-left-heading"
                        onClick={() => {
                          setShowWarcraft(!showWarcraft);
                          closeSubItems(0);
                        }}
                      >
                        <span>Warcraft</span>
                        <div className="down-arrow">
                          <svg>
                            <use
                              href="../pictures/down_arrow.svg#down-arrow"
                              xlinkHref="../pictures/down_arrow.svg#down-arrow"
                            ></use>
                          </svg>
                        </div>
                      </div>
                      {showWarcraft && (
                        <div className="small-nav-left-subitems">
                          <div className="nav-hover-item nav-hover-left">
                            <img
                              src="../pictures/world-of-warcraft.webp"
                              alt="wow"
                            />
                            <div className="nav-hover-words">
                              <p className="nav-hover-title">
                                World of Warcraft
                              </p>
                              <p className="nav-hover-genre">MMORPG</p>
                            </div>
                          </div>

                          <div className="nav-hover-item nav-hover-left">
                            <svg>
                              <use
                                href="../pictures/wow_classic.svg#wow-classic"
                                xlinkHref="../pictures/wow_classic.svg#wow-classic"
                              ></use>
                            </svg>
                            <div className="nav-hover-words">
                              <p className="nav-hover-title">
                                World of Warcraft Classic
                              </p>
                              <p className="nav-hover-genre">MMORPG</p>
                            </div>
                          </div>

                          <div className="nav-hover-item nav-hover-left">
                            <img
                              src="../pictures/hearthstone.webp"
                              alt="heartstone"
                            />
                            <div className="nav-hover-words">
                              <p className="nav-hover-title">Hearthstone</p>
                              <p className="nav-hover-genre">
                                Strategy Card Game
                              </p>
                            </div>
                          </div>

                          <div className="nav-hover-item nav-hover-left">
                            <img
                              src="../pictures/warcraft-III.webp"
                              alt="warcraft 3"
                            />
                            <div className="nav-hover-words">
                              <p className="nav-hover-title">
                                Warcraft III: Reforged
                              </p>
                              <p className="nav-hover-genre">
                                Real-Time Strategy
                              </p>
                            </div>
                          </div>
                          <p className="small-nav-upcoming">UPCOMING</p>
                          <div className="nav-hover-item nav-hover-left">
                            <svg>
                              <use
                                href="../pictures/warcraft_arclight.svg#warcraft-arclight"
                                xlinkHref="../pictures/warcraft_arclight.svg#warcraft-arclight"
                              ></use>
                            </svg>
                            <div className="nav-hover-words">
                              <div className="nav-hover-title">
                                Warcraft Arclight Rumble
                              </div>
                              <div className="nav-hover-genre">
                                Mobile Action Strategy
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className="small-nav-left-main"
                      style={{
                        backgroundColor: `${
                          showDiablo ? "#10111B" : "#171926"
                        }`,
                      }}
                    >
                      <div
                        className="small-nav-left-heading"
                        onClick={() => {
                          setShowDiablo(!showDiablo);
                          closeSubItems(1);
                        }}
                      >
                        <span>Diablo</span>
                        <div className="down-arrow">
                          <svg>
                            <use
                              href="../pictures/down_arrow.svg#down-arrow"
                              xlinkHref="../pictures/down_arrow.svg#down-arrow"
                            ></use>
                          </svg>
                        </div>
                      </div>

                      {showDiablo && (
                        <div className="small-nav-left-subitems">
                          <div className="nav-hover-item nav-hover-left">
                            <img
                              src="../pictures/diablo-IV.webp"
                              alt="Diablo 4"
                            />
                            <div className="nav-hover-words">
                              <div className="nav-hover-title">Diablo IV</div>
                              <div className="nav-hover-genre">
                                Action RPG{" "}
                                <span className="nav-hover-new">NEW</span>
                              </div>
                            </div>
                          </div>

                          <div className="nav-hover-item nav-hover-left">
                            <img
                              src="../pictures/diablo-immortal (1).webp"
                              alt="Diablo imortal"
                            />
                            <div className="nav-hover-words">
                              <div className="nav-hover-title">
                                Diablo Immortal
                              </div>
                              <div className="nav-hover-genre">Action RPG</div>
                            </div>
                          </div>

                          <div className="nav-hover-item nav-hover-left">
                            <img
                              src="../pictures/diablo-II.webp"
                              alt="Diablo 2"
                            />
                            <div className="nav-hover-words">
                              <div className="nav-hover-title">
                                Diablo II: Resurrected
                              </div>
                              <div className="nav-hover-genre">Action RPG</div>
                            </div>
                          </div>

                          <div className="nav-hover-item nav-hover-left">
                            <img
                              src="../pictures/diablo-III.webp"
                              alt="Diablo 3"
                            />
                            <div className="nav-hover-words">
                              <div className="nav-hover-title">Diablo III</div>
                              <div className="nav-hover-genre">Action RPG</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className="small-nav-left-main"
                      style={{
                        backgroundColor: `${
                          showOverwatch ? "#10111B" : "#171926"
                        }`,
                      }}
                    >
                      <div
                        className="small-nav-left-heading"
                        onClick={() => {
                          setShowOverwatch(!showOverwatch);
                          closeSubItems(2);
                        }}
                      >
                        <span>Overwatch</span>
                        <div className="down-arrow">
                          <svg>
                            <use
                              href="../pictures/down_arrow.svg#down-arrow"
                              xlinkHref="../pictures/down_arrow.svg#down-arrow"
                            ></use>
                          </svg>
                        </div>
                      </div>

                      {showOverwatch && (
                        <div className="small-nav-left-subitems">
                          <div className="nav-hover-item nav-hover-left">
                            <img
                              src="../pictures/overwatch-2.webp"
                              alt="Overwatch"
                            />
                            <div className="nav-hover-words">
                              <div className="nav-hover-title">Overwatch 2</div>
                              <div className="nav-hover-genre">
                                Team-Based Action
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="small-nav-left-main"
                      style={{
                        backgroundColor: `${
                          showStarcraft ? "#10111B" : "#171926"
                        }`,
                      }}>
                        <div className="small-nav-left-heading"
                        onClick={() => {
                          setShowStarcraft(!showStarcraft);
                          closeSubItems(3);
                        }}>
                          <span>StarCraft</span>
                        <div className="down-arrow">
                          <svg>
                            <use
                              href="../pictures/down_arrow.svg#down-arrow"
                              xlinkHref="../pictures/down_arrow.svg#down-arrow"
                            ></use>
                          </svg>
                        </div>
                        </div>

                        {showStarcraft && <div className="small-nav-left-subitems">
                        <div className="nav-hover-item nav-hover-left">
                          <img
                            src="../pictures/starcraft-II.webp"
                            alt="Starcraft 2"
                          />

                          <div className="nav-hover-words">
                            <div className="nav-hover-title">StarCraft II</div>
                            <div className="nav-hover-genre">
                              Real-Time Strategy
                            </div>
                          </div>
                        </div>

                        <div className="nav-hover-item nav-hover-left">
                          <img
                            src="../pictures/starcraft.webp"
                            alt="Starcraft"
                          />

                          <div className="nav-hover-words">
                            <div className="nav-hover-title">
                              StarCraft: Remastered
                            </div>
                            <div className="nav-hover-genre">
                              Real-Time Strategy
                            </div>
                          </div>
                        </div>
                        </div>}
                      </div>

                    <div className="small-nav-left-main">
                      <div className="small-nav-left-heading">
                        <span>Heroes of the Storm</span>
                      </div>
                    </div>

                    <div className="nav-hover-button small-nav-button">
                        <div className="nav-button-items small-nav-button-items">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3H3V10H10V3Z"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M21 3H14V10H21V3Z"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M21 14H14V21H21V14Z"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M10 14H3V21H10V14Z"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          All Games
                        </div>
                      </div>
                  </div>

                  <div className="small-nav-left-about-cont">
                    <p>ABOUT</p>
                    <div className="small-nav-about-cont">
                    <div className="nav-hover-item nav-hover-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 20"
                          fill="currentColor"
                        >
                          <path
                            className="st0"
                            d="M8,1.7C8.2,1.8,8.2,1.9,8.4,2c0.1,0,0.1,0,0.2,0C8.8,2.2,9,2.5,9.3,2.7c0,0.2,0,0.4,0,0.7c0,0.2,0,0.5,0,0.7
	                  c0,0.1-0.1,0.1-0.2,0.2c0,0.2,0.2,0.2,0.3,0.3c0,0.2,0,0.4,0,0.6c0,0.1-0.1,0.1-0.1,0.2c0,0.7,0,1.4,0,2.2c0,0.2-0.1,0.5,0,0.7
	                  c0,0.1,0.2,0.2,0.3,0.3c0,0.1,0.1,0.3,0.1,0.5c0,0.7,0,1.4,0,2.1c0,0.2,0,0.3,0,0.4c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.3,0.1,0.7,0,0.9
	                  c0,0.1,0.1,0.1,0.1,0.2c0,0.2,0,0.6,0,0.8c-0.1,0.1-0.1,0.1-0.2,0.2c0,0-0.1,0.2-0.1,0.2c0,0.1,0.2,0.2,0.1,0.5c0,0.1,0,0.1-0.1,0.2
	                  c0,0.2,0.1,0.4,0,0.6c0,0.1-0.1,0.1-0.2,0.2c-0.1,0.2,0.1,0.6,0,0.9c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0.2,0.3,0.1,0.5c0.2,0,0.3,0,0.5,0
	                  c0.2,0,0.4,0,0.5,0c0.1,0,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.3,0,0.5,0.1c0.3,0.1,0.9,0.2,1.2,0
	                  c0.1,0,0.1-0.1,0.2-0.2c0.2-0.1,0.6-0.1,0.9-0.1c1.2-0.1,2.7,0,3.9,0c0,0.3,0,0.6,0,0.9c0,0.3,0,0.6,0,0.9c0,0.3,0.3,0.4,0.3,0.6
	                  c-0.4,0-1,0-1.4,0c-0.2,0-0.4,0-0.5,0c-0.1,0-0.1-0.1-0.2-0.2c-0.3,0-0.5,0-0.6-0.2c-0.2,0-0.3-0.1-0.4-0.2c-0.2,0-0.4,0-0.7,0
	                  c-0.4,0-0.8,0.1-0.9-0.2c-1.1,0-2.3,0-3.5,0C9.4,18,9,17.8,8.7,17.9c-0.1,0-0.2,0.1-0.4,0.2C8.2,18.3,8,18.3,8,18.4
	                  c-0.1,0.1-0.2,0.2-0.2,0.3c-0.4-0.1-0.9-0.2-1.3,0c-0.1,0-0.1-0.2-0.2-0.2c0-0.1,0.2-0.2,0.2-0.3C6.7,18,7,17.8,7.3,17.5
	                  c0-0.2,0-0.4,0-0.6c0-0.1,0.1-0.1,0.2-0.2c0-0.1-0.1-0.1-0.2-0.2c0.1-0.4-0.1-0.7,0-1c0-0.1,0.1-0.1,0.2-0.2c0-0.1,0-0.3,0-0.4
	                  c0-0.1,0.1-0.1,0.1-0.2c0-0.3-0.2-0.4-0.3-0.5c0-0.6,0-1.2,0-1.9c0-0.1,0.1-0.1,0.2-0.2c0-0.3-0.1-0.7,0-1c0-0.1,0.1-0.1,0.1-0.2
	                  c0-0.2,0-0.5,0-0.7c0-0.2,0-0.5,0-0.7c0-0.2,0.2-0.2,0.2-0.4c0-0.2-0.1-0.2-0.2-0.3c0-0.4,0-1,0-1.5c0-0.2,0-0.4,0-0.5
	                  c0-0.1-0.1-0.1-0.1-0.2c0-0.2,0-0.3,0-0.5c0-0.2,0-0.4,0-0.5c0-0.2,0.2-0.2,0.3-0.3c0-0.4,0.2-1-0.2-1.1C7.6,4,7.8,3.8,7.8,3.5
	                  c0-0.3-0.2-0.6-0.3-0.9c-0.1,0-0.3,0-0.4,0C7.1,2.4,6.9,2.2,6.7,2.1C6.7,2,6.4,1.9,6.4,1.8c0,0,0.2-0.2,0.2-0.3c0,0,0-0.1,0-0.1
	                  c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.2,0.2C7.3,1.7,7.7,1.7,8,1.7z"
                          ></path>
                          <path
                            className="st0"
                            d="M23.5,1.9c0,0.1-0.1,0.2-0.1,0.4c-0.1,0.3-0.2,0.6-0.5,0.9c0,0.3,0,0.5-0.1,0.7c-0.1,0.1-0.3,0.2-0.3,0.4
	                  c0,0.1,0,0.2,0,0.3c0,0.2-0.2,0.3-0.3,0.4c-0.1,0.4-0.1,0.9-0.2,1.2c-0.1,0.1-0.2,0.3-0.2,0.4c0,0.1,0,0.1,0,0.2c0,0.2,0,0.5,0,0.7
	                  c0,0.2,0,0.4,0,0.6c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.2-0.1,0.4-0.2,0.6c-0.1,0.2-0.1,0.4-0.3,0.5c0,0.2,0,0.3,0,0.5
	                  c-0.1,0.2-0.4,0.3-0.4,0.6c0,0.2,0,0.5,0,0.8c0,0.3,0,0.5,0,0.8c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.2-0.2,0.4-0.2,0.6c0,0.2,0,0.5,0,0.7
	                  c0,0.5-0.3,0.8-0.5,1.2c0,0.4-0.2,0.6-0.2,0.9c0.1,0.1,0.1-0.1,0.2-0.1c0.2,0.2,0.5,0,0.8,0c0.1-0.2,0.1-0.3,0.2-0.5
	                  c0.1-0.2,0.5-0.2,0.7-0.3c0.1,0,0.3-0.2,0.4-0.2c0.4-0.2,0.7-0.3,0.9-0.7c0.1,0,0.1,0.2,0.2,0.2c0.2,0.1,0.5-0.1,0.6,0
	                  c0.1,0,0.3,0.3,0.3,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.2,0.1,0.3c0,0.2,0,0.4,0,0.7c0,0.2,0,0.5,0,0.6
	                  c0,0.1-0.2,0.2-0.2,0.3c-0.7,0-1.4,0-2.1,0c-0.1,0-0.1-0.1-0.2-0.2c-0.2,0-0.4-0.1-0.6-0.1c-0.2,0-0.3,0.3-0.5,0.3
	                  c-0.4,0.1-0.8,0-1.2,0c-0.3,0-0.5,0.3-0.8,0.3c-0.1-0.1-0.1-0.3-0.1-0.6c0-0.2,0-0.4,0-0.5c0-0.1,0.2-0.2,0.2-0.3
	                  c0-0.1,0-0.3-0.1-0.4c0.1-0.1,0.2-0.1,0.3-0.3c0-0.1,0-0.3,0-0.5c0.1-0.1,0.2-0.1,0.2-0.2c0-0.1,0-0.2,0-0.4c0-0.1,0.1-0.2,0.1-0.3
	                  c0-0.1,0.1-0.3,0.1-0.4c0-0.2,0-0.4-0.1-0.6c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.3-0.1-0.8-0.1-1.2c0-0.4,0-0.8,0.1-1.2
	                  c0-0.2,0.1-0.4,0.2-0.6c0.2-0.5,0.4-1.1,0.6-1.6c0-0.1-0.1-0.1-0.1-0.3c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0-0.3,0-0.4
	                  c0-0.1,0.1-0.3,0.2-0.4c0.1-0.2,0.2-0.3,0.2-0.5c0-0.1,0-0.3,0-0.5c0-0.2,0.1-0.3,0.2-0.5C20.6,5,20.8,4.6,21,4.3
	                  c0.1-0.1,0.1-0.1,0.2-0.2c0-0.1,0-0.3,0-0.4c0-0.1,0.1-0.1,0.1-0.2c-0.2-0.2-0.5,0-0.8-0.1c-0.1,0-0.1-0.2-0.2-0.2
	                  c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0.1c-0.2,0.1-0.3,0.7-0.4,1c-0.1,0.4-0.1,0.9-0.4,1.1c-0.2,0.1-0.3,0-0.4,0.2
	                  c-0.1-0.1-0.2-0.2-0.3-0.2c0-0.1,0.1-0.2,0.1-0.3c0-0.2-0.1-0.3-0.1-0.4c0-0.1,0.2-0.2,0.2-0.3c0-0.2,0-0.4,0-0.6c0-0.6,0-1.3,0-1.9
	                  c0,0,0,0,0.1,0c1.6,0,3.1,0,4.7,0c0.1,0,0.1,0.1,0.1,0.2C23.4,1.8,23.5,1.8,23.5,1.9z"
                          ></path>
                          <path
                            className="st0"
                            d="M9.8,1.9c0.8,0.1,1.9,0.1,2.6,0c0.1,0.1,0.3,0.2,0.2,0.5c-0.3,0.1-0.8,0.3-0.7,0.7c0,0.1,0.2,0.2,0.2,0.4
	                  c0,0.2-0.2,0.2-0.2,0.4c0,0.2,0,0.5,0,0.8c0,0.9,0.1,1.8,0,2.7c0,0.2,0,0.3,0,0.4c0,0.1,0,0.1,0.1,0.2C12,8.2,12,8.4,12.1,8.7
	                  c-0.1,0.1-0.2,0.2-0.3,0.4c0,0.2,0,0.8,0.1,1c0,0.1,0,0.2,0,0.3c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.4,0,0.5c0,0.1-0.2,0.2-0.3,0.3
	                  c0,0.1,0,0.3,0.1,0.5c0,0.2,0,0.3,0.1,0.5c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.3,0,0.5c0,0.2,0,0.4,0,0.5
	                  c0,0.1-0.2,0.2-0.2,0.3c0,0.1,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.3,0.2,0.4,0.3c0,0.2,0,0.3,0.1,0.5
	                  c-0.2-0.1-0.5-0.1-0.7,0c-0.3-0.1-0.6-0.1-1-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0.1-0.2,0.3-0.4,0.3c-0.2,0-0.2-0.2-0.3-0.2
	                  c0.2-0.2,0.4-0.5,0.7-0.7c0.1-0.4,0.1-0.9,0.1-1.4c0-0.2,0-0.4,0-0.5c0-0.1,0.1-0.1,0.1-0.2c0-0.1-0.1-0.2-0.1-0.4
	                  c0-0.1,0-0.3,0-0.5c0-0.1,0.1-0.2,0.1-0.3c0-0.2,0-0.6,0-0.9c0-1.4,0-2.9,0-4.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.1,0.1-0.2
	                  c0-0.1-0.1,0-0.1-0.1C10.7,5,10.7,4,10.6,3.1c0-0.1,0-0.3,0-0.4c-0.1-0.3-0.5-0.1-0.6-0.4c-0.1,0-0.1,0-0.2,0
	                  C9.8,2.3,9.7,2.2,9.6,2.1C9.6,2,9.7,2,9.8,1.9z"
                          ></path>
                          <path
                            className="st0"
                            d="M13.4,1.9c1.4-0.1,2.8,0,4.2,0c0,0.2,0,0.5,0,0.8c0,0.1,0.1,0.2,0.1,0.3c0,0.2,0,0.4,0,0.7c0,0.6,0,1.3,0,1.9
	                  c0,0.1-0.1,0.1-0.2,0.2c-0.1,0.2,0,0.5,0,0.7c-0.5,0.4-0.6,1.2-0.9,1.8c0,0.2,0,0.4,0,0.6c-0.4,0.2-0.9,0.4-0.7,1.2
	                  c0,0.1-0.1,0.1-0.2,0.2c-0.2,0.2-0.4,0.7-0.6,1c-0.1,0.2-0.2,0.4-0.2,0.6c-0.1,0.2-0.2,0.4-0.2,0.6c0,0.1,0,0.2,0,0.4
	                  c0,0.1-0.1,0.4-0.2,0.5c-0.2,0.5-0.3,0.9-0.5,1.3c0,0.1-0.1,0.2-0.1,0.2c0.2,0.1,0.3,0,0.5-0.1c0.1-0.1,0.3-0.2,0.4-0.2
	                  c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.3-0.4c0.2-0.3,0.5-0.7,0.9-0.8c0.1-0.3,0.1-0.5,0.3-0.6
	                  c0.1,0,0.1,0.1,0.1,0.2c0.3-0.1,0.3-0.5,0.5-0.7c0.1,0,0.3,0,0.4,0c0,0.3,0,0.7,0.1,0.9c0,0.1-0.1,0.1-0.2,0.1c0,0,0,0.1-0.1,0.2
	                  c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.6,0,1.4,0,2c-0.3,0-0.5,0.1-0.6,0.3c-0.5,0-1,0-1.5,0c-0.1,0-0.1-0.1-0.2-0.2c-0.1,0-0.2,0-0.3,0
	                  c-0.2,0.1-0.2,0.3-0.4,0.3c-0.2,0-0.4-0.1-0.5-0.2c-0.3,0-0.7,0-1,0c-0.1-0.1-0.2-0.2-0.2-0.3c0-0.1,0.1-0.2,0.2-0.3
	                  c0-0.3-0.1-0.6,0-0.8c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.2-0.5-0.3-0.6c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.2-0.1-0.3
	                  c-0.1-0.3,0-0.6,0.1-0.9c0-0.2,0-0.4,0.1-0.5c0-0.1,0.1-0.2,0.1-0.2c0.1-0.2,0-0.4,0.1-0.6c0.1-0.3,0.4-0.5,0.5-0.8
	                  c0.1-0.5,0.3-0.9,0.6-1.2c0.1-0.4,0.2-0.9,0.3-1.3c0.1-0.3,0.2-0.5,0.5-0.6c0.1-0.3,0.4-0.5,0.6-0.7C16,5.6,16,5.3,16.1,5
	                  c0.1-0.1,0.2-0.1,0.2-0.2c0.3-0.3,0.5-0.7,0.7-1c0-0.3,0-0.6,0-0.9c-0.3,0-0.5,0-0.8,0c-0.2,0-0.5,0-0.7,0c-0.1,0-0.3,0.1-0.4,0.2
	                  c-0.3,0.2-0.5,0.4-0.5,0.9c-0.3,0-0.4,0.1-0.6,0.3c0,0.4,0.1,0.8,0,1.2c0,0.1-0.1,0.2-0.2,0.3C14,5.9,13.9,6,13.8,6.1
	                  c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.1-0.1-0.1-0.2-0.2c0-0.2-0.1-0.6-0.1-0.7c0.1-0.3,0.2-0.6,0.1-0.9c-0.1-0.1-0.2-0.2-0.2-0.3
	                  c0.1-0.4-0.1-0.9,0-1.3C13.3,2.1,13.4,2,13.4,1.9C13.4,1.9,13.4,1.9,13.4,1.9z"
                          ></path>
                          <path
                            className="st0"
                            d="M5.1,7.3c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0,0.4,0,0.4,0.1C6,7.9,5.6,8.2,5.7,8.4c0.1,0.1,0.1,0,0.2,0
	                  C6,8.5,6.1,8.8,6.3,8.9c-0.1,0.5-0.2,1.2,0,1.6c0.1,0.2,0.2,0.2,0.3,0.3c-0.2,0.8,0.2,1.9-0.1,2.6c0,0.1-0.2,0.2-0.2,0.3
	                  c0,0.1,0,0.3,0.1,0.4c0.1,0.3,0.1,0.6,0,0.9c0,0.1-0.1,0.3-0.2,0.4c-0.1,0.3-0.3,0.5-0.4,0.7c-0.1,0.3-0.1,0.6-0.2,1
	                  c-0.4,0.2-0.8,0.4-1.1,0.6C4.3,18,4.1,18.1,4,18.3c-0.4,0.1-0.8,0.1-1.1,0.3c-0.1,0-0.2-0.2-0.3-0.2c-0.1,0-0.2,0.2-0.3,0.2
	                  c-0.1,0-0.3,0-0.4,0c-0.3,0-0.5,0-0.8-0.1c-0.1,0.1-0.3,0-0.5,0c0,0-0.1,0-0.1,0c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.2-0.2-0.3-0.3
	                  c0.2-0.1,0.4-0.1,0.5-0.3c0.1-0.4,0.3-0.8,0.3-1.2c0-0.2,0-0.3,0-0.5C0.9,16,1,15.6,1,15.2c0-0.7-0.1-1.3-0.2-2c0-0.9,0.1-1.8,0-2.7
	                  c0-0.1,0.2-0.1,0.2-0.1c0-0.2,0-0.5,0-0.7c0-0.1-0.1-0.2-0.1-0.2c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.1,0.1-0.2,0.2-0.3
	                  c0.1-0.3,0-0.5-0.2-0.7c0-0.8,0-1.8,0-2.6c0-0.3-0.1-0.6,0-0.9c0-0.1,0.1-0.1,0.2-0.2c0-0.2,0-0.3,0-0.4c-0.1-0.1-0.2,0-0.3,0
	                  c-0.1,0,0-0.1-0.1-0.2C0.6,3,0.3,2.9,0.2,2.7C0.1,2.7,0.1,2.6,0,2.5c0-0.1,0-0.2,0-0.3C0,2.1,0.2,2,0.2,2c0.2,0,0.4,0,0.7,0
	                  c0.1,0,0.3-0.1,0.4-0.1C2,1.7,3,1.8,3.9,1.7c0.3,0,0.6,0,0.9,0C4.9,1.8,4.9,1.9,5,2C5,2.1,5.2,2.1,5.3,2.2c0.5,0,0.7,0.3,0.9,0.6
	                  c0.1,0.2,0.3,0.5,0.3,0.8c0,0.2,0,0.4,0,0.6c0,0.3,0.1,0.5,0,0.8c0,0.1-0.1,0.2-0.2,0.3C5.9,6,5.5,6.9,5.1,7.3z M3.3,3.9
	                  C3.3,4,3.2,4,3.2,4.1c0,0.9,0,1.7,0,2.6c0.1,0,0.2,0,0.3,0c0.2-0.1,0.2-0.3,0.3-0.5C3.9,6,4.2,5.9,4.5,5.8c0-0.4-0.1-0.9,0.1-1.2
	                  C4.5,4.5,4.5,4.4,4.5,4.2c0-0.1,0.2-0.1,0.2-0.2C4.5,4,4.4,4,4.3,4C4.2,3.9,4.1,3.7,4,3.7C3.8,3.6,3.6,3.8,3.4,3.7
	                  c0,0,0.1-0.1,0-0.1C3.4,3.7,3.3,3.8,3.3,3.9z M3.2,9.8c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.3,0.1,0.6,0.1,0.9c0,0.2-0.1,0.4-0.1,0.7
	                  c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.1,0.2,0.2c0,0.9,0,1.7,0,2.6c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.3,0,0.7,0,1.1c0,0.2,0,0.4,0.1,0.5
	                  c-0.1,0.2-0.2,0.3-0.2,0.5c0.4,0,0.5-0.3,0.8-0.4C3.7,16.3,3.8,16.1,4,16c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.3,0-0.7,0.1-1.1
	                  c0.2-0.3,0.3-0.8,0.3-1.3c0-0.1-0.1-0.1-0.1-0.1c0.2-0.1,0.1-0.3,0-0.5c-0.1-0.2-0.1-0.3-0.1-0.5c0-0.1,0.1-0.1,0.2-0.2
	                  c0.1-0.3-0.1-0.4-0.2-0.5c-0.1-0.3,0.1-0.6,0.1-0.9c0-0.1-0.1-0.1-0.1-0.1c0.2-0.2-0.1-0.5-0.1-0.6c0,0,0.1,0,0.1,0
	                  C4.3,9.8,4.3,9.7,4.3,9.6c0-0.1,0.1-0.1,0.1-0.2C4.2,9.3,4.1,9.2,3.9,9C3.7,8.9,3.4,8.6,3.2,8.4C3.2,8.9,3.3,9.3,3.2,9.8z"
                          ></path>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">About Blizzard</div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8M14 2L20 8M14 2V8H20M16 13H8M16 17H8M10 9H8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">News</div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21M4 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">Careers</div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 4C15.5 5.5 13.7 6 12 6C10.3 6 8.5 5.5 8 4L2 6L3 12L6 11V15V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V15V11L21 12L22 6L16 4Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">
                            Gear
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              focusable="false"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              role="presentation"
                              fill="none"
                              strokeWidth="3px"
                              viewBox="0 0 24 24"
                            >
                              <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {showRightNav && (
              <motion.div
                className="small-right-nav"
                key="rightNav"
                initial={{ right: "-100vw" }}
                animate={{ right: -0, transition: { duration: 0.2 } }}
                exit={{ right: "-100vw" }}
              >
                <div className="top">
                  <div className="right-top-placeholder"></div>

                  <div className="small-nav-logo" id="small-menu-logo">
                    <svg>
                      <use
                        xlinkHref="../pictures/blizzard_logo.svg#blizzard-logo"
                        href="../pictures/blizzard_logo.svg#blizzard-logo"
                      ></use>
                    </svg>
                  </div>

                  <div className="small-nav-left" onClick={() => closeAll()}>
                    <svg>
                      <use
                        href="../pictures/sm-cancel.svg#cancel"
                        xlinkHref="../pictures/sm-cancel.svg#cancel"
                      ></use>
                    </svg>
                  </div>
                </div>

                <div className="small-nav-right-container">
                <div className="nav-hover-main">
                      <div className="small-nav-button nav-hover-button">
                        <div className="nav-button-items small-nav-button-items">
                          <svg>
                            <use
                              href="../pictures/bnet-logo-01.svg#Layer_1"
                              xlinkHref="../pictures/bnet-logo-01.svg#Layer_1"
                            ></use>
                          </svg>
                          Log In
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg>
                          <use
                            href="../pictures/clog.svg#clog"
                            xlinkHref="../pictures/clog.svg#clog"
                          ></use>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">
                            Account Settings
                          </div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg>
                          <use
                            href="../pictures/signup_icon.svg#signup"
                            xlinkHref="../pictures/signup_icon.svg"
                          ></use>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">Sign Up</div>
                        </div>
                      </div>
                    </div>

                    <div className=" small-nav-right-dark nav-hover-main">
                      <div className="nav-hover-item nav-hover-right">
                        <svg>
                          <use
                            href="../pictures/support_icon.svg#support"
                            xlinkHref="../pictures/support_icon.svg#support"
                          ></use>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">Support</div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg>
                          <use
                            href="../pictures/shop_icon.svg#shop"
                            xlinkHref="../pictures/shop_icon.svg#shop"
                          ></use>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">Shop</div>
                        </div>
                      </div>

                      <div className="nav-hover-item nav-hover-right">
                        <svg>
                          <use
                            href="../pictures/download_icon.svg#download"
                            xlinkHref="../pictures/download_icon.svg#download"
                          ></use>
                        </svg>

                        <div className="nav-hover-words">
                          <div className="nav-hover-title">
                            Download Battle.net
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {(showLeftNav || showRightNav) && (
            <div className="small-nav-overlay" onClick={() => closeAll()}></div>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
