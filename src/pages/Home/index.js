import React from "react";
import CanndescentPic from "../../assets/images/canndescent.png";
import GoodbrandsPic from "../../assets/images/goodbrands.png";
import RepairSmithPic from "../../assets/images/repairsmith2.jpg";
import ThinknearPic from "../../assets/images/thinknear.jpg";
import GAADPic from "../../assets/images/gaad.jpg";
import VERPic from "../../assets/images/ver.jpg";
import "../../assets/scss/init.scss";

export default function Home() {
    return (
      <div className="content">
        <div className="content__inner">
          <h1>front-end dev work</h1>
          <div className="project">
            <div className="project__image">
              <a target="_blank" rel="noopener noreferrer" href="https://www.globalaccessibilityawarenessday.org"><img src={GAADPic} alt="GAAD link" /></a>
            </div>
            <div className="project__details">
              <h2>GAAD</h2>
              <a target="_blank" rel="noopener noreferrer" href="https://www.globalaccessibilityawarenessday.org">www.globalaccessibilityawarenessday.org</a>
              <p>2nd iteration: Wordpress <br />
              1st iteration: Site/logo design, Bootstrap</p>
            </div>
          </div>
          <div className="project">
            <div className="project__image">
              <a target="_blank" rel="noopener noreferrer" href="https://canndescent.com/"><img src={CanndescentPic} alt="Canndescent link" /></a>
            </div>
            <div className="project__details">
              <h2>Canndescent</h2>
              <a target="_blank" rel="noopener noreferrer" href="https://canndescent.com/">www.canndescent.com</a>
              <p>2nd iteration: Wordpress <br />
              1st iteration: Laravel</p>
            </div>
          </div>
          <div className="project">
            <div className="project__image">
              <a target="_blank" rel="noopener noreferrer" href="https://goodbrandsco.com/"><img src={GoodbrandsPic} alt="Goodbrands link" /></a>
            </div>
            <div className="project__details">
              <h2>Goodbrands</h2>
              <a target="_blank" rel="noopener noreferrer" href="https://goodbrandsco.com/">www.goodbrandsco.com</a>
              <p>2nd iteration: Wordpress <br />
              1st iteration: Laravel</p>
            </div>
          </div>
          <div className="project">
            <div className="project__image">
              <img src={RepairSmithPic} alt="RepairSmith link" />
            </div>
            <div className="project__details">
              <h2>RepairSmith</h2>
              <p>CSS (Sass) & React</p>
            </div>
          </div>
          <div className="project">
            <div className="project__image">
              <img src={ThinknearPic} alt="ThinkNear link" />
            </div>
            <div className="project__details">
              <h2>Thinknear by Telenav</h2>
              <p>CSS (Sass, BEM), React & HTML</p>
            </div>
          </div>
          <div className="project">
            <div className="project__image">
              <a target="_blank" rel="noopener noreferrer" href="http://ver.com"><img src={VERPic} alt="VER link" /></a>
            </div>
            <div className="project__details">
              <h2>VER</h2>
              <a target="_blank" rel="noopener noreferrer" href="http://ver.com">www.ver.com</a>
              <p>CSS, HTML & Wordpress</p>
            </div>
          </div>
          <div>
            <h2>Other Projects</h2>
            <p>These projects are over a year old, and have either been modified or the voting apps are no longer active.</p>
            <ul>
              <li>Fox.com</li>
              <li>American Idol</li>
              <li>NBC Careers</li>
              <li>FX Networks</li>
              <li>Dole Fruit Squish'ems</li>
              <li>VIZIO product pages</li>
              <li>FX Networks show sites</li>
              <li>TaylorMade Golf</li>
              <li>Aruba.com</li>
              <li>NBA voting app</li>
              <li>NASCAR voting app</li>
              <li>America's Got Talent social widgets</li>
              <li>BBC Children in Need social widgets</li>
              <li>The X Factor voting app</li>
              <li>Bravo.com (Watch What Happens Live)</li>
              <li>NBC American Comedy Awards voting app</li>
              <li>HGTV Showdown voting app</li>
              <li>The Voice voting apps</li>
              <li>FXX Fluxx</li>
              <li>Simpson's World</li>
            </ul>
          </div>
        </div>
      </div>
    );

}