/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotSecuredComponent } from './not-secured.component';

describe('NotSecuredComponent', () => {
  let component: NotSecuredComponent;
  let fixture: ComponentFixture<NotSecuredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotSecuredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotSecuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
