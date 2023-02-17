import React from "react";
import "../css/browser.min.css";
import "../css/grid.min.css";
import "../css/mixins.min.css";
import magGlass from "../assets/image/mag-glass.svg";
import { ReactSVG } from "react-svg";

const Browser = () => {
  return (
    <section>
      <div className="searchbar">
        <input style={{ backgroundImage: `url(${magGlass})` }} type="text" placeholder="...Search Recipe"></input>
      </div>
      <div className="recipe-grid">
        <div id="spiedini">
          <h1>Spiedini</h1>
          <h3>Appetizer</h3>
          <ReactSVG className="flag-italy" src="../assets/image/italian-flag.svg" />
        </div>
      </div>
    </section>
  );
};

export default Browser;
