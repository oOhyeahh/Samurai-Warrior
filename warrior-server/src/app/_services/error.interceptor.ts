import { Injectable } from '@angular/core';
import { HttpInterceptingHandler } from '@angular/common/http/src/module';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                    if (error instanceof HttpErrorResponse) {
                        if (error.status === 401) {
                            return throwError(error.statusText);
                        }
                        const applicationError = error.headers.get('Application-error');
                        if (applicationError) {
                            console.error(applicationError);
                            return throwError(applicationError);
                        }

                        const serverError = error.error;
                        let moduleStateError = '';
                        if (serverError && typeof serverError === 'object') {
                            for (const key in serverError) {
                                if (serverError[key]) {
                                    moduleStateError += serverError[key] + '\n';
                                }
                            }
                        }

                        return throwError(moduleStateError || serverError || 'Server Error');
                    }
                })
            );
        }
    }

    export const ErrorInterceptorProvider = {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true
    };
