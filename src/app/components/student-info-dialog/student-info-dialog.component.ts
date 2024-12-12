import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { T_Student } from '../../../lib/types';

@Component({
  selector: 'app-student-info-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './student-info-dialog.component.html',
  styleUrl: './student-info-dialog.component.css'
})
export class StudentInfoDialogComponent {

  @Input() student!: T_Student;
  @Input() onSave!: Function;

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }

  onSaveButtonClick() {
    this.onSave();
    this.hideDialog();
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
