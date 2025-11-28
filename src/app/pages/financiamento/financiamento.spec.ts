import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Financiamento } from './financiamento';

describe('Financiamento', () => {
  let component: Financiamento;
  let fixture: ComponentFixture<Financiamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Financiamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Financiamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
