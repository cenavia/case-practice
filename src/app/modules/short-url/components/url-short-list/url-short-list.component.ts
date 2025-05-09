import { Component, OnInit, OnDestroy } from '@angular/core';
import { UrlStorageService, ShortUrl } from 'src/app/services/url-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'url-short-list',
  templateUrl: './url-short-list.component.html',
  styleUrls: ['./url-short-list.component.sass']
})
export class UrlShortListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['originalUrl', 'shortenedUrl', 'createdAt', 'visits', 'action'];
  dataSource: ShortUrl[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private urlStorageService: UrlStorageService) {}

  ngOnInit(): void {
    // Load initial data
    this.loadUrls();
    
    // Subscribe to data changes
    this.subscription.add(
      this.urlStorageService.urls$.subscribe(urls => {
        this.dataSource = urls;
      })
    );
  }

  ngOnDestroy(): void {
    // Clean up subscription when component is destroyed
    this.subscription.unsubscribe();
  }

  loadUrls(): void {
    this.dataSource = this.urlStorageService.getAllUrls();
  }

  copyToClipboard(url: string): void {
    navigator.clipboard.writeText(url).then(() => {
      console.log('URL copied to clipboard');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  deleteItem(item: ShortUrl): void {
    this.urlStorageService.deleteUrl(item.id);
    // No need to manually refresh since we're subscribed to changes
  }

  incrementVisits(id: number): void {
    // Incrementar el contador de visitas
    this.urlStorageService.incrementVisits(id);
    // No es necesario actualizar manualmente ya que estamos suscritos a los cambios
  }

  visitUrl(event: MouseEvent, id: number, url: string): void {
    // Prevenir el comportamiento por defecto del enlace
    event.preventDefault();
    
    // Incrementar el contador de visitas
    this.urlStorageService.incrementVisits(id);
    
    // Abrir el enlace en una nueva pestaña después de un pequeño retraso
    // para asegurar que el contador se actualice
    setTimeout(() => {
      window.open(url, '_blank');
    }, 100);
  }
}
