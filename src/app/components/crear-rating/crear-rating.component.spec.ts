import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRatingComponent } from './crear-rating.component';

describe('CrearRatingComponent', () => {
  let component: CrearRatingComponent;
  let fixture: ComponentFixture<CrearRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
