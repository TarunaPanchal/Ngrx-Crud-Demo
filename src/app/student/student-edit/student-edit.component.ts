import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, combineReducers } from "@ngrx/store";
import { Observable } from "rxjs";
import { Student } from '../student.model'
import * as studentActions from '../state/student.actions';
import * as fromStudent from '../state/student.reducer';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentForm: FormGroup;

  constructor(  private fb: FormBuilder,
    private store: Store<fromStudent.AppState>) { }
    ngOnInit() {
      this.studentForm = this.fb.group({
        name: ["", Validators.required],
        phone: ["", Validators.required],
        school: ["", Validators.required],
        std: ["", Validators.required],
        id: null
      })
  
      const student$: Observable<Student> = this.store.select(
        fromStudent.getCurrentStudent
      )

      student$.subscribe(currentStudent => {
        if (currentStudent) {
          this.studentForm.patchValue({
            name: currentStudent.name,
            phone: currentStudent.phone,
            school: currentStudent.school,
            std: currentStudent.std,
            id: currentStudent.id
          });
        }
      })
    }
  
    updateStudent() {
      const updatedStudent: Student = {
        name: this.studentForm.get("name").value,
        phone: this.studentForm.get("phone").value,
        school: this.studentForm.get("school").value,
        std: this.studentForm.get("std").value,
        id: this.studentForm.get("id").value
      };
  
      this.store.dispatch(new studentActions.UpdateStudent(updatedStudent));
      this.studentForm.reset();
  
    }

}
