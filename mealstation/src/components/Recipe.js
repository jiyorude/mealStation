import React from "react";
import { ReactSVG } from "react-svg";
import "../scss/components/recipe.scss";
import flagItaly from "../assets/image/flags/italian-flag.svg";
import flagArgentina from "../assets/image/flags/argentinian-flag.svg";
import flagChina from "../assets/image/flags/chinese-flag.svg";
import flagUSA from "../assets/image/flags/american-flag.svg";

// IMPORT FLAGS HERE AND USE LINKS DIRECTLY.
const Recipe = (props) => {
  let flagSource;

  if (props.flag === "italy") {
    flagSource = {flagItaly};
  } else if (props.flag === "china") {
    flagSource = {flagChina};
  } else if (props.flag === "argentina") {
    flagSource = {flagArgentina};
  } else if (props.flag === "usa") {
    flagSource = {flagUSA};
  };

  return (
    <>
      <button className={props.dish}>
        <h1>{props.title}</h1>
        <h3>{props.type}</h3>
        <img src={props.img} alt={props.alt}></img>
        <ReactSVG id="flag" className={props.flag} src={flagSource} />
      </button>
    </>
  );
};

export default Recipe;
