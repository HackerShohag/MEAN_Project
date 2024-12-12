import { Component } from '@angular/core';
import { SignupComponent } from "../../components/signup/signup.component";
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';

interface Tab {
  title: string;
  content: string;
}

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [SignupComponent, CommonModule, TabViewModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  tabs: Tab[] = [
    { title: 'Student', content: 'Content for Student' },
    { title: 'Teacher', content: 'Content for Teacher' },
  ];
}

