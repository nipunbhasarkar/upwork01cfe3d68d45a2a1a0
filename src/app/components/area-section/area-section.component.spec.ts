import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSectionComponent } from './area-section.component';

describe('AreaSectionComponent', () => {
  let component: AreaSectionComponent;
  let fixture: ComponentFixture<AreaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
