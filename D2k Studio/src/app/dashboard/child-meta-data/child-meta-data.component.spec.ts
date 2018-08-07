import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildMetaDataComponent } from './child-meta-data.component';

describe('ChildMetaDataComponent', () => {
  let component: ChildMetaDataComponent;
  let fixture: ComponentFixture<ChildMetaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildMetaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
