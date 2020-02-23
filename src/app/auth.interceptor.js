"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromPromise");
require("rxjs/add/operator/mergeMap");
//@Injectable()
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(oktaAuth) {
        this.oktaAuth = oktaAuth;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return this.isAuthenticated()
            .mergeMap(function (isAuthenticated) {
            if (!isAuthenticated) {
                return next.handle(request);
            }
            return _this.getAccessToken()
                .mergeMap(function (accessToken) {
                request = request.clone({
                    setHeaders: {
                        Authorization: "Bearer " + accessToken
                    }
                });
                return next.handle(request);
            });
        });
    };
    AuthInterceptor.prototype.isAuthenticated = function () {
        return Observable_1.Observable.fromPromise(this.oktaAuth.isAuthenticated());
    };
    AuthInterceptor.prototype.getAccessToken = function () {
        return Observable_1.Observable.fromPromise(this.oktaAuth.getAccessToken());
    };
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=auth.interceptor.js.map