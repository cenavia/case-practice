import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShortListComponent } from './url-short-list.component';

describe('UrlShortListComponent', () => {
  let component: UrlShortListComponent;
  let fixture: ComponentFixture<UrlShortListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlShortListComponent]
    });
    fixture = TestBed.createComponent(UrlShortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
