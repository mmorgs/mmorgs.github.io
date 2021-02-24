import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Helmet from 'react-helmet'
import Home from './pages/Home';
import Bio from './pages/Bio';
import './index.scss'
import EmailIcon from './assets/images/email-icon.png'
import LinkedinIcon from './assets/images/linkedin-icon.png'
import InstagramIcon from './assets/images/instagram-icon.png'
import GoodreadsIcon from './assets/images/goodreads-icon.png'

export default function App() {
  return (
    <Router>
      <div class="layout">
        <Helmet>
          <title>mindy lee morgan -- portfolio</title>
          <meta name="description" content="portfolio site for mindy morgan - web developer" />
        </Helmet>
        <header>
          <div>mindy lee morgan</div>
          <div className="social-links">
            <a href="mailto:multimindia@gmail.com">
              <img src={EmailIcon} alt="Email" width="20" height="20" />
            </a>
            <a href="https://linkedin.com/in/mindymorgan" target="_blank" rel="noopener noreferrer">
              <img src={LinkedinIcon} alt="LinkedIn" width="20" height="20" />
            </a>
            <a href="https://www.goodreads.com/user/show/1607171-mindy" target="_blank" rel="noopener noreferrer">
              <img src={GoodreadsIcon} alt="Goodreads" width="20" height="20" />
            </a>
            <a href="https://www.instagram.com/uncanny_valleygrl/" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" width="20" height="20" />
            </a>
          </div>
        </header>
        <div className="content-wrapper">
          <div className="sidebar">
            <div className="sidebar__inner">
              <div>
                <nav className="menu">
                  <ul className="menu__list">
                    <li className="menu__list-item">
                      <Link 
                        to="/"
                        className="menu__list-item-link"
                        activeClassName="menu__list-item-link menu__list-item-link--active"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="menu__list-item">
                      <Link 
                        to="/bio"
                        className="menu__list-item-link"
                        activeClassName="menu__list-item-link menu__list-item-link--active"
                      >
                        Bio
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/bio">
              <Bio />
            </Route>
          </Switch>

        </div>

        <footer>&copy; 2019</footer>
      </div>
    </Router>
  );
}