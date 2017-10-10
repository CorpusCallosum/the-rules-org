# TheRules

Website front-end for www.therules.org
dev hosted on: https://corpuscallosum.github.io/the-rules-org/dist/

Site built by Jack Kalish - www.jackkalish.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Steps for making changes to Text / HTML
1. Clone the repository
2. Open Terminal
3. Install the Angular CLI globally (see below for instructions)
4. Install the node package by running `sudo npm install`
5. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any of the source files.
5. HTML files for different pages can be found in the `src/app folder`.
6. The contents of the FAQ and Get Involved sections are stored as JSON data files located in `src/assets/data` folder
7. Make any changes to HTML or JSON, then save the file, Angular CLI will automatically recompile and reload the page
8. Once the changes are complete, run `ng build` to build the project into the `dist` folder
9. Copy the contents of the `dist` folder into the root of the repository - this is where the site gets served from on gh-pages
10. Push the updates into the gh-pages branch of the repository - this is where the site is served from
11. Changes usually take effect within a few minutes - clear your cache and reload the page www.therules.org to see your changes.

## Install the Angular CLI and Node Packages

First thing's first--
If you don't already have it, install the Angular CLI globally on your computer by running `sudo npm install -g @angular/cli@latest`

Install the node package by running `sudo npm install`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

For building to test on gh-pages, use the command `npm run build-ghp`. This script is defined in package.json

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
