# TheRules

Website front-end for www.therules.org

Dev hosted on: https://corpuscallosum.github.io/the-rules-org/dist-ghp/

Site built by Jack Kalish - www.jackkalish.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Gettings set up
1. Clone the repository
2. Open Terminal
3. If you don't already have it, install the Angular CLI globally on your computer by running sudo npm install -g @angular/cli@latest
4. In terminal navigate to the folder where you cloned the repository and install the node package by running `sudo npm install`

## Steps for making changes to Text / HTML
1. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any of the source files.
2. HTML files for different pages can be found in the `src/app folder`.
3. The contents of the FAQ and Get Involved sections are stored as JSON data files located in `src/assets/data` folder
4. Make any changes to HTML or JSON, then save the file, Angular CLI will automatically recompile and reload the page
5. Once the changes are complete, run `ng build` to build the project into the `dist` folder
6. Using FTP, copy over the the contents of the `dist` folder into the root of the SFTP host.
7. Presto! Your changes should now be visible on http://therules.org

## How to add a new page
1. Use `ng generate component page-name` to create a new component for your page.
2. In `app-routing.module.ts` import your new component and add the route for it.
3. Your new page should now load when you navigate to the route - check it out!
4. Edit your page HTML just as you would any other - it is located in `/page-name/page-name.component.html`

## Social Sharing
- We are using @ngx-share for social sharing implementation.
- Documentation here: https://murhafsousli.github.io/ngx-sharebuttons/
- Global settings for the `<share-buttons>` component are defined in `app.module.ts`
- A custom `<sharable-image>` component is available - see `page-postgrowth` for implementation (https://therules.org/#/postgrowth)

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
