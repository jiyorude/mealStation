import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
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

  let ingredientsList = props.ingredients;
  let preparationList = props.preparation;
  let ytID = props.youTubeID;

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
            <p className="exit" onClick={() => setModal(false)}>
              EXIT
            </p>
            <div className="info">
              <h4 className="title">{props.title}</h4>
              <h5 className="type">{props.type}</h5>
              <img className="thumbflag" src={flagSource} alt="flag"></img>
              <img className="thumb" src={props.img} alt={props.alt}></img>
              <h6 className="ingredients-title">INGREDIENTS</h6>
              <ul>
                {ingredientsList.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h6 className="preparation-title">PREPARATION</h6>
              <ul>
                {preparationList.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
              <div className="video">
              <iframe
                width="250"
                height="140"
                frameBorder={0}
                src={`https://www.youtube.com/embed/${ytID}`}
                title="YouTube video player"
                allowFullScreen
              ></iframe></div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
