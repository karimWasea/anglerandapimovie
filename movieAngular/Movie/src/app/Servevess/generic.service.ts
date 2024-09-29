

import { Injectable } from '@angular/core';
import { ApiResponse } from '../Viewmodels/api-response';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Genericservice<T> {

  constructor(private http: HttpClient) {}

  // Generic GET method to fetch data with optional pagination
  getAll(apiUrl: string, params?: HttpParams): Observable<ApiResponse<T[]>> {
    return this.http.get<ApiResponse<T[]>>(apiUrl, { params });
  }

  // Generic GET method to fetch a single item by id
  getById(apiUrl: string, id: number | string): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${apiUrl}/${id}`);
  }

  // Generic POST method to create a new item
  create(apiUrl: string, item: T): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(apiUrl, item);
  }

  // Generic PUT method to update an existing item
  update(apiUrl: string, id: number | string, item: T): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${apiUrl}/${id}`, item);
  }

  // Generic DELETE method to remove an item by id
  delete(apiUrl: string, id: number | string): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${apiUrl}/${id}`);
  }
}
