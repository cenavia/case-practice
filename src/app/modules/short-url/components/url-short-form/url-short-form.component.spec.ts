import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShortFormComponent } from './url-short-form.component';

describe('UrlShortFormComponent', () => {
  let component: UrlShortFormComponent;
  let fixture: ComponentFixture<UrlShortFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlShortFormComponent]
    });
    fixture = TestBed.createComponent(UrlShortFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
