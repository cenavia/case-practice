import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UrlShortService } from '../../../../services/url-short.service';
import { UrlStorageService } from '../../../../services/url-storage.service';

@Component({
  selector: 'url-short-form',
  templateUrl: './url-short-form.component.html',
  styleUrls: ['./url-short-form.component.sass']
})
export class UrlShortFormComponent {
  urlForm: FormGroup;
  shortUrl: string = '';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private urlShortService: UrlShortService,
    private urlStorageService: UrlStorageService
  ) {
    this.urlForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  shortenUrl() {
    if (this.urlForm.valid) {
      const originalUrl = this.urlForm.value.url;
      
      // Activar el estado de carga
      this.isLoading = true;
      
      this.urlShortService.getUrlShort(originalUrl)
        .subscribe({
          next: (response) => {
            this.shortUrl = response.shortUrl;
            
            // Guardar en el almacenamiento local
            const savedUrl = this.urlStorageService.saveUrl({
              originalUrl: originalUrl,
              shortUrl: response.shortUrl
            });
            
            // Resetear el formulario después de guardar
            this.urlForm.reset();
            
            // Desactivar el estado de carga
            this.isLoading = false;
            
            // Aquí podrías mostrar un mensaje de éxito con algún servicio de notificaciones
          },
          error: (error) => {
            console.error('Error al acortar URL:', error);
            // Desactivar el estado de carga en caso de error
            this.isLoading = false;
            // Aquí podrías mostrar un mensaje de error
          }
        });
    }
  }
}
