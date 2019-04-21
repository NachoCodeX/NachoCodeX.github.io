(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../activities-page/activities-page.module": [
		"./src/app/pages/activities-page/activities-page.module.ts",
		"activities-page-activities-page-module"
	],
	"../home-page/home-page.module": [
		"./src/app/pages/home-page/home-page.module.ts",
		"default~home-page-home-page-module~homeworks-page-homeworks-page-module~pages-dashboard-page-dashboa~27631189",
		"common",
		"home-page-home-page-module"
	],
	"../homeworks-page/homeworks-page.module": [
		"./src/app/pages/homeworks-page/homeworks-page.module.ts",
		"default~home-page-home-page-module~homeworks-page-homeworks-page-module~pages-dashboard-page-dashboa~27631189",
		"default~homeworks-page-homeworks-page-module~pages-dashboard-page-dashboard-page-module",
		"common",
		"homeworks-page-homeworks-page-module"
	],
	"../signin-pages/signin-pages.module": [
		"./src/app/pages/signin-pages/signin-pages.module.ts",
		"default~pages-dashboard-page-dashboard-page-module~signin-pages-signin-pages-module~signup-page-sign~1a467e8c",
		"common",
		"signin-pages-signin-pages-module"
	],
	"../signup-page/signup-page.module": [
		"./src/app/pages/signup-page/signup-page.module.ts",
		"default~pages-dashboard-page-dashboard-page-module~signin-pages-signin-pages-module~signup-page-sign~1a467e8c",
		"common",
		"signup-page-signup-page-module"
	],
	"./pages/dashboard-page/dashboard-page.module": [
		"./src/app/pages/dashboard-page/dashboard-page.module.ts",
		"default~home-page-home-page-module~homeworks-page-homeworks-page-module~pages-dashboard-page-dashboa~27631189",
		"default~pages-dashboard-page-dashboard-page-module~signin-pages-signin-pages-module~signup-page-sign~1a467e8c",
		"default~homeworks-page-homeworks-page-module~pages-dashboard-page-dashboard-page-module",
		"common",
		"pages-dashboard-page-dashboard-page-module"
	],
	"./pages/index-page/index-page.module": [
		"./src/app/pages/index-page/index-page.module.ts",
		"pages-index-page-index-page-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: 'i',
        pathMatch: 'full'
    },
    {
        path: 'i',
        loadChildren: './pages/index-page/index-page.module#IndexPageModule'
    },
    {
        path: 'dashboard',
        loadChildren: './pages/dashboard-page/dashboard-page.module#DashboardPageModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'james-page-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _graphQL_graphql_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphQL/graphql.module */ "./src/app/graphQL/graphql.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _graphQL_graphql_module__WEBPACK_IMPORTED_MODULE_5__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/graphQL/defaults.ts":
/*!*************************************!*\
  !*** ./src/app/graphQL/defaults.ts ***!
  \*************************************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
var defaults = {
    user: {
        _id: 'guest',
        avatar: 'https://api.adorable.io/avatars/300',
        firstName: 'Guest',
        lastName: 'Guest',
        email: 'guest@guest.com',
        fullname: 'Guest Guest',
        __typename: 'Guest'
    },
    homeworks: []
};


/***/ }),

/***/ "./src/app/graphQL/graphql.module.ts":
/*!*******************************************!*\
  !*** ./src/app/graphQL/graphql.module.ts ***!
  \*******************************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var _links_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./links/state */ "./src/app/graphQL/links/state.ts");
/* harmony import */ var _links_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./links/auth */ "./src/app/graphQL/links/auth.ts");
/* harmony import */ var _links_ws__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./links/ws */ "./src/app/graphQL/links/ws.ts");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");










// const uri = 'http://localhost:7000/'; // <-- add the URL of the GraphQL server here
var uri = 'https://james-pweb-app.herokuapp.com/'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    var http = httpLink.create({ uri: uri });
    // const link = ApolloLink.from([stateLink, authLink, http]);
    var link = Object(apollo_link__WEBPACK_IMPORTED_MODULE_5__["split"])(function (_a) {
        var query = _a.query;
        var _b = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_9__["getMainDefinition"])(query), kind = _b.kind, operation = _b.operation;
        return kind === 'OperationDefinition' && operation === 'subscription';
    }, _links_ws__WEBPACK_IMPORTED_MODULE_8__["wsLink"], http);
    return {
        link: apollo_link__WEBPACK_IMPORTED_MODULE_5__["ApolloLink"].from([_links_state__WEBPACK_IMPORTED_MODULE_6__["stateLink"], _links_auth__WEBPACK_IMPORTED_MODULE_7__["authLink"], link]),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]()
    };
}
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule() {
    }
    GraphQLModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
                    useFactory: createApollo,
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]]
                }
            ]
        })
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "./src/app/graphQL/links/auth.ts":
/*!***************************************!*\
  !*** ./src/app/graphQL/links/auth.ts ***!
  \***************************************/
/*! exports provided: authLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authLink", function() { return authLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");


var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__["setContext"])(function (_, _a) {
    var headers = _a.headers;
    // get the authentication token from local storage if it exists
    var token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, headers, { authorization: token ? "Bearer " + token : '' })
    };
});


/***/ }),

/***/ "./src/app/graphQL/links/state.ts":
/*!****************************************!*\
  !*** ./src/app/graphQL/links/state.ts ***!
  \****************************************/
/*! exports provided: stateLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateLink", function() { return stateLink; });
/* harmony import */ var apollo_link_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-link-state */ "./node_modules/apollo-link-state/lib/index.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers */ "./src/app/graphQL/resolvers.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaults */ "./src/app/graphQL/defaults.ts");
/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../typeDefs */ "./src/app/graphQL/typeDefs.ts");





var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]();
var stateLink = Object(apollo_link_state__WEBPACK_IMPORTED_MODULE_0__["withClientState"])({
    cache: cache,
    resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__["resolvers"],
    defaults: _defaults__WEBPACK_IMPORTED_MODULE_3__["defaults"],
    typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_4__["typeDefs"]
});


/***/ }),

/***/ "./src/app/graphQL/links/ws.ts":
/*!*************************************!*\
  !*** ./src/app/graphQL/links/ws.ts ***!
  \*************************************/
/*! exports provided: wsLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wsLink", function() { return wsLink; });
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-link-ws */ "./node_modules/apollo-link-ws/lib/bundle.esm.js");

var wsLink = new apollo_link_ws__WEBPACK_IMPORTED_MODULE_0__["WebSocketLink"]({
    // uri: `ws://localhost:7000/`,
    uri: 'https://james-pweb-app.herokuapp.com/',
    options: {
        reconnect: true
    }
});


/***/ }),

/***/ "./src/app/graphQL/resolvers.ts":
/*!**************************************!*\
  !*** ./src/app/graphQL/resolvers.ts ***!
  \**************************************/
/*! exports provided: resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
var resolvers = {
    Mutation: {
        saveUser: function (_, _a, _b) {
            var user = _a.user;
            var cache = _b.cache, getCacheKey = _b.getCacheKey;
            cache.writeData({ data: { user: user } });
            return null;
        }
    }
};


/***/ }),

/***/ "./src/app/graphQL/typeDefs.ts":
/*!*************************************!*\
  !*** ./src/app/graphQL/typeDefs.ts ***!
  \*************************************/
/*! exports provided: typeDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
var typeDefs = "\n\n  type User {\n    _id: String\n    avatar: String\n    firstName: String\n    lastName: String\n    email: String\n    fullname: String\n\n  }\n\n  input UserInput {\n    avatar: String\n    firstName: String\n    lastName: String\n    email: String\n    fullname: String\n  }\n\n\n\n  type Query {\n    user:User\n  }\n  type Mutation{\n    saveUser(user:UserInput!)\n  }\n\n\n";


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nacho/Programming/Nodejs/Angular/james-page-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map