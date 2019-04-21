(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-home-page-module"],{

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\n  <div class=\"flex flex-center flex-column\">\n    <h1 class=\"text-white text-title text--size-title\">Nacho Castillo</h1>\n    <span class=\"n-mt-xs text-light text-white\">Software engineering</span>\n  </div>\n  <footer class=\"home-footer flex flex-center\">\n    <span class=\"text-white text--size-xs text-light n-mr-xs\" style=\"text-transform: uppercase\">Now powered by</span>\n    <fa-icon class=\"text-white\" size=\"md\" [icon]=\"angularIcon\"></fa-icon>\n    <!-- <img class=\"home-footer-img\" src=\"../../../assets/angular.svg\" alt=\"\" /> -->\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-wrapper {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 1fr 4rem;\n  background-color: #1a1919; }\n\n.home-footer-img {\n  width: 20px;\n  height: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hY2hvL1Byb2dyYW1taW5nL05vZGVqcy9Bbmd1bGFyL2phbWVzLXBhZ2UtYXBwL3NyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL25hY2hvL1Byb2dyYW1taW5nL05vZGVqcy9Bbmd1bGFyL2phbWVzLXBhZ2UtYXBwL3NyYy9zYXNzL2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qix5QkNKZSxFQUFBOztBRE9mO0VBRUUsV0FEUTtFQUVSLFlBRlEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zYXNzL2NvbG9yJztcbi5ob21lLSB7XG4gICZ3cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yKCdwcmltYXJ5Jyk7XG4gIH1cbiAgJmZvb3RlciB7XG4gICAgJi1pbWcge1xuICAgICAgJHM6IDIwcHg7XG4gICAgICB3aWR0aDogJHM7XG4gICAgICBoZWlnaHQ6ICRzO1xuICAgIH1cbiAgfVxufVxuIiwiJGNvbG9yczogKFxuICAncHJpbWFyeSc6IChcbiAgICAnYmFzZSc6ICMxYTE5MTksXG4gICAgJ2RhcmsnOiBkYXJrZW4oIzFhMTkxOSwgMTAlKSxcbiAgICAnbGlnaHQnOiBsaWdodGVuKCMxYTE5MTksIDEwJSlcbiAgKSxcbiAgJ2FjY2VudCc6IChcbiAgICAnYmFzZSc6ICM5YzI3YjBcbiAgKSxcbiAgJ2Rhbmdlcic6KFxuICAgICdiYXNlJzojZjQ0MzM2XG4gICksXG4gICdzZWNvbmRhcnknOiAoXG4gICAgJ2Jhc2UnOiAjMmEyZTU4XG4gICksXG4gIC8vICdob21ld29yazInOiAoXG4gIC8vICAgJ2Jhc2UnOiAjZjQ0MzM2XG4gIC8vICksXG4gICdob21ld29yazMnOiAoXG4gICAgJ2Jhc2UnOiAjYzIxODViXG4gICksXG4gICd1MmhvbWV3b3JrMSc6IChcbiAgICAnYmFzZSc6ICNmZmMxMDdcbiAgKSxcbiAgJ3RleHQtcHJpbWFyeSc6ICNmZmZcbik7XG5cbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3IsICRtb2RlOiAnYmFzZScpIHtcbiAgQGlmIG1hcC1oYXMta2V5KCRjb2xvcnMsICRjb2xvcikge1xuICAgIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb2xvcnMsICRjb2xvciksICRtb2RlKTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.angularIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAngular"];
    }
    HomePageComponent.prototype.ngOnInit = function () { };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/pages/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/home-page/home-page.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-page-home-page-module.js.map