import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-words-cont">
            <div className="languages-cont">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="currentColor">
            <path d="M9 0a9 9 0 109 9 8.963 8.963 0 00-9-9zm4.6 8.2a1.268 1.268 0 00.1.6c.4.2.9-.1 1.1.6-.6.4-1.1.7-1.7 1.1-.4-.7-.7-1.4-1.1-2-.1 0-.1.1-.2.1a24.425 24.425 0 011 2.4 5.073 5.073 0 01.9-.2c.1 1.1-.9 1.4-1.2 2v1a8.306 8.306 0 00-1.3 1.4c-.5.5-.9.9-1.7.7-.3-.6-.9-1.1-.7-1.9.2-.9-.3-1.6-.6-2.5H5.9a4.675 4.675 0 01-1-.9 3.494 3.494 0 011.4-3.8c-.5-.4-.5-.4-.4-1 .3-.1.6-.1.8-.2-.1-.2-.1-.5-.2-.7.5-.4 1.2-.8 1.6-1.1.5 0 .9.1 1.2.1l.9-.9c-.3-.3-.6-.4-.8-.6-.1.3-.2.7-.3 1.1a9.081 9.081 0 01-1.4-.7 2.04 2.04 0 012-.9h1.8a8.046 8.046 0 014.9 7.5v.7c-.3-1.4-1.5-1.7-2.8-1.9z">
            </path>
            <path d="M9.9 6.6c-.4-.5-.4-1.1-1.1-1 .2.2.3.5.5.7-.1 0-.1.1-.2.1-.3-.3-.7-.6-1-.9a1.825 1.825 0 00-1.4 1.4c.6-.1 1-.1 1.4-.2a6.788 6.788 0 011.2 1.2 5.923 5.923 0 00.6-.4c1.4.3 1.4.3 1.8-.4a9.993 9.993 0 00-1.4-.8 1.38 1.38 0 01-.4.3z">
            </path>
          </svg>
          <span>English (EU)</span>
          <div className="arrow-conts">
            <svg id='arrow-up'>
              <use href='../pictures/down_arrow.svg#down-arrow' xlinkHref='../pictures/down_arrow.svg#down-arrow'></use>
            </svg>
            <svg id='arrow-down'>
              <use href='../pictures/down_arrow.svg#down-arrow' xlinkHref='../pictures/down_arrow.svg#down-arrow'></use>
            </svg>
          </div>
            </div>
            <div className="footer-logo-cont">
            <svg>
                <use href='../pictures/blizzard_logo.svg#blizzard-logo' xlinkHref='../pictures/blizzard_logo.svg#blizzard-logo'></use>
            </svg>
            <p>ENTERTAINMENT</p>
            </div>

            <ul className="primary-links">
                <li>CAREERS</li>
                <li>ABOUT</li>
                <li>SUPPORT</li>
                <li>CONTACT US</li>
                <li>PRESS</li>
                <li>API</li>
                <li>SITE MAP</li>
            </ul>

            <p className="one-app">All games, one app: 
            <svg>
              <use href='../pictures/bnet-logo-01.svg#Layer_1' xlinkHref='../pictures/bnet-logo-01.svg#Layer_1'></use>
            </svg>
            <a href="/">Battle.net Desktop App</a>
            </p>

            <p className="copyright">
              &copy;2023 Blizzard Entertainment, Inc.
            </p>

            <p className="trademark">
              All &nbsp;<a href="/">trademarks</a>&nbsp;
               referenced herein are the properties of their respective owners.
            </p>

            <ul className="primary-links" id='secondary-links'>
              <li>PRIVACY</li>
              <li>LEGAL</li>
              <li>TERMS</li>
              <li>COOKIE POLICY</li>
              <li>COOKIE SETTINGS</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer