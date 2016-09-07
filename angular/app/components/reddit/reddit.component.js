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
var router_1 = require('@angular/router');
var ReditComponent = (function () {
    function ReditComponent() {
        this.stringInterpolation = "interpolation with property binding";
        // @Output() clicked = new EventEmitter();
        // onClicked() {
        //   this.clicked.emit("it works");
        // }
        this.test = "starting value";
        this.person = {
            name: 'Jon',
            age: 35
        };
        this.myName = { name: "Jonathan", spouse: "Ann" };
        this.result = 100;
    }
    ReditComponent.prototype.onClicked = function () {
        alert("it works!");
    };
    ReditComponent.prototype.onTest = function () {
        return true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReditComponent.prototype, "myName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReditComponent.prototype, "result", void 0);
    ReditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reddit',
            templateUrl: 'reddit.component.html',
            styleUrls: ['reddit.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ReditComponent);
    return ReditComponent;
}());
exports.ReditComponent = ReditComponent;
//# sourceMappingURL=reddit.component.js.map