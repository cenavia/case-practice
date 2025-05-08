import { Component, OnInit, OnDestroy } from '@angular/core';
import { UrlShortFormComponent } from '../../components/url-short-form/url-short-form.component';
import { UrlShortListComponent } from '../../components/url-short-list/url-short-list.component';

@Component({
  selector: 'app-short-url-pages',
  templateUrl: './short-url-pages.component.html',
  styleUrls: ['./short-url-pages.component.sass']
})
export class ShortUrlPagesComponent implements OnInit, OnDestroy {

  
  constructor() {}
  
  ngOnInit() {
    
  }
  
  ngOnDestroy() {

  }
}
