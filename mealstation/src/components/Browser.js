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
    ingredients: [
      "Beef",
      "Chicken",
      "Pork",
      "2 - 5 Bell Peppers",
      "2 - 5 Onions",
      "Zucchini",
      "Basil",
      "Bay Leaves",
      "Mushrooms",
      "Squash",
    ],
    preparation: [
      "Cut the meat and vegetables into small pieces. ",
      "Place the meat and vegetables onto skewers.",
      "Grill the skewers over medium-high heat for 8-10 minutes.",
      "Turn the skewers every few minutes to prevent burning.",
      "Marinade and serve with sauce",
    ],
    ytID: "L-brHYN7UWs",
  },
  {
    dish: "mooncake",
    title: "Mooncake",
    type: "Dessert",
    img: require("../assets/image/food/mooncake.jpg"),
    alt: "Chinese Mooncake",
    flag: "china",
    ingredients: [
      "250 gram flour",
      "100 gram golden syrup",
      "50 gram vegetable oil",
      "250 gram lotus paste",
      "1 salted egg-yolk",
    ],
    preparation: [
      "Mix the flour, golden syrup, vegetable oil, and lye water in a bowl to form a smooth dough.",
      "Wrap the dough in plastic wrap and let it rest for 30 minutes.",
      "Divide the lotus seed paste into small balls of equal size.",
      "Divide the dough into small pieces of equal size and flatten them into circles.",
      "Place a ball of lotus seed paste in the center of each circle of dough and wrap the dough around it, making sure there are no cracks.",
      "Press a salted egg yolk into the center of each mooncake.",
      "Place the mooncakes into mooncake molds and press them down firmly.",
      "Bake the mooncakes in a preheated oven at 350°F (180°C) for 10 minutes.",
      "Remove the mooncakes from the oven and let them cool for 10 minutes.",
      "Brush the mooncakes with egg wash and return them to the oven.",
      "Bake the mooncakes for an additional 10-15 minutes, or until golden brown.",
      "Remove the mooncakes from the oven and let them cool completely before serving.",
    ],
    ytID: "p5kRLCyN4Zc",
  },
  {
    dish: "buffalo-wings",
    title: "Wings",
    type: "Appetizer",
    img: require("../assets/image/food/buffalowings.jpg"),
    alt: "American Buffalo Wings",
    flag: "usa",
    ingredients: [
      "1 kg chicken wings",
      "1/2 cup all-purpose flour",
      "1/2 tsp paprika",
      "1/2 tsp cayenne pepper",
      "1/4 tsp garlic powder",
      "1/4 tsp salt",
      "1/4 tsp black pepper",
      "1/4 cup unsalted butter",
      "1/4 cup hot sauce",
      "1 tbsp honey",
      "1 tbsp Worcestershire sauce",
      "1 tbsp apple cider vinegar",
    ],
    preparation: [
      "Preheat oven to 200°C (400°F).",
      "Line a baking sheet with parchment paper.",
      "In a bowl, mix the flour, paprika, cayenne pepper, garlic powder, salt, and black pepper.",
      "Dredge the chicken wings in the flour mixture, shaking off any excess.",
      "Place the chicken wings on the prepared baking sheet and bake for 25-30 minutes, or until crispy and golden brown.",
      "In a saucepan, melt the butter over low heat.",
      "Add the hot sauce, honey, Worcestershire sauce, and apple cider vinegar to the melted butter and stir to combine.",
      "Increase the heat to medium and bring the sauce to a simmer.",
      "Simmer the sauce for 5-10 minutes, or until slightly thickened.",
      "Toss the baked chicken wings in the buffalo sauce until coated.",
      "Serve immediately with celery sticks and blue cheese dressing, if desired.",
    ],
    ytID: "ze39mtufeNE",
  },
  {
    dish: "panna-cotta",
    title: "Pannacotta",
    type: "Dessert",
    img: require("../assets/image/food/pannacotta.jpg"),
    alt: "Italian Panna Cotta",
    flag: "italy",
    ingredients: [
      "500 ml heavy cream",
      "50 g granulated sugar",
      "1 vanilla bean, split and scraped",
      "2 tsp powdered gelatin",
      "2 tbsp cold water",
    ],
    preparation: [
      "In a saucepan, combine the heavy cream, sugar, and vanilla bean and seeds.",
      "Bring the mixture to a simmer over medium heat, stirring occasionally.",
      "Remove the saucepan from the heat.",
      "In a small bowl, sprinkle the gelatin over the cold water and let stand for 5 minutes.",
      "Whisk the gelatin mixture into the warm cream mixture until fully dissolved.",
      "Remove the vanilla bean from the mixture.",
      "Divide the mixture evenly among 4-6 ramekins or small glasses.",
      "Cover each ramekin or glass with plastic wrap and refrigerate for at least 4 hours, or until set.",
      "To serve, dip the ramekins or glasses into warm water for a few seconds, then invert onto a plate to release the panna cotta.",
    ],
    ytID: "z0EuLWudR-Q",
  },
  {
    dish: "puchero",
    title: "Puchero",
    type: "Main",
    img: require("../assets/image/food/puchero.jpg"),
    alt: "Argentinian Puchero",
    flag: "argentina",
    ingredients: [
      "2 lb beef brisket",
      "2 lb bone-in chicken thighs",
      "4 cups beef broth",
      "4 cups water",
      "2 onions, peeled and halved",
      "4 carrots, peeled and chopped",
      "4 potatoes, peeled and chopped",
      "1 sweet potato, peeled and chopped",
      "1/2 butternut squash, peeled and chopped",
      "1 cup cooked chickpeas",
      "1 tbsp paprika",
      "1 tbsp dried oregano",
      "1 bay leaf",
      "Salt and black pepper, to taste",
    ],
    preparation: [
      "In a large pot, bring the beef broth and water to a boil.",
      "Add the beef brisket and chicken thighs, and simmer for 10 minutes.",
      "Add the onions, carrots, potatoes, sweet potato, butternut squash, chickpeas, paprika, oregano, bay leaf, salt, and black pepper.",
      "Bring the mixture to a boil, then reduce the heat and simmer for 1-2 hours, or until the meat is tender and the vegetables are cooked through.",
      "Remove the meat from the pot and shred it.",
      "Serve the puchero in bowls, with the meat and vegetables arranged on top.",
    ],
    ytID: "WLFGUfw1OH4",
  },
  {
    dish: "vegetable-pie",
    title: "Veggy Pie",
    type: "Main",
    img: require("../assets/image/food/vegetablepie.jpg"),
    alt: "American Vegetable Pie",
    flag: "usa",
    ingredients: [
      "1 9-inch pie crust, unbaked",
      "1 cup chopped onion",
      "1 cup chopped bell pepper",
      "1 cup chopped mushrooms",
      "1 cup chopped zucchini",
      "1 cup chopped yellow squash",
      "1 cup fresh or frozen corn",
      "2 cloves garlic, minced",
      "1 tsp dried basil",
      "1 tsp dried oregano",
      "1/2 tsp dried thyme",
      "1/4 tsp cayenne pepper",
      "Salt and black pepper, to taste",
      "4 eggs",
      "1/2 cup milk",
      "1/2 cup sour cream",
      "1 cup shredded cheddar cheese",
    ],
    preparation: [
      "Preheat the oven to 375°F (190°C).",
      "In a large skillet, sauté the onion, bell pepper, mushrooms, zucchini, and yellow squash until tender.",
      "Add the corn, garlic, basil, oregano, thyme, cayenne pepper, salt, and black pepper, and sauté for another 2-3 minutes.",
      "In a mixing bowl, whisk together the eggs, milk, and sour cream.",
      "Stir in the sautéed vegetables and shredded cheddar cheese.",
      "Pour the mixture into the unbaked pie crust.",
      "Bake for 40-45 minutes, or until the filling is set and the crust is golden brown.",
      "Let the pie cool for a few minutes before slicing and serving.",
    ],
    ytID: "Vg-rOQmjraM",
  },
  {
    dish: "deep-fried-durian",
    title: "Durian Roll",
    type: "Dessert",
    img: require("../assets/image/food/frieddurian.jpg"),
    alt: "Chinese Deep Fried Durian",
    flag: "china",
    ingredients: [
      "1 cup durian flesh, pureed",
      "1/2 cup whipping cream",
      "1/4 cup sugar",
      "1/4 tsp salt",
      "12 egg roll wrappers",
      "1/4 cup melted butter",
      "1/4 cup honey",
      "1/4 cup chopped roasted peanuts",
    ],
    preparation: [
      "In a mixing bowl, whisk together the durian puree, whipping cream, sugar, and salt until smooth and creamy.",
      "Place an egg roll wrapper on a clean work surface, with one corner facing you.",
      "Spoon about 2 tablespoons of the durian filling onto the bottom third of the wrapper, leaving about 1 inch of space on either side.",
      "Fold the bottom corner up over the filling, then fold the sides in towards the center, like an envelope.",
      "Roll the wrapper up tightly, pressing the edges to seal.",
      "Repeat with the remaining wrappers and filling.",
      "Preheat the oven to 350°F (175°C).",
      "Brush the rolls with melted butter, and bake for 10-15 minutes, until golden brown and crispy.",
      "Drizzle with honey and sprinkle with chopped roasted peanuts before serving.",
    ],
    ytID: "fCRv9pnCEMA",
  },
  {
    dish: "provoleta",
    title: "Provoleta",
    type: "Appetizer",
    img: require("../assets/image/food/provoleta.jpg"),
    alt: "Argentinian Provoleta",
    flag: "argentina",
    ingredients: [
      "1 wheel provoleta cheese",
      "1 tbsp olive oil",
      "1/2 tbsp dried oregano",
      "1/2 tbsp red pepper flakes",
      "1/2 tbsp smoked paprika",
      "1/2 tbsp garlic powder",
      "1/2 tbsp salt",
      "1/2 tbsp black pepper",
      "Lemon wedges, to serve",
      "Crusty bread, to serve",
    ],
    preparation: [
      "Preheat a grill or grill pan over high heat.",
      "Brush the provoleta cheese with olive oil on both sides.",
      "In a small bowl, mix together the oregano, red pepper flakes, smoked paprika, garlic powder, salt, and black pepper.",
      "Sprinkle the spice mixture over the cheese.",
      "Place the cheese on the grill and cook for about 2-3 minutes per side, until golden and slightly charred.",
      "Serve hot with lemon wedges and crusty bread.",
    ],
    ytID: "L5I4ebgekQg",
  },
  {
    dish: "brownies",
    title: "Brownies",
    type: "Dessert",
    img: require("../assets/image/food/brownies.jpg"),
    alt: "American Brownies",
    flag: "usa",
    ingredients: [
      "1/2 cup unsalted butter, melted",
      "1/2 cup creamy peanut butter",
      "1 cup granulated sugar",
      "1/2 cup all-purpose flour",
      "1/2 cup cocoa powder",
      "1/4 teaspoon salt",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "1/2 cup semisweet chocolate chips",
    ],
    preparation: [
      "Preheat the oven to 350°F. Line an 8-inch square baking pan with parchment paper.",
      "In a large mixing bowl, whisk together the melted butter, peanut butter, and sugar until smooth.",
      "Add the flour, cocoa powder, and salt, and stir until well combined.",
      "Add the eggs and vanilla extract, and stir until the batter is smooth.",
      "Fold in the chocolate chips.",
      "Pour the batter into the prepared pan and smooth out the top.",
      "Bake for 25-30 minutes, or until a toothpick inserted into the center comes out clean.",
      "Remove from the oven and let cool in the pan for at least 15 minutes before slicing and serving.",
    ],
    ytID: "3mhFeInBbUI",
  },
  {
    dish: "brasato",
    title: "Brasato",
    type: "Main",
    img: require("../assets/image/food/brasato.jpg"),
    alt: "Italian Beef Brasato",
    flag: "italy",
    ingredients: [
      "2 pounds beef chuck roast",
      "2 tablespoons olive oil",
      "1 onion, chopped",
      "2 carrots, peeled and chopped",
      "2 celery stalks, chopped",
      "3 garlic cloves, minced",
      "1 cup dry red wine",
      "1 can (14.5 oz) diced tomatoes",
      "2 cups beef broth",
      "2 bay leaves",
      "1 teaspoon dried thyme",
      "1 teaspoon dried rosemary",
      "Salt and pepper, to taste",
    ],
    preparation: [
      "Preheat oven to 325°F.",
      "Heat olive oil in a large Dutch oven over medium-high heat.",
      "Season the beef chuck roast with salt and pepper on both sides.",
      "Sear the beef chuck roast until browned on both sides, about 4-5 minutes per side.",
      "Remove the beef chuck roast from the Dutch oven and set aside.",
      "Add onion, carrots, celery, and garlic to the Dutch oven and cook until softened, about 5-7 minutes.",
      "Add red wine and stir to scrape up any browned bits from the bottom of the Dutch oven.",
      "Add diced tomatoes, beef broth, bay leaves, thyme, and rosemary. Stir to combine.",
      "Add the beef chuck roast back to the Dutch oven and spoon some of the vegetable mixture over the top of the roast.",
      "Cover the Dutch oven and transfer to the oven. Cook for 2 1/2 to 3 hours, or until the beef chuck roast is tender.",
      "Remove the beef chuck roast from the Dutch oven and let it rest for a few minutes.",
      "Using an immersion blender, puree the vegetables and cooking liquid until smooth.",
      "Slice the beef chuck roast against the grain and serve with the vegetable sauce.",
    ],
    ytID: "TsLcvJn2Bro",
  },
  {
    dish: "dulce-de-leche-tart",
    title: "Dulce Tart",
    type: "Dessert",
    img: require("../assets/image/food/dulcetart.jpg"),
    alt: "Argentinian Dulce de Leche Tart",
    flag: "argentina",
    ingredients: ["Pie crust", "Dulce de leche", "Whipped cream", "Powdered sugar"],
    preparation: [
      "Preheat oven to 350°F.",
      "Roll out pie crust and press into a tart pan.",
      "Prick the crust with a fork and bake for 15-20 minutes, until golden brown.",
      "Remove from oven and let cool.",
      "Spread dulce de leche over the cooled crust.",
      "Top with whipped cream and sprinkle with powdered sugar.",
      "Chill for at least an hour before serving.",
    ],
    ytID: "BDW4bdjygs4",
  },
  {
    dish: "bao-bun",
    title: "Bao Bun",
    type: "Appetizer",
    img: require("../assets/image/food/bao.jpg"),
    alt: "Chinese Bao Bun",
    flag: "china",
    ingredients: [
      "Flour",
      "Active dry yeast",
      "Sugar",
      "Warm water",
      "Baking powder",
      "Ground pork",
      "Garlic",
      "Ginger",
      "Soy sauce",
      "Green onions",
      "Sesame oil",
    ],
    preparation: [
      "In a bowl, dissolve yeast and sugar in warm water and let sit for 10 minutes.",
      "In a separate bowl, mix flour and baking powder together.",
      "Combine yeast mixture with flour mixture to form a dough.",
      "Knead the dough for 5-10 minutes until it becomes smooth.",
      "Cover the dough and let it rest for 1 hour.",
      "In a pan, cook ground pork, garlic, and ginger until browned.",
      "Add soy sauce and green onions and cook for 1-2 minutes.",
      "Divide dough into small pieces and roll each piece into a ball.",
      "Flatten each ball into a disk and place a spoonful of pork mixture in the center.",
      "Fold the dough around the filling and seal the edges.",
      "Place the buns on a parchment-lined steamer and let rise for 15-20 minutes.",
      "Steam the buns over boiling water for 10-15 minutes until puffy and cooked through.",
      "Brush the tops of the buns with sesame oil before serving.",
    ],
    ytID: "8vtK56zVnD4",
  },
  {
    dish: "tomato-salad",
    title: "Caprese",
    type: "Appetizer",
    img: require("../assets/image/food/tomatosalad.jpg"),
    alt: "Italian Caprese Salad",
    flag: "italy",
    ingredients: [
      "Fresh mozzarella cheese",
      "Tomatoes",
      "Fresh basil",
      "Olive oil",
      "Balsamic vinegar",
      "Salt",
      "Pepper",
    ],
    preparation: [
      "Slice the fresh mozzarella cheese and tomatoes into 1/4-inch thick slices.",
      "Arrange the mozzarella slices on a platter, alternating with the tomato slices.",
      "Chop the fresh basil and sprinkle it over the mozzarella and tomatoes.",
      "Drizzle olive oil and balsamic vinegar over the top of the salad.",
      "Sprinkle with salt and pepper to taste.",
      "Let the salad sit for 10-15 minutes to allow the flavors to meld together before serving.",
    ],
    ytID: "pgLhokt0uAQ",
  },
  {
    dish: "char-siu",
    title: "Char Siu",
    type: "Main",
    img: require("../assets/image/food/charsiu.jpg"),
    alt: "Chinese Char Siu",
    flag: "china",
    ingredients: [
      "Pork shoulder",
      "Honey",
      "Soy sauce",
      "Hoisin sauce",
      "Shaoxing wine",
      "Brown sugar",
      "Garlic",
      "Chinese five spice powder",
    ],
    preparation: [
      "Combine honey, soy sauce, hoisin sauce, Shaoxing wine, brown sugar, garlic, and Chinese five spice powder in a large bowl and mix well to make the marinade.",
      "Add the pork shoulder to the bowl and use a fork or knife to prick the meat all over, allowing the marinade to penetrate deeply.",
      "Cover the bowl with plastic wrap and refrigerate for at least 4 hours, or overnight.",
      "Preheat the oven to 375°F (190°C).",
      "Remove the pork from the marinade and place it on a baking rack set over a baking sheet. Reserve the marinade.",
      "Roast the pork for 30-40 minutes, basting it with the reserved marinade every 10 minutes.",
      "Increase the oven temperature to 425°F (220°C) and roast for an additional 5-10 minutes, or until the pork is caramelized and lightly charred.",
      "Let the pork rest for 10 minutes before slicing and serving.",
    ],
    ytID: "nQU-kinfpGI",
  },
  {
    dish: "cream-cheese-fruit-dip",
    title: "Fruit Dip",
    type: "Appetizer",
    img: require("../assets/image/food/fruitdip.jpg"),
    alt: "American Cream Cheese Fruit Dip",
    flag: "usa",
    ingredients: [
      "Cream cheese",
      "Marshmallow cream",
      "Vanilla extract",
      "Fruit (such as strawberries, pineapple, and grapes)",
    ],
    preparation: [
      "In a mixing bowl, combine the cream cheese, marshmallow cream, and vanilla extract. Mix until smooth.",
      "Chill the mixture in the refrigerator for at least 30 minutes.",
      "Wash and chop the fruit into bite-sized pieces.",
      "Serve the chilled dip in a bowl alongside the fruit for dipping.",
    ],
    ytID: "p1Op2DP-S8g",
  },
  {
    dish: "fugazzeta",
    title: "Fugazzeta",
    type: "Main",
    img: require("../assets/image/food/Fugazzeta.jpg"),
    alt: "Argentinian Fugazzeta Pizza",
    flag: "argentina",
    ingredients: ["Pizza dough", "Onions", "Mozzarella cheese", "Oregano"],
    preparation: [
      "Preheat the oven to 450°F (230°C).",
      "Roll out the pizza dough and place it on a baking sheet.",
      "Thinly slice the onions and cook them in a pan until they are soft and translucent.",
      "Place a layer of mozzarella cheese on the pizza dough, leaving a 1-inch border around the edges.",
      "Add a layer of cooked onions on top of the cheese.",
      "Add another layer of mozzarella cheese on top of the onions.",
      "Sprinkle oregano on top of the cheese.",
      "Fold the edges of the pizza dough over the cheese and onions to create a stuffed crust.",
      "Bake the fugazzeta in the preheated oven for 20-25 minutes or until the crust is golden brown and the cheese is melted and bubbly.",
      "Remove from the oven and let it cool for a few minutes before slicing and serving.",
    ],
    ytID: "0iJZ99cDL3k",
  },
  {
    dish: "cheesecake",
    title: "Cheesecake",
    type: "Dessert",
    img: require("../assets/image/food/cheesecake.jpeg"),
    alt: "American New-York style Cheesecake",
    flag: "usa",
    ingredients: [
      "Graham cracker crumbs",
      "Sugar",
      "Butter",
      "Cream cheese",
      "Sour cream",
      "Eggs",
      "Vanilla extract",
      "Lemon juice",
    ],
    preparation: [
      "Preheat the oven to 325°F (160°C).",
      "In a mixing bowl, combine the graham cracker crumbs, sugar, and melted butter. Mix until well combined.",
      "Press the mixture into the bottom of a 9-inch springform pan, making sure to press it down firmly and evenly.",
      "In a separate mixing bowl, beat the cream cheese until smooth and creamy. Add the sour cream and continue to beat until well combined.",
      "Add the sugar, eggs, vanilla extract, and lemon juice to the cream cheese mixture. Beat until well combined and smooth.",
      "Pour the mixture into the prepared crust and smooth the top with a spatula.",
      "Bake the cheesecake in the preheated oven for 55-60 minutes or until the edges are set and the center is slightly jiggly.",
      "Turn off the oven and crack the door open. Let the cheesecake cool in the oven for about 30 minutes.",
      "Remove the cheesecake from the oven and let it cool to room temperature.",
      "Chill the cheesecake in the refrigerator for at least 4 hours or overnight before serving.",
    ],
    ytID: "ZYoYffXWiwk",
  },
  {
    dish: "tiramisu",
    title: "Tiramisu",
    type: "Dessert",
    img: require("../assets/image/food/tiramisu.jpg"),
    alt: "Italian Tiramisu",
    flag: "italy",
    ingredients: [
      "Egg yolks",
      "Sugar",
      "Mascarpone cheese",
      "Heavy cream",
      "Espresso or strong coffee",
      "Ladyfingers",
      "Cocoa powder",
    ],
    preparation: [
      "In a mixing bowl, beat the egg yolks and sugar together until pale and thick.",
      "Add the mascarpone cheese to the mixture and beat until smooth and creamy.",
      "In a separate mixing bowl, beat the heavy cream until stiff peaks form.",
      "Fold the whipped cream into the mascarpone mixture until well combined.",
      "Dip the ladyfingers into the espresso or strong coffee and layer them on the bottom of a 9x13 inch baking dish.",
      "Spread half of the mascarpone mixture over the ladyfingers.",
      "Repeat the layering with another layer of dipped ladyfingers and the remaining mascarpone mixture.",
      "Cover the dish with plastic wrap and chill in the refrigerator for at least 4 hours or overnight.",
      "Before serving, dust the top with cocoa powder.",
    ],
    ytID: "HykFyrhuyMk",
  },
  {
    dish: "caponata",
    title: "Caponata",
    type: "Main",
    img: require("../assets/image/food/caponata.jpg"),
    alt: "Italian Caponata",
    flag: "italy",
    ingredients: [
      "Eggplant",
      "Celery",
      "Tomatoes",
      "Onion",
      "Olives",
      "Capers",
      "Red wine vinegar",
      "Sugar",
      "Pine nuts",
      "Raisins",
    ],
    preparation: [
      "Preheat the oven to 400°F. Cut the eggplant into 1-inch cubes and toss with 2 tablespoons of olive oil, salt and pepper. Roast for 25-30 minutes or until golden brown and tender.",
      "Meanwhile, heat 2 tablespoons of olive oil in a large skillet over medium heat. Add the celery and onion and sauté for 5-7 minutes or until softened.",
      "Add the tomatoes, olives, capers, red wine vinegar, sugar, pine nuts, and raisins to the skillet. Stir to combine and bring to a simmer.",
      "Reduce the heat to low and simmer for 10-15 minutes, stirring occasionally.",
      "Add the roasted eggplant to the skillet and stir to combine.",
      "Cover the skillet and simmer for an additional 10-15 minutes, or until the vegetables are tender and the flavors have melded together.",
      "Serve the Caponata warm or at room temperature with crusty bread or as a side dish.",
    ],
    ytID: "tYqL-t-kvI0",
  },
  {
    dish: "dumpling",
    title: "Dumplings",
    type: "Appetizer",
    img: require("../assets/image/food/dumpling.jpg"),
    alt: "Chinese Dumplings",
    flag: "china",
    ingredients: [
      "Ground Pork",
      "Napa Cabbage",
      "Green Onion",
      "Ginger",
      "Garlic",
      "Soy Sauce",
      "Sesame Oil",
      "Sugar",
      "White Pepper",
      "Wonton Wrappers",
    ],
    preparation: [
      "In a mixing bowl, combine ground pork, minced napa cabbage, chopped green onion, minced ginger, minced garlic, soy sauce, sesame oil, sugar, and white pepper. Mix well until the filling is well combined.",
      "Lay a wonton wrapper on a flat surface and place about 1 teaspoon of filling in the center of the wrapper. Wet the edges of the wrapper with water and fold it in half to form a half-moon shape. Pinch the edges of the wrapper to seal it tightly.",
      "Repeat until all the filling and wrappers are used up.",
      "Bring a large pot of water to a boil. Add the dumplings and stir gently to prevent them from sticking together. Cook for about 4-5 minutes or until they float to the surface.",
      "Remove the dumplings with a slotted spoon and transfer them to a plate.",
      "Serve the dumplings hot with soy sauce, vinegar, or your favorite dipping sauce.",
    ],
    ytID: "J6xFRlG5Qxg",
  },
  {
    dish: "meatloaf",
    title: "Meatloaf",
    type: "Main",
    img: require("../assets/image/food/meatloaf.jpg"),
    alt: "American Meatloaf",
    flag: "usa",
    ingredients: [
      "Ground Beef",
      "Onion",
      "Garlic",
      "Egg",
      "Breadcrumbs",
      "Ketchup",
      "Worcestershire Sauce",
      "Salt",
      "Black Pepper",
    ],
    preparation: [
      "Preheat the oven to 350°F (175°C).",
      "In a large mixing bowl, combine ground beef, chopped onion, minced garlic, beaten egg, breadcrumbs, ketchup, Worcestershire sauce, salt, and black pepper. Mix well until all the ingredients are evenly combined.",
      "Transfer the mixture to a loaf pan and smooth out the top with a spatula.",
      "Bake for about 50-60 minutes or until the internal temperature of the meatloaf reaches 160°F (71°C).",
      "Remove the meatloaf from the oven and let it rest for 5-10 minutes before slicing and serving.",
    ],
    ytID: "gruT_3vzfEg",
  },
  {
    dish: "flan",
    title: "Flan",
    type: "Dessert",
    img: require("../assets/image/food/flan.jpg"),
    alt: "Argentinian Flan",
    flag: "argentina",
    ingredients: ["Eggs", "Milk", "Sugar", "Vanilla Extract", "Lemon Peel"],
    preparation: [
      "Preheat the oven to 350°F (175°C).",
      "In a mixing bowl, whisk together eggs and sugar until the mixture becomes smooth and pale yellow.",
      "Add milk, vanilla extract, and lemon peel to the bowl, and whisk everything together until well combined.",
      "Strain the mixture through a fine-mesh sieve to remove any lumps.",
      "Pour the mixture into a baking dish or individual ramekins.",
      "Place the baking dish or ramekins into a larger baking pan, and fill the larger pan with enough water to come halfway up the sides of the baking dish or ramekins.",
      "Bake for about 45-60 minutes, or until the flan is set and the edges are golden brown.",
      "Remove the flan from the oven and let it cool to room temperature.",
      "Chill the flan in the refrigerator for at least 1 hour before serving.",
      "To serve, run a knife around the edges of the flan to loosen it from the dish, then invert the flan onto a plate.",
    ],
    ytID: "tB55iAo3p2Y",
  },
  {
    dish: "beef-stir-fry",
    title: "Beef Fry",
    type: "Main",
    img: require("../assets/image/food/beefstirfry.jpg"),
    alt: "Chinese Beef Stir Fry",
    flag: "china",
    ingredients: [
      "Beef sirloin",
      "Garlic",
      "Ginger",
      "Green onions",
      "Red bell pepper",
      "Soy sauce",
      "Oyster sauce",
      "Cornstarch",
      "Sesame oil",
      "Vegetable oil",
      "Salt",
      "Black pepper",
    ],
    preparation: [
      "Cut the beef into thin strips, and season with salt, black pepper, and cornstarch.",
      "In a wok or large skillet, heat the vegetable oil over high heat.",
      "Add the beef to the pan and cook for about 2-3 minutes, or until browned.",
      "Remove the beef from the pan and set it aside.",
      "In the same pan, add the garlic, ginger, and green onions and stir-fry for about 30 seconds, or until fragrant.",
      "Add the red bell pepper to the pan and continue stir-frying for another minute.",
      "Return the beef to the pan, and add soy sauce, oyster sauce, and sesame oil.",
      "Stir everything together until the beef and vegetables are coated in the sauce and heated through.",
      "Serve hot over rice or noodles.",
    ],
    ytID: "cyS8ycmGs1U",
  },
  {
    dish: "empanadas",
    title: "Empanadas",
    type: "Appetizer",
    img: require("../assets/image/food/empanadas.jpg"),
    alt: "Argentinian Empanadas",
    flag: "argentina",
    ingredients: [
      "Ground beef",
      "Onion",
      "Red bell pepper",
      "Green olives",
      "Hard-boiled eggs",
      "Cumin",
      "Paprika",
      "Oregano",
      "Salt",
      "Black pepper",
      "Dough",
      "Egg wash",
    ],
    preparation: [
      "In a large skillet, cook the ground beef over medium heat until browned.",
      "Add the onion and red bell pepper to the pan and continue cooking until the vegetables are tender.",
      "Stir in the cumin, paprika, oregano, salt, and black pepper.",
      "Add the chopped green olives and hard-boiled eggs to the skillet and stir to combine.",
      "Remove the skillet from the heat and let the filling cool to room temperature.",
      "Preheat the oven to 375°F (190°C).",
      "Roll out the empanada dough to 1/4-inch thickness and cut out circles using a cookie cutter or bowl.",
      "Place a spoonful of the filling in the center of each circle.",
      "Brush the edges of the dough with egg wash and fold the dough over to form a half-moon shape.",
      "Use a fork to crimp the edges of the empanadas and poke a few holes in the top to let steam escape.",
      "Bake the empanadas on a baking sheet for about 25-30 minutes, or until golden brown.",
      "Serve hot or at room temperature.",
    ],
    ytID: "RRNVLC6IAv4",
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
              ingredients={recipe.ingredients}
              preparation={recipe.preparation}
              youTubeID={recipe.ytID}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Browser;
