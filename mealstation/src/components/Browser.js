import React from "react";
import "../css/browser.min.css";
import "../css/grid.min.css";
import "../css/recipe.min.css";
import "../css/mixins.min.css";
import magGlass from "../assets/image/mag-glass.svg";
import Recipe from "./Recipe";

const Browser = () => {
  return (
    <section>
      <div className="searchbar">
        <input style={{ backgroundImage: `url(${magGlass})` }} type="text" placeholder="...Search Recipe"></input>
      </div>
      <div className="recipe-grid">
        <Recipe
          dish="spiedini"
          title="Spiedini"
          type="Appetizer"
          img={require("../assets/image/food/spiedini.jpg")}
          alt="Italian Spiedini"
          flag="italy"
        />
        <Recipe
          dish="mooncake"
          title="Mooncake"
          type="Dessert"
          img={require("../assets/image/food/mooncake.jpg")}
          alt="Chinese Mooncake"
          flag="china"
        />
      </div>
    </section>
  );
};

export default Browser;
