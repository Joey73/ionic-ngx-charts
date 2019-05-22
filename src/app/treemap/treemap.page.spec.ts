import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreemapPage } from './treemap.page';

describe('TreemapPage', () => {
  let component: TreemapPage;
  let fixture: ComponentFixture<TreemapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreemapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreemapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
