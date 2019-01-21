import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwiftComponent } from './ng-swift.component';

describe('NgSwiftComponent', () => {
  let component: NgSwiftComponent;
  let fixture: ComponentFixture<NgSwiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
