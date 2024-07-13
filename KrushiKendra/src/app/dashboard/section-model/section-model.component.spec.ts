import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionModelComponent } from './section-model.component';

describe('SectionModelComponent', () => {
  let component: SectionModelComponent;
  let fixture: ComponentFixture<SectionModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
