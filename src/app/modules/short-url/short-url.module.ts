import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortUrlRoutingModule } from './short-url-routing.module';
import { ShortUrlPagesComponent } from './pages/short-url-pages/short-url-pages.component';
import { SharedModule } from '../shared/shared.module';
import { UrlShortFormComponent } from './components/url-short-form/url-short-form.component';
import { UrlShortListComponent } from './components/url-short-list/url-short-list.component';

@NgModule({
  declarations: [
    ShortUrlPagesComponent,
    UrlShortFormComponent,
    UrlShortListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShortUrlRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class ShortUrlModule { }
