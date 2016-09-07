"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var todos_component_1 = require('./components/todos/todos.component');
var navbar_component_1 = require('./components/navbar/navbar.component');
var homepage_component_1 = require('./components/homepage/homepage.component');
var movie_component_1 = require('./components/movie/movie.component');
var reddit_component_1 = require('./components/reddit/reddit.component');
var todo_service_1 = require('./components/services/todo.service');
var movie_service_1 = require('./components/services/movie.service');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var app_routes_1 = require('./app.routes');
var common_1 = require('@angular/common');
var http_2 = require('@angular/http');
var forms_1 = require('@angular/forms');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, todos_component_1.TodosComponent, navbar_component_1.NavbarComponent, homepage_component_1.HomepageComponent, movie_component_1.MovieComponent, reddit_component_1.ReditComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, todo_service_1.TodoService, http_1.HTTP_PROVIDERS, movie_service_1.MovieService, http_2.JSONP_PROVIDERS] // services
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map