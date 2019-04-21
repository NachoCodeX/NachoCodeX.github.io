(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-page-index-page-module"],{

/***/ "./src/app/pages/index-page/index-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/index-page/index-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/index-page/index-page.component.sass":
/*!************************************************************!*\
  !*** ./src/app/pages/index-page/index-page.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4LXBhZ2UvaW5kZXgtcGFnZS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/index-page/index-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/index-page/index-page.component.ts ***!
  \**********************************************************/
/*! exports provided: IndexPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageComponent", function() { return IndexPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexPageComponent = /** @class */ (function () {
    function IndexPageComponent() {
    }
    IndexPageComponent.prototype.ngOnInit = function () {
    };
    IndexPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index-page',
            template: __webpack_require__(/*! ./index-page.component.html */ "./src/app/pages/index-page/index-page.component.html"),
            styles: [__webpack_require__(/*! ./index-page.component.sass */ "./src/app/pages/index-page/index-page.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexPageComponent);
    return IndexPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/index-page/index-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/index-page/index-page.module.ts ***!
  \*******************************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _index_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-page.component */ "./src/app/pages/index-page/index-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





// import { SignupPageModule } from '../signup-page/signup-page.module';
var routes = [
    {
        path: '',
        component: _index_page_component__WEBPACK_IMPORTED_MODULE_3__["IndexPageComponent"],
        children: [
            {
                path: '',
                redirectTo: 'signin',
                pathMatch: 'full'
            },
            {
                path: 'signin',
                loadChildren: '../signin-pages/signin-pages.module#SigninPagesModule'
                // outlet: 'main'
            },
            {
                path: 'signup',
                loadChildren: '../signup-page/signup-page.module#SignupPageModule'
                // outlet: 'main'
            }
        ]
    }
];
var IndexPageModule = /** @class */ (function () {
    function IndexPageModule() {
    }
    IndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_index_page_component__WEBPACK_IMPORTED_MODULE_3__["IndexPageComponent"]],
            exports: [_index_page_component__WEBPACK_IMPORTED_MODULE_3__["IndexPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
        })
    ], IndexPageModule);
    return IndexPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-index-page-index-page-module.js.map