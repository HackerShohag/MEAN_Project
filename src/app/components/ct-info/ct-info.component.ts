import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { T_Course, T_ct } from '../../../lib/types';

@Component({
  selector: 'app-ct-info',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './ct-info.component.html',
  styleUrl: './ct-info.component.css'
})

export class CtInfoComponent {

  @Input() CT_Info!: T_ct & T_Course;


  constructor() { }

  ngOnInit(): void {}
}
