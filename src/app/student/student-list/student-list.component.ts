import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import * as studentActions from '../state/student.actions';
import * as fromStudent from '../state/student.reducer';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students$: Observable<Student[]>;
  error$: Observable<String>;
  constructor(private store: Store<fromStudent.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new studentActions.LoadStudents());
    this.students$ = this.store.pipe(select(fromStudent.getStudents));
    this.error$ = this.store.pipe(select(fromStudent.getError));
  }

  deleteStudent(student: Student) {
    if (confirm("Are You Sure  want to Delete the Student")) {
      this.store.dispatch(new studentActions.DeleteStudent(student.id));
    }
  }

  editStudent(student: Student) {
    console.log('-----Edit-------------', student)
    this.store.dispatch(new studentActions.LoadStudent(student.id));
  }

}
