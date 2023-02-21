import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from "../Animated Letters/AnimatedLetters";
import paypal from "../../assets/images/paypal.png";
import './paypal.scss';

const Paypal = () => {
  
  const paypalRef = useRef()
  const [letterClass, setLetterClass] = useState("text_animate");
  const handleClick = () => {
    window.location.href = "https://www.paypal.me/thatwaniguy";
  };

  useEffect (() => {
    return setTimeout (() => {
      setLetterClass("text_animate_hover");
    }, 2500)
  }, [])

    return (
      <>
        <div className="container paypal_page">
        <div className="text_zone">  
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'a', 'y', 'P', 'a', 'l', ' ', 'ツ']}
              idx={15}
            />
          </h1>
          <h2>
            I like my money where I can see it. <br />
            In my Paypal account.
          </h2>
          <img
            className="paypal"
            ref={paypalRef}
            src={paypal}
            alt="Paypal"
            style={{oppacity: 0}}
            onClick={handleClick}
          /> 
        </div>
        </div>
        <Loader type="pacman" />
      </>
    );
  };
  
  export default Paypal;