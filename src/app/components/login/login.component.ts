import { Component, Input, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
// import { siteConfig } from '../../../../lib/data/navbar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiDataService } from '../../../lib/data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, InputTextModule, PasswordModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;
  router = inject(Router);
  cookieService = inject(CookieService);

  @Input() title!: string;
  @Input() field!: string;

  constructor(private fb: FormBuilder, private apiService: ApiDataService) {
    this.loginForm = this.fb.group({
      emailOrRoll: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    const token = this.cookieService.get('token');
    if (token) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    this.loading = true;
    if (this.loginForm.valid) {
      const loginData = {
        role: this.title,
        emailOrRoll: this.loginForm.get('emailOrRoll')?.value,
        password: this.loginForm.get('password')?.value
      };

      this.apiService.login(loginData).subscribe({
          next: (res: any) => {

            console.log('Login Response:', res);
            this.cookieService.set('id', res.User._id);
            this.cookieService.set('token', res.token);
            this.cookieService.set('role', res.role);

            if (res.role === 'Student') {
              this.cookieService.set('user_name', res.User.name);
              this.cookieService.set('student_roll', res.User.student_roll);
            } else if (res.role === 'Teacher') {
              this.cookieService.set('user_name', res.User.teacher_name);
              this.cookieService.set('email', res.User.teacher_email);
            } else {
              this.cookieService.set('email', res.User.admin_email);
            }
            this.router.navigate(['/dashboard']);
          },
          error: (err) => {
            console.error('Login Failed:', err.message);
            alert('Wrong username or password');
          }
        });
    }
    this.loading = false;
  }
}