import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVideoListComponent } from './my-video-list.component';

describe('MyVideoListComponent', () => {
  let component: MyVideoListComponent;
  let fixture: ComponentFixture<MyVideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
