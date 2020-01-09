import React from 'react'
import NorthPole from "./../img/north-pole.svg"
import {Image} from 'react-bootstrap';


const Footer = () => (
    <footer className="footer">
      <Image src={NorthPole} width="70"/>
  </footer>
);

export default Footer;