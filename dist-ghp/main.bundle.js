webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_page_about_page_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__faq_page_faq_page_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__get_involved_page_get_involved_page_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__searchable_accordian_searchable_accordian_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__banner_banner_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__video_overlay_video_overlay_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//my custom components and services imported here








//
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            //and declared here:
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__about_page_about_page_component__["a" /* AboutPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__faq_page_faq_page_component__["a" /* FaqPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__get_involved_page_get_involved_page_component__["a" /* GetInvolvedPageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__searchable_accordian_searchable_accordian_component__["a" /* SearchableAccordianComponent */],
            __WEBPACK_IMPORTED_MODULE_11__banner_banner_component__["a" /* BannerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__video_overlay_video_overlay_component__["a" /* VideoOverlayComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    return BannerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], BannerComponent.prototype, "imgSrc", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], BannerComponent.prototype, "title", void 0);
BannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-banner',
        template: __webpack_require__(172),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [])
], BannerComponent);

//# sourceMappingURL=banner.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchableAccordianComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchableAccordianComponent = (function () {
    function SearchableAccordianComponent(http) {
        this.http = http;
        this.searchTerm = "";
        this.panelClicked = false;
    }
    SearchableAccordianComponent.prototype.ngOnInit = function () {
        var _this = this;
        //load data
        this.http.get('assets/data/' + this.dataFile)
            .subscribe(function (res) {
            _this.questions = res.json();
            _this.updateFilter();
        });
    };
    SearchableAccordianComponent.prototype.updateFilter = function () {
        console.log(this.questions);
        var that = this;
        this.filteredResults = this.questions.questions.filter(function (q) {
            console.log("searching : " + q.questionTxt);
            console.log("for : " + that.searchTerm);
            if (q.questionTxt.toLowerCase().search(that.searchTerm.toLowerCase()) != -1)
                return true;
            else
                return false;
        });
        this.panelClicked = false;
    };
    //when search input box is typed in, tell the filter to UPDATE
    SearchableAccordianComponent.prototype.onChange = function () {
        this.updateFilter();
    };
    SearchableAccordianComponent.prototype.onPanelClick = function (index) {
        if (index != 0)
            this.panelClicked = true;
    };
    return SearchableAccordianComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], SearchableAccordianComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], SearchableAccordianComponent.prototype, "dataFile", void 0);
SearchableAccordianComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-searchable-accordian',
        template: __webpack_require__(176),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SearchableAccordianComponent);

var _a;
//# sourceMappingURL=searchable-accordian.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoOverlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoOverlayComponent = (function () {
    function VideoOverlayComponent(sanitizer, ref) {
        this.sanitizer = sanitizer;
        this.ref = ref;
        this.isOpen = false;
        this.debug = true;
    }
    VideoOverlayComponent.prototype.ngOnInit = function () {
        //concat the id into the youtube src url
        var ytUrl = "https://www.youtube.com/embed/" + this.ytid + "?rel=0&amp;showinfo=0?ecver=1";
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(ytUrl);
        //init the yt player...
        /*var player;
          function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
              height: '390',
              width: '640',
              videoId: 'M7lc1UVf-VE',
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
          }*/
        this.monitor = setInterval(this.checkfocus.bind(this), 100);
    };
    VideoOverlayComponent.prototype.checkfocus = function () {
        var elem = document.activeElement;
        if (elem && elem.tagName == 'IFRAME') {
            clearInterval(this.monitor);
            //alert('clicked!');
            this.launch();
            this.isOpen = true;
        }
    };
    VideoOverlayComponent.prototype.launch = function () {
        if (this.debug)
            console.log('launch video overlay');
        // this.isOpen = true;
    };
    VideoOverlayComponent.prototype.close = function () {
        this.isOpen = false;
        this.monitor = setInterval(this.checkfocus.bind(this), 100);
        //stop the video
        this.url = "";
        this.ref.markForCheck();
        var ytUrl = "https://www.youtube.com/embed/" + this.ytid + "?rel=0&amp;showinfo=0?ecver=1";
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(ytUrl);
    };
    return VideoOverlayComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], VideoOverlayComponent.prototype, "ytid", void 0);
VideoOverlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-video-overlay',
        template: __webpack_require__(177),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */]) === "function" && _b || Object])
], VideoOverlayComponent);

var _a, _b;
//# sourceMappingURL=video-overlay.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "/*********************\nBREAKPOINTS\n*********************/\n/*@mixin breakpoint($point) {\n   @if $point == desktop {\n     @media (min-width: 70em) { @content ; }\n  }\n   @else if $point == laptop {\n     @media (min-width: 64em) { @content ; }\n  }\n    @else if $point == tablet {\n     @media (min-width: 50em) { @content ; }\n  }\n   @else if $point == phablet {\n     @media (min-width: 37.5em)  { @content ; }\n  }\n  @else if $point == mobile {\n     @media (max-width: 37.5em)  { @content ; }\n\n  }\n}*/\n.badges {\n  text-align: center;\n  font-family: fira-regular;\n  font-size: 20px;\n  color: white;\n  background-color: transparent;\n  padding: 0 !important;\n  height: auto;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .badges .tr-badge {\n    transition: .5s all;\n    opacity: .7;\n    cursor: pointer;\n    cursor: hand;\n    padding: 2vw;\n    border-radius: 10px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin-bottom: 0 !important;\n    background-color: rgba(0, 0, 0, 0.3); }\n    .badges .tr-badge:hover {\n      text-decoration: underline;\n      opacity: .9; }\n    .badges .tr-badge img {\n      height: auto;\n      width: 100%;\n      max-height: 150px;\n      max-width: 150px; }\n    .badges .tr-badge h1, .badges .tr-badge h3 {\n      font-size: 20px; }\n  .badges .active {\n    opacity: 1;\n    text-decoration: underline;\n    background-color: rgba(255, 255, 255, 0.1);\n    color: white; }\n\n.animate-open {\n  -webkit-animation-name: cssAnimation;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards; }\n\n@-webkit-keyframes cssAnimation {\n  from {\n    -webkit-transform: rotate(0deg) scale(1) skew(0deg) translate(100px); }\n  to {\n    -webkit-transform: rotate(0deg) scale(2) skew(0deg) translate(100px); } }\n\n.badge-text {\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 20px; }\n  .badge-text p {\n    color: rgba(0, 0, 0, 0.9); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "/* IMPORTS */\n/* COLORS */\n/* Alternate Palette */\n/* FONTS */\n@font-face {\n  font-family: blackout-midnight;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/blackout/blackout_midnight-webfont.ttf\"); }\n\n@font-face {\n  font-family: blackout-two-am;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/blackout/blackout_two_am-webfont.ttf\"); }\n\n@font-face {\n  font-family: fira-thin;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Thin.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-regular;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Regular.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-book;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Book.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-medium;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Medium.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-semibold;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-SemiBold.otf\"); }\n\n@font-face {\n  font-family: fira-bold;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Bold.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-bold-italic;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-BoldItalic.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-extrabold-italic;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-ExtraBoldItalic.otf\") format(\"opentype\"); }\n\n/*********************\nBREAKPOINTS\n*********************/\n/*@mixin breakpoint($point) {\n   @if $point == desktop {\n     @media (min-width: 70em) { @content ; }\n  }\n   @else if $point == laptop {\n     @media (min-width: 64em) { @content ; }\n  }\n    @else if $point == tablet {\n     @media (min-width: 50em) { @content ; }\n  }\n   @else if $point == phablet {\n     @media (min-width: 37.5em)  { @content ; }\n  }\n  @else if $point == mobile {\n     @media (max-width: 37.5em)  { @content ; }\n\n  }\n}*/\n.navbar {\n  background-color: rgba(0, 0, 0, 0.7);\n  text-transform: uppercase;\n  font-family: blackout-midnight;\n  margin: 0;\n  z-index: 999;\n  margin-bottom: -50px;\n  width: 100%; }\n  .navbar.home {\n    background-color: transparent; }\n  @media (min-width: 768px) {\n    .navbar {\n      position: fixed;\n      top: 0;\n      left: 0; } }\n\n.navbar-brand {\n  background-color: #33ffff;\n  font-size: 2em;\n  color: #222; }\n\n.navbar-brand:hover {\n  background-color: #00cccc;\n  color: #222; }\n\n.navbar-toggle {\n  background-color: #33ffff; }\n  .navbar-toggle .icon-bar {\n    background-color: black; }\n\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  color: #33ffff;\n  font-size: 1.5em; }\n\nnav a:focus {\n  color: black; }\n\n.nav > li > a:focus {\n  color: #00cccc; }\n\nnav a:hover {\n  color: #00cccc;\n  background-color: transparent; }\n\n.panel-footer {\n  background-color: black;\n  font-family: fira-regular;\n  color: #555;\n  border-top: none;\n  margin-top: 2em; }\n  .panel-footer a {\n    color: #adadad; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".banner {\n  /* background-image: linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0)), url(/assets/images/join-the-movement.jpg);*/\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 100%;\n  background-attachment: fixed;\n  height: 330px;\n  position: relative;\n  margin-bottom: 30px; }\n\n.container {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0; }\n\nh1 {\n  font-size: 60px;\n  margin-top: 36px;\n  text-shadow: 2px 2px 8px #000000;\n  text-align: right;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "/* IMPORTS */\n/* COLORS */\n/* Alternate Palette */\n/* FONTS */\n@font-face {\n  font-family: blackout-midnight;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/blackout/blackout_midnight-webfont.ttf\"); }\n\n@font-face {\n  font-family: blackout-two-am;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/blackout/blackout_two_am-webfont.ttf\"); }\n\n@font-face {\n  font-family: fira-thin;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Thin.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-regular;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Regular.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-book;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Book.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-medium;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Medium.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-semibold;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-SemiBold.otf\"); }\n\n@font-face {\n  font-family: fira-bold;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Bold.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-bold-italic;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-BoldItalic.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-extrabold-italic;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-ExtraBoldItalic.otf\") format(\"opentype\"); }\n\n.parallaxWrapper {\n  height: 100px;\n  overflow: hidden; }\n\n.offset-parallax {\n  margin-top: -100px;\n  height: 100px; }\n  .offset-parallax h1 {\n    margin-top: 10px;\n    font-family: blackout-midnight; }\n\n/*********************\nBREAKPOINTS\n*********************/\n/*@mixin breakpoint($point) {\n   @if $point == desktop {\n     @media (min-width: 70em) { @content ; }\n  }\n   @else if $point == laptop {\n     @media (min-width: 64em) { @content ; }\n  }\n    @else if $point == tablet {\n     @media (min-width: 50em) { @content ; }\n  }\n   @else if $point == phablet {\n     @media (min-width: 37.5em)  { @content ; }\n  }\n  @else if $point == mobile {\n     @media (max-width: 37.5em)  { @content ; }\n\n  }\n}*/\nhtml, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\nbody {\n  overflow: auto;\n  -webkit-perspective: 1px;\n          perspective: 1px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n  body, body * {\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d; }\n\n#hero {\n  position: relative; }\n  #hero video {\n    position: relative;\n    display: none; }\n    @media (min-width: 768px) {\n      #hero video {\n        display: block; } }\n  #hero .slideShow {\n    width: 100%;\n    height: 100%; }\n  #hero .img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n    transition: .5s opacity;\n    opacity: 0; }\n    @media (min-width: 768px) {\n      #hero .img {\n        display: none; } }\n    #hero .img.active {\n      opacity: 1; }\n\n.video-container {\n  transition: .5s opacity;\n  opacity: 1;\n  overflow: hidden; }\n  .video-container.animate-hide {\n    opacity: 0; }\n\n#video-viewport {\n  position: relative;\n  top: 0;\n  overflow: hidden; }\n  #video-viewport.animate-hide {\n    opacity: 0; }\n\n.video-info {\n  transition: .5s all;\n  z-index: 100;\n  position: absolute;\n  margin-right: 0px;\n  margin-bottom: 10px;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 30px 10px 10px;\n  font-family: fira-regular;\n  font-size: 12px;\n  bottom: 0;\n  right: 0;\n  max-width: 90%;\n  display: none; }\n  .video-info.animate-hide {\n    margin-right: -100px; }\n  @media (min-width: 768px) {\n    .video-info {\n      display: block; } }\n\n.top {\n  background-image: url(/the-rules-org/dist-ghp/assets/images/hero-bg.jpg);\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  padding-bottom: 5%;\n  z-index: 9999;\n  background-color: transparent;\n  -webkit-animation: move 100s infinite linear;\n          animation: move 100s infinite linear;\n  margin-top: -.1em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .top .title {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 1.1vw;\n    width: 80%;\n    font-family: blackout-midnight;\n    color: #33ffff;\n    font-size: 12vw;\n    line-height: 1;\n    text-align: center;\n    text-shadow: 2px 2px 8px #000000; }\n\n@-webkit-keyframes move {\n  from {\n    background-position: 0 center; }\n  to {\n    background-position: 100vw center; } }\n\n@keyframes move {\n  from {\n    background-position: 0 center; }\n  to {\n    background-position: 100vw center; } }\n\n.join-the-movement-header {\n  -webkit-transform: translateZ(-0.8px) scale(1.8);\n          transform: translateZ(-0.8px) scale(1.8);\n  z-index: -800;\n  background-image: linear-gradient(to right, black, transparent), url(/the-rules-org/dist-ghp/assets/images/join-the-movement.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 100%;\n  height: 100px;\n  background-attachment: fixed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "/* IMPORTS */\n/* COLORS */\n/* Alternate Palette */\n/* FONTS */\n@font-face {\n  font-family: blackout-midnight;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/blackout/blackout_midnight-webfont.ttf\"); }\n\n@font-face {\n  font-family: blackout-two-am;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/blackout/blackout_two_am-webfont.ttf\"); }\n\n@font-face {\n  font-family: fira-thin;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Thin.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-regular;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Regular.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-book;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Book.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-medium;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Medium.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-semibold;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-SemiBold.otf\"); }\n\n@font-face {\n  font-family: fira-bold;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-Bold.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-bold-italic;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-BoldItalic.otf\") format(\"opentype\"); }\n\n@font-face {\n  font-family: fira-extrabold-italic;\n  src: url(\"/the-rules-org/dist-ghp/assets/fonts/fira/FiraSans-ExtraBoldItalic.otf\") format(\"opentype\"); }\n\n.searchbar {\n  margin-bottom: 20px; }\n\n.panel {\n  /* h2{\n    font-family: fira-semibold;\n    color:$textHighlightColor;\n    margin:0;\n    font-size: 28px;\n  }*/ }\n\n.panel-default {\n  border-color: #555; }\n  .panel-default a {\n    text-decoration: none !important; }\n\n.panel-heading {\n  background-color: #333;\n  border-color: #555;\n  color: #33ffff;\n  font-family: fira-semibold;\n  margin: 0;\n  font-size: 28px; }\n  .panel-heading.open {\n    color: #33ffff !important; }\n\n.collapsed .panel-heading {\n  color: #BBB; }\n\n.panel-body {\n  color: #ebebeb;\n  background-color: rgba(0, 0, 0, 0.9);\n  font-family: fira-book;\n  font-size: 18px; }\n  .panel-body a {\n    color: #33ffff; }\n\n.in {\n  height: auto !important; }\n\na {\n  color: #33ffff; }\n\nbr {\n  display: block;\n  margin: 10px 0;\n  content: \" \";\n  font-size: 24%; }\n\nbr:before {\n  display: block;\n  margin-top: 10px;\n  content: \"\"; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".video-container {\n  transition: 1s background-color;\n  background-color: transparent;\n  margin: 30px 0; }\n  .video-container.open {\n    margin: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: 999;\n    top: 0;\n    left: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 50px; }\n  .video-container a {\n    display: none; }\n    .video-container a.open {\n      display: block;\n      position: fixed;\n      top: 10px;\n      right: 10px; }\n  .video-container iframe.open {\n    pointer-events: visible;\n    position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<app-banner [imgSrc]=\"'assets/images/brazil_womans_march.jpg'\" [title]=\"'About'\"></app-banner>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <app-video-overlay [ytid]=\"'jA1_vcqvoFs'\"></app-video-overlay>\n\n    </div>\n  </div>\n\n  <!--ABOUT TEXT -->\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>About The Rules</h2>\n      <p>\n        In 2012, The Rules started out asking why poverty still existed. In looking for the answers, we have grown into a global collective of activists, writers, artists and academics who work to expose the root causes of not just poverty but also of  inequality and climate change.\n      </p>\n      <p>\n        What we have learned in that time is how much stories shape the world, and also how they can help change it.\n      </p>\n      <p>\n        Narratives can be used to explain how power has come to rest in the hands of the few, rather than the many.  They reveal how our struggles - from land to labour, biodiversity to our very bodies - are part of the same global system, one that prioritises the production of capital - in other words, economic growth - over everything else, and at the expense of everything else.\n      </p>\n      <p>\n        We call that system neoliberal capitalism. Aside from revealing it to be at the root of the crises of our civilisation, we tell stories about alternative systems emerging so that people see that they have the power to change the rules. Finally, we connect the movements working in diverse ways to resist, and reimagine the world.\n      </p>\n    </div>\n  </div>\n\n<!-- WHAT WE DO - BADGES -->\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>What we do</h2>\n      <p>There are several ways in which we work to make the radical idea of a post-capitalist world commonsense:</p>\n    </div>\n  </div>\n\n  <div class=\"row badges\">\n    <div\n      class=\"col-md-4 col-sm-4 col-xs-4 tr-badge\" *ngFor=\"let badge of badges; let i = index\"\n      (click)=\"selectBadge(i)\" (click)=\"onMouseDown()\" [ngClass]=\"{'active': i == selectedBadge}\"\n    >\n      <img src=\"assets/images/badges/{{badge.id}}.png\" alt=\"{{badge.title}}\" height=\"auto\" width=\"100%\">\n      <h3>{{badge.title}}</h3>\n    </div>\n  </div>\n\n  <div class=\"row badge-text\" [ngClass]=\"{'animate-open': badgeChanged}\">\n    <div class=\"col-md-12\" >\n      <p>\n        {{badges[selectedBadge].text}}\n      </p>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n    <h2>Our Projects</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h3>Project Asha</h3>\n      <p>\n        Keytar heirloom tote bag 3 wolf moon typewriter banjo sunt. Mumblecore dolor kitsch, deep v offal slow-carb biodiesel enim. Pork belly cardigan microdosing quinoa aliqua nisi. Wolf proident tousled bitters fingerstache. Quis kitsch est enim freegan, etsy chicharrones. Distillery ramps mlkshk whatever, artisan mustache eiusmod PBR&B occaecat XOXO exercitation pork belly activated charcoal squid trust fund. Chia letterpress readymade la croix 8-bit etsy swag, pok pok et man bun mlkshk salvia green juice.\n      </p>\n    </div>\n\n    <div class=\"col-md-6\">\n      <h3>Project Aurora</h3>\n      <p>\n        Keytar heirloom tote bag 3 wolf moon typewriter banjo sunt. Mumblecore dolor kitsch, deep v offal slow-carb biodiesel enim. Pork belly cardigan microdosing quinoa aliqua nisi.\n      </p>\n      <p>\n        Distillery ramps mlkshk whatever, artisan mustache eiusmod PBR&B occaecat XOXO exercitation pork belly activated charcoal squid trust fund. Chia letterpress readymade la croix 8-bit etsy swag, pok pok et man bun mlkshk salvia green juice.\n      </p>\n    </div>\n  </div>\n\n  <!--\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>The TR online community</h2>\n      <p>\n      Across our various social networks we’re nurturing conversations with individuals and organisations who share the belief that our capitalist system needs to be replaced with a myriad of local alternatives that value people and planet. Whether on Facebook, YouTube, Instagram or Twitter, we want create a space for debate, inspiration and collaboration.\n      </p>\n    </div>\n  </div>-->\n\n</div>\n\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<!-- HEADER -->\n<!--<nav class=\"navbar\" [ngClass]=\"{home: router.url==='/home'}\">-->\n<nav class=\"navbar\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/home\">The Rules</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      \n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=\"/about\">/ About</a></li>\n        <li><a routerLink=\"/faq\">/ FAQ</a></li>\n        <li><a routerLink=\"/get-involved\">/ Get Involved</a></li>\n        <li><a href=\"#\">/ Blog</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<!-- ROUTER OUTLET -->      \n<router-outlet id=\"router-outlet\"></router-outlet>\n<!-- ************* -->\n\n<!-- FOOTER -->\n<footer>\n  <div class=\"panel-footer\">\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-sm-6\">\n        <a routerLink=\"/about\" >About</a> /\n        <a routerLink=\"/faq\" >FAQ</a> /\n        <a routerLink=\"/get-involved\" >Get Involved</a> /\n        <a href=\"\" >Blog</a>\n      </div>\n\n      <!--<div class=\"col-sm-6 text-right\">\n        <a href=\"\" >Activist Ashram</a> /\n        <a href=\"\" >Aurora</a> /\n        <a href=\"\" >Asha</a>\n      </div>-->\n    </div>\n  </div>\n\n    \n  </div>\n</footer>\n"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\"\n  [ngStyle]=\"{'background-image': 'linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0)), url('+imgSrc+')'}\"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1>{{title}}</h1>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<!--GET INVOLVED PAGE -->\n<app-searchable-accordian\n  [title]=\"'Frequently Asked Questions'\"\n  [dataFile]=\"'faq.json'\"\n>\n</app-searchable-accordian>"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<!--GET INVOLVED PAGE -->\n\n<app-searchable-accordian\n  [title]=\"'Get Involved'\"\n  [dataFile]=\"'get-involved.json'\"\n>\n  \n</app-searchable-accordian>\n"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<div id=\"hero\">\n  <div id=\"video-viewport\">\n    <video id=\"hero-video\" width=\"1280\" height=\"720\" autoplay muted playsinline\n            poster=\"./assets/images/standing-rock.png\"\n            [src]=\"videos[activeVideoId].src\" poster=\"assets/images/video_placeholder.jpg\"\n            [ngClass]=\"{'animate-hide': hideVideo }\"\n            >\n      Your browser does not support the video tag.\n    </video>\n    <!--<img [src]=\"videos[activeVideoId].image\" />-->\n    <div class=\"slideShow\">\n      <div\n        class=\"img\"\n        [ngStyle]=\"{'background-image': 'url('+v.image+')'}\"\n        *ngFor=\"let v of videos; let i = index\" [attr.data-index]=\"i\"\n        [ngClass]=\"{'active': activeVideoId==i}\"> </div>\n    </div>\n  </div>\n  <div class=\"video-info\" [ngClass]=\"{'animate-hide': hideVideo }\">{{videoTitle}}</div>\n</div>\n\n\n<div class=\"container\">\n\n  <!--<div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>Our World</h1>\n    </div>\n  </div>-->\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n     <h1>Our World</h1>\n      <p>\n        Our world is in crisis. It’s political, economical, environmental, and spiritual.\n      </p>\n\n      <p>\n        Everyone is asking why but few people are satisfied with the answers their politicians, the ‘experts’ or the media are giving them.\n      </p>\n\n      <p>\n        At The Rules, we work to make sense of these crises, and reveal a global malaise, experienced differently in local contexts.\n      </p>\n\n\n    </div>\n    <div class=\"col-md-6\">\n      <app-video-overlay [ytid]=\"'jA1_vcqvoFs'\"></app-video-overlay>\n      <!--<div class=\"video-container\">\n        <iframe class=\"video\" width=\"100%\" height=\"300\" src=\"https://www.youtube.com/embed/9ncMdmLFe4Y?rel=0&amp;showinfo=0?ecver=1\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>-->\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 visible-md-block visible-lg-block\">\n      <img src=\"./assets/images/standing-rock.png\" alt=\"Standing Rock\" height=\"100%\" width=\"100%\">\n    </div>\n    <div class=\"col-md-9\">\n       <p>\n        Our work is to connect the dots: to show how these seemingly disparate issues are all interconnected. We reveal and critique the rules of our system but we also shine a light on a diversity of beautiful alternatives, showing that we have the power to change those rules.\n      </p>\n      <p>\n        As the Indian writer Arundhati Roy says: “Another world is not only possible, she is on her way. On a quiet day, I can hear her breathing.” The Rules exists to contribute to the transition to this more just and thriving world.\n      </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n    </div>\n  </div>\n</div>\n\n<app-banner [imgSrc]=\"'assets/images/join-the-movement.jpg'\" [title]=\"'Join the Collective'\"></app-banner>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <p>\n        Now that you know a little more <a routerLink=\"/about\">about The Rules</a> if you still have any questions you may <a routerLink=\"/faq\">find the answer here</a>. If there’s a desire to know more, please get in touch.\n      </p>\n\n      <p>\n        <a href=\"\">info@therules.org</a><br/>\n        <a href=\"\">Facebook</a> / <a href=\"\">Twitter</a>\n      </p>\n\n      <!--<h2>The TR community</h2>-->\n      <p>\n      The Rules community is constantly growing and evolving. We’re deeply diverse, but share one thing in common - an interest in changing the way the world is currently working (even if we might disagree on how that might look). Join in!\n      </p>\n      <ul>\n        <li>Sign up for /TR emails for mischief-making opportunities and remixable content</li>\n        <li>Follow us on Twitter for updates, commentary and culture changing content: <a href=\"https://www.instagram.com/therulesorg\">@TheRulesOrg</a></li>\n        <li>\n          Like us on Facebook for thoughtful insights, opportunities to engage and rigorous debate: <a href=\"https://www.facebook.com/therules.org\">https://www.facebook.com/therules.org</a>\n        </li>\n        <li>Follow us on Instagram for creative interventions and pictures depicting what’s possible: @therulesorg</li>\n      </ul>\n\n    </div>\n\n    <!-- NEWSLETTER SIGNUP FORM -->\n    <div class=\"col-md-4\">\n      <h4>First Name (Or Nickname)</h4>\n      <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-describedby=\"basic-addon1\">\n\n      <h4>Second Name</h4>\n      <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-describedby=\"basic-addon1\">\n\n      <h4>Email Address</h4>\n      <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-describedby=\"basic-addon1\">\n\n      <br>\n      <button type=\"button\" class=\"btn btn-default\">SIGN UP</button>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<app-banner [imgSrc]=\"'assets/images/IMG_9348.jpg'\" [title]=\"title\"></app-banner>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <!--<h2>{{title}}</h2>-->\n    </div>\n    <div class=\"col-md-12\">\n        <input\n          type=\"text\" class=\"form-control input-lg searchbar\"\n          placeholder=\"Search for...\"\n          [(ngModel)]=\"searchTerm\"\n          (keyup)=\"onChange($event)\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel-group\" id=\"accordion\">\n\n        <div\n          class=\"panel panel-default\"\n          *ngFor=\"let question of filteredResults; let i = index\">\n\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{i}}\" class=\"collapsed\">\n            <div class=\"panel-heading\" [ngClass]=\"{'open': i == 0 && !panelClicked }\" (click)=\"onPanelClick(i)\">\n                <!--<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{i}}\">-->\n                  {{question.questionTxt}}\n                <!--</a>-->\n            </div>\n          </a>\n\n         <!-- <div  id=\"collapse{{i}}\" class=\"panel-collapse collapse\"\n                [ngClass]=\"{'in': filteredResults.length == 1 }\"> -->\n              <div  id=\"collapse{{i}}\" class=\"panel-collapse collapse\"\n                [ngClass]=\"{'in': i == 0 }\"\n              >\n            <div class=\"panel-body\" [innerHTML]=\"question.answerTxt\"></div>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div class=\"video-container\"\n  (click)=\"close()\"\n  [ngClass]=\"{'open': isOpen}\">\n\n  <a (click)=\"close()\" [ngClass]=\"{'open': isOpen}\">\n    CLOSE\n  </a>\n\n  <iframe class=\"video\" id=\"ytPlayer\" width=\"100%\" height=\"100%\"\n    [src]=\"url\"\n    [ngClass]=\"{'open': isOpen}\"\n    frameborder=\"0\" allowfullscreen>\n  </iframe>\n\n</div>\n"

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutPageComponent = (function () {
    function AboutPageComponent() {
        this.badges = [
            {
                "id": "asha",
                "title": "The Culture Hack Lab",
                "text": "The CHL is the space where we work to better understand what stories are shaping culture. We seek to answer questions such as: what are the stories we believe and share about how the world works? How do these stories help sustain the way human beings or the environment are defined by the economy? The CHL test the ways of effectively changing those stories over time, so as to change our culture."
            },
            {
                "id": "activist_ashram",
                "title": "Activist Ashram",
                "text": "The Activist Ashram is a year-long fellowship for front-line organisers, with strong community ties. It provides a space for solidarity building for individuals facing up to oppression around the world. Combining both in-person and virtual sessions, fellows are able to examine how their various struggles are related, as well as share safe space, experiences, analysis, wisdom, and organising tactics. The programme, co-created with the fellows, focuses on the holistic aspects of activism and the spiritual aspects of the struggle."
            },
            {
                "id": "aurora",
                "title": "The Alternative Narrative Network",
                "text": "The media in all its forms is a powerful tool to explain the multiple crises of our age; to give hope by revealing alternative ways of seeing and being and to give voice to the people and communities working to change the world. The ANN is a resource and a community for those working in the media who wish to be part of the story of transition."
            }
        ];
        this.selectedBadge = 0;
        this.badgeChanged = false;
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent.prototype.selectBadge = function (i) {
        if (i != this.selectedBadge)
            this.badgeChanged = true;
        this.selectedBadge = i;
    };
    AboutPageComponent.prototype.onMouseDown = function () {
        this.badgeChanged = false;
    };
    return AboutPageComponent;
}());
AboutPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(170),
        styles: [__webpack_require__(159)]
    })
], AboutPageComponent);

//# sourceMappingURL=about-page.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqPageComponent = (function () {
    //  cdr:ChangeDetectorRef;
    function FaqPageComponent() {
        //  this.cdr = cdr;
    }
    FaqPageComponent.prototype.ngOnInit = function () {
    };
    return FaqPageComponent;
}());
FaqPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-faq-page',
        template: __webpack_require__(173),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], FaqPageComponent);

//# sourceMappingURL=faq-page.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetInvolvedPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetInvolvedPageComponent = (function () {
    function GetInvolvedPageComponent() {
    }
    GetInvolvedPageComponent.prototype.ngOnInit = function () {
    };
    return GetInvolvedPageComponent;
}());
GetInvolvedPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-get-involved-page',
        template: __webpack_require__(174),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [])
], GetInvolvedPageComponent);

//# sourceMappingURL=get-involved-page.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent(ref) {
        this.ref = ref;
        this.videos = [
            {
                "src": "assets/videos/hero/CHANGE_THE_RULES.m4v",
                "title": "Brooklyn offal retro drinking vinegar officia mixtape meggings literally bicycle rights. Duis before they sold out ugh, kitsch wayfarers shaman affogato twee synth chia laboris subway tile post-ironic air plant salvia. 3 wolf moon jean shorts pok pok man braid la croix PBR&B artisan deserunt nulla asymmetrical nisi messenger bag air plant snackwave keffiyeh.",
                "image": "assets/images/slideshow/change-the-rules.jpg"
            },
            {
                "src": "assets/videos/hero/CULTURE_HACK_LAB.m4v",
                "title": "The CHL is the space where we work to better understand what stories are shaping culture. We seek to answer questions such as: what are the stories we believe and share about how the world works? How do these stories help sustain the way human beings or the environment are defined by the economy? The CHL test the ways of effectively changing those stories over time, so as to change our culture.",
                "image": "assets/images/slideshow/culture-hack-lab.jpg"
            }
        ];
        this.activeVideoId = 0;
        this.videoTitle = "";
        this.hideVideo = true;
        this.isVideo = true;
        //video resizing stuff...
        this.min_w = 300; // minimum video width allowed
    }
    HomePageComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        //is it mobile?
        var isMobile;
        if (typeof window.orientation !== 'undefined')
            isMobile = true;
        else
            isMobile = false;
        //force mobile for testing
        // isMobile = true;
        this.videoObject = document.getElementById('hero-video');
        //detect mobile?
        if (isMobile) {
            //mobile
            ////add timer for triggering slideshow here...
            clearInterval(this.slideShowTimer);
            this.slideShowTimer = setInterval(this.goToNextSlide.bind(this), 5000);
        }
        else {
            //desktop
            ////add video listeners
            this.videoObject.addEventListener('ended', this.onVideoEnded.bind(this), false);
            this.videoObject.addEventListener('loadeddata', this.onVideoLoaded.bind(this), false);
        }
        //add window resize listeners
        this.vid_w_orig = parseInt(jQuery('#hero-video').attr('width'));
        this.vid_h_orig = parseInt(jQuery('#hero-video').attr('height'));
        console.log("this.vid_w_orig:", this.vid_w_orig);
        console.log("this.vid_h_orig:", this.vid_h_orig);
        jQuery(window).resize(this.resizeToCover.bind(this));
        jQuery(window).trigger('resize');
    };
    HomePageComponent.prototype.onVideoLoaded = function () {
        this.videoTitle = this.videos[this.activeVideoId].title;
        this.hideVideo = false;
    };
    HomePageComponent.prototype.onVideoEnded = function () {
        console.log("onVideoEnded");
        //show the next video...
        this.goToNextSlide();
        this.videoObject.currentTime = 0;
        this.videoTitle = "";
        this.hideVideo = true;
        this.ref.detectChanges();
    };
    HomePageComponent.prototype.resizeToCover = function () {
        console.log("resizeToCover");
        var h = .8; //video height as percentage of window height
        // set the video viewport to the window size
        jQuery('#video-viewport').width(jQuery(window).width());
        jQuery('#video-viewport').height(jQuery(window).height() * h);
        console.log("this.vid_w_orig:", this.vid_w_orig);
        console.log("this.vid_h_orig:", this.vid_h_orig);
        console.log("scale_h:", scale_h);
        console.log("scale_v:", scale_v);
        console.log("scale:", scale);
        // use largest scale factor of horizontal/vertical
        var scale_h = jQuery(window).width() / this.vid_w_orig;
        var scale_v = jQuery(window).height() / this.vid_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;
        // don't allow scaled width < minimum video width
        if (scale * this.vid_w_orig < this.min_w) {
            scale = this.min_w / this.vid_w_orig;
        }
        ;
        console.log("scale:", scale);
        // now scale the video
        jQuery('#hero-video').width(scale * this.vid_w_orig);
        jQuery('#hero-video').height(scale * this.vid_h_orig);
        // and center it by scrolling the video viewport
        jQuery('#video-viewport').scrollLeft((jQuery('#hero-video').width() - jQuery(window).width()) / 2);
        jQuery('#video-viewport').scrollTop((jQuery('#hero-video').height() - jQuery(window).height() * h) / 2);
    };
    ;
    HomePageComponent.prototype.goToNextSlide = function () {
        if (this.activeVideoId >= this.videos.length - 1)
            this.activeVideoId = 0;
        else
            this.activeVideoId = this.activeVideoId + 1;
    };
    HomePageComponent.prototype.ngOnDestroy = function () {
        //stop the slide timer when we leave the home page
        clearInterval(this.slideShowTimer);
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(175),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */]) === "function" && _a || Object])
], HomePageComponent);

var _a;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(104);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_page_about_page_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faq_page_faq_page_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_involved_page_get_involved_page_component__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//ROUTES




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_page_about_page_component__["a" /* AboutPageComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_4__faq_page_faq_page_component__["a" /* FaqPageComponent */] },
    { path: 'get-involved', component: __WEBPACK_IMPORTED_MODULE_5__get_involved_page_get_involved_page_component__["a" /* GetInvolvedPageComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(route, router) {
        this.title = 'The Rules Org';
        this.menuItems = [
            { "title": "About", "routerLink": "/about" },
            { "title": "FAQ", "routerLink": "/faq" },
            { "title": "Get Involved", "routerLink": "/get-involved" },
            { "title": "Blog", "url": "/blog" },
        ];
        console.log('route :' + route);
        console.log('router :' + router);
        console.log('url :' + router.url);
        this._route = route;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.currentRoute = Location.path;
        //console.log('route :'+this._route)
        //scroll to top of page on route change
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            //setTimeout(function(){
            window.scrollTo(0, 1);
            //}, 0);
            // window.scrollTo(0, 0)
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(171),
        styles: [__webpack_require__(160)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ViewEncapsulation */].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.bundle.js.map