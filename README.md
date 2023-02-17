![Logo](./mealstation/src/assets/readme/ms-logo.png)

##### Mobile-first Single-Page Recipe Browser app built in React

---

Tested on a 2020 M1 Macbook Air, Mac Studio Cinema Display, Samsung Galaxy S21 and a Samsung Galaxy S22 ultra. In addition, Google Chrome Developer Tools and Jest were used for testing purposes.


### Table of Contents

- [How to Use](#how-to-use)
- [Cloning the Repository](#forking-the-repository)
- [Application Features](#application-features)
- [Architectural Decisions](#architectural-decisions)
  - [Folder Structure](#folder-structure)
  - [Libraries](#libraries)
  - [Frameworks](#frameworks)
  - [Application State](#application-state)
- [Credits](#CRE)


## How To Use

The application can be started in three different ways:

- by visiting the GitHub [Demo Environment.](https://jiyorude.github.io/mealStation)
- by downloading the Build found in the Release section of the Repository. Once downloaded, extract the contents to a folder of choice. Open the app by double-clicking on the `index.html` file.
- by forking the Repository or downloading the Source Code, navigating to the `build` folder and double clicking on the `index.html` file.


## Cloning the Repository

The Repository may be _cloned_ for code inspection and code experiments for independent and local purposes. This can be done in two ways:

**Cloning through GitHub Desktop**

- Open GitHub Desktop and select `File > Clone Repository`
- In the tab that opens, select `URL` and type `jiyorude/mealStation`
- Select a directory for GHD to save the Repository in
- Once saved, click on the button `Open in Visual Studio Code`
- Inside Visual Studio Code, open a new Terminal window with `Terminal > New Terminal` and type `cd mealstation` to navigate to the mealstation directory
- If that fails, right-click on the mealstation folder and click on `Copy Path`. Then proceed to type: `cd [path]` Paste the path you just copied in `[path]`.
- Type `npm install` to install all of the missing React and Project dependencies.
- Once done, type `npm start` to start the React Live Server. Your internet browser should open. Any changes made to the code will be updated in real-time, assuming that for SCSS-based adjustments you have a SCSS Compiler installed such as Live SASS Compiler.

**Cloning through Git**

- Make sure Git is installed. For more information [click here](https://github.com/git-guides/install-git)
- Open a terminal window. You can do this stand-alone or in Visual Studio Code.
- Type `git clone https://github.com/jiyorude/mealStation`. The repository will be cloned into the default git directory for your operating system.
- Open the repository in Visual Studio Code. Open a terminal window in Visual Studio code with: `Terminal > New Terminal`. Right click on the mealstation folder and click on `Copy Path`. Proceed to type: `cd [path]`. Paste the path you just copied in `[path]`.
- Type `npm install` to install all of the missing React and Project dependencies.
- Once done, type `npm start` to start the React Live Server. Your internet browser should open. Any changes made to the code will be updated in real-time, assuming that for SCSS-based adjustments you have a SCSS compiler installed such as Live SASS Compiler.


## Application Features

mealStation is a Single Page Application in the form of a recipe browser. The user is able to _scroll through all of the recipes_ currently stored in the database. Once a recipe is clicked, the user is automatically taken to a _full screen rendition of the recipe_; showing additional information regarding the recipe, such as an ingredients list, a photograph of the dish and a preparation video. The app will return to the database if the user exits the recipe screen. mealStation contains a _search bar_, allowing the user to search for a favorite recipe in a more convenient matter.

_Two custom features_ implemented into the app are a _sorting function_ and a _three Course Randomizer_. The first feature allows the user to sort the database based on the type of preferred kitchen the dish originates from. The second feature outputs a pop-up screen with a appetizer, main course and desert chosen at random by React.


## Architectural Decisions

This chapter briefly discusses some of the architectural and design choices that were taken during the production process of the app.

##### Folder Structure

mealStation uses the following folder structure:

```
|-- mealstation
  |-- build
  |-- docs
  |-- node_modules
  |-- public
  |-- src
    |-- assets
      |-- fonts
      |-- image
      |-- readme
      |-- video
    |-- components
    |-- css
    |-- scss
      |-- abstracts
      |-- base
      |-- components
|-- README.md
```

**mealstation**
The default folder containing the entire project. Created by create-react-app by default

**build**
Folder containing the production-ready and optimized build of mealStation. Created by create-react-app by default after initiating `npm run build`

**docs**
To contrary belief, this is _not_ a wiki/documentation section. This folder contains a copy of the production build for GitHub pages in order to provide a proper live demo. GitHub can only create a live-demo from files created in the root of the project or in a dedicated `docs` folder. In order to keep the project repositor itself clean and accessible at all times, the decision was made to place the live demo in the docs folder.

**node_modules**
Folder containing all of the React and Project dependencies such as babel, jest, reactnode, etc. Created by create-react-app by default.

**public**
Contains publicly accessible assets related to the app, such as the favicon, a web manifest and a index.html template file which is later used by React to inject the App.

**src**
The Source Folder; contains all of the source files required for React to build the App. This is where all of the React components, CSS, fonts and media files are stored. The folder contains a couple of files, such as `gitignore`, which are generated by create-react-app by default. The main folder contains the `index.js` and the main `MealStation.js` file.

The `index.js` is the main index page of the app which in conjunction initializes and injects the React DOM into the index.html file found in the public folder. The `MealStation.js` file is the main JavaScript (a skeleton if you will) file of the app itself; containing all of the separate components required to make the App work. All of the components come together in the MealStation JavaScript file, while in turn the index.js file injects the App into the React DOM for it to be visible in the browser.

Both the Index and MealStation files were placed in the main `source` folder in order for the user to easily find them at all times as both of these files are the most important JavaScript files found in the project. Both files serve as the core foundation of mealStation and therefore, fast recognizability was of most importance.

**assets** 
Main folder to where all of the App's assets are stored in order to keep the project repository clean and accessible. All of the different assets have been stored in respective folders in order to avoid confusion and to allow the user to find the required asset in a swift manners. Assets related to the readme, such as the logo displayed on top, have been placed in a separate `readme` folder in order to store these away from the dependencies required by React and to avoid any confusion as these assets are not used anywhere inside the React App.

**components**
MealStation.js consists of a number of React-based components. In order to allow the user to keep a clear and understandable overview of all files, the choice was made to place all of the components into a separate `components` folder found inside of the src or `source` folder. The components folder was not placed in the assets folder as this folder was primarily reserved for media-based and design-based assets. The components folder contains all of the separate React components such as the recipe browser itself, the recipe database, the Header and footer, etc.

Athough the database is in fact a regular JavaScript object, it was chosen to place this in the components folder as some of the components use the data found in that particular file; making the database a _important component_ of the app itself, thus explaning why it was placed there.

Placing all of the React-components in a separate folder emphasizes the re-usability and modular idea of these components and their code, benefits the overall clarity of the project structure. The idea of reusability and modularity can also be found in the `RecipeButtons.js` file, which serves as re-usable template for all of the recipes found inside of the grid.

**css**
Contains all of the minified css files compiled by Live SASS Compiler. The CSS files have not been placed in separate folders as they only serve as 'css import statements' inside of the React components in order for the styles to be applied and have no other purpose.

**scss**
Contains all of the SASS stylesheets, made according to the `SASS 7-1 Architecture` in order to keep the various stylesheets recognizable, modular, understandable and accessible. The `abstracts` folder contains SCSS mixins and font/color variables. The `base` folder contains two SASS stylesheets containing a CSS box-model reset and the fonts used within the app. The `components` folder contains styling for all of the separate components, such as the header and footer. The `main.scss` file found in the scss folder combines all styling found in the other stylesheets and adds additional styling for the app itself.

#### Libraries

`Google Fonts` was used as a font library in order to obtain the various fonts used within mealStation. `ReactSVG` was used in order to include various SVG files inside of their respective components. While SVG's can be added in React without any additional library or module, it requires a lot of code to do so and negatively affects the readability of the code. While the `<img>` element supports svg, a number of issues have been experienced in the past, with logo's being only half visible or loading extremely slow. ReactSVG solves all of these issues and allows for SVG's to be implemented in a single line of code. 

`anime.js` is a JavaScript animation library used for the various animations found within the app. While there are other libraries available such as gsap, the choice for animejs was primarily one of personal preference as it was used in all of my other projects. Lastly, `fullPage.js` is a JavaScript library that allows for the creation of beautiful fullscreen experiences and scroll animations. This library was used for both the recipe browser and the actual recipe card. 

#### Frameworks

The App was built within the React framework and utilizes JavaScript and JSX. Stylesheet-wise, SCSS was used to design the app in tandem with 'Live SASS Compiler' to compile the SCSS stylesheets to CSS in real-time, as internet browsers are unable to properly understand SCSS by default. SCSS was chosen as a CSS framework because of the 'mixins' and 'SCSS variables'. Especially mixins can tremendously contribute to a proper usage of the `DRY-principle`. The mixins and SCSS variable functions save time and are easier to use/declare within SCSS compared to vanilla CSS.

#### Application State
**YET TO BE ADDED ONCE APP IS DONE**


## Credits
To conclude, a list can be found underneath containing all of the external assets used during the production process of the app.

```
Fork Icon (flaticon.com)
Fork Icon (onlinewebfonts.com)
Hanken Grotesk Font (Google Fonts)
Open Sans Font (Google Fonts)
Pacifico Font (Google Fonts)
ReactSVG (tanem)
anime.js (Julian Garnier)
fullPage.js (Alvaro Trigo)
Live SASS Compiler (Ritwick Dey)
Prettier (Prettier)
ES7 React/Redux/React-Native snippets (dsznajder)
```

`Coded by Jordy Veenstra - February 2023`