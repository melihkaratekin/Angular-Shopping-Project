import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Category } from '../category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  api_path = "http://localhost:3000/categories";

  getCategories():Observable<Category[]> {

    return this.http
    .get<Category[]>(this.api_path)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ""
    if(err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu. " + err.error.message
    }
    else {
      errorMessage = "Sistemsel bir hata oluştu."
    }
    return throwError(errorMessage);
  }
}
