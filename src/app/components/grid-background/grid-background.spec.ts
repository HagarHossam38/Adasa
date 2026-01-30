import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBackground } from './grid-background';

describe('GridBackground', () => {
  let component: GridBackground;
  let fixture: ComponentFixture<GridBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
