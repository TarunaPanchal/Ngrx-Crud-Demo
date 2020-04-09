import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student.component';
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { studentReducer } from './state/student.reducer'
import { StudentEffect } from './state/student.effect';
const studentRoutes: Routes = [{ path: "", component: StudentComponent }];


@NgModule({
  declarations: [StudentComponent, StudentAddComponent, StudentEditComponent, StudentListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(studentRoutes),
    StoreModule.forFeature("student", studentReducer),
    EffectsModule.forFeature([StudentEffect])
  ]
})
export class StudentModule { }
