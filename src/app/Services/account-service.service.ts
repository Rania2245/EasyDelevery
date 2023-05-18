import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../Classes/profile';

@Injectable({
  providedIn: 'root',
})
export class AccountServiceService {
  private apiUrl = 'http://localhost:8082';
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<string> {
    return this.http.post<string>(
      `${this.apiUrl}/authenticate`,
      {
        username,
        password,
      },
      {
        responseType: 'text' as 'json',
      }
    );
  }

  getProfile(): Observable<Profile> {
    const token = localStorage.getItem('user');
    let header = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Profile>(`${this.apiUrl}/profile`, {
      headers: header,
    });
  }
}
