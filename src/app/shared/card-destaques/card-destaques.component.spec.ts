import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestaquesComponent } from './card-destaques.component';

describe('CardDestaquesComponent', () => {
  let component: CardDestaquesComponent;
  let fixture: ComponentFixture<CardDestaquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestaquesComponent]
    });
    fixture = TestBed.createComponent(CardDestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
