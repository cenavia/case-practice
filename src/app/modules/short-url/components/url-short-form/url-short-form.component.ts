import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UrlShortService } from '../../../../services/url-short.service';

@Component({
  selector: 'url-short-form',
  templateUrl: './url-short-form.component.html',
  styleUrls: ['./url-short-form.component.sass']
})
export class UrlShortFormComponent {
  urlForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private urlShortService: UrlShortService
  ) {
    this.urlForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  shortenUrl() {
    if (this.urlForm.valid) {
      console.log('URL to shorten:', this.urlForm.value.url);
      this.urlShortService.getUrlShort(this.urlForm.value.url)
        .subscribe({
          next: (response) => {
            console.log('Short URL:', response.shortUrl);
          },
        });
    }
  }
}
