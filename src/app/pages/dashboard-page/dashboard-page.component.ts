import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, QueryList, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { T_Course, T_ct, T_Department, T_Student, T_Teacher } from '../../../lib/types';
import { ApiDataService } from '../../../lib/data';
import { CtInfoComponent } from '../../components/ct-info/ct-info.component';
import { StudentInfoDialogComponent } from '../../components/student-info-dialog/student-info-dialog.component';
import { TeacherInfoDialogComponent } from '../../components/teacher-info-dialog/teacher-info-dialog.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, CtInfoComponent, StudentInfoDialogComponent, TeacherInfoDialogComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})

export class DashboardPageComponent {
  @ViewChild('studentDialog') studentInfoDialogs!: QueryList<StudentInfoDialogComponent>;
  // @ViewChildren('child') childComponents!: QueryList<ChildComponent>;

  @ViewChild('teacherDialog') teacherInfoDialogs!: QueryList<TeacherInfoDialogComponent>;

  user_name: string;
  user_role: string;
  student_roll: string;
  email: string;
  ct_info: (T_ct & T_Course)[] = [];

  // admin related
  teachers: T_Teacher[] = [];
  students: T_Student[] = [];
  departments: T_Department[] = [];
  courses: T_Course[] = [];

  router = inject(Router);
  cookieService = inject(CookieService);
  http = inject(HttpClient);

  constructor(private apiService: ApiDataService) {
    this.user_name = this.cookieService.get('user_name');
    this.user_role = this.cookieService.get('role');
    this.student_roll = this.cookieService.get('student_roll');
    this.email = this.cookieService.get('email');
  }

  ngOnInit(): void {

    if (this.user_role === 'Student') {
      this.apiService.getCTMarks().subscribe((data) => {
        data.forEach((ct) => {
          this.apiService.getCourseDetails(ct?.course_id).subscribe((course) => {
            this.ct_info.push({ ...ct, ...course });
          });
        });
      });
    } else if (this.user_role === 'Admin') {

      this.apiService.getTeachers().subscribe((data) => {
        this.teachers = data;
        console.log(this.teachers.at(0));
      });

      this.apiService.getStudents().subscribe((data) => {
        this.students = data;
        console.log(this.students.at(0));
      });

      this.apiService.getDepartments().subscribe((data) => {
        this.departments = data;
        console.log(this.departments.at(0));
      });

      this.apiService.getCourses().subscribe((data) => {
        this.courses = data;
        console.log(this.courses.at(0));
      });
    }

    // this.apiService.getCTMarksByID(this.cookieService.get('id')).subscribe((data) => {
    //   data.forEach((ct) => {
    //     this.apiService.getCourseDetails(ct?.course_id).subscribe((course) => {
    //       this.ct_info.push({ ...ct, ...course });
    //     });
    //   });
    // });

  }

  addTeacher(index: number): void {
    this.teacherInfoDialogs.toArray()[index].showDialog();

    this.apiService.addTeacher({
      teacher_name: 'New Teacher',
      teacher_email: 'new_email@example.com',
      teacher_dept: '1',
    }).subscribe((data) => {
      console.log(data);
    });
  }
  
  editTeacher(index: number): void {
    this.teacherInfoDialogs.toArray()[index].showDialog();

    this.apiService.editTeacherInfo('1', {
      teacher_name: 'Updated Teacher',
      teacher_email: 'none',
      teacher_dept: '1',
    }).subscribe((data) => {
      console.log(data);
    });
  }

  deleteTeacher(): void {
    this.apiService.deleteTeacher('1').subscribe((data) => {
      console.log(data);
    });
  }

  addStudent(index: number): void {
    this.studentInfoDialogs.toArray()[index].showDialog();
    this.apiService.addStudent({
      student_name: 'New Student',
      student_email: 'new_student@example.com',
      student_roll: '123',
      student_dept: '1',
    }).subscribe((data) => {
      console.log(data);
    });
  }

  editStudent(index: number): void {
    this.studentInfoDialogs.toArray()[index].showDialog();
    this.apiService.editStudentInfo('1', {
      student_name: 'Updated Student',
      student_email: 'updated_student@example.com',
      student_roll: '123',
      student_dept: '1',
    }).subscribe((data) => {
      console.log(data);
    });
  }

  deleteStudent(): void {
    this.apiService.deleteStudent('1').subscribe((data) => {
      console.log(data);
    });
  }

  addCourse(): void {
    this.apiService.addCourse({
      course_name: 'New Course',
      course_code: 'NC101',
      course_dept: '1',
    }).subscribe((data) => {
      console.log(data);
    });
  }

  editCourse(): void {
    this.apiService.editCourse('1', {
      course_name: 'Updated Course',
      course_code: 'UC101',
      course_dept: '1',
    }).subscribe((data) => {
      console.log(data);
    });
  }

  deleteCourse(): void {
    this.apiService.deleteCourse('1').subscribe((data) => {
      console.log(data);
    });
  }

  addDepartment(): void {
    this.apiService.addDepartment({
      dept_name: 'New Department',
    }).subscribe((data) => {
      console.log(data);
    });
  }

  editDepartment(): void {
    this.apiService.editDepartmentInfo('1', {
      dept_name: 'Updated Department',
    }).subscribe((data) => {
      console.log(data);
    });
  }

  deleteDepartment(): void {
    this.apiService.deleteDepartment('1').subscribe((data) => {
      console.log(data);
    });
  }

  logout(): void {
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }
}
