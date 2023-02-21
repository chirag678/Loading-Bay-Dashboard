import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from "react-router-dom";
import AnimatedLetters from "../Animated Letters/AnimatedLetters";
import Logo from './Logo/Logo';
import './thatwaniguy.scss';

const Thatwaniguy = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  const greetingArray = ["H","i","!"," "," ","I","'","m"];
  const nameArray = ["T","h","a","t","w","a","n","i","g","u","y"];
  const aspiringArray = ["A","n"," "," ","A","s","p","i","r","i","n","g"];
  const jobArray = ["S","o","f","t","w","a","r","e"," "," ","E","n","g","i","n","e","e","r"];
  const handleClick = () => {
    window.location.href = "../Info/Contact";
  };

  useEffect (() => {
    return setTimeout (() => {
      setLetterClass("text_animate_hover");
    }, 6400)
  }, [])

    return (
      <>
        <div className="container me_page">
          <div className="text_zone">
            <h1>
              <AnimatedLetters
              letterClass={letterClass}
              strArray={greetingArray}
              idx={11} />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={19} />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={aspiringArray}
                idx={30} />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={42} />
            </h1>
            <h2>
              Always in pursuit of opportunities that expand my skillset and
              perspectives in professional settings.
            </h2>
            <Link onClick={handleClick} className="flat_button">CONTACT ME</Link>
          </div>
          <Logo />
        </div>
        <Loader type="pacman" />
      </>
    );
  };
  
  export default Thatwaniguy;