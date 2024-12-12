import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { T_Course, T_ct } from "../types";
import { siteConfig } from './navbar';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  api_prefix = siteConfig.backendUrl + '/api';

  constructor(private http: HttpClient) {}

  getCTMarks(): Observable<T_ct[]> {
    return this.http.get<T_ct[]>(`${this.api_prefix}/ct_marks`);
  }

  getCTMarksByID(ID: string): Observable<T_ct[]> {
    return this.http.get<T_ct[]>(`${this.api_prefix}/ct_marks/${ID}`);
  }

  getCourseDetails(course_id: string): Observable<T_Course> {
    return this.http.get<T_Course>(`${this.api_prefix}/courses/${course_id}`);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.api_prefix}/login`, data);
  }

  getTeachers(): Observable<any> {
    return this.http.get(`${this.api_prefix}/teachers`);
  }

  addTeacher(data: any): Observable<any> {
    return this.http.post(`${this.api_prefix}/teachers`, data);
  }

  editTeacherInfo(id: string, data: any): Observable<any> {
    return this.http.put(`${this.api_prefix}/teachers/${id}`, data);
  }

  deleteTeacher(id: string): Observable<any> {
    return this.http.delete(`${this.api_prefix}/teachers/${id}`);
  }

  getStudents(): Observable<any> {
    return this.http.get(`${this.api_prefix}/students`);
  }

  addStudent(data: any): Observable<any> {
    return this.http.post(`${this.api_prefix}/students`, data);
  }

  editStudentInfo(id: string, data: any): Observable<any> {
    return this.http.put(`${this.api_prefix}/students/${id}`, data);
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.api_prefix}/students/${id}`);
  }

  getDepartments(): Observable<any> {
    return this.http.get(`${this.api_prefix}/departments`);
  }

  addDepartment(data: any): Observable<any> {
    return this.http.post(`${this.api_prefix}/departments`, data);
  }

  editDepartmentInfo(id: string, data: any): Observable<any> {
    return this.http.put(`${this.api_prefix}/departments/${id}`, data);
  }

  deleteDepartment(id: string): Observable<any> {
    return this.http.delete(`${this.api_prefix}/departments/${id}`);
  }

  getCourses(): Observable<any> {
    return this.http.get(`${this.api_prefix}/courses`);
  }

  addCourse(data: any): Observable<any> {
    return this.http.post(`${this.api_prefix}/courses`, data);
  }

  editCourse(id: string, data: any): Observable<any> {
    return this.http.put(`${this.api_prefix}/courses/${id}`, data);
  }

  deleteCourse(id: string): Observable<any> {
    return this.http.delete(`${this.api_prefix}/courses/${id}`);
  }

  addCTMarks(data: any): Observable<any> {
    return this.http.post(`${this.api_prefix}/ct_marks`, data);
  }

  editCTMarks(id: string, data: any): Observable<any> {
    return this.http.put(`${this.api_prefix}/ct_marks/${id}`, data);
  }

  deleteCTMarks(id: string): Observable<any> {
    return this.http.delete(`${this.api_prefix}/ct_marks/${id}`);
  }
}
