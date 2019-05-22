import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartPage } from './bar-chart.page';

describe('BarChartPage', () => {
  let component: BarChartPage;
  let fixture: ComponentFixture<BarChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
