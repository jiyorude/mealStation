const dish = {
  id: 14,
  name: "Char Siu",
  type: "Main Course",
  origin: "China",
  image: "../assets/image/food/charsiu.jpg",
  alt: "Chinese char Siu",
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
};

areThereIngredients = () => {
  if (dish.ingredients) {
    return true;
  } else {
    return false;
  }
};


export default dish;