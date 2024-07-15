import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHouseProductCardComponent } from './ware-house-product-card.component';

describe('WareHouseProductCardComponent', () => {
  let component: WareHouseProductCardComponent;
  let fixture: ComponentFixture<WareHouseProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WareHouseProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareHouseProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
