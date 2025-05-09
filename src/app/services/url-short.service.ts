import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface ShortUrlResponse {
  shortUrl: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class UrlShortService {

  private apiUrl: string = 'https://short-url-9b4i.onrender.com';
  private shortUrlBase: string = 'https://short-url-9b4i.onrender.com/s/';

  constructor(private http: HttpClient) { }

  getUrlShort(originalUrl: string): Observable<ShortUrlResponse> {
    return this.http.post<ShortUrlResponse>(`${this.apiUrl}/shorten`, 
      { originalUrl },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(
      map((response: ShortUrlResponse) => {
        // Ensure the shortUrl uses the correct format with /s/ path
        if (response && response.shortUrl) {
          // Extract the short code from the response
          const shortCode = this.extractShortCode(response.shortUrl);
          // Construct the proper URL with /s/ path
          response.shortUrl = `${this.shortUrlBase}${shortCode}`;
        }
        return response;
      })
    );
  }

  private extractShortCode(url: string): string {
    // Extract just the short code from the full URL
    // This handles different possible URL formats from the API
    const parts = url.split('/');
    return parts[parts.length - 1];
  }
}
