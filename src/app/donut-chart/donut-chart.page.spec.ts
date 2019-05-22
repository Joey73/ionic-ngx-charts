import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutChartPage } from './donut-chart.page';

describe('DonutChartPage', () => {
  let component: DonutChartPage;
  let fixture: ComponentFixture<DonutChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutChartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
