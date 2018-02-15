var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MenuController, NavController, NavParams } from 'ionic-angular';
import { AboutsahielPage } from "../aboutsahiel/aboutsahiel";
import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";
import { KnowlegePage } from '../knowlege/knowlege';
var LoadingPage = /** @class */ (function () {
    function LoadingPage(menuCtrl, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // this.menuCtrl.enable(false)
    }
    LoadingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoadingPage');
    };
    LoadingPage.prototype.ionViewWillEnter = function () {
        // this.menuCtrl.enable(false)
    };
    LoadingPage.prototype.gotoNotes = function () {
        this.navCtrl.push(AboutsahielPage);
    };
    LoadingPage.prototype.goSignin = function () {
        this.navCtrl.push(LoginPage);
    };
    LoadingPage.prototype.chooseCountry = function () {
        this.navCtrl.push(SignupPage);
    };
    LoadingPage.prototype.gohome = function () {
        this.navCtrl.push(KnowlegePage);
    };
    LoadingPage = __decorate([
        Component({
            selector: 'page-loading',
            templateUrl: 'loading.html',
        }),
        __metadata("design:paramtypes", [MenuController, NavController, NavParams])
    ], LoadingPage);
    return LoadingPage;
}());
export { LoadingPage };
//# sourceMappingURL=loading.js.map