import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FlashSelectorComponent} from './flash-selector.component';

describe('FlashSelectorComponent', () => {
  let component: FlashSelectorComponent;
  let fixture: ComponentFixture<FlashSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashSelectorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FlashSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
