import React from "react";
import "../css/header.min.css";
import {ReactSVG} from 'react-svg';
import msLogo from '../assets/image/ms-logo.svg';

const Header = () => {
  return (
  <header>
    <ReactSVG src={msLogo} className="ms-logo"></ReactSVG>
  </header>
  )
};

export default Header;
