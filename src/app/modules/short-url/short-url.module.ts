import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortUrlPagesComponent } from './pages/short-url-pages/short-url-pages.component';
import { ShortUrlRoutingModule } from './short-url-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ShortUrlPagesComponent],
  imports: [
    CommonModule,
    ShortUrlRoutingModule,
    SharedModule
  ]
})
export class ShortUrlModule { }
