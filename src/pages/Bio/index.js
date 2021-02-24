import React from "react";
import FirstMac from "../../assets/images/firstcomputer.jpg";

export default function Bio() {
    return (
      <div className="content">
        <div className="content__inner">
          <p>hi! i’m mindy.</p>
          <p>i’ve been pretty into computers since my family got one for xmas in the early 90s.</p>
          <img style={{ maxWidth: 600 }} src={FirstMac} title="love at first site" alt="me as a child grinning while sitting next to our family's first computer" />
          <p>i completed a bachelor of multimedia (programming, web dev, design) in brisbane, australia in 2009, and have predominantly done front-end dev work from 2010 onwards.</p>
          <p>see <a href="http://linkedin.com/in/mindymorgan">linkedin</a> for my work history.</p>
          <p>i also like heavy metal, dogs and over-analyzing the ethics of everything all of the time.</p>
        </div>
      </div>
    );
}