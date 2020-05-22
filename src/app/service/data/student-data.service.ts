import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../list-students/list-students.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private http:HttpClient) { }

  retrieveAllStudents(username) {
    return this.http.get<Student[]>(`${API_URL}/sms/${username}/students`);
  }

  deleteStudent(username, id){
    return this.http.delete(`${API_URL}/sms/${username}/students/${id}`);
  }

  retrieveStudent(username, id){
    return this.http.get<Student>(`${API_URL}/sms/${username}/students/${id}`);
  }

  updateStudent(username, id, student){
    return this.http.put<Student>(`${API_URL}/sms/${username}/students/${id}`, student);
  }

  addStudent(username, student){
    return this.http.post<Student>(`${API_URL}/sms/${username}/students`, student);
  }
}
