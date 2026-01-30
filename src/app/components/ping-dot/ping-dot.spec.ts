import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingDot } from './ping-dot';

describe('PingDot', () => {
  let component: PingDot;
  let fixture: ComponentFixture<PingDot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PingDot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PingDot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
