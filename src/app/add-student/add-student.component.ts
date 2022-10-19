import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }
  rollNo=""
  studentName=""
  standard=""
  dob=""
  parentName=""
  parentMobileNo=""
  address=""
  readValue=()=>{
    let data={
      "rollNo":this.rollNo,
      "studentName":this.studentName,
      "standard":this.standard,
      "dob":this.dob,
      "parentName":this.parentName,
      "parentMobileNo":this.parentMobileNo,
      "address":this.address
    }
  }
  ngOnInit(): void {
  }

}
