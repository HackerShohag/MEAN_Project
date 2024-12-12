import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentInfoDialogComponent } from './department-info-dialog.component';

describe('DepartmentInfoDialogComponent', () => {
  let component: DepartmentInfoDialogComponent;
  let fixture: ComponentFixture<DepartmentInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentInfoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
