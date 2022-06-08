"use strict";
(self["webpackChunkrobwebb94_github_io"] = self["webpackChunkrobwebb94_github_io"] || []).push([["main"],{

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 19, vars: 0, consts: [["data-aos", "fade-up", "data-aos-anchor-placement", "top-bottom", "id", "portfolio"], [1, "about-container"], [1, "portfolio-heading"], [1, "inner-content"], [1, "about"], [1, "skills"], ["src", "assets\\imgs\\me.jpg"], ["id", "socials"], ["href", "https://github.com/Robw94", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-github"], ["href", "https://www.linkedin.com/in/robert-webb-4a306093/", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hello! My name is Robert, I enjoy developing websites. I became interested in Web Development shortly after I landed my first role as a Junior Developer at Datalytyx. Although the work was primarily ETL/Data Engineer related, I was able to do a few proof of concepts utilizing Angular & Azure DevOps which I enjoyed a lot more. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Moving forward to today, I am a Web Developer delivering accessible, robust and user friendly Web Applications for BerryWorld which are used globally throughout the business.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7)(13, "li")(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: [".about-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  padding: 2rem;\r\n}\r\n\r\n\r\n.inner-content[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n}\r\n\r\n\r\n.skills[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n  grid-column: 2;\r\n}\r\n\r\n\r\nul[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(140px, 200px));\r\n  grid-gap: 0px 10px;\r\n  gap: 0px 10px;\r\n  padding: 0px;\r\n  margin: 20px 0px 0px;\r\n  color: #FFCB9A;\r\n\r\n}\r\n\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n}\r\n\r\n\r\ndiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #FFCB9A;\r\n}\r\n\r\n\r\n@media screen and (max-width: 550px) {\r\n  .about[_ngcontent-%COMP%] {\r\n    grid-column: 1 / span 2;\r\n  }\r\n\r\n  .skills[_ngcontent-%COMP%] {\r\n    grid-column: 1 / span 2;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNEQUFzRDtFQUN0RCxrQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGNBQWM7O0FBRWhCOzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztBQUVGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcblxyXG4uaW5uZXItY29udGVudCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuXHJcbi5hYm91dCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLnNraWxscyB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBncmlkLWNvbHVtbjogMjtcclxufVxyXG5cclxudWwge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDE0MHB4LCAyMDBweCkpO1xyXG4gIGdhcDogMHB4IDEwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMjBweCAwcHggMHB4O1xyXG4gIGNvbG9yOiAjRkZDQjlBO1xyXG5cclxufVxyXG5cclxudWwgbGkge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbmRpdiBwIHtcclxuICBjb2xvcjogI0ZGQ0I5QTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAuYWJvdXQge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAuc2tpbGxzIHtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ 6674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        children: [],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7490);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _splash_screen_splash_animation_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash-screen/splash-animation-type */ 5664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class AppComponent {
    constructor() {
        this.title = 'Portfolio';
        this.animationType = _splash_screen_splash_animation_type__WEBPACK_IMPORTED_MODULE_1__.SplashAnimationType;
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_0__.init({
            duration: 1200,
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 5574);
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction/introduction.component */ 6782);
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/tools.component */ 1451);
/* harmony import */ var _portfolio_project_template_project_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/project-template/project-template.component */ 9134);
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-me/contact-me.component */ 5057);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/layout.component */ 6674);
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./splash-screen/splash-screen.component */ 6590);
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./work/work.component */ 6980);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-page/landing-page.component */ 4229);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioComponent,
        _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__.IntroductionComponent,
        _tools_tools_component__WEBPACK_IMPORTED_MODULE_4__.ToolsComponent,
        _portfolio_project_template_project_template_component__WEBPACK_IMPORTED_MODULE_5__.ProjectTemplateComponent,
        _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_6__.ContactMeComponent,
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__.LayoutComponent,
        _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_8__.SplashScreenComponent,
        _work_work_component__WEBPACK_IMPORTED_MODULE_9__.WorkComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_10__.AboutComponent,
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__.LandingPageComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 5057:
/*!****************************************************!*\
  !*** ./src/app/contact-me/contact-me.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactMeComponent": () => (/* binding */ ContactMeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ContactMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactMeComponent.ɵfac = function ContactMeComponent_Factory(t) { return new (t || ContactMeComponent)(); };
ContactMeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactMeComponent, selectors: [["app-contact-me"]], decls: 21, vars: 0, consts: [["id", "contactme"], ["data-aos", "fade-up", "data-aos-anchor-placement", "center-bottom"], [1, "portfolio-heading"], [1, "container"], ["type", "button", 1, "row", "contact-item"], [1, "col-12", "select"], [1, "fa", "fa-envelope-square", "fa-7x", "icon-size"], ["href", "https://github.com/Robw94", "target", "_blank"], ["type", "button", 1, "row", "contact-item", "pointer"], [1, "fa", "fa-github", "fa-7x", "icon-size"], ["href", "https://www.linkedin.com/in/robert-webb-4a306093/", "target", "_blank"], [1, "fa", "fa-linkedin", "fa-7x", "icon-size"]], template: function ContactMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "a")(6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Robert.P.Webb94@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7)(11, "div", 8)(12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Robw94 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10)(16, "div", 8)(17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Robert Webb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: ["h4[_ngcontent-%COMP%] {\r\n  color: #D9B08C;\r\n}\r\n.contact-item[_ngcontent-%COMP%]:hover   .select[_ngcontent-%COMP%] {\r\n  border-radius: 24px;\r\n  padding: 16px;\r\n  background-color: #D1E8E2;\r\n  opacity: 0.5;\r\n}\r\n.icon-size[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7Ozs7OztDQU1DIiwiZmlsZSI6ImNvbnRhY3QtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaDQge1xyXG4gIGNvbG9yOiAjRDlCMDhDO1xyXG59XHJcbi5jb250YWN0LWl0ZW06aG92ZXIgLnNlbGVjdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEMUU4RTI7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5pY29uLXNpemUge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLypcclxuIzJDMzUzMVxyXG4jMTE2NDY2XHJcbiNEOUIwOENcclxuI0ZGQ0I5QVxyXG4jRDFFOEUyXHJcbiovXHJcbiJdfQ== */"] });


/***/ }),

/***/ 6782:
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionComponent": () => (/* binding */ IntroductionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class IntroductionComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(); };
IntroductionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], decls: 21, vars: 0, consts: [["id", "introduction"], ["data-aos", "fade-up"], [1, "card", "mb-3"], [1, "box"], [1, "img"], ["src", "assets\\imgs\\me.jpg"], [1, "card-text"], ["href", "https://github.com/Robw94", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-github"], ["href", "https://www.linkedin.com/in/robert-webb-4a306093/", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Robert Webb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Web Developer. Using Angular, Typescript, WebAPI 3.0 & C# for the past 2 years with Azure DevOps to deliver business applications for consumers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span")(14, "ul")(15, "li")(16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } }, styles: [".card[_ngcontent-%COMP%] {\r\n  top:50%;\r\n  left:50%;\r\n  transform:translate(-50%,-8%);\r\n  width:300px;\r\n  min-height:400px;\r\n  background:#fff;\r\n  box-shadow:0 20px 50px rgba(0,0,0,.1);\r\n  border-radius:10px;\r\n  transition:0.5s;\r\n  background-color: #05386b;\r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n  box-shadow:0 30px 70px rgba(0,0,0,.2);\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n  position:absolute;\r\n  top:50%;\r\n  left:0;\r\n  transform:translateY(-50%);\r\n  text-align:center;\r\n  padding:20px;\r\n  box-sizing:border-box;\r\n  width:100%;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n  width:120px;\r\n  height:120px;\r\n  margin:0 auto;\r\n  border-radius:50%;\r\n  overflow:hidden;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  height:100%;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size:20px;\r\n  color:#EDF5E1;\r\n  margin:20px auto;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size:14px;\r\n  background:#379683;\r\n  color:#EBECF0;\r\n  display:inline-block;\r\n  padding:4px 10px;\r\n  border-radius:15px;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color:#EBECF0;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  padding:0;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style:none;\r\n  float:left;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display:block;\r\n  color:#aaa;\r\n  margin:0 10px;\r\n  font-size:20px;\r\n  transition:0.5s;\r\n  text-align:center;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n  color:#EBECF0;\r\n  transform:rotateY(360deg);\r\n}\r\n.card-text[_ngcontent-%COMP%] {\r\n  color: #EBECF0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7OztTQUlTO0FBQ1Q7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxNQUFNO0VBQ04sMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qICMwNTM4NmJcclxuIzM3OTY4M1xyXG4jNWNkYjk1XHJcbiM4RUU0QUZcclxuI0VERjVFMSAqL1xyXG4uY2FyZCB7XHJcbiAgdG9wOjUwJTtcclxuICBsZWZ0OjUwJTtcclxuICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTglKTtcclxuICB3aWR0aDozMDBweDtcclxuICBtaW4taGVpZ2h0OjQwMHB4O1xyXG4gIGJhY2tncm91bmQ6I2ZmZjtcclxuICBib3gtc2hhZG93OjAgMjBweCA1MHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICB0cmFuc2l0aW9uOjAuNXM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1Mzg2YjtcclxufVxyXG4uY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzowIDMwcHggNzBweCByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG4uY2FyZCAuYm94IHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6NTAlO1xyXG4gIGxlZnQ6MDtcclxuICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBwYWRkaW5nOjIwcHg7XHJcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLmNhcmQgLmJveCAuaW1nIHtcclxuICB3aWR0aDoxMjBweDtcclxuICBoZWlnaHQ6MTIwcHg7XHJcbiAgbWFyZ2luOjAgYXV0bztcclxuICBib3JkZXItcmFkaXVzOjUwJTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuLmNhcmQgLmJveCAuaW1nIGltZyB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG4uY2FyZCAuYm94IGgyIHtcclxuICBmb250LXNpemU6MjBweDtcclxuICBjb2xvcjojRURGNUUxO1xyXG4gIG1hcmdpbjoyMHB4IGF1dG87XHJcbn1cclxuLmNhcmQgLmJveCBoMiBzcGFuIHtcclxuICBmb250LXNpemU6MTRweDtcclxuICBiYWNrZ3JvdW5kOiMzNzk2ODM7XHJcbiAgY29sb3I6I0VCRUNGMDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOjRweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MTVweDtcclxufVxyXG4uY2FyZCAuYm94IHAge1xyXG4gIGNvbG9yOiNFQkVDRjA7XHJcbn1cclxuLmNhcmQgLmJveCBzcGFuIHtcclxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG59XHJcbi5jYXJkIC5ib3ggdWwge1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6MDtcclxufVxyXG4uY2FyZCAuYm94IHVsIGxpIHtcclxuICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgZmxvYXQ6bGVmdDtcclxufVxyXG4uY2FyZCAuYm94IHVsIGxpIGEge1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgY29sb3I6I2FhYTtcclxuICBtYXJnaW46MCAxMHB4O1xyXG4gIGZvbnQtc2l6ZToyMHB4O1xyXG4gIHRyYW5zaXRpb246MC41cztcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uY2FyZCAuYm94IHVsIGxpOmhvdmVyIGEge1xyXG4gIGNvbG9yOiNFQkVDRjA7XHJcbiAgdHJhbnNmb3JtOnJvdGF0ZVkoMzYwZGVnKTtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgY29sb3I6ICNFQkVDRjA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4229:
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageComponent": () => (/* binding */ LandingPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 15, vars: 0, consts: [["id", "landingpage"], [1, "fadeup", 2, "animation-delay", "0.5s"], [2, "margin", "20px"], [1, "fadeup", 2, "animation-delay", "1s"], [1, "heading"], [1, "fadeup", 2, "animation-delay", "1.5s"], [1, "heading", 2, "opacity", "0.5"], [1, "fadeup", 2, "animation-delay", "2s"], ["href", "https://www.berryworld.com/en-gb", "target", "_blank", "rel", "noreferrer"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hi, my name is");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Robert Webb.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I Develop things for the Web.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I am a Web Developer, specializing in developing Web and Business applications. Currently, I am focused on delivering applications for users at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Berryworld");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["section[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  -webkit-box-align: center;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  margin: 0px auto;\r\n  max-width: 1000px;\r\n}\r\n\r\n\r\n.fadeup[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  animation: fadein 2s;\r\n  -moz-animation: fadein 2s;\r\n  \r\n  -webkit-animation: fadein 2s;\r\n  \r\n  -o-animation: fadein 2s;\r\n  \r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n\r\n@keyframes fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  color: #D9B08C;\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n    color: #D9B08C;\r\n    display: block;\r\n    margin-block-start: 1em;\r\n    margin-block-end: 1em;\r\n    margin-inline-start: 0px;\r\n    margin-inline-end: 0px;\r\n    padding: 20px;\r\n    max-width: 540px;\r\n}\r\n\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n    font-size: clamp(40px, 8vw, 60px);\r\n    color: #116466;\r\n    margin: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7O0FBR0E7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsVUFBVTtFQUVWLDZCQUE2QjtBQUMvQjs7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOzs7QUFFQTs7Ozs7O0NBTUM7OztBQUdEO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsWUFBWTtBQUNoQiIsImZpbGUiOiJsYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbn1cclxuXHJcblxyXG4uZmFkZXVwIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogZmFkZWluIDJzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMnM7XHJcbiAgLyogRmlyZWZveCAqL1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMnM7XHJcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxuICAtby1hbmltYXRpb246IGZhZGVpbiAycztcclxuICAvKiBPcGVyYSAqL1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuIzJDMzUzMVxyXG4jMTE2NDY2XHJcbiNEOUIwOENcclxuI0ZGQ0I5QVxyXG4jRDFFOEUyXHJcbiovXHJcblxyXG5cclxuaDQge1xyXG4gIGNvbG9yOiAjRDlCMDhDO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiAjRDlCMDhDO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCg0MHB4LCA4dncsIDYwcHgpO1xyXG4gICAgY29sb3I6ICMxMTY0NjY7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 6674:
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../splash-screen/splash-screen.component */ 6590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../landing-page/landing-page.component */ 4229);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/about.component */ 6698);
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work/work.component */ 6980);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../portfolio/portfolio.component */ 5574);







const _c0 = ["navbar"];
function LayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "header")(2, "nav", 3, 4)(4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 7)(7, "ul", 8)(8, "li", 9)(9, "a", 10)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li", 9)(13, "a", 11)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Work History");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "li", 9)(17, "a", 12)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "li", 9)(21, "a", 13)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Contact'");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 15)(27, "div", 16)(28, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "app-landing-page")(30, "app-about")(31, "app-work")(32, "app-portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class LayoutComponent {
    constructor() {
        this.splashScreenShowing = true;
        this.sticky = false;
    }
    handleScroll() {
        const windowScroll = window.pageYOffset;
        if (windowScroll >= this.elementPosition) {
            this.sticky = true;
        }
        else {
            this.sticky = false;
        }
    }
    ngAfterViewInit() {
        // this.elementPosition = this.nav.nativeElement.offsetTop;
    }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], viewQuery: function LayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.nav = _t.first);
    } }, hostBindings: function LayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function LayoutComponent_scroll_HostBindingHandler($event) { return ctx.handleScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 3, consts: [[3, "duration", "animationDuration", "splashScreenShowing"], ["id", "wrapper", "class", "wrapper", 4, "ngIf"], ["id", "wrapper", 1, "wrapper"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "justify-content-center", "align-items-start"], ["navbar", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar", 1, "navbar-toggler", "mr-auto"], [1, "navbar-toggler-icon"], ["id", "navbar", 1, "navbar-collapse", "collapse"], ["id", "nav", 1, "navbar-nav"], ["data-toggle", "collapse", "data-target", "#navbarResponsive", 1, "nav-item"], ["href", "#introduction", 1, "nav-link", "js-scroll-trigger", "nav-text"], ["href", "#workhistory", 1, "nav-link", "js-scroll-trigger"], ["href", "#portfolio", 1, "nav-link", "js-scroll-trigger", "nav-text"], ["href", "#contactme", 1, "nav-link", "js-scroll-trigger", "nav-text"], ["onclick", "location.href='https://drive.google.com/file/d/1KvQeHdLepGVXRdExhiLOZIjcZq3_ZfHT/view?usp=sharing'", 1, "slide"], ["id", "application", 1, "application"], [1, "application-body"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-splash-screen", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("splashScreenShowing", function LayoutComponent_Template_app_splash_screen_splashScreenShowing_0_listener($event) { return ctx.splashScreenShowing = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LayoutComponent_div_1_Template, 34, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("duration", 3)("animationDuration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.splashScreenShowing);
    } }, directives: [_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_0__.SplashScreenComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__.LandingPageComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _work_work_component__WEBPACK_IMPORTED_MODULE_3__.WorkComponent, _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioComponent], styles: [".navbar-dark[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #2C3531 !important; \r\n  position: sticky;\r\n}\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\r\n  color: #2C3531 !important;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: #116466 !important;\r\n}\r\nul#nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n   color: #FFCB9A;\r\n}\r\nul#nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n  color: #FFCB9A;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  color: #05386b;\r\n}\r\n.me[_ngcontent-%COMP%] {\r\n  color: #FFCB9A;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  margin-top: 0%;\r\n  margin-bottom: 0%;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display:block;\r\n  height: 35px;\r\n  width: 100px;\r\n  margin: 7px 3px;\r\n  padding: 5px 5px;\r\n  font-weight: 700;\r\n  font-size: 15px;\r\n  color: #FFCB9A;\r\n  border: 2px #FFCB9A solid;\r\n  border-radius: 4px;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n  overflow:hidden;\r\n  background: none;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n  transition:         0.08s ease-in;\r\n  -o-transition:      0.08s ease-in;\r\n  -ms-transition:     0.08s ease-in;\r\n  -moz-transition:    0.08s ease-in;\r\n  -webkit-transition: 0.08s ease-in;\r\n}\r\n.slide[_ngcontent-%COMP%]:after{\r\n  content:\"Resume'\";\r\n  position:inherit;\r\n  width:100%;\r\n  height:100%;\r\n  left:0;\r\n  text-align:center;\r\n  -webkit-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550); \r\n}\r\n.slide[_ngcontent-%COMP%]:before {\r\n  content:\"Download \u21D3\";\r\n  height:100%;\r\n  width:100%;\r\n  position:absolute;\r\n  color:#66FCF1;\r\n  left:-100%;\r\n  opacity: 0;\r\n  -webkit-transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550); \r\n}\r\n.slide[_ngcontent-%COMP%]:hover{\r\n  background:#45A29E;\r\n}\r\n.slide[_ngcontent-%COMP%]:hover:before{\r\n  left:0;\r\n  opacity:1;\r\n  color:#fff;\r\n}\r\n.slide[_ngcontent-%COMP%]:hover:after{\r\n  left:100%;\r\n  opacity:0;\r\n}\r\n.resume[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0px 0px 0px #2F3B47;\r\n  transition: all 0.5s !important;\r\n}\r\n.application[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 20% 1fr 20%;\r\n}\r\n.application-left[_ngcontent-%COMP%] {\r\n  grid-column: 1;\r\n  display: flex;\r\n  position: fixed;\r\n  top: 70%;\r\n  left: 7%;\r\n  right: 0;\r\n}\r\n.application-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  grid-column: 2;\r\n}\r\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display:block;\r\n  color:#aaa;\r\n  margin:0 10px;\r\n  font-size:20px;\r\n  transition:0.5s;\r\n  text-align:center;\r\n  margin-bottom: 15px;\r\n}\r\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n  color:green;\r\n  transform:rotateY(360deg);\r\n}\r\n.social[_ngcontent-%COMP%]:last-child::after{\r\n  content: \"\";\r\n  display: block;\r\n  width: 1px;\r\n  height: 90px;\r\n  margin: 0px auto;\r\n  background: black;\r\n}\r\n@media screen and (max-width: 1240px) {\r\n  .application[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .application-body[_ngcontent-%COMP%] {\r\n    grid-column: 1;\r\n  }\r\n  .application-left[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n@media screen and (max-width: 500px) {\r\n  .me[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n.sticky[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  z-index: 10;\r\n  width: 100%;\r\n}\r\n#wrapper[_ngcontent-%COMP%]\r\n{\r\n    position:relative;\r\n    min-height:100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQTBDO0VBQzFDLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7R0FDRyxjQUFjO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxpQ0FBaUM7RUFDakMsaUNBQWlDO0VBQ2pDLGlDQUFpQztFQUNqQyxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxNQUFNO0VBQ04saUJBQWlCO0VBQ2pCLHVFQUF1RTtBQUN6RTtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtFQUNWLHVFQUF1RTtBQUN6RTtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxNQUFNO0VBQ04sU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsU0FBUztFQUNULFNBQVM7QUFDWDtBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLCtCQUErQjtBQUNqQztBQUlBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFRO0FBQ1Y7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWRhcmsge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDNBNkMgIWltcG9ydGFudDsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzNTMxICFpbXBvcnRhbnQ7IFxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbn1cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICBjb2xvcjogIzJDMzUzMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjMTE2NDY2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVsI25hdiBsaSBhIHNwYW4ge1xyXG4gICBjb2xvcjogI0ZGQ0I5QTtcclxufVxyXG51bCNuYXYgbGkgYSBzcGFuOmhvdmVyIHtcclxuICBjb2xvcjogI0ZGQ0I5QTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6ICMwNTM4NmI7XHJcbn1cclxuXHJcbi5tZSB7XHJcbiAgY29sb3I6ICNGRkNCOUE7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDAlO1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbjogN3B4IDNweDtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjRkZDQjlBO1xyXG4gIGJvcmRlcjogMnB4ICNGRkNCOUEgc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgb3V0bGluZTogMDtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAgICAgICAgIDAuMDhzIGVhc2UtaW47XHJcbiAgLW8tdHJhbnNpdGlvbjogICAgICAwLjA4cyBlYXNlLWluO1xyXG4gIC1tcy10cmFuc2l0aW9uOiAgICAgMC4wOHMgZWFzZS1pbjtcclxuICAtbW96LXRyYW5zaXRpb246ICAgIDAuMDhzIGVhc2UtaW47XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjA4cyBlYXNlLWluO1xyXG59XHJcblxyXG4uc2xpZGU6YWZ0ZXJ7XHJcbiAgY29udGVudDpcIlJlc3VtZSdcIjtcclxuICBwb3NpdGlvbjppbmhlcml0O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgbGVmdDowO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGN1YmljLWJlemllcigwLjY4MCwgLTAuNTUwLCAwLjI2NSwgMS41NTApOyBcclxufVxyXG5cclxuLnNsaWRlOmJlZm9yZSB7XHJcbiAgY29udGVudDpcIkRvd25sb2FkIOKHk1wiO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgY29sb3I6IzY2RkNGMTtcclxuICBsZWZ0Oi0xMDAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAuNjgwLCAtMC41NTAsIDAuMjY1LCAxLjU1MCk7IFxyXG59XHJcblxyXG4uc2xpZGU6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDojNDVBMjlFO1xyXG59XHJcblxyXG4uc2xpZGU6aG92ZXI6YmVmb3Jle1xyXG4gIGxlZnQ6MDtcclxuICBvcGFjaXR5OjE7XHJcbiAgY29sb3I6I2ZmZjtcclxufVxyXG4uc2xpZGU6aG92ZXI6YWZ0ZXJ7XHJcbiAgbGVmdDoxMDAlO1xyXG4gIG9wYWNpdHk6MDtcclxufVxyXG5cclxuLnJlc3VtZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggIzJGM0I0NztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbi5hcHBsaWNhdGlvbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSAxZnIgMjAlO1xyXG59XHJcblxyXG4uYXBwbGljYXRpb24tbGVmdCB7XHJcbiAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA3MCU7XHJcbiAgbGVmdDogNyU7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbi1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG59XHJcblxyXG4uc29jaWFsIGxpIGEge1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgY29sb3I6I2FhYTtcclxuICBtYXJnaW46MCAxMHB4O1xyXG4gIGZvbnQtc2l6ZToyMHB4O1xyXG4gIHRyYW5zaXRpb246MC41cztcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5zb2NpYWwgbGk6aG92ZXIgYSB7XHJcbiAgY29sb3I6Z3JlZW47XHJcbiAgdHJhbnNmb3JtOnJvdGF0ZVkoMzYwZGVnKTtcclxufVxyXG5cclxuLnNvY2lhbDpsYXN0LWNoaWxkOjphZnRlcntcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNDBweCkge1xyXG4gIC5hcHBsaWNhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIC5hcHBsaWNhdGlvbi1ib2R5IHtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gIH1cclxuICAuYXBwbGljYXRpb24tbGVmdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAubWUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5zdGlja3l7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiN3cmFwcGVyXHJcbntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDoxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ 5574:
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _project_template_project_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-template/project-template.component */ 9134);


class PortfolioComponent {
    constructor() { }
    ngOnInit() {
        this.filterProjects('all');
    }
    addActiveClass(event) {
        var oldButton = document.getElementsByClassName('active');
        if (oldButton) {
            oldButton[0].className = oldButton[0].className.replace(' active', '');
        }
        event.target.classList.add('active'); // To Remove
    }
    filterProjects(c) {
        var x, i;
        x = document.getElementsByClassName('col-lg-6');
        if (c == 'all') {
            c = '';
        }
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
            this.removeClass(x[i], 'show');
            this.removeClass(x[i], 'hide');
            if (x[i].className.indexOf(c) > -1) {
                this.addClass(x[i], 'show');
            }
            else {
                this.addClass(x[i], 'hide');
            }
        }
    }
    removeClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(' ');
        arr2 = name.split(' ');
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(' ');
    }
    addClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(' ');
        arr2 = name.split(' ');
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += ' ' + arr2[i];
            }
        }
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 19, vars: 14, consts: [["id", "portfolio"], [1, "portfolio-container"], [1, "portfolio-heading"], ["id", "myBtnContainer", 1, "row", "d-flex", "justify-content-center", "mt-2", "mb-3"], [1, "btn", "btn-sm", "active", 3, "click"], [1, "btn", "btn-sm", 3, "click"], [1, "row"], [1, "col-lg-6", "personal"], [3, "projectName", "description", "gitHubLink", "imgPath", "technologies"], [1, "col-lg-6", "professional"], [3, "projectName", "description", "youtubeLink", "imgPath", "technologies"], [3, "projectName", "description", "imgPath", "technologies"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_5_listener($event) { ctx.filterProjects("all"); return ctx.addActiveClass($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Show all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_7_listener($event) { ctx.filterProjects("personal"); return ctx.addActiveClass($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Personal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_9_listener($event) { ctx.filterProjects("professional"); return ctx.addActiveClass($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Professional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-project-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-project-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-project-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("projectName", "Portfolio")("description", "This Portfolio was created using Angular, Hosted on github. Click the links below to view sourcecode")("gitHubLink", "https://github.com/Robw94/robw94.github.io")("imgPath", "assets\\imgs\\portfolio.png")("technologies", "Angular,TypeScript,Github,Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("projectName", "No Trace")("description", "No Trace is a Top-Down Stealth-Action shooter developed for PC in Unity. My role on the project consisted of creating a UI Menu system and game-ready environmental interactions, weapons, throw-able weapons and a scoring system.")("youtubeLink", "https://www.youtube.com/watch?v=xzMZC4_VklY")("imgPath", "assets\\imgs\\notrace.gif")("technologies", "C#,Unity,Github,UX,PCGamer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("projectName", "Flappy Flapper")("description", "\n              Personal Project carried out to mimic the popular game from 2015 Flappy Bird.")("imgPath", "assets\\imgs\\flappyflapper.gif")("technologies", "C#,Unity,Github");
    } }, directives: [_project_template_project_template_component__WEBPACK_IMPORTED_MODULE_0__.ProjectTemplateComponent], styles: [".portfolio-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  padding: 2rem;\r\n}\r\n.portfolio-card-item[_ngcontent-%COMP%] {\r\n  width: calc(44% - 64px);\r\n  border-radius: 24px;\r\n  margin: 16px;\r\n  padding: 8px 16px;\r\n  color: #eef0ff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: all .3s ease-in-out;\r\n}\r\n.portfolio-img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n\r\n.show[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n.hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    padding: 12px 16px;\r\n    background-color: #2C3531;\r\n    color: #EBECF0;\r\n    cursor: pointer;\r\n  }\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n    background-color: #379683;\r\n  }\r\n\r\n.btn.active[_ngcontent-%COMP%] {\r\n    background-color: #116466;\r\n     color: #D9B08C;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBSUUsNEJBQTRCO0FBQzVCO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7QUFFQSx1REFBdUQ7QUFDekQ7SUFDSSxjQUFjO0VBQ2hCO0FBRUY7SUFDSSxhQUFhO0FBQ2pCO0FBRUUsc0JBQXNCO0FBQ3RCO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0FBRUEsOENBQThDO0FBQzlDO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUEscURBQXFEO0FBQ3JEO0lBQ0UseUJBQXlCO0tBQ3hCLGNBQWM7RUFDakI7QUFFQTs7Ozs7O0NBTUQiLCJmaWxlIjoicG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGZvbGlvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbi5wb3J0Zm9saW8tY2FyZC1pdGVtIHtcclxuICB3aWR0aDogY2FsYyg0NCUgLSA2NHB4KTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIG1hcmdpbjogMTZweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBjb2xvcjogI2VlZjBmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4ucG9ydGZvbGlvLWltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgcm93cyAqL1xyXG4gIC5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG5cclxuICAvKiBUaGUgXCJzaG93XCIgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIGZpbHRlcmVkIGVsZW1lbnRzICovXHJcbi5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiAgLyogU3R5bGUgdGhlIGJ1dHRvbnMgKi9cclxuICAuYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzNTMxO1xyXG4gICAgY29sb3I6ICNFQkVDRjA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAvKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3Igb24gbW91c2Utb3ZlciAqL1xyXG4gIC5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3OTY4MztcclxuICB9XHJcblxyXG4gIC8qIEFkZCBhIGRhcmsgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgYWN0aXZlIGJ1dHRvbiAqL1xyXG4gIC5idG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTY0NjY7XHJcbiAgICAgY29sb3I6ICNEOUIwOEM7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4jMkMzNTMxXHJcbiMxMTY0NjZcclxuI0Q5QjA4Q1xyXG4jRkZDQjlBXHJcbiNEMUU4RTJcclxuKi9cclxuIl19 */"] });


/***/ }),

/***/ 9134:
/*!**************************************************************************!*\
  !*** ./src/app/portfolio/project-template/project-template.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectTemplateComponent": () => (/* binding */ ProjectTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function ProjectTemplateComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tech_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tech_r3);
} }
function ProjectTemplateComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.gitHubLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectTemplateComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.youtubeLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProjectTemplateComponent {
    constructor() {
        this.techArray = [];
    }
    ngOnInit() {
        if (this.technologies) {
            this.techArray = this.technologies.split(",");
        }
    }
}
ProjectTemplateComponent.ɵfac = function ProjectTemplateComponent_Factory(t) { return new (t || ProjectTemplateComponent)(); };
ProjectTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectTemplateComponent, selectors: [["app-project-template"]], inputs: { projectName: "projectName", type: "type", imgPath: "imgPath", description: "description", gitHubLink: "gitHubLink", youtubeLink: "youtubeLink", technologies: "technologies" }, decls: 15, vars: 6, consts: [[1, "container", "mb-2", "mt-2"], [2, "padding", "0%"], [1, "img-fluid", "image", 2, "width", "480px", "height", "270px", 3, "src"], [1, "middle"], [4, "ngFor", "ngForOf"], [2, "max-height", "100px", "height", "100px", "overflow", "overlay"], [1, "text"], ["id", "socials"], [4, "ngIf"], ["target", "_blank", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-github", "fa-lg"], ["target", " _blank", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-youtube", "fa-lg"]], template: function ProjectTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectTemplateComponent_ng_container_4_Template, 3, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer")(6, "p")(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectTemplateComponent_li_13_Template, 3, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectTemplateComponent_li_14_Template, 3, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.techArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projectName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gitHubLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.youtubeLink);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  height: auto;\r\n  transition: .5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n\r\n.middle[_ngcontent-%COMP%] {\r\n  transition: .5s ease;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%] {\r\n  opacity: 0.3;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  color: #D9B08C;\r\n  font-size: 16px;\r\n  padding: 8px 16px;\r\n}\r\n\r\np[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #116466;\r\n  font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUdBOzs7Ozs7Q0FNQyIsImZpbGUiOiJwcm9qZWN0LXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ubWlkZGxlIHtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpob3ZlciAuaW1hZ2Uge1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLmNvbnRhaW5lcjpob3ZlciAubWlkZGxlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGNvbG9yOiAjRDlCMDhDO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxufVxyXG5cclxucCBzcGFuIHtcclxuICBjb2xvcjogIzExNjQ2NjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4jMkMzNTMxXHJcbiMxMTY0NjZcclxuI0Q5QjA4Q1xyXG4jRkZDQjlBXHJcbiNEMUU4RTJcclxuKi9cclxuIl19 */"] });


/***/ }),

/***/ 5664:
/*!********************************************************!*\
  !*** ./src/app/splash-screen/splash-animation-type.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashAnimationType": () => (/* binding */ SplashAnimationType)
/* harmony export */ });
var SplashAnimationType;
(function (SplashAnimationType) {
    SplashAnimationType["SlideLeft"] = "slide-left";
    SplashAnimationType["SlideRight"] = "slide-right";
    SplashAnimationType["FadeOut"] = "fade-out";
})(SplashAnimationType || (SplashAnimationType = {}));


/***/ }),

/***/ 6590:
/*!**********************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenComponent": () => (/* binding */ SplashScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _splash_animation_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-animation-type */ 5664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




const _c0 = function (a0, a1, a2) { return { left: a0, opacity: a1, transition: a2 }; };
function SplashScreenComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, ctx_r0.windowWidth, ctx_r0.opacityChange, ctx_r0.splashTransition));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets\\imgs\\logo_2.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class SplashScreenComponent {
    constructor(renderer2) {
        this.renderer2 = renderer2;
        this.opacityChange = 1;
        this.showSplash = true;
        this.animationDuration = 0.5;
        this.duration = 3;
        this.animationType = _splash_animation_type__WEBPACK_IMPORTED_MODULE_0__.SplashAnimationType.FadeOut;
        this.splashScreenShowing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        setTimeout(() => {
            let transitionStyle = "";
            switch (this.animationType) {
                case _splash_animation_type__WEBPACK_IMPORTED_MODULE_0__.SplashAnimationType.SlideLeft:
                    this.windowWidth = "-" + window.innerWidth + "px";
                    transitionStyle = "left " + this.animationDuration + "s";
                    break;
                case _splash_animation_type__WEBPACK_IMPORTED_MODULE_0__.SplashAnimationType.SlideRight:
                    this.windowWidth = window.innerWidth + "px";
                    transitionStyle = "left " + this.animationDuration + "s";
                    break;
                case _splash_animation_type__WEBPACK_IMPORTED_MODULE_0__.SplashAnimationType.FadeOut:
                    transitionStyle = "opacity " + this.animationDuration + "s";
                    this.opacityChange = 0;
            }
            const element = document.getElementById('splashBackgound');
            this.splashTransition = transitionStyle;
            // this.renderer2.setAttribute(element,'class','fade-out')
            setTimeout(() => {
                this.showSplash = !this.showSplash;
                this.splashScreenShowing.emit(false);
            }, this.animationDuration * 500);
        }, this.duration * 1000);
    }
}
SplashScreenComponent.ɵfac = function SplashScreenComponent_Factory(t) { return new (t || SplashScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
SplashScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SplashScreenComponent, selectors: [["app-splash-screen"]], inputs: { animationDuration: "animationDuration", duration: "duration", animationType: "animationType" }, outputs: { splashScreenShowing: "splashScreenShowing" }, decls: 1, vars: 1, consts: [["id", "splashBackgound", "style", "z-index: 1; position:absolute;", "class", "app-splash-screen", 3, "ngStyle", 4, "ngIf"], ["id", "splashBackgound", 1, "app-splash-screen", 2, "z-index", "1", "position", "absolute", 3, "ngStyle"], [1, "app-splash-screen-inner"], [1, "pulse", "effect", 3, "src"]], template: function SplashScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SplashScreenComponent_div_0_Template, 3, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSplash);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle], styles: [".app-splash-screen {\r\n  /* background: green; */\r\n  /* background-image: url('src\\assets\\imgs\\splash-screen-background-2.jpg'); */\r\n  background-size: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 10000;\r\n  transition: left 0.5s;\r\n}\r\n\r\n.app-label {\r\n  color: #fff;\r\n  font-size: 2.5em;\r\n}\r\n\r\n.fade-out {\r\n  animation: fadeOut ease 1s;\r\n}\r\n\r\n@keyframes fadeOut {\r\n  0% {\r\n    opacity:1;\r\n  }\r\n  100% {\r\n    opacity:0;\r\n  }\r\n}\r\n\r\n.pulse {\r\n  background: black;\r\n  border-radius: 75%;\r\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);\r\n  animation: pulse-black 2s infinite;\r\n}\r\n\r\n.pulse.effect {\r\n  box-shadow: 0 0 0 0 rgba(217, 176, 140, 1);\r\n  animation: pulse-white 2s infinite;\r\n}\r\n\r\n@keyframes pulse-white {\r\n  0% {\r\n    transform: scale(0.95);\r\n    box-shadow: 0 0 0 0 rgba(217, 176, 140, 0.7);\r\n  }\r\n\r\n  70% {\r\n    transform: scale(1);\r\n    box-shadow: 0 0 0 10px rgba(217, 176, 140, 0);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(0.95);\r\n    box-shadow: 0 0 0 0 rgba(217, 176, 140, 0);\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qiw2RUFBNkU7RUFDN0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0Qiw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLDBDQUEwQztFQUM1QztBQUNGIiwiZmlsZSI6InNwbGFzaC1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtc3BsYXNoLXNjcmVlbiB7XHJcbiAgLyogYmFja2dyb3VuZDogZ3JlZW47ICovXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmNcXGFzc2V0c1xcaW1nc1xcc3BsYXNoLXNjcmVlbi1iYWNrZ3JvdW5kLTIuanBnJyk7ICovXHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIHRyYW5zaXRpb246IGxlZnQgMC41cztcclxufVxyXG5cclxuLmFwcC1sYWJlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxufVxyXG5cclxuXHJcbi5mYWRlLW91dCB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgMXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ucHVsc2Uge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDc1JTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgYW5pbWF0aW9uOiBwdWxzZS1ibGFjayAycyBpbmZpbml0ZTtcclxufVxyXG5cclxuLnB1bHNlLmVmZmVjdCB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDIxNywgMTc2LCAxNDAsIDEpO1xyXG4gIGFuaW1hdGlvbjogcHVsc2Utd2hpdGUgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Utd2hpdGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjE3LCAxNzYsIDE0MCwgMC43KTtcclxuICB9XHJcblxyXG4gIDcwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDIxNywgMTc2LCAxNDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDIxNywgMTc2LCAxNDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 1451:
/*!******************************************!*\
  !*** ./src/app/tools/tools.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsComponent": () => (/* binding */ ToolsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ToolsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ToolsComponent.ɵfac = function ToolsComponent_Factory(t) { return new (t || ToolsComponent)(); };
ToolsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolsComponent, selectors: [["app-tools"]], decls: 32, vars: 0, consts: [["id", "tools"], [1, "container-fluid"], [1, "pt-2", "pb-2", "tools-bar"], [1, "d-flex", "justify-content-center"], [1, "row", "tools-container", "mt-5"], [1, "col-6", "col-md-3", "tools-card-item"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\angular.svg", "alt", "...", 1, "img-fluid", "tools-img"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\html.png", "alt", "...", 1, "img-fluid", "tools-img"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\css.png", "alt", "...", 1, "img-fluid", "tools-img"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\typescript.svg", "alt", "...", 1, "img-fluid", "tools-img"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\sql.png", "alt", "...", 1, "img-fluid", "tools-img"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\snowflake.png", "alt", "...", 1, "img-fluid", "tools-img"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\csharp.png", "alt", "...", 1, "img-fluid", "tools-img"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\swagger.png", "alt", "...", 1, "img-fluid", "tools-img"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\npm.png", "alt", "...", 1, "img-fluid", "tools-img"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\github_alt.png", "alt", "...", 1, "img-fluid", "tools-img"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\vscode.png", "alt", "...", 1, "img-fluid", "tools-img"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\vs.png", "alt", "...", 1, "img-fluid", "tools-img"], ["data-aos", "zoom-in-up", "data-aos-anchor-placement", "center-bottom", "src", "assets\\imgs\\unity.png", "alt", "...", 1, "img-fluid", "tools-img"]], template: function ToolsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".tools-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n.tools-card-item[_ngcontent-%COMP%] {\r\n  width: calc(40% - 32px);\r\n  border-radius: 24px;\r\n  padding: 8px;\r\n  color: #eef0ff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.tools-img[_ngcontent-%COMP%] {\r\n  max-width: 120px;\r\n  max-height: 120px;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n}\r\n.tools-bar[_ngcontent-%COMP%] {\r\n  color: #EBECF0;\r\n  background-color: #007AA5;\r\n  border-radius: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoidG9vbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29scy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnRvb2xzLWNhcmQtaXRlbSB7XHJcbiAgd2lkdGg6IGNhbGMoNDAlIC0gMzJweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgY29sb3I6ICNlZWYwZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50b29scy1pbWcge1xyXG4gIG1heC13aWR0aDogMTIwcHg7XHJcbiAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4udG9vbHMtYmFyIHtcclxuICBjb2xvcjogI0VCRUNGMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUE1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6980:
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkComponent": () => (/* binding */ WorkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class WorkComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.currentContent = document.getElementById('berryworldcontent');
        this.curButton = document.getElementById('berryworldbutton');
    }
    next(btn, activeContent) {
        this.curButton.classList.remove('selected');
        this.currentContent.classList.add('hidden');
        btn.classList.add('selected');
        activeContent.classList.remove('hidden');
        this.currentContent = activeContent;
        this.curButton = btn;
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 110, vars: 0, consts: [["id", "workhistory"], ["data-aos", "fade-up", "data-aos-anchor-placement", "center-bottom", 1, "tabs-container"], [1, "portfolio-heading"], [1, "inner"], [1, "buttons"], ["id", "berryworldbutton", 1, "selected", 3, "click"], ["berryworldbutton", ""], ["id", "datalytyxbutton", 3, "click"], ["datalytyxbutton", ""], ["id", "climatekicbutton", 3, "click"], ["climatekicbutton", ""], ["id", "victrexbutton", 3, "click"], ["victrexbutton", ""], [1, "content-info"], ["id", "berryworldcontent", "role", "tabpanel", "tabindex", "-1", "aria-labelledby", "tab-0", "aria-hidden", "true"], ["berryworldcontent", ""], [1, "company"], ["href", "https://www.berryworld.com/", "rel", "noopener noreferrer", "target", "_blank", 1, "inline-link"], [1, "range"], ["id", "panel-0", "role", "tabpanel", "tabindex", "-1", "aria-labelledby", "tab-0", "aria-hidden", "true", 1, "hidden"], ["datalytyxcontent", ""], ["href", "https://www.datalytyx.com/", "rel", "noopener noreferrer", "target", "_blank", 1, "inline-link"], ["climatekiccontent", ""], ["href", "https://www.climate-kic.org/", "rel", "noopener noreferrer", "target", "_blank", 1, "inline-link"], ["victrexcontent", ""], ["href", "https://www.victrex.com/en/", "rel", "noopener noreferrer", "target", "_blank", 1, "inline-link"], ["href", "https://azure.microsoft.com/en-gb/services/search/?&ef_id=Cj0KCQiAosmPBhCPARIsAHOen-M7Co01jrqwvpT4yT-V-q0x6F8Me4o_YsQfvfKIxRivPGFSkkLk2iMaAu4lEALw_wcB:G:s&OCID=AID2200274_SEM_Cj0KCQiAosmPBhCPARIsAHOen-M7Co01jrqwvpT4yT-V-q0x6F8Me4o_YsQfvfKIxRivPGFSkkLk2iMaAu4lEALw_wcB:G:s&gclid=Cj0KCQiAosmPBhCPARIsAHOen-M7Co01jrqwvpT4yT-V-q0x6F8Me4o_YsQfvfKIxRivPGFSkkLk2iMaAu4lEALw_wcB", "target", "_blank"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Work History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "button", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx.next(_r0, _r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "BerryWorld");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); return ctx.next(_r1, _r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Datalytyx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66); return ctx.next(_r2, _r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Climate-KIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87); return ctx.next(_r3, _r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Victrex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13)(19, "section", 14, 15)(21, "h3")(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00A0@\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Berry World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Jan 2019 - Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Creating Bespoke Business applications for end-users that allow them to accomplish everyday tasks which require to run the business.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div")(33, "ul")(34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Providing Bespoke Business Applications that are used globally by BerryWorld employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Full-stack development (Angular2, C#, SQL, TypeScript, Devops) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Maintain older SOAP/RESTFUL applications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19, 20)(42, "h3")(43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Software Consultant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00A0@\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Datalytyx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Jan 2018 - Jan 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div")(52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " In the Software Consultant position at Datalytyx I found myself working for many companies creating web applications and working as a Data Engineer when necessary.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul")(55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Creating Website Applications meeting specific requirements using a selected development stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Performing Data Engineering tasks using Talend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Using Snowflake and PowerBI to provide dashboards to clients. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Working on multiple Client sites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Obtaining knowledge and creating applications that utilise cloud platforms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19, 22)(67, "h3")(68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Data Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u00A0@\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Climate-KIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "June 2018 - Jan 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div")(77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Put on a data migration project for Climate-KIC I was assigned as a Data Engineer. My task was to move, curate and make data presentable and provide Dashboards that would be used by Climate-KIC to show to their stakeholders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul")(80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Using Snowflake to extract, transform and Load data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Using Talend Cloud to provide pipelines that run on a schedule.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Attending meetings to gather business requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 19, 24)(88, "h3")(89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Full-Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u00A0@\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Victrex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "April 2018 - May 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div")(98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " I was asked to provide a Proof of Concept, that uses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Azure Cognitive Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " to provide insights on the business, competitors and events which were taking or have taken place. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "ul")(104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Azure DevOps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "SnowFlake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Used Angular + Web Api (Swagger) to display the data in a searchable grid.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } }, styles: ["@keyframes fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  border-left: 2px #116466 solid;\r\n  color: #D1E8E2;\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  background-color: transparent;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.25rem;\r\n  outline: none !important;\r\n\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus {\r\n  outline: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n  border-left: 2px #FFCB9A solid;\r\n  color: #FFCB9A;\r\n\r\n}\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 1rem;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%] {\r\n  padding: 2rem;\r\n  position: relative;\r\n  display: inline-block;\r\n  z-index: 3;\r\n  width: max-content;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  list-style: none;\r\n  width: 10%;\r\n}\r\n\r\n.inline-link[_ngcontent-%COMP%] {\r\n  color: #D1E8E2;\r\n}\r\n\r\n.content-info[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  margin-left: 20px;\r\n  min-height: 40vh;\r\n  max-height: 50vh;\r\n  overflow-y: auto;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  color: #FFCB9A;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: #FFCB9A\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  color: #FFCB9A;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n\r\n  .inner[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n\r\n  .buttons[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    overflow-x: auto;\r\n    padding-left: 50px;\r\n    margin-left: -50px;\r\n    margin-bottom: 30px;\r\n    width: 100vw;\r\n  }\r\n\r\n  .selected[_ngcontent-%COMP%] {\r\n    border: 0px;\r\n    border-bottom: 2px #FFCB9A solid;\r\n    color: #FFCB9A;\r\n  \r\n\r\n  }\r\n  button[_ngcontent-%COMP%] {\r\n    border-left: 0px;\r\n    border-bottom: 2px #116466 solid;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTs7Ozs7Ozs7Ozs7OztHQWFHOztBQUVIO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsd0JBQXdCOztBQUUxQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBSUE7RUFDRSw4QkFBOEI7RUFDOUIsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsY0FBYzs7O0VBR2hCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0VBQ2xDO0FBQ0YiLCJmaWxlIjoid29yay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuXHJcbiAgLnRhYnMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDRyZW0gNHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG5cclxuICAudGFicyB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgfVxyXG59ICovXHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiAycHggIzExNjQ2NiBzb2xpZDtcclxuICBjb2xvcjogI0QxRThFMjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJvcmRlci1sZWZ0OiAycHggI0ZGQ0I5QSBzb2xpZDtcclxuICBjb2xvcjogI0ZGQ0I5QTtcclxuXHJcbn1cclxuXHJcbi5pbm5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5pbmxpbmUtbGluayB7XHJcbiAgY29sb3I6ICNEMUU4RTI7XHJcbn1cclxuLmNvbnRlbnQtaW5mbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwdmg7XHJcbiAgbWF4LWhlaWdodDogNTB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgY29sb3I6ICNGRkNCOUE7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiAjRkZDQjlBXHJcbn1cclxuXHJcbmRpdiB1bCBsaSB7XHJcbiAgY29sb3I6ICNGRkNCOUE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAuaW5uZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgLmJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkIHtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICNGRkNCOUEgc29saWQ7XHJcbiAgICBjb2xvcjogI0ZGQ0I5QTtcclxuICBcclxuXHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBib3JkZXItbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICMxMTY0NjYgc29saWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map