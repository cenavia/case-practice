import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'url-short-form',
  templateUrl: './url-short-form.component.html',
  styleUrls: ['./url-short-form.component.sass']
})
export class UrlShortFormComponent {
  urlForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.urlForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  shortenUrl() {
    if (this.urlForm.valid) {
      console.log('URL to shorten:', this.urlForm.value.url);
      // Here you would call a service to shorten the URL
    }
  }
}
