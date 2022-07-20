import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrefooterComponent } from './home-prefooter.component';

describe('HomePrefooterComponent', () => {
  let component: HomePrefooterComponent;
  let fixture: ComponentFixture<HomePrefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePrefooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePrefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
