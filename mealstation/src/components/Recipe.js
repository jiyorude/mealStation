import React from "react";

import "../scss/components/recipe.scss";
import flagItaly from "../assets/image/flags/italy.png";
import flagArgentina from "../assets/image/flags/argentina.png";
import flagChina from "../assets/image/flags/china.png";
import flagUSA from "../assets/image/flags/usa.png";

// IMPORT FLAGS HERE AND USE LINKS DIRECTLY.
const Recipe = (props) => {
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
      <button className={props.dish} style={{ backgroundImage: `url(${props.img})` }}>
        <h1>{props.title}</h1>
        <h3>{props.type}</h3>
        <img id="flag" className={props.flag} src={flagSource} alt="flag" />
      </button>
    </>
  );
};

export default Recipe;
