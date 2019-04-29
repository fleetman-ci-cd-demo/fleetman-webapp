(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"container\">\n  <app-header></app-header>\n  <div id=\"sidebar\">\n    <div class=\"sidebar-wrapper\">\n        <div class=\"sidebar-table\">\n          <app-vehicles></app-vehicles>\n        </div>\n    </div>\n  </div>\n\n  <app-map></app-map>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Fleetman Live Tracking';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicles/vehicles.component */ "./src/app/vehicles/vehicles.component.ts");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle.service */ "./src/app/vehicle.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/esm5/stomp-ng2-stompjs.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var stompConfig = {
    url: "ws://" + window.location.hostname + ":" + window.location.port + "/api/updates",
    // TODO will reinstate when dev complete.
    headers: {},
    heartbeat_in: 0,
    heartbeat_out: 20000,
    reconnect_delay: 5000,
    debug: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_3__["VehiclesComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__["LeafletModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"].forRoot()
            ],
            providers: [_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"],
                _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_8__["StompService"],
                {
                    provide: _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_8__["StompConfig"],
                    useValue: stompConfig
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-1\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Fleet Management System R2</a>\n  <ul class=\"navbar-nav flex-row\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link p-2\" href=\"https://github.com/DickChesterwood/k8s-fleetman\"><span class=\"fa fa-2x fa-github\"></span></a>\n    </li>\n    <li>\n      <a class=\"nav-link p-2\" href=\"https://twitter.com/RichChesterwood\"><span class=\"fa fa-2x fa-twitter\"></span></a>\n    </li>\n    <li>\n      <a class=\"nav-link p-2\" href=\"http://blog.chesterwood.io\"><span class=\"fa fa-2x fa-rss\"></span></a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mapid\"\n      leaflet\n     [leafletOptions]=\"options\"\n     (leafletMapReady)=\"onMapReady($event)\"     \n     [leafletLayers]=\"markers\">\n</div>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent(vehicleService) {
        this.vehicleService = vehicleService;
        this.markers = [];
        this.options = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                })
            ],
            zoom: 16,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"])(53.375564, -1.506785)
        };
    }
    MapComponent.prototype.onMapReady = function (map) {
        this.map = map;
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleService.subscription.subscribe(function (vehicle) {
            if (vehicle == null)
                return;
            var foundIndex = _this.markers.findIndex(function (existingMarker) { return existingMarker.options['title'] == vehicle.name; });
            if (foundIndex == -1) {
                var newMarker = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])([vehicle.lat, vehicle.lng], {
                    icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"])({
                        iconSize: [25, 41],
                        iconAnchor: [11, 41],
                        iconUrl: 'assets/marker-icon.png',
                        shadowUrl: 'assets/marker-shadow.png'
                    }),
                    title: vehicle.name
                }).bindTooltip(vehicle.name, { permanent: true, offset: Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["point"])({ x: 0, y: 0 }) });
                _this.markers.push(newMarker);
            }
            else {
                _this.markers[foundIndex].setLatLng(Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"])(vehicle.lat, vehicle.lng));
            }
            if (_this.centerVehicle == vehicle.name) {
                //this.map.setView([vehicle.lat,vehicle.lng],
                //                   this.map.getZoom(), {"animate": true});
                _this.selectedVehicleHistory.addLatLng(Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"])(vehicle.lat, vehicle.lng));
            }
        });
        this.vehicleService.centerVehicle.subscribe(function (vehicle) {
            if (vehicle == null) {
                _this.centerVehicle = null;
                return;
            }
            _this.centerVehicle = vehicle.name;
            _this.map.flyTo([vehicle.lat, vehicle.lng], _this.map.getZoom(), {
                "animate": true
            });
        });
        this.vehicleService.centerVehicleHistory.subscribe(function (newHistory) {
            if (_this.selectedVehicleHistory != null)
                _this.selectedVehicleHistory.remove(_this.map);
            if (newHistory == null)
                return;
            _this.selectedVehicleHistory = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["polyline"])(newHistory, { weight: 10, opacity: 0.5, color: 'red' });
            _this.selectedVehicleHistory.addTo(_this.map);
        });
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/vehicle.service.ts":
/*!************************************!*\
  !*** ./src/app/vehicle.service.ts ***!
  \************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle */ "./src/app/vehicle.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/esm5/stomp-ng2-stompjs.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VehicleService = /** @class */ (function () {
    function VehicleService(_stompService, http) {
        var _this = this;
        this._stompService = _stompService;
        this.http = http;
        /** Consume a message from the _stompService */
        this.onMessage = function (message) {
            var body = JSON.parse(message.body);
            // update vehicle and notify
            var newVehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_1__["Vehicle"](body.name, Number(body.lat), Number(body.longitude), body.timestamp, Number(body.speed));
            _this.subscription.next(newVehicle);
        };
        // Store local reference to Observable
        // for use with template ( | async )
        this.subscribe();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.centerVehicle = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.centerVehicleHistory = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    VehicleService.prototype.subscribe = function () {
        // Stream of messages
        var messages = this._stompService.subscribe('/vehiclepositions/messages');
        // Subscribe a function to be run on_next message
        messages.subscribe(this.onMessage);
    };
    VehicleService.prototype.updateCenterVehicle = function (centerVehicle) {
        var _this = this;
        this.centerVehicle.next(centerVehicle);
        if (centerVehicle == null) {
            this.centerVehicleHistory.next(null);
        }
        else {
            // call API gateway, get the history for this vehicle.
            this.http.get("http://" + window.location.hostname + ":" + window.location.port + "/api/history/" + centerVehicle.name)
                .subscribe(function (data) { return _this.centerVehicleHistory.next(data); });
        }
    };
    VehicleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_4__["StompService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], VehicleService);
    return VehicleService;
}());



/***/ }),

/***/ "./src/app/vehicle.ts":
/*!****************************!*\
  !*** ./src/app/vehicle.ts ***!
  \****************************/
/*! exports provided: Vehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicle", function() { return Vehicle; });
var Vehicle = /** @class */ (function () {
    function Vehicle(name, lat, lng, dateAndTime, speed) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.dateAndTime = dateAndTime;
        this.speed = speed;
    }
    return Vehicle;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicles.component.css":
/*!*************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  border-bottom: 1px solid silver;\r\n}\r\n"

/***/ }),

/***/ "./src/app/vehicles/vehicles.component.html":
/*!**************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <table class=\"table table-responsive table-hover table-condensed\">\n    <thead class=\".thead-dark\">\n      <tr>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Last seen</th>\n        <th scope=\"col\">Speed mph</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let vehicle of vehicles\"  (click)=\"centerVehicle(vehicle)\"\n          [class.table-info]=\"vehicle.name === centeredVehicle\"  style=\"cursor:pointer\">\n        <th scope=\"row\"><span class=\"fa fa-truck\"></span>{{vehicle.name}}</th>\n        <td>{{vehicle.dateAndTime | date:'HH:mm:ss'}}</td>\n        <td>{{vehicle.speed | number:'0.0-0'}}</td>\n      </tr>\n    </tbody>\n  </table>\n"

/***/ }),

/***/ "./src/app/vehicles/vehicles.component.ts":
/*!************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.ts ***!
  \************************************************/
/*! exports provided: VehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesComponent", function() { return VehiclesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehiclesComponent = /** @class */ (function () {
    function VehiclesComponent(vehicleService) {
        this.vehicleService = vehicleService;
        this.vehicles = [];
    }
    VehiclesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleService.subscription.subscribe(function (updatedVehicle) {
            if (updatedVehicle == null)
                return;
            var foundIndex = _this.vehicles.findIndex(function (existingVehicle) { return existingVehicle.name == updatedVehicle.name; });
            if (foundIndex == -1) {
                _this.vehicles.push(updatedVehicle);
                _this.vehicles.sort(function (a, b) {
                    return (a.name < b.name) ? -1 : 1;
                });
            }
            else {
                _this.vehicles[foundIndex] = updatedVehicle;
            }
        });
    };
    VehiclesComponent.prototype.centerVehicle = function (vehicle) {
        // allow to "deselect"
        if (this.centeredVehicle == vehicle.name) {
            this.centeredVehicle = null;
            this.vehicleService.updateCenterVehicle(null);
        }
        else {
            this.centeredVehicle = vehicle.name;
            this.vehicleService.updateCenterVehicle(vehicle);
        }
    };
    VehiclesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicles',
            template: __webpack_require__(/*! ./vehicles.component.html */ "./src/app/vehicles/vehicles.component.html"),
            styles: [__webpack_require__(/*! ./vehicles.component.css */ "./src/app/vehicles/vehicles.component.css")]
        }),
        __metadata("design:paramtypes", [_vehicle_service__WEBPACK_IMPORTED_MODULE_1__["VehicleService"]])
    ], VehiclesComponent);
    return VehiclesComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\cygwin64\home\Richard\fleetman-ci-cd-demo\fleetman-webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map