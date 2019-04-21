(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-page-signup-page-module"],{

/***/ "./src/app/graphQL/queries/mutations/signup.ts":
/*!*****************************************************!*\
  !*** ./src/app/graphQL/queries/mutations/signup.ts ***!
  \*****************************************************/
/*! exports provided: SIGNUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


var SIGNUP = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation signup($user: UserInput) {\n    signup(user: $user) {\n      avatar\n      fullname\n      email\n      firstName\n      lastName\n      _id\n    }\n  }\n"], ["\n  mutation signup($user: UserInput) {\n    signup(user: $user) {\n      avatar\n      fullname\n      email\n      firstName\n      lastName\n      _id\n    }\n  }\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex-center flex-column signup-wrapper\">\n  <form class=\"form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"signUpForm\">\n    <div class=\"form-field\">\n      <input formControlName=\"firstName\" type=\"text\" class=\"form-input form-input--primary\" placeholder=\"First name*\" />\n    </div>\n    <div class=\"form-field\">\n      <input formControlName=\"lastName\" type=\"text\" class=\"form-input form-input--primary\" placeholder=\"Last name*\" />\n    </div>\n    <div class=\"form-field\">\n      <input formControlName=\"username\" type=\"text\" class=\"form-input form-input--primary\" placeholder=\"Username*\" />\n    </div>\n    <div class=\"form-field\">\n      <input [class.error]=\"hasError.email\" formControlName=\"email\" type=\"text\" class=\"form-input form-input--primary\" placeholder=\"Email*\" />\n            <div *ngIf=\"hasError.email\" class=\"flex justify-end\">\n              <span class=\"n-mt-xs n-mr-sm text-red\">{{ errorMessage }}</span>\n            </div>\n    </div>\n    <div class=\"form-field\">\n      <input\n        formControlName=\"password\"\n        type=\"password\"\n        class=\"form-input form-input--primary\"\n        placeholder=\"Password*\"\n      />\n    </div>\n    <div class=\"form-field\">\n      <input\n        formControlName=\"confirmPassword\"\n        type=\"password\"\n        class=\"form-input form-input--primary\"\n        placeholder=\"Confirm password*\"\n      />\n    </div>\n    <div class=\"form-field flex justify-end\">\n      <button class=\"form-submit form-submit--primary\" type=\"submit\" [disabled]=\"!signUpForm.valid\">Sing up</button>\n    </div>\n  </form>\n\n  <div class=\"n-mt-md\">\n    <p class=\"text-white\">Have you an account? <span routerLink=\"/i/signin\" class=\"text-bold pointer\">Sign in</span></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-wrapper {\n  background-color: #1a1919;\n  height: 100%;\n  min-width: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hY2hvL1Byb2dyYW1taW5nL05vZGVqcy9Bbmd1bGFyL2phbWVzLXBhZ2UtYXBwL3NyYy9hcHAvcGFnZXMvc2lnbnVwLXBhZ2Uvc2lnbnVwLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9uYWNoby9Qcm9ncmFtbWluZy9Ob2RlanMvQW5ndWxhci9qYW1lcy1wYWdlLWFwcC9zcmMvc2Fzcy9jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UseUJDRmU7RURHZixZQUFZO0VBQ1osZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAtcGFnZS9zaWdudXAtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Nhc3MvY29sb3InO1xuXG4uc2lnbnVwLSB7XG4gICZ3cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvcigncHJpbWFyeScpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICB9XG59XG4iLCIkY29sb3JzOiAoXG4gICdwcmltYXJ5JzogKFxuICAgICdiYXNlJzogIzFhMTkxOSxcbiAgICAnZGFyayc6IGRhcmtlbigjMWExOTE5LCAxMCUpLFxuICAgICdsaWdodCc6IGxpZ2h0ZW4oIzFhMTkxOSwgMTAlKVxuICApLFxuICAnYWNjZW50JzogKFxuICAgICdiYXNlJzogIzljMjdiMFxuICApLFxuICAnZGFuZ2VyJzooXG4gICAgJ2Jhc2UnOiNmNDQzMzZcbiAgKSxcbiAgJ3NlY29uZGFyeSc6IChcbiAgICAnYmFzZSc6ICMyYTJlNThcbiAgKSxcbiAgLy8gJ2hvbWV3b3JrMic6IChcbiAgLy8gICAnYmFzZSc6ICNmNDQzMzZcbiAgLy8gKSxcbiAgJ2hvbWV3b3JrMyc6IChcbiAgICAnYmFzZSc6ICNjMjE4NWJcbiAgKSxcbiAgJ3UyaG9tZXdvcmsxJzogKFxuICAgICdiYXNlJzogI2ZmYzEwN1xuICApLFxuICAndGV4dC1wcmltYXJ5JzogI2ZmZlxuKTtcblxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvciwgJG1vZGU6ICdiYXNlJykge1xuICBAaWYgbWFwLWhhcy1rZXkoJGNvbG9ycywgJGNvbG9yKSB7XG4gICAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yKSwgJG1vZGUpO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
  \************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _validators_passwordValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../validators/passwordValidator */ "./src/app/validators/passwordValidator.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var src_app_graphQL_queries_mutations_signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/graphQL/queries/mutations/signup */ "./src/app/graphQL/queries/mutations/signup.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_graphQL_queries_mutations_local_save_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/graphQL/queries/mutations/local/save-user */ "./src/app/graphQL/queries/mutations/local/save-user.ts");








var SignupPageComponent = /** @class */ (function () {
    function SignupPageComponent(apollo, router) {
        this.apollo = apollo;
        this.router = router;
        this.hasError = {
            email: false
        };
        this.errorMessage = '';
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)])
        }, { validators: [_validators_passwordValidator__WEBPACK_IMPORTED_MODULE_1__["PasswordValidator"].MatchPassword] });
    }
    SignupPageComponent.prototype.ngOnInit = function () { };
    SignupPageComponent.prototype.saveUser = function (user) {
        this.apollo.mutate({ mutation: src_app_graphQL_queries_mutations_local_save_user__WEBPACK_IMPORTED_MODULE_7__["SAVE_USER"], variables: { user: user } }).subscribe({
            next: function (data) {
                console.log(data);
            },
            error: function (e) {
                console.log(e);
            }
        });
    };
    SignupPageComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.signUpForm.value);
        this.apollo.mutate({ mutation: src_app_graphQL_queries_mutations_signup__WEBPACK_IMPORTED_MODULE_5__["SIGNUP"], variables: { user: this.signUpForm.value } }).subscribe({
            next: function (_a) {
                var data = _a.data;
                var signup = data.signup;
                console.log(signup);
                _this.saveUser(signup);
                _this.router.navigate(['/i/signin']);
            },
            error: function (error) {
                var email = error.graphQLErrors[0].extensions.exception.email;
                _this.hasError.email = email;
                // this.hasError.password = password;
                _this.errorMessage = error.graphQLErrors[0].message;
            }
        });
    };
    SignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signup-page',
            template: __webpack_require__(/*! ./signup-page.component.html */ "./src/app/pages/signup-page/signup-page.component.html"),
            styles: [__webpack_require__(/*! ./signup-page.component.scss */ "./src/app/pages/signup-page/signup-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SignupPageComponent);
    return SignupPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.module.ts ***!
  \*********************************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var routes = [
    {
        path: '',
        component: _signup_page_component__WEBPACK_IMPORTED_MODULE_4__["SignupPageComponent"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_signup_page_component__WEBPACK_IMPORTED_MODULE_4__["SignupPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/validators/passwordValidator.ts":
/*!*************************************************!*\
  !*** ./src/app/validators/passwordValidator.ts ***!
  \*************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.MatchPassword = function (ac) {
        var passworControl = ac.get('password');
        var confirmPasswordControl = ac.get('confirmPassword');
        var password = passworControl.value;
        var confirmPassword = confirmPasswordControl.value;
        if (password !== confirmPassword) {
            //   passworControl.setErrors({ matchPassword: true });
            confirmPasswordControl.setErrors({ matchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidator;
}());



/***/ })

}]);
//# sourceMappingURL=signup-page-signup-page-module.js.map