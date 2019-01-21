import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivityListComponent } from './festivity-list.component';

describe('FestivityListComponent', () => {
  let component: FestivityListComponent;
  let fixture: ComponentFixture<FestivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
