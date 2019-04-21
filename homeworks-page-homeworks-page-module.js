(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homeworks-page-homeworks-page-module"],{

/***/ "./node_modules/graphql-tag/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/graphql-tag/src/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(/*! graphql/language/parser */ "./node_modules/graphql/language/parser.mjs");

var parse = parser.parse;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

// A map docString -> graphql document
var docCache = {};

// A map fragmentName -> [normalized source]
var fragmentSourceMap = {};

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// For testing.
function resetCaches() {
  docCache = {};
  fragmentSourceMap = {};
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
var printFragmentWarnings = true;
function processFragments(ast) {
  var astFragmentMap = {};
  var definitions = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var fragmentDefinition = ast.definitions[i];

    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

      // We know something about this fragment
      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }

        fragmentSourceMap[fragmentName][sourceKey] = true;

      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
        fragmentSourceMap[fragmentName] = {};
        fragmentSourceMap[fragmentName][sourceKey] = true;
      }

      if (!astFragmentMap[sourceKey]) {
        astFragmentMap[sourceKey] = true;
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  }

  ast.definitions = definitions;
  return ast;
}

function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

function stripLoc(doc, removeLocAtThisLevel) {
  var docType = Object.prototype.toString.call(doc);

  if (docType === '[object Array]') {
    return doc.map(function (d) {
      return stripLoc(d, removeLocAtThisLevel);
    });
  }

  if (docType !== '[object Object]') {
    throw new Error('Unexpected input.');
  }

  // We don't want to remove the root loc field so we can use it
  // for fragment substitution (see below)
  if (removeLocAtThisLevel && doc.loc) {
    delete doc.loc;
  }

  // https://github.com/apollographql/graphql-tag/issues/40
  if (doc.loc) {
    delete doc.loc.startToken;
    delete doc.loc.endToken;
  }

  var keys = Object.keys(doc);
  var key;
  var value;
  var valueType;

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      value = doc[keys[key]];
      valueType = Object.prototype.toString.call(value);

      if (valueType === '[object Object]' || valueType === '[object Array]') {
        doc[keys[key]] = stripLoc(value, true);
      }
    }
  }

  return doc;
}

var experimentalFragmentVariables = false;
function parseDocument(doc) {
  var cacheKey = normalize(doc);

  if (docCache[cacheKey]) {
    return docCache[cacheKey];
  }

  var parsed = parse(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  // check that all "new" fragments inside the documents are consistent with
  // existing fragments of the same name
  parsed = processFragments(parsed);
  parsed = stripLoc(parsed, false);
  docCache[cacheKey] = parsed;

  return parsed;
}

function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}

function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];

  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof(literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }

    result += literals[i];
  }

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;
gql.resetCaches = resetCaches;
gql.disableFragmentWarnings = disableFragmentWarnings;
gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

module.exports = gql;


/***/ }),

/***/ "./src/app/pages/homeworks-page/homeworks-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/homeworks-page/homeworks-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homeworks-wrapper\">\n  <article *ngIf=\"!isLoading\" class=\"homeworks-grid\">\n    <div *ngFor=\"let homework of homeworks\" class=\"homework-wrapper\">\n      <div (click)=\"onView(homework._id, homework.url)\" class=\"pointer flex flex-center homework-description\">\n        <h2 class=\"homework-title\">{{ homework.name }}</h2>\n      </div>\n      <footer class=\"flex homework-footer\">\n        <ul class=\"homework-list flex\">\n          <li\n            (click)=\"isLiked(homework._id, userID) ? onDislike(homework._id) : onLike(homework._id)\"\n            class=\"pointer homework-list-item flex flex-center\"\n          >\n            <fa-icon\n              [class.isLiked]=\"isLiked(homework._id, userID)\"\n              class=\"like homework-like pointer text-white n-mr-xs\"\n              size=\"2x\"\n              [icon]=\"likeIcon\"\n            ></fa-icon>\n            <span class=\"text-white text--size-md\">{{ homework.likes.length }}</span>\n          </li>\n          <li class=\"pointer homework-list-item flex flex-center\">\n            <fa-icon size=\"2x\" class=\"n-mr-xs text-white\" [icon]=\"openIcon\"></fa-icon>\n            <span class=\"text-white text--size-md\">{{ homework.views }}</span>\n          </li>\n          <li class=\"pointer homework-list-item flex flex-center\">\n            <fa-icon size=\"2x\" class=\"pointer text-white\" [icon]=\"githubIcon\"></fa-icon>\n          </li>\n        </ul>\n      </footer>\n    </div>\n  </article>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/homeworks-page/homeworks-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/homeworks-page/homeworks-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homeworks-wrapper {\n  height: 100%;\n  overflow-y: scroll;\n  display: flex;\n  justify-content: center; }\n  .homeworks-wrapper::-webkit-scrollbar {\n    background: #fff; }\n  .homeworks-grid {\n  display: grid;\n  width: 100%;\n  grid-template-columns: repeat(4, 0.25fr);\n  grid-auto-rows: 300px;\n  padding: 40px;\n  grid-gap: 20px; }\n  .homework-like {\n  color: #343232; }\n  .homework-like.isLiked {\n    color: #9c27b0; }\n  .homework-wrapper {\n  overflow: hidden;\n  display: grid;\n  grid-template-rows: 1fr 4rem;\n  border-radius: 5px;\n  background-color: #222121;\n  transition: all ease 0.4s; }\n  .homework-wrapper:hover {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    box-shadow: 0px 7px 10px 2px rgba(0, 0, 0, 0.3); }\n  .homework-list {\n  width: 100%; }\n  .homework-list-item {\n    transition: all ease 0.5s;\n    flex: 1; }\n  .homework-list-item:first-child:hover .homework-like.like {\n      -webkit-animation: beating ease 0.8s infinite;\n              animation: beating ease 0.8s infinite; }\n  @-webkit-keyframes beating {\n  0% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  100% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); } }\n  @keyframes beating {\n  0% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  100% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); } }\n  .homework-list-item:hover {\n      background-color: #121212; }\n  .homework-title {\n  font-size: 24px;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hY2hvL1Byb2dyYW1taW5nL05vZGVqcy9Bbmd1bGFyL2phbWVzLXBhZ2UtYXBwL3NyYy9hcHAvcGFnZXMvaG9tZXdvcmtzLXBhZ2UvaG9tZXdvcmtzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUIsRUFBQTtFQUp4QjtJQU1HLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMscUJBQXFCO0VBRXJCLGFBQWE7RUFDYixjQUFjLEVBQUE7RUFLaEI7RUFDRSxjQUF3QyxFQUFBO0VBRHpDO0lBR0csY0FBYyxFQUFBO0VBR2xCO0VBQ0UsZ0JBQWdCO0VBRWhCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHlCQUFrRDtFQUNsRCx5QkFBeUIsRUFBQTtFQVAxQjtJQVNHLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsK0NBQXNDLEVBQUE7RUFHMUM7RUFDRSxXQUFXLEVBQUE7RUFDWDtJQUVFLHlCQUF5QjtJQUN6QixPQUFPLEVBQUE7RUFIUjtNQWdCUyw2Q0FBcUM7Y0FBckMscUNBQXFDLEVBQUE7RUFSckM7RUFDRTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQTtFQUV2QjtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQSxFQUFBO0VBTHpCO0VBQ0U7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUE7RUFFdkI7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUEsRUFBQTtFQWJsQztNQXNCRyx5QkFBaUQsRUFBQTtFQUl2RDtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21ld29ya3MtcGFnZS9ob21ld29ya3MtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Nhc3MvY29sb3InO1xuXG4uaG9tZXdvcmtzLSB7XG4gICZ3cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB9XG4gIH1cbiAgJmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMC4yNWZyKTtcbiAgICBncmlkLWF1dG8tcm93czogMzAwcHg7XG5cbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGdyaWQtZ2FwOiAyMHB4O1xuICB9XG59XG5cbi5ob21ld29yay0ge1xuICAmbGlrZSB7XG4gICAgY29sb3I6IGxpZ2h0ZW4oZ2V0Q29sb3IoJ3ByaW1hcnknKSwgMTAlKTtcbiAgICAmLmlzTGlrZWQge1xuICAgICAgY29sb3I6ICM5YzI3YjA7XG4gICAgfVxuICB9XG4gICZ3cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKGdldENvbG9yKCdwcmltYXJ5JyksIDMlKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCA3cHggMTBweCAycHggcmdiYSgjMDAwLCAwLjMpO1xuICAgIH1cbiAgfVxuICAmbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJi1pdGVtIHtcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xuICAgICAgZmxleDogMTtcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAuaG9tZXdvcmstbGlrZSB7XG4gICAgICAgICAgICAmLmxpa2Uge1xuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGJlYXRpbmcge1xuICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogYmVhdGluZyBlYXNlIDAuOHMgaW5maW5pdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKGdldENvbG9yKCdwcmltYXJ5JyksIDMlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgJmRlc2NyaXB0aW9uIHtcbiAgfVxuICAmZm9vdGVyIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiByZWQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/homeworks-page/homeworks-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/homeworks-page/homeworks-page.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeworksPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeworksPageComponent", function() { return HomeworksPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_api_controller_api_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-controller/api-controller.service */ "./src/app/services/api-controller/api-controller.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HomeworksPageComponent = /** @class */ (function () {
    function HomeworksPageComponent(apollo, api, router) {
        var _this = this;
        this.apollo = apollo;
        this.api = api;
        this.router = router;
        this.likeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHeart"];
        this.githubIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGithubAlt"];
        this.openIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEye"];
        this.isLoading = false;
        this.api.homeworks.subscribe(function (homeworks) { return (_this.homeworks = homeworks); });
        this.api.userID.subscribe(function (userID) { return (_this.userID = userID); });
    }
    HomeworksPageComponent.prototype.getlikeID = function (id) {
        var _this = this;
        return this.homeworks.filter(function (homework) { return homework._id === id; })[0].likes.filter(function (like) { return like.user === _this.userID; })[0]
            ._id;
    };
    HomeworksPageComponent.prototype.onDislike = function (id) {
        var _this = this;
        console.log("HOMEWORK: " + id + "\nLIKEID: " + this.getlikeID(id));
        this.api.dislikeHomework(id, this.getlikeID(id)).subscribe(function () {
            _this.homeworks = _this.homeworks.map(function (homework) {
                if (homework._id === id) {
                    homework.likes = homework.likes.filter(function (like) { return like._id !== _this.getlikeID(id); });
                }
                return homework;
            });
        });
    };
    HomeworksPageComponent.prototype.onLike = function (id) {
        var _this = this;
        this.api.likeHomework(id).subscribe({
            next: function (like) {
                console.log(like);
                _this.homeworks = _this.homeworks.map(function (homework) {
                    if (homework._id === id) {
                        homework.likes.push(like);
                    }
                    return homework;
                });
            },
            error: function (e) {
                console.log(e);
            }
        });
    };
    HomeworksPageComponent.prototype.isLiked = function (id, userID) {
        return this.homeworks.filter(function (homework) { return homework._id === id; })[0].likes.some(function (like) { return like.user === userID; });
    };
    HomeworksPageComponent.prototype.ngOnInit = function () {
        // this.getUser();
    };
    HomeworksPageComponent.prototype.incrementViews = function (id) {
        var _this = this;
        this.api.incrementHomeworkViews(id).subscribe(function (views) {
            _this.homeworks = _this.homeworks.map(function (homework) {
                if (homework._id === id) {
                    homework.views = views;
                }
                return homework;
            });
        });
    };
    HomeworksPageComponent.prototype.onView = function (id, url) {
        console.log("Click on " + id);
        this.incrementViews(id);
        this.router.navigate(["/dashboard/homework/" + url]);
    };
    HomeworksPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-homeworks-page',
            template: __webpack_require__(/*! ./homeworks-page.component.html */ "./src/app/pages/homeworks-page/homeworks-page.component.html"),
            styles: [__webpack_require__(/*! ./homeworks-page.component.scss */ "./src/app/pages/homeworks-page/homeworks-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"], src_app_services_api_controller_api_controller_service__WEBPACK_IMPORTED_MODULE_1__["ApiControllerService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], HomeworksPageComponent);
    return HomeworksPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/homeworks-page/homeworks-page.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/homeworks-page/homeworks-page.module.ts ***!
  \***************************************************************/
/*! exports provided: HomeworksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeworksPageModule", function() { return HomeworksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _homeworks_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeworks-page.component */ "./src/app/pages/homeworks-page/homeworks-page.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    {
        path: '',
        component: _homeworks_page_component__WEBPACK_IMPORTED_MODULE_3__["HomeworksPageComponent"]
    }
];
var HomeworksPageModule = /** @class */ (function () {
    function HomeworksPageModule() {
    }
    HomeworksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_homeworks_page_component__WEBPACK_IMPORTED_MODULE_3__["HomeworksPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)]
        })
    ], HomeworksPageModule);
    return HomeworksPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=homeworks-page-homeworks-page-module.js.map