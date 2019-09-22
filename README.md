# Burger App
Eat the Burger is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger -- waiting to be devoured. Each burger in the waiting area also has a Eat this Burger! button. When the user clicks it, the burger will move to the right side of the page.

## Overview
Installed npm packages (**express, mysql, express-handlebars**) using npm install <npm package name>. Initialized `package.json` using `npm init -y`. Created a `.gitignore` file to exclude: `node_modules and .DS_Store`. Created an instance of Express and stored in app variable. Defined a PORT utlilizing a Heroku port (**process.env.PORT**) or 3000. Set up the Express app to handle data parsing and to use json data. Created a mySQL database using schema.sql and seeds.sql. Organized project using MVC design. Created Connection.js to connect Node to MySQL. Created orm.js to execute the necessary MySQL commands in the controllers. In the models folder, created burger.js that called the ORM functions using burger specific input for the ORM. In the controllers folder, created burgers_controller.js that created the router for the app. The views folder contain the templates. Index.handlebars is the template that Handlbars can render onto. Created Public folder to contain all HTML assets (images, css).

## File Structue
Burger
*   - .gitignore  
*   - config  
        - connection.js  
        - orm.js  
    - controllers  
        - burgers_controllers.js  
    - db  
        - schema.sql  
        - seeds.sql  
    - models  
        - burger.js  
    - public  
        - assets  
            - css  
                - burger_style.css  
            - img  
                - burger.png  
    - views  
        - index.handlebars  
        - layouts  
            - main.handlebars
*   - node_modules  
*   - package.json  
*   - server.js

## How to use the app
From the home page, the user enters a burger they would like to eat. Clicking the submit button shows the name of the burger on the left side of the brower window and a Eat this Burger button. Clicking Eat this Burger moves the burger to the right side of the browser window.

## Technologies used:
Node  
Express  
Heroku  
Handlebars  
ORM  
MVC  

## My role in app development
According to the project specifications, I created the code and tested the functionality of this application.
