import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivityFormComponent } from './festivity-form.component';

describe('FestivityFormComponent', () => {
  let component: FestivityFormComponent;
  let fixture: ComponentFixture<FestivityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
