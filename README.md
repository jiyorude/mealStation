![Logo](./mealstation/src/assets/readme/ms-logo.png)

<h4 align="center">
Mobile-first Single-Page Recipe Browser app built in React
</h4>

---

*This App was built for a coding interview assignment*

mealStation is a recipe browser SPA made with mobile-first responsivity in mind. The App contains recipes from four different countries: Italy, China, Argentina and the United States, with each of them having two appetizers, two main courses and two desserts.

The App contains a couple of search-features. Although the user is able to browse the App by searching for the name of the dish just fine, mealStation contains a custom second search/sorting feature which allows the user to search for the type of dish (appetizer, main, dessert) or even based on their kitchen of origin. Bon Appetit.

## Table of Contents

- [How to Use](#how-to-use)
- [Code Inspection](#code-inspection)
- [Application Features](#application-features)
- [Architectural Decisions](#architectural-decisions)
  - [Folder Structure](#folder-structure)
  - [Libraries](#libraries)
  - [Frameworks](#frameworks)
  - [Application State](#application-state)
- [Conducted Tests](#conducted-tests)
- [Personal Reflection](#personal-reflection)
- [Credits](#credits)

## How To Use

The application can be started in three different ways:

- by visiting the GitHub [Demo Environment.](https://jiyorude.github.io/mealStation).
- by downloading the Build found in the Release section of the Repository. Once downloaded, extract the contents to a folder of choice. Open the app by double-clicking on the `index.html` file.
- by forking the Repository or downloading the Source Code, navigating to the `build` folder and double clicking on the `index.html` file.

Depending on the browser, it is possible that the mealStation logo is not displayed properly due to a blocked `Cross-Origin Request`. Therefore, it is recommended to open the Demo Environment instead for testing purposes.

## Code Inspection

The Repository may be _cloned_ for code inspection and code experiments for independent and local purposes. **Node.js is required for both options to work.** More info can be found [here](https://nodejs.org/en/). The cloning can be done in two possible ways:

**Cloning through GitHub Desktop**

- Open GitHub Desktop and select `File > Clone Repository`.
- In the tab that opens, select `URL` and type `jiyorude/mealStation`.
- Select a directory for GitHub Desktop to save the Repository in.
- Once saved, click on the button `Open in Visual Studio Code`.
- Inside Visual Studio Code, open a new Terminal window with `Terminal > New Terminal` and type `cd mealstation` to navigate to the mealstation directory.
- If the Terminal window presents a different initial folder, right-click on the mealstation folder and click on `Copy Path`. Then proceed to type: `cd [path]` Paste the path you just copied in `[path]`.
- Type `npm install` to install all of the missing React and Project dependencies.
- Once done, type `npm start` to start the React Live Server. Your internet browser should open. Any changes made to the code will be updated in real-time, assuming that for SCSS-based adjustments you have a SCSS Compiler installed such as Live SASS Compiler.

**Cloning through Git**

- Make sure Git is installed. For more information [click here](https://github.com/git-guides/install-git).
- Open a terminal window. You can do this stand-alone or in Visual Studio Code.
- Type `git clone https://github.com/jiyorude/mealStation`. The repository will be cloned into the default git directory for your operating system.
- Open the repository in Visual Studio Code. Open a terminal window in Visual Studio code with: `Terminal > New Terminal`. Right click on the mealstation folder and click on `Copy Path`. Proceed to type: `cd [path]`. Paste the path you just copied in `[path]`.
- Type `npm install` to install all of the missing React and Project dependencies.
- Once done, type `npm start` to start the React Live Server. Your internet browser should open. Any changes made to the code will be updated in real-time, assuming that for SCSS-based adjustments you have a SCSS compiler installed such as Live SASS Compiler.

## Application Features

mealStation is a Mobile-first, Single Page Application in the form of a recipe browser. The user is able to _scroll through all of the recipes_ currently stored in the database. Once a recipe is clicked, the user is automatically taken to a _pop-up rendition of the recipe_; showing additional information regarding the recipe, such as an ingredients list, a photograph of the dish and a preparation video. The app will return to the database if the user exits the recipe screen by clicking the *exit* button on the top left. mealStation contains a _search bar_, allowing the user to search for a recipe of choice in a more convenient matter.

The search bar contains two additional custom features. The first feature allows the user to sort the database based on the type of preferred kitchen the dish originates from. This allows for a grid consisting of, for example, only Argentinian or only Chinese dishes. The second feature allows the user to sort the recipe database based on the type of dish required. Three entries are accepted: *main, appetizer* and *dessert*.

## Architectural Decisions

This chapter briefly discusses some of the architectural and design choices that were taken during the production process of the app.

#### Folder Structure

mealStation uses the following folder structure:

```
|-- docs
|-- mealstation
  |-- build
  |-- node_modules
  |-- public
  |-- src
    |-- assets
      |-- fonts
      |-- image
          |-- flags
          |-- food
      |-- readme
      |-- video
    |-- components
    |-- css
    |-- jest
    |-- misc
    |-- scss
      |-- abstracts
      |-- base
      |-- components
|-- README.md
```

Underneath, a detailed explanation is given regarding the contents of every single folder found in the project.

**docs**

To contrary belief, this is _not_ a wiki/documentation section. This folder contains a copy of the production build for GitHub pages in order to provide a proper live demo. GitHub can only create a live-demo from files created in the root of the project or in a dedicated `docs` folder. In order to keep the project repositor itself clean and accessible at all times, the decision was made to place the live demo in the docs folder.

**mealstation**

The default folder containing the entire project. Created by `create-react-app` by default

**build**

Folder containing the production-ready and optimized build of mealStation. Created by create-react-app by default after initiating `npm run build`

**node_modules**

Folder containing all of the React and Project dependencies such as babel, jest, reactnode, etc. Created by create-react-app by default.

**public**

Contains publicly accessible assets related to the app, such as the favicon, a web manifest and a `index.html` template file which is later used by React to inject the App.

**src**

The Source Folder; contains all of the source files required for React to build the App. This is where all of the React components, CSS, fonts and media files are stored. The folder contains a couple of files, such as `gitignore`, which are generated by create-react-app by default. The main folder contains the `index.js` and the main `MealStation.js` file.

The `index.js` is the main index page of the app which in conjunction initializes and injects the React DOM into the index.html file found in the public folder. The `MealStation.js` file is the main JavaScript (a skeleton if you will) file of the app itself; containing all of the separate components required to make the App work. All of the components come together in the MealStation JavaScript file, while in turn the index.js file injects the App into the React DOM for it to be visible in the browser.

Both the Index and MealStation files were placed in the main `source` folder in order for the user to easily find them at all times as both of these files are the most important JavaScript files found in the project. Both files serve as the core foundation of mealStation and therefore, fast recognizability was of most importance.

**assets**

Main folder to where all of the App's assets are stored in order to keep the project repository clean and accessible. All of the different assets have been stored in their respective folders in order to avoid confusion and to allow the user to find the required asset in a swift manner. Assets related to the readme, such as the logo displayed on top, have been placed in a separate `readme` folder in order to store these away from the dependencies required by React and to avoid any confusion as these assets are not used anywhere inside the React App.

**components**

MealStation.js consists of a number of React-based components. In order to allow the user to keep a clear and understandable overview of all files, the choice was made to place all of the components into a separate `components` folder found inside of the src or `source` folder. The components folder was not placed in the assets folder as this folder was primarily reserved for media-based and design-based assets. The components folder contains all of the separate React components such as the recipe browser itself, the recipe modal template, the Header and footer, etc.

Placing all of the React-components in a separate folder emphasizes the re-usability and modular idea of these components and their code. It also benefits the overall clarity of the project structure. The idea of reusability and modularity can also be found in the `Recipe.js` file, which serves as re-usable template for all of the recipes found inside of the grid.

**css**

Contains all of the minified css files compiled by Live SASS Compiler. The CSS files have not been placed in separate folders as they only serve as 'css import statements' inside of the React components in order for the styles to be applied and have no other purpose.

**jest**

Folder containing two JavaScript files: one containing a code snippet and a function, the other containing the test parameters for jest. The test revolves around returning a boolean value based on whether there are entries found in the 'ingredients' array.

**misc**

Folder containing the entire custom-made Recipe Database in JavaScript. Parts of the code were moved to `Browser.js`. File added in the `misc` folder for completeness sake.

**scss**

Contains all of the SASS stylesheets, made according to the `SASS 7-1 Architecture` in order to keep the various stylesheets recognizable, modular, understandable and accessible. The `abstracts` folder contains SCSS mixins, the styling for the grid and numerous font/color variables. The `base` folder contains two SASS stylesheets containing a CSS box-model reset and the fonts used within the app. The `components` folder contains styling for all of the separate components, such as the header and footer. The `main.scss` file found in the scss folder combines all styling found in the other stylesheets and adds additional styling for the app itself.

#### Libraries

Besides React, `Google Fonts` was used as a font library in order to obtain the various fonts used within mealStation. `ReactSVG` was used in order to include various SVG files inside of their respective components. While SVG's can be added in React without any additional library or module, it requires a lot of code to do so and negatively affects the readability of the code. While the `<img>` element supports svg, a number of issues have been experienced in the past, with logo's being only half visible or loading extremely slow. ReactSVG solves all of these issues and allows for SVG's to be implemented in a single line of code.

#### Frameworks

The App was built within the React framework. React utilizes both JavaScript and JSX. Stylesheet-wise, SCSS was used to design the app in tandem with 'Live SASS Compiler' to compile the SCSS stylesheets to CSS in real-time. SCSS was chosen as a CSS framework because of the 'mixins' and 'SCSS variables' available, which in turn can contribute to further usage of the `DRY-Principle`. The mixins and SCSS variable functions save time and are easier to use/declare within SCSS compared to vanilla CSS.

#### Application State

The concept of `useState` and `useEffect` was used in two files: `Browser.js` and `Recipe.js`. From now on I'll refer to them as 'Browser' and 'Recipe'. Recipe serves as a template file for all of the recipe buttons and the modal screen if the user selects a recipe.

The state used here is `showModal` and `setModal`. This serves as a trigger for the modal screen whenever a recipe button is clicked. Two instances of `useEffect` were added in order to prevent the user from scrolling in the background until the modal screen was closed.

if the modal is active, the body of the document is given a `overflow: "hidden"` CSS parameter in order to prevent the user from doing so. if the useState for the modal changes back to false, overflow control for the document is given back to the user.

Further on in the code, the setModal trigger is activated by clicking a button, which in this case, corresponds to a recipe button. Through the concept of `prop drilling`, the recipe database object's properties are drilled down from the Browser to the Recipe and appear on the modal pop-up, or the recipe card. The code underneath the button shows the contents for the modal and is only visible whenever a recipe button is clicked. the `setModal` state can be resetted, or in this case, returned to `false` by clicking on the exit button. 

The properties of the ingredients and preparation arrays found in their respective recipes are drilled down to the modal recipe card through the map function. 

The database for the recipes itself is found in the Browser, and in turn contains a object based on the Recipe component. In turn, the connection between Browser and Recipe is found here, inside of the Recipe component. `const recipe` contains the data required in the form of `recipe.dish`, or `recipe.type` that the properties (such as `props.title` and `props.img`) in Recipe require to properly render the attributes on screen and allow the app to be used the way it is.

## Conducted Tests

The App has been tested on a number of devices:

- Samsung Galaxy S21
- Samsung Galaxy S22 Ultra
- Macbook Air M1 2020 13"
- All available responsive templates found in Google Chrome Developer Tools 

## Personal Reflection

The App was built in approximately 25 - 30 hours.

**What went well**

* **Search Bar Function** - Implementing the Search Bar Function was a very rewarding and surprisingly fast experience.
* **Jest Usage** - Jest was easy to use and understand during this project.
* **Visualizing and Building the App** - The majority of things worked out exactly as I had them in my head before starting development.
* **Grid/Recipe Development** - Had a blast working with Grids. Since I mainly use flex, this was a very welcome change of scenery.
* **Folder Structure** - I think the folder structure is very concise and to the point. I haven’t had any issues finding anything I needed during development.

**What could be better:**

* **Database Implementation** - This process took longer than expected due to a number of errors that kept being thrown by React. It turned out to be a minor error found inside the props found in `Browser.js` Recipe component.
* **SCSS Hierarchy** - During the process of creating media queries, I had to use `!important;` more often than I would like to. 

**Room for Future Features/Developments**

* Allowing the user to exit the recipe modal by clicking everywhere as now the exit button must be clicked.
* Animations when the user opens the recipe modal. I did try to do this, but `anime.js` kept interfering with useState and the modal; preventing me from implementing animations in this build.
* More Recipes from different countries.
* Dedicated database for the App.
* threeCourse Randomizer function: a pop-up modal showing a randomized appetizer, main course and dessert.
* Changing the hierarchy of the SCSS files so the media queries can be updated.

## Credits

To conclude, a list can be found underneath containing all of the external assets used during the production process of the app.

```
Fork Icon (flaticon.com)
Fork Icon (onlinewebfonts.com)
Hanken Grotesk Font (Google Fonts)
Open Sans Font (Google Fonts)
Pacifico Font (Google Fonts)
ReactSVG (tanem)
Live SASS Compiler (Ritwick Dey)
Prettier (Prettier)
ES7 React/Redux/React-Native snippets (dsznajder)
Jest (Meta)
Magnifying Glass Icon (svgrepo)
Flag Icons (Wikipedia)
Food Photos (Various Websites - Copyrights belong to their respective owners)
anime.js (Julian Garnier)
```

```
Coded by Jordy Veenstra - February 2023
```
