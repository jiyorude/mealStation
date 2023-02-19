import React from "react";
import {useState} from 'react';
import {useEffect} from 'react';
import "../scss/components/recipe.scss";
import flagItaly from "../assets/image/flags/italy.png";
import flagArgentina from "../assets/image/flags/argentina.png";
import flagChina from "../assets/image/flags/china.png";
import flagUSA from "../assets/image/flags/usa.png";

const Recipe = (props) => {
  const [showModal, setModal] = useState(false);

   useEffect(() => {
     if (showModal) {
       document.body.style.overflow = "hidden";
     } else {
       document.body.style.overflow = "auto";
     }
   }, [showModal]);
  
  let flagSource;

  if (props.flag === "italy") {
    flagSource = flagItaly;
  } else if (props.flag === "china") {
    flagSource = flagChina;
  } else if (props.flag === "argentina") {
    flagSource = flagArgentina;
  } else if (props.flag === "usa") {
    flagSource = flagUSA;
  }

  return (
    <>
      <button onClick={() => setModal(true)} className={props.dish} style={{ backgroundImage: `url(${props.img})` }}>
        <h1>{props.title}</h1>
        <h3>{props.type}</h3>
        <img id="flag" className={props.flag} src={flagSource} alt="flag" />
      </button>
      {showModal && (
        <div className="background">
          <div className="flex-container">
            <p className="exit" onClick={() => setModal(false)}>EXIT</p>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
