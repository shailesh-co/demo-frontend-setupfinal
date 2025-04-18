import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service'; // Your auth service

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService:AuthService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
  
    const jwtToken = this.authService.getToken(); // Get token from service

    // Clone the request and attach the JWT token if it exists
    const authReq = jwtToken
      ? req.clone({
          setHeaders: {
            Authorization: `Bearer ${jwtToken}`
          }
        })
      : req;

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle token errors globally
        if (error.status === 401 || error.status === 403) {
          this.authService.logout(); // Or redirect to login
        }
        return throwError(() => error);
      })
    );
  }
}
