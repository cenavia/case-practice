import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlShortService {

  private apiUrl: string = 'https://short-url-9b4i.onrender.com';

  constructor(private http: HttpClient) { }

  getUrlShort(originalUrl: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/shorten`, 
      { originalUrl },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
