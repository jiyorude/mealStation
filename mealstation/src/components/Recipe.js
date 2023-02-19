import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../scss/components/recipe.scss";
import flagItaly from "../assets/image/flags/italy.png";
import flagArgentina from "../assets/image/flags/argentina.png";
import flagChina from "../assets/image/flags/china.png";
import flagUSA from "../assets/image/flags/usa.png";
import cheesecake from "../assets/image/food/cheesecake.jpeg";

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
              <h4 className="title">NEW YORK CHEESECAKE</h4>
              <h5 className="type">APPETIZER</h5>
              <img className="thumbflag" src={flagUSA} alt="american flag"></img>
              <img className="thumb" src={cheesecake} alt="cheesecake"></img>
              <h6 className="ingredients-title">INGREDIENTS</h6>
              <ul>
                <li>111111111111111111</li>
                <li>222222222</li>
              </ul>
              <h6 className="preparation-title">PREPARATION</h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
