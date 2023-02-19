import React from "react";
import "../css/browser.min.css";
import "../css/grid.min.css";
import "../css/recipe.min.css";
import "../css/mixins.min.css";
import magGlass from "../assets/image/mag-glass.svg";
import Recipe from "./Recipe";
import { useState } from "react";


const recipes = [
  {
    dish: "spiedini",
    title: "Spiedini",
    type: "Appetizer",
    img: require("../assets/image/food/spiedini.jpg"),
    alt: "Italian Spiedini",
    flag: "italy",
  },
  {
    dish: "mooncake",
    title: "Mooncake",
    type: "Dessert",
    img: require("../assets/image/food/mooncake.jpg"),
    alt: "Chinese Mooncake",
    flag: "china",
  },
  {
    dish: "buffalo-wings",
    title: "Wings",
    type: "Appetizer",
    img: require("../assets/image/food/buffalowings.jpg"),
    alt: "American Buffalo Wings",
    flag: "usa",
  },
  {
    dish: "panna-cotta",
    title: "Pannacotta",
    type: "Dessert",
    img: require("../assets/image/food/pannacotta.jpg"),
    alt: "Italian Panna Cotta",
    flag: "italy",
  },
  {
    dish: "puchero",
    title: "Puchero",
    type: "Main",
    img: require("../assets/image/food/puchero.jpg"),
    alt: "Argentinian Puchero",
    flag: "argentina",
  },
  {
    dish: "vegetable-pie",
    title: "Veggy Pie",
    type: "Main",
    img: require("../assets/image/food/vegetablepie.jpg"),
    alt: "American Vegetable Pie",
    flag: "usa",
  },
  {
    dish: "deep-fried-durian",
    title: "Durian Roll",
    type: "Dessert",
    img: require("../assets/image/food/frieddurian.jpg"),
    alt: "Chinese Deep Fried Durian",
    flag: "china",
  },
  {
    dish: "provoleta",
    title: "Provoleta",
    type: "Appetizer",
    img: require("../assets/image/food/provoleta.jpg"),
    alt: "Argentinian Provoleta",
    flag: "argentina",
  },
  {
    dish: "brownies",
    title: "Brownies",
    type: "Dessert",
    img: require("../assets/image/food/brownies.jpg"),
    alt: "American Brownies",
    flag: "usa",
  },
  {
    dish: "brasato",
    title: "Brasato",
    type: "Main",
    img: require("../assets/image/food/brasato.jpg"),
    alt: "Italian Beef Brasato",
    flag: "italy",
  },
  {
    dish: "dulce-de-leche-tart",
    title: "Dulce Tart",
    type: "Dessert",
    img: require("../assets/image/food/dulcetart.jpg"),
    alt: "Argentinian Dulce de Leche Tart",
    flag: "argentina",
  },
  {
    dish: "bao-bun",
    title: "Bao Bun",
    type: "Appetizer",
    img: require("../assets/image/food/bao.jpg"),
    alt: "Chinese Bao Bun",
    flag: "china",
  },
  {
    dish: "tomato-salad",
    title: "Caprese",
    type: "Appetizer",
    img: require("../assets/image/food/tomatosalad.jpg"),
    alt: "Italian Caprese Salad",
    flag: "italy",
  },
  {
    dish: "char-siu",
    title: "Char Siu",
    type: "Main",
    img: require("../assets/image/food/charsiu.jpg"),
    alt: "Chinese Char Siu",
    flag: "china",
  },
  {
    dish: "cream-cheese-fruit-dip",
    title: "Fruit Dip",
    type: "Appetizer",
    img: require("../assets/image/food/fruitdip.jpg"),
    alt: "American Cream Cheese Fruit Dip",
    flag: "usa",
  },
  {
    dish: "fugazzeta",
    title: "Fugazzeta",
    type: "Main",
    img: require("../assets/image/food/Fugazzeta.jpg"),
    alt: "Argentinian Fugazzeta Pizza",
    flag: "argentina",
  },
  {
    dish: "cheesecake",
    title: "Cheesecake",
    type: "Dessert",
    img: require("../assets/image/food/cheesecake.jpeg"),
    alt: "American New-York style Cheesecake",
    flag: "usa",
  },
  {
    dish: "tiramisu",
    title: "Tiramisu",
    type: "Dessert",
    img: require("../assets/image/food/tiramisu.jpg"),
    alt: "Italian Tiramisu",
    flag: "italy",
  },
  {
    dish: "caponata",
    title: "Caponata",
    type: "Main",
    img: require("../assets/image/food/caponata.jpg"),
    alt: "Italian Caponata",
    flag: "italy",
  },
  {
    dish: "dumpling",
    title: "Dumplings",
    type: "Appetizer",
    img: require("../assets/image/food/dumpling.jpg"),
    alt: "Chinese Dumplings",
    flag: "china",
  },
  {
    dish: "meatloaf",
    title: "Meatloaf",
    type: "Main",
    img: require("../assets/image/food/meatloaf.jpg"),
    alt: "American Meatloaf",
    flag: "usa",
  },
  {
    dish: "flan",
    title: "Flan",
    type: "Dessert",
    img: require("../assets/image/food/flan.jpg"),
    alt: "Argentinian Flan",
    flag: "argentina",
  },
  {
    dish: "beef-stir-fry",
    title: "Beef Fry",
    type: "Main",
    img: require("../assets/image/food/beefstirfry.jpg"),
    alt: "Chinese Beef Stir Fry",
    flag: "china",
  },
  {
    dish: "empanadas",
    title: "Empanadas",
    type: "Appetizer",
    img: require("../assets/image/food/empanadas.jpg"),
    alt: "Argentinian Empanadas",
    flag: "argentina",
  },
];

const Browser = () => {
  const [search, setSearch] = useState("");

  const recipeFilter = recipes.filter((recipe) => {
    let input = search.toLowerCase();
    let titleSearch = recipe.title.toLowerCase().includes(input);
    let typeSearch = recipe.type.toLowerCase().includes(input);
    let flagSearch = recipe.flag.toLowerCase().includes(input);
    return titleSearch || typeSearch || flagSearch;
  });

  return (
    <>
      <section>
        <div className="searchbar">
          <input
            style={{ backgroundImage: `url(${magGlass})` }}
            type="text"
            value={search}
            placeholder="...Search Recipe"
            onChange={(search) => setSearch(search.target.value)}
          />
        </div>
        <div className="recipe-grid">
          {recipeFilter.map((recipe) => (
            <Recipe
              key={recipe.dish}
              title={recipe.title}
              type={recipe.type}
              img={recipe.img}
              alt={recipe.alt}
              flag={recipe.flag}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Browser;
