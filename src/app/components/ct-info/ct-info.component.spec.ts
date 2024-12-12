import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtInfoComponent } from './ct-info.component';

describe('CtInfoComponent', () => {
  let component: CtInfoComponent;
  let fixture: ComponentFixture<CtInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
