/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Common_btn_templateComponent } from './common_btn_template.component';

describe('Common_btn_templateComponent', () => {
  let component: Common_btn_templateComponent;
  let fixture: ComponentFixture<Common_btn_templateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Common_btn_templateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Common_btn_templateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
