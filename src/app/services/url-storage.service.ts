import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface ShortUrl {
  id: number;
  originalUrl: string;
  shortUrl: string;
  createdAt: string;
  visits: number;
}

@Injectable({
  providedIn: 'root'
})
export class UrlStorageService {
  private readonly STORAGE_KEY = 'shortUrls';
  private urlsSubject = new Subject<ShortUrl[]>();
  
  public urls$: Observable<ShortUrl[]> = this.urlsSubject.asObservable();

  constructor() { }

  /**
   * Get all shortened URLs from local storage
   */
  getAllUrls(): ShortUrl[] {
    const storedUrls = localStorage.getItem(this.STORAGE_KEY);
    return storedUrls ? JSON.parse(storedUrls) : [];
  }

  /**
   * Save a new shortened URL to local storage
   */
  saveUrl(url: Omit<ShortUrl, 'id' | 'createdAt' | 'visits'>): ShortUrl {
    const urls = this.getAllUrls();
    
    const newUrl: ShortUrl = {
      id: Date.now(),
      originalUrl: url.originalUrl,
      shortUrl: url.shortUrl,
      createdAt: new Date().toISOString(),
      visits: 0
    };
    
    urls.push(newUrl);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(urls));
    
    // Notify subscribers that data has changed
    this.urlsSubject.next(urls);
    
    return newUrl;
  }

  /**
   * Delete a shortened URL from local storage
   */
  deleteUrl(id: number): boolean {
    const urls = this.getAllUrls();
    const initialLength = urls.length;
    
    const filteredUrls = urls.filter(url => url.id !== id);
    
    if (filteredUrls.length !== initialLength) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredUrls));
      
      // Notify subscribers that data has changed
      this.urlsSubject.next(filteredUrls);
      
      return true;
    }
    
    return false;
  }

  /**
   * Get a shortened URL by its ID
   */
  getUrlById(id: number): ShortUrl | undefined {
    const urls = this.getAllUrls();
    return urls.find(url => url.id === id);
  }

  /**
   * Increment the visit count for a URL
   */
  incrementVisits(id: number): ShortUrl | undefined {
    const urls = this.getAllUrls();
    const url = urls.find(url => url.id === id);
    
    if (url) {
      url.visits += 1;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(urls));
      
      // Notify subscribers that data has changed
      this.urlsSubject.next(urls);
      
      return url;
    }
    
    return undefined;
  }

  /**
   * Clear all shortened URLs from local storage
   */
  clearAllUrls(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    
    // Notify subscribers that data has been cleared
    this.urlsSubject.next([]);
  }
}
