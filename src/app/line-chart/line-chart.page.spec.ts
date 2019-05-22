import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartPage } from './line-chart.page';

describe('LineChartPage', () => {
  let component: LineChartPage;
  let fixture: ComponentFixture<LineChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
