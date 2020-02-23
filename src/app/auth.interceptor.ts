import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';

import { OktaAuthService } from '@okta/okta-angular';

import { from } from 'rxjs';


//@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private oktaAuth: OktaAuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.isAuthenticated()
            .pipe((isAuthenticated) => {
                if (!isAuthenticated) {
                    return next.handle(request);
                }

                return this.getAccessToken()
                    .pipe((accessToken) => {
                        request = request.clone({
                            setHeaders: {
                                Authorization: `Bearer ${accessToken}`
                            }
                        });

                        return next.handle(request);
                    })
            });
    }

    private isAuthenticated(): Observable<boolean> {
        return from(this.oktaAuth.isAuthenticated());
    }

    private getAccessToken(): Observable<string> {
        return from(this.oktaAuth.getAccessToken());
    }
}