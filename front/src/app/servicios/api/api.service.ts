import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Stores } from 'src/app/models/stores.interface';
import { LoginInterface } from '../../models/login.interface';
import { ResponseInterface } from '../../models/response.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '/posts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  signIn(user: LoginInterface): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.apiUrl + 'auth',
      user,
      this.httpOptions
    );
  }

  getStores(): Observable<Stores[]> {
    return this.http.get<Stores[]>(
      this.apiUrl + 'stores'
    );
  }

}
