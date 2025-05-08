import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUrlPagesComponent } from './short-url-pages.component';

describe('ShortUrlPagesComponent', () => {
  let component: ShortUrlPagesComponent;
  let fixture: ComponentFixture<ShortUrlPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortUrlPagesComponent]
    });
    fixture = TestBed.createComponent(ShortUrlPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
