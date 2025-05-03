import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneFinaleComponent } from './sezione-finale.component';

describe('SezioneFinaleComponent', () => {
  let component: SezioneFinaleComponent;
  let fixture: ComponentFixture<SezioneFinaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SezioneFinaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SezioneFinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
