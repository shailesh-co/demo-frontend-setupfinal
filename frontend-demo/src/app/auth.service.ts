import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url ="http://localhost:5000/api/auth/"
  constructor( private http: HttpClient) { }

  LoginUser(data: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.url}login`, data, { observe: 'response' }).pipe(
      tap((res) => {
        const token = res.body?.token; // ✅ this is the correct way
        if (token) {
          console.log("✅ Token received, storing in localStorage");
          localStorage.setItem('token', token);
        }
      })
    );
  }
  registerdata(data:any) : Observable<HttpResponse<any>>{
    return this.http.post(`${this.url}register`,data, {observe:'response'})
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // Or wherever you store it
  }

  logout() {
    localStorage.removeItem('token');
    // Navigate to login or do other cleanup
  }
}
