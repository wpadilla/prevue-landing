import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHowComponent } from './home-how.component';

describe('HomeHowComponent', () => {
  let component: HomeHowComponent;
  let fixture: ComponentFixture<HomeHowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
