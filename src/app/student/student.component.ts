import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../service/data/student-data.service';
import { Student } from '../list-students/list-students.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  id: number;
  student: Student;

  constructor(
    private route:ActivatedRoute,
    private service:StudentDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.student = new Student(this.id, '', new Date());
    if(this.id != -1){
      this.service.retrieveStudent('kedar', this.id)
        .subscribe(
          data => this.student = data
        )
    }
  }

  saveStudent(){
    if(this.id == -1){
      this.service.addStudent('kedar', this.student)
        .subscribe(
          data => {   
            //console.log(data)
            this.router.navigate(['students'])
          } 
        )
    }else{
      this.service.updateStudent('kedar', this.id, this.student)
        .subscribe(
          data => {   
            //console.log(data)
            this.router.navigate(['students'])
          } 
        )
    }
  }
}
