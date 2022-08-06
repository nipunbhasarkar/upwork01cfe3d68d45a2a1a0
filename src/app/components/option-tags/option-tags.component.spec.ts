import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTagsComponent } from './option-tags.component';

describe('OptionTagsComponent', () => {
  let component: OptionTagsComponent;
  let fixture: ComponentFixture<OptionTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
