import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import AnimatedLetters from "../Animated Letters/AnimatedLetters";
import './contact.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text_animate')
  const refForm = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text_animate_hover')
    }, 3000)
  }, [])
    
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_w4ssupp', 'template_chi11in', refForm.current, 'z3Q9-Y9wqSAmOOKn7')
      .then(
        () => {
          toast.success('MESSAGE RECEIVED', {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: 'dark'
        })
        window.location.reload(false)
        },
        () => {
          toast.error('PLEASE TRY AGAIN', {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: 'dark'
        })
        window.location.reload(false)
        }
      )
  };

  return (
    <>
      <ToastContainer />
      <div className="container contact_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h2>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </h2>
          <div className="contact_form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input 
                    placeholder="Name" 
                    type="text" 
                    name="name" 
                    required 
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat_button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info_map">
          Chirag Mangwani,
          <br />
          Pune, Maharashtra
          <br />
          India <br />
          411016 <br />
          <span>thatwaniguy@gmail.com</span>
        </div>
        <div className="map_wrap">
          <MapContainer center={[18.516726,  73.856255]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[18.516726,  73.856255]}>
              <Popup>Chirag lives here, come over for a cup of coffee ツ </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
};

export default Contact;