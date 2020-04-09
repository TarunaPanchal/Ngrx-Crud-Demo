import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { StudentService } from '../student.service';
import * as studentActions from "../state/student.actions"
import { Student } from '../student.model';

@Injectable()
export class StudentEffect {
  constructor(
    private actions$: Actions,
    private studentService: StudentService
  ) {}

  @Effect()
  loadCustomers$: Observable<Action> = this.actions$.pipe(
    ofType<studentActions.LoadStudents>(
      studentActions.StudentActionTypes.LOAD_STUDENTS
    ),
    mergeMap((action: studentActions.LoadStudents) =>
      this.studentService.getStudents().pipe(
        map(
          (students: Student[]) =>
            new studentActions.LoadStudentsSuccess(students)
        ),
        catchError(err => of(new studentActions.LoadStudentsFail(err)))
      )
    )
  );

  @Effect()
  loadStudent$: Observable<Action> = this.actions$.pipe(
    ofType<studentActions.LoadStudent>(
      studentActions.StudentActionTypes.LOAD_STUDENT
    ),
    mergeMap((action: studentActions.LoadStudent) =>
      this.studentService.getStudentById(action.payload).pipe(
        map(
          (students: Student) =>{           
           return new studentActions.LoadStudentSuccess(students)
          }
        ),
        catchError(err => of(new studentActions.LoadStudentFail(err)))
      )
    )
  );

  @Effect()
  createStudent$: Observable<Action> = this.actions$.pipe(
    ofType<studentActions.CreateStudent>(
      studentActions.StudentActionTypes.CREATE_STUDENT
    ),
    map((action: studentActions.CreateStudent) => action.payload),
    mergeMap((student: Student) =>
      this.studentService.createStudent(student).pipe(
        map(
          (newStudent: Student) =>
            new studentActions.CreateStudentSuccess(newStudent)
        ),
        catchError(err => of(new studentActions.CreateStudentFail(err)))
      )
    )
  );

  @Effect()
  updateStudent$: Observable<Action> = this.actions$.pipe(
    ofType<studentActions.UpdateStudent>(
      studentActions.StudentActionTypes.UPDATE_STUDENT
    ),
    map((action: studentActions.UpdateStudent) => action.payload),
    mergeMap((customer: Student) =>
      this.studentService.updateStudent(customer).pipe(
        map(
          (updateStudent: Student) =>
            new studentActions.UpdateStudentSuccess({
              id: updateStudent.id,
              changes: updateStudent
            })
        ),
        catchError(err => of(new studentActions.UpdateStudentFail(err)))
      )
    )
  );

  @Effect()
  deleteStudent$: Observable<Action> = this.actions$.pipe(
    ofType<studentActions.DeleteStudent>(
      studentActions.StudentActionTypes.DELETE_STUDENT
    ),
    map((action: studentActions.DeleteStudent) => action.payload),
    mergeMap((id: number) =>
      this.studentService.deleteStudent(id).pipe(
        map(() => new studentActions.DeleteStudentSuccess(id)),
        catchError(err => of(new studentActions.DeleteStudentFail(err)))
      )
    )
  );
}