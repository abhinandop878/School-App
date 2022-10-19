import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }
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
    this.myapi.addStudent(data).subscribe((response)=>{
      console.log(response)
      alert("Successfully Added")
      this.rollNo=""
      this.studentName=""
      this.standard=""
      this.dob=""
      this.parentName=""
      this.parentMobileNo=""
      this.address=""

    })
  }
  ngOnInit(): void {
  }

}
