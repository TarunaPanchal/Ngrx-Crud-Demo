import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import { Student } from '../student.model'
import * as studentActions from '../state/student.actions';
import * as fromStudent from '../state/student.reducer';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromStudent.AppState>
  ) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      std: ["", Validators.required],
      school: ["", Validators.required]
    });
  }

  createStudent() {
    const newStudent: Student = {
      name: this.studentForm.get("name").value,
      phone: this.studentForm.get("phone").value,
      std: this.studentForm.get("std").value,
      school: this.studentForm.get("school").value
    };

    this.store.dispatch(new studentActions.CreateStudent(newStudent));

    this.studentForm.reset();
  }

}
