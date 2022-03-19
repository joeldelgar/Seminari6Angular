import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRatingComponent } from './listar-rating.component';

describe('ListarRatingComponent', () => {
  let component: ListarRatingComponent;
  let fixture: ComponentFixture<ListarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
