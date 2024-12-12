import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { T_Teacher } from '../../../lib/types';

@Component({
  selector: 'app-teacher-info-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './teacher-info-dialog.component.html',
  styleUrl: './teacher-info-dialog.component.css'
})
export class TeacherInfoDialogComponent {

  @Input() teacher!: T_Teacher;
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
