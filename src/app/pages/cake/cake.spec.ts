import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cake } from './cake';

describe('Cake', () => {
  let component: Cake;
  let fixture: ComponentFixture<Cake>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cake],
    }).compileComponents();

    fixture = TestBed.createComponent(Cake);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
