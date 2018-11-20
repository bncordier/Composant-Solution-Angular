import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFilmsComponent } from './hero-films.component';

describe('HeroFilmsComponent', () => {
  let component: HeroFilmsComponent;
  let fixture: ComponentFixture<HeroFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
