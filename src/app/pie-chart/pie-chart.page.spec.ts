import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartPage } from './pie-chart.page';

describe('PieChartPage', () => {
  let component: PieChartPage;
  let fixture: ComponentFixture<PieChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
