import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from './student.model'

@Injectable({
    providedIn: 'root'
  })

  export class StudentService {
    private URL = "http://localhost:1801/student";
  
    constructor(private http: HttpClient) {}
  
    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.URL);
      }
    
      getStudentById(payload: number): Observable<Student> {
        return this.http.get<Student>(`${this.URL}/${payload}`);
      }
    
      createStudent(payload: Student): Observable<Student> {
        return this.http.post<Student>(this.URL, payload);
      }
    
      updateStudent(customer: Student): Observable<Student> {
        return this.http.put<Student>(
          `${this.URL}/update/${customer.id}`,
          customer
        );
      }
    
      deleteStudent(payload: number) {
        return this.http.delete(`${this.URL}/delete/${payload}`);
      }
    
  }