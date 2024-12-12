import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoDialogComponent } from './student-info-dialog.component';

describe('StudentInfoDialogComponent', () => {
  let component: StudentInfoDialogComponent;
  let fixture: ComponentFixture<StudentInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentInfoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
