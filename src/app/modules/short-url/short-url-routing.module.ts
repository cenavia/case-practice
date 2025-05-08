import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortUrlPagesComponent } from './pages/short-url-pages/short-url-pages.component';

const routes: Routes = [
  {
    path: '',
    component: ShortUrlPagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortUrlRoutingModule { }
