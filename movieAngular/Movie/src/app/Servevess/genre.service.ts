 
  
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genra } from '../Viewmodels/genra';
 
@Injectable({
  providedIn: 'root',
})
export class GenresService {
  private apiUrl = 'https://localhost:7076/api/genres'; // Adjust the URL according to your API

  constructor(private http: HttpClient) {}

  
  getAll(filterBy: string, pageNumber: number, pageSize: number): Observable<Genra[]> {
    let params = new HttpParams()
      .set('filterBy', filterBy || '')
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Genra[]>(this.apiUrl, { params });
  }
 
  create(genre: Genra): Observable<Genra> {
    return this.http.post<Genra>(this.apiUrl, genre);
  }

  update(id: number, genre: Genra): Observable<Genra> {
    return this.http.put<Genra>(`${this.apiUrl}/${id}`, genre);
  }

  delete(id: number): Observable<Genra> {
    return this.http.delete<Genra>(`${this.apiUrl}/${id}`);
  }
}
