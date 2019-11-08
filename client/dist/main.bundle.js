webpackJsonp(["main"],{

/***/ "./client/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./client/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./client/src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index__ = __webpack_require__("./client/src/app/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var externalUrlProvider = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]("externalUrlRedirectResolver");
var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_index__["a" /* DashboardComponent */],
        children: [
            { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_3__components_index__["d" /* UploadComponent */] },
            { path: 'preview', component: __WEBPACK_IMPORTED_MODULE_3__components_index__["b" /* ImagepreviewComponent */] },
            { path: 'images', component: __WEBPACK_IMPORTED_MODULE_3__components_index__["c" /* ImagesComponent */] }
        ]
    },
    { path: '*', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            providers: [
                {
                    provide: externalUrlProvider,
                    useValue: function (route) {
                        var externalUrl = route.paramMap.get("externalUrl");
                        window.open(externalUrl, "_self");
                    }
                }
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes), __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./client/src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "        #sidebar {\r\n        overflow: hidden;\r\n        z-index: 3;\r\n    }\r\n\r\n    #sidebar .list-group {\r\n        min-width: 300px;\r\n        min-height: 100vh;\r\n    }\r\n\r\n    #sidebar .list-group-item {\r\n        border-radius: 0;\r\n        white-space: nowrap;\r\n    }\r\n\r\n    @media (max-width:768px) {\r\n        #sidebar {\r\n            min-width: 35px;\r\n            max-width: 40px;\r\n            overflow-y: auto;\r\n            overflow-x: visible;\r\n            -webkit-transition: all 0.25s ease;\r\n            transition: all 0.25s ease;\r\n            -webkit-transform: translateX(-45px);\r\n                    transform: translateX(-45px);\r\n            position: fixed;\r\n        }\r\n        #sidebar.show {\r\n            -webkit-transform: translateX(0);\r\n                    transform: translateX(0);\r\n        }\r\n        #sidebar::-webkit-scrollbar {\r\n            width: 0px;\r\n        }\r\n        #sidebar,\r\n        #sidebar .list-group {\r\n            min-width: 35px;\r\n            overflow: visible;\r\n        }\r\n        /* overlay sub levels on small screens */\r\n        #sidebar .list-group .collapse.show,\r\n        #sidebar .list-group .collapsing {\r\n            position: relative;\r\n            z-index: 1;\r\n            width: 190px;\r\n            top: 0;\r\n        }\r\n        #sidebar .list-group>.list-group-item {\r\n            text-align: center;\r\n            padding: .75rem .5rem;\r\n        }\r\n        /* hide caret icons of top level when collapsed */\r\n        #sidebar .list-group>.list-group-item[aria-expanded=\\\"true\\\"]::after,    #sidebar .list-group > .list-group-item[aria-expanded=\\\"false\\\"]::after {        display:none;    }}\r\n\r\n    .collapse.show {  visibility: visible;}\r\n\r\n    .collapsing {  visibility: visible;  height: 0;  -webkit-transition-property: height, visibility;  transition-property: height, visibility;  -webkit-transition-timing-function: ease-out;  transition-timing-function: ease-out;}\r\n\r\n    .collapsing.width {  -webkit-transition-property: width, visibility;  transition-property: width, visibility;  width: 0;  height: 100%;  -webkit-transition-timing-function: ease-out;  transition-timing-function: ease-out;}"

/***/ }),

/***/ "./client/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./client/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Distributed Rendering Servers';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./client/src/app/app.component.html"),
            styles: [__webpack_require__("./client/src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./client/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./client/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./client/src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("./client/src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_upload_upload_component__ = __webpack_require__("./client/src/app/components/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_images_images_component__ = __webpack_require__("./client/src/app/components/images/images.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_imagepreview_imagepreview_component__ = __webpack_require__("./client/src/app/components/imagepreview/imagepreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_index__ = __webpack_require__("./client/src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_images_images_component__["a" /* ImagesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_imagepreview_imagepreview_component__["a" /* ImagepreviewComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_index__["b" /* UploadService */], __WEBPACK_IMPORTED_MODULE_9__services_index__["a" /* MetadataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./client/src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-pills nav-justified\">\n    <li class=\"nav-item\">\n      <a routerLink=\"/upload\" class=\"nav-link\" routerLinkActive #rla=\"routerLinkActive\">Upload</a>\n    </li>\n    <li class=\"nav-item\">\n      <a routerLink=\"/images\" class=\"nav-link\" routerLinkActive #rla=\"routerLinkActive\">Pre-View</a>\n    </li>\n  </ul>\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./client/src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./client/src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./client/src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./client/src/app/components/imagepreview/imagepreview.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/src/app/components/imagepreview/imagepreview.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  imagepreview works!\n</p>\n"

/***/ }),

/***/ "./client/src/app/components/imagepreview/imagepreview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagepreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagepreviewComponent = /** @class */ (function () {
    function ImagepreviewComponent() {
    }
    ImagepreviewComponent.prototype.ngOnInit = function () {
    };
    ImagepreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-imagepreview',
            template: __webpack_require__("./client/src/app/components/imagepreview/imagepreview.component.html"),
            styles: [__webpack_require__("./client/src/app/components/imagepreview/imagepreview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImagepreviewComponent);
    return ImagepreviewComponent;
}());



/***/ }),

/***/ "./client/src/app/components/images/images.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/src/app/components/images/images.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">MIME TYPE</th>\n            <th scope=\"col\">File</th>\n            <th scope=\"col\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of rawMetadata; let i=index;\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{item.data.mimetype}}</td>\n            <td>{{item.data.path}}</td>\n            <td><button type=\"button\" (click)=\"previewImage(item)\">View</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"{{imageUrl+imagePreviewData.path}}\" alt=\"{{imagePreviewData.filename}}\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Mime Type:{{imagePreviewData.mimetype}}</h5>\n          <p class=\"card-text\">File Size: {{imagePreviewData.size}}</p>\n          <a href=\"{{imageUrl+imagePreviewData.path}}\" class=\"btn btn-primary\">In New Window</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./client/src/app/components/images/images.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./client/src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./client/src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var imageURI = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].imageUrl;
var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(mds) {
        this.mds = mds;
        this.rawMetadata = [];
        this.imagePreviewData = {};
        this.imageUrl = '';
    }
    ImagesComponent.prototype.ngOnInit = function () {
        this.fetchMetadata();
        this.imageUrl = imageURI;
    };
    ImagesComponent.prototype.fetchMetadata = function (query) {
        var _this = this;
        if (query === void 0) { query = {}; }
        this.mds.get(query).subscribe(function (res) {
            _this.rawMetadata = res.data;
        }, function (err) {
            alert(err.message);
        });
    };
    ImagesComponent.prototype.previewImage = function (item) {
        this.imagePreviewData = item.data;
        console.log(item);
    };
    ImagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-images',
            template: __webpack_require__("./client/src/app/components/images/images.component.html"),
            styles: [__webpack_require__("./client/src/app/components/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["a" /* MetadataService */]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./client/src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("./client/src/app/components/dashboard/dashboard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_upload_component__ = __webpack_require__("./client/src/app/components/upload/upload.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__upload_upload_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_images_component__ = __webpack_require__("./client/src/app/components/images/images.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__images_images_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imagepreview_imagepreview_component__ = __webpack_require__("./client/src/app/components/imagepreview/imagepreview.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__imagepreview_imagepreview_component__["a"]; });






/***/ }),

/***/ "./client/src/app/components/upload/upload.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/src/app/components/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"was-validated\">\n  <div class=\"custom-file\">\n    <input type=\"file\" class=\"custom-file-input\" id=\"validatedCustomFile\" required (change)=\"onChangeFile($event)\">\n    <label class=\"custom-file-label\" for=\"validatedCustomFile\">Choose file...</label>\n    <div class=\"invalid-feedback\">Please select any file to upload</div>\n  </div>\n  <div class=\"col-md-2\">\n    <input type=\"button\" (click)=\"Save()\" class=\"btn btn-primary\" value=\"Submit\">\n  </div>\n</form>"

/***/ }),

/***/ "./client/src/app/components/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./client/src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadComponent = /** @class */ (function () {
    function UploadComponent(us) {
        this.us = us;
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.onChangeFile = function (event) {
        console.log('event called', event);
        this.uploadFiles = event;
    };
    UploadComponent.prototype.Save = function () {
        var _this = this;
        if (!this.uploadFiles) {
        }
        this.us.upload(this.uploadFiles.target.files).then(function (res) {
            if (res.statusCode == 200) {
                alert(res.message);
                _this.uploadFiles = null;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ;
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-upload',
            template: __webpack_require__("./client/src/app/components/upload/upload.component.html"),
            styles: [__webpack_require__("./client/src/app/components/upload/upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["b" /* UploadService */]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./client/src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_service__ = __webpack_require__("./client/src/app/services/upload.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__upload_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata_service__ = __webpack_require__("./client/src/app/services/metadata.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__metadata_service__["a"]; });




/***/ }),

/***/ "./client/src/app/services/metadata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetadataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./client/src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].api;
var MetadataService = /** @class */ (function () {
    function MetadataService(http) {
        this.http = http;
    }
    MetadataService.prototype.get = function (queryParams) {
        if (queryParams === void 0) { queryParams = {}; }
        return this.http.get(url + 'metadata', { params: queryParams });
    };
    MetadataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MetadataService);
    return MetadataService;
}());



/***/ }),

/***/ "./client/src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./client/src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].api;
var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.upload = function (files) {
        return new Promise(function (resolve, reject) {
            var uploadAPI = url + 'upload';
            var formData = new FormData();
            for (var i = 0; i < files.length; i++) {
                formData.append('files', files[i], files[i].name);
            }
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (evnt) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.onerror = function (evnt) {
                //console.log("onerror");
                //console.log(evnt);
            };
            xhr.open("POST", uploadAPI, true);
            var token = localStorage.getItem('token');
            xhr.setRequestHeader('Authorization', "Bearer " + token);
            xhr.send(formData);
        });
    };
    ;
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./client/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api: '/api/',
    // api: 'http://localhost:3005/api/',
    // imageUrl:'http://localhost:3005/'
    imageUrl: '/'
};


/***/ }),

/***/ "./client/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./client/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./client/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./client/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map