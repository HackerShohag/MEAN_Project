import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CardModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}
