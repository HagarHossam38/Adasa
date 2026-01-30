import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalPost } from './horizontal-post';

describe('HorizontalPost', () => {
  let component: HorizontalPost;
  let fixture: ComponentFixture<HorizontalPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
