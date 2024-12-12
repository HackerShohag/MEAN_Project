import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { LoginComponent } from '../../components/login/login.component';
import { CommonModule } from '@angular/common';

interface Tab {
  title: string;
  content: string;
}

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, LoginComponent, TabViewModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  activeIndex : number = 0;

  tabs: Tab[] = [
    { title: 'Student', content: 'Email or Student ID' },
    { title: 'Teacher', content: 'Email' },
    { title: 'Admin', content: 'Email' }
  ];
}
