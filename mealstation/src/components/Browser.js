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
        <Recipe dish="spiedini" title="Spiedini" type="Appetizer" img={require("../assets/image/food/spiedini.jpg")} alt="Italian Spiedini" flag="italy"/>
        <Recipe dish="mooncake" title="Mooncake" type="Dessert" img={require("../assets/image/food/mooncake.jpg")} alt="Chinese Mooncake" flag="china"/>
        <Recipe dish="buffalo-wings" title="Wings" type="Appetizer" img={require("../assets/image/food/buffalowings.jpg")} alt="American Buffalo Wings" flag="usa" />
        <Recipe dish="panna-cotta" title="Pannacotta" type="Dessert" img={require("../assets/image/food/pannacotta.jpg")} alt="Italian Panna Cotta" flag="italy" />
        <Recipe dish="puchero" title="Puchero" type="Main" img={require("../assets/image/food/puchero.jpg")} alt="Argentinian Puchero" flag="argentina" />
        <Recipe dish="vegetable-pie" title="Veggy Pie" type="Main" img={require("../assets/image/food/vegetablepie.jpg")} alt="American Vegetable Pie" flag="usa" />
        <Recipe dish="deep-fried-durian" title="Durian Roll" type="Dessert" img={require("../assets/image/food/frieddurian.jpg")} alt="Chinese Deep Fried Durian" flag="china" />
        <Recipe dish="provoleta" title="Provoleta" type="Appetizer" img={require("../assets/image/food/provoleta.jpg")} alt="Argentinian Provoleta" flag="argentina" />
        <Recipe dish="brownies" title="Brownies" type="Dessert" img={require("../assets/image/food/brownies.jpg")} alt="American Peanut Butter Brownies" flag="usa" />
        <Recipe dish="brasato" title="Brasato" type="Main" img={require("../assets/image/food/brasato.jpg")} alt="Italian Beef Brasato" flag="italy" />
        <Recipe dish="dulce-de-leche-tart" title="Dulce Tart" type="Dessert" img={require("../assets/image/food/dulcetart.jpg")} alt="Argentinian Dulce de Leche Tart" flag="argentina" />
        <Recipe dish="bao-bun" title="Bao Bun" type="Appetizer" img={require("../assets/image/food/bao.jpg")} alt="Chinese Bao Buns" flag="china" />
        <Recipe dish="tomato-salad" title="Caprese" type="Appetizer" img={require("../assets/image/food/tomatosalad.jpg")} alt="Italian Tomato Salad" flag="italy" />
        <Recipe dish="char-siu" title="Char Siu" type="Main" img={require("../assets/image/food/charsiu.jpg")} alt="Chinese Char Siu" flag="china" />
        <Recipe dish="cream-cheese-fruit-dip" title="Fruit Dip" type="Appetizer" img={require("../assets/image/food/fruitdip.jpg")} alt="American Cream Cheese Fruit Dip" flag="usa" />
        <Recipe dish="fugazzeta" title="Fugazzeta" type="Main" img={require("../assets/image/food/Fugazzeta.jpg")} alt="Argentinian Fugazzeta Pizza" flag="argentina" />
        <Recipe dish="cheesecake" title="Cheesecake" type="Dessert" img={require("../assets/image/food/cheesecake.jpeg")} alt="American New-York Style Cheesecake" flag="usa"/>
        <Recipe dish="tiramisu" title="Tiramisu" type="Dessert" img={require("../assets/image/food/tiramisu.jpg")} alt="Italian Tiramisu" flag="italy" />
        <Recipe dish="caponata" title="Caponata" type="Main" img={require("../assets/image/food/caponata.jpg")} alt="Italian Caponata" flag="italy" />
        <Recipe dish="dumpling" title="Dumplings" type="Appetizer" img={require("../assets/image/food/dumpling.jpg")} alt="Chinese Dumplings" flag="china" />
        <Recipe dish="meatloaf" title="Meatloaf" type="Main" img={require("../assets/image/food/meatloaf.jpg")} alt="American Meatloaf" flag="usa" />
        <Recipe dish="flan" title="Flan" type="Dessert" img={require("../assets/image/food/flan.jpg")} alt="Argentinian Flan" flag="argentina" />
        <Recipe dish="beef-stir-fry" title="Beef Fry" type="Main" img={require("../assets/image/food/beefstirfry.jpg")} alt="Chinese Beef Stir Fry" flag="china" />
        <Recipe dish="empanadas" title="Empanadas" type="Appetizer" img={require("../assets/image/food/empanadas.jpg")} alt="Argentinian Empanadas" flag="argentina" />


      </div>
    </section>
  );
};

export default Browser;
