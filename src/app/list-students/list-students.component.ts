import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../service/data/student-data.service';
import { Router } from '@angular/router';

export class Student {
  constructor(
    public id: number,
    public name: string,
    public dateOfBirth: Date
  ){

  }
}

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  students: Student[]
  message: string
  
  constructor(
    private service:StudentDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshStudent();
  }

  refreshStudent(){
    this.service.retrieveAllStudents('kedar').subscribe(
      response => {
        this.students = response;
      }
    )
  }

  addStudent(){
    this.router.navigate(['students', -1]);
  }

  updateStudent(id){
    this.router.navigate(['students', id]);
  }

  deleteStudent(id){
    this.service.deleteStudent('kedar', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of student ID ${id} Successful`;
        this.refreshStudent();
      }
    )
  }

}
