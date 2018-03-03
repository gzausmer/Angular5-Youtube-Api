import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppContainerComponent } from './my-app-container.component';

describe('MyAppContainerComponent', () => {
  let component: MyAppContainerComponent;
  let fixture: ComponentFixture<MyAppContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
