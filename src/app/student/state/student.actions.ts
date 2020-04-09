import { Action } from "@ngrx/store";
import { Update } from "@ngrx/entity";
import { Student } from "../student.model";

export enum StudentActionTypes {
    LOAD_STUDENTS = "[Student] Load Students",
    LOAD_STUDENTS_SUCCESS = "[Student] Load Students Success",
    LOAD_STUDENTS_FAIL = "[Student] Load Students Fail",
    LOAD_STUDENT = "[Student] Load Student",
    LOAD_STUDENT_SUCCESS = "[Student] Load Student Success",
    LOAD_STUDENT_FAIL = "[Student] Load Student Fail",
    CREATE_STUDENT = "[Student] Create Student",
    CREATE_STUDENT_SUCCESS = "[Student] Create Student Success",
    CREATE_STUDENT_FAIL = "[Student] Create Student Fail",
    UPDATE_STUDENT = "[Student] Update Student",
    UPDATE_STUDENT_SUCCESS = "[Student] Update Student Success",
    UPDATE_STUDENT_FAIL = "[Student] Update Student Fail",
    DELETE_STUDENT = "[Student] Delete Student",
    DELETE_STUDENT_SUCCESS = "[Student] Delete Student Success",
    DELETE_STUDENT_FAIL = "[Student] Delete Student Fail"
}

export class LoadStudents implements Action {
    readonly type = StudentActionTypes.LOAD_STUDENTS;
}

export class LoadStudentsSuccess implements Action {
    readonly type = StudentActionTypes.LOAD_STUDENTS_SUCCESS;

    constructor(public payload: Student[]) { }
}

export class LoadStudentsFail implements Action {
    readonly type = StudentActionTypes.LOAD_STUDENTS_FAIL;

    constructor(public payload: string) { }
}


export class LoadStudent implements Action {
    readonly type = StudentActionTypes.LOAD_STUDENT;
    constructor(public payload: number) { }

}

export class LoadStudentSuccess implements Action {
    readonly type = StudentActionTypes.LOAD_STUDENT_SUCCESS;

    constructor(public payload: Student) { }
}

export class LoadStudentFail implements Action {
    readonly type = StudentActionTypes.LOAD_STUDENT_FAIL;

    constructor(public payload: string) { }
}

export class CreateStudent implements Action {
    readonly type = StudentActionTypes.CREATE_STUDENT;

    constructor(public payload: Student) { }
}

export class CreateStudentSuccess implements Action {
    readonly type = StudentActionTypes.CREATE_STUDENT_SUCCESS;

    constructor(public payload: Student) { }
}

export class CreateStudentFail implements Action {
    readonly type = StudentActionTypes.CREATE_STUDENT_FAIL;

    constructor(public payload: string) { }
}

export class UpdateStudent implements Action {
    readonly type = StudentActionTypes.UPDATE_STUDENT;

    constructor(public payload: Student) { }
}

export class UpdateStudentSuccess implements Action {
    readonly type = StudentActionTypes.UPDATE_STUDENT_SUCCESS;

    constructor(public payload: Update<Student>) { }
}

export class UpdateStudentFail implements Action {
    readonly type = StudentActionTypes.UPDATE_STUDENT_FAIL;

    constructor(public payload: string) { }
}

export class DeleteStudent implements Action {
    readonly type = StudentActionTypes.DELETE_STUDENT;

    constructor(public payload: number) { }
}

export class DeleteStudentSuccess implements Action {
    readonly type = StudentActionTypes.DELETE_STUDENT_SUCCESS;

    constructor(public payload: number) { }
}

export class DeleteStudentFail implements Action {
    readonly type = StudentActionTypes.DELETE_STUDENT_FAIL;

    constructor(public payload: string) { }
}

export type action =
    | LoadStudents
    | LoadStudentsSuccess
    | LoadStudentsFail
    | LoadStudent
    | LoadStudentSuccess
    | LoadStudentFail
    | CreateStudent
    | CreateStudentSuccess
    | CreateStudentFail
    | UpdateStudent
    | UpdateStudentSuccess
    | UpdateStudentFail
    | DeleteStudent
    | DeleteStudentSuccess
    | DeleteStudentFail
