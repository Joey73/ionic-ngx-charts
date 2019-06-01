import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreemapInSlidePage } from './treemap-in-slide.page';

describe('TreemapInSlidePage', () => {
  let component: TreemapInSlidePage;
  let fixture: ComponentFixture<TreemapInSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreemapInSlidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreemapInSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
