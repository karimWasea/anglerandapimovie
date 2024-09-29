import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Viewmodels/api-response';
import { Movie } from '../Viewmodels/movie';
 import { environment } from 'src/environments/environment';
import { Genericservice } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends Genericservice<Movie> {
  private apiUrl = `https://localhost:7076/api/movies`; // Corrected API URL

  constructor(http: HttpClient) {
    super(http);
  }

  // Get all movies with optional parameters
  getAllMovies(params?: HttpParams): Observable<ApiResponse<Movie[]>> {
    return this.getAll(this.apiUrl, params);
  }

  // Get a movie by ID
  getMovieById(id: number): Observable<ApiResponse<Movie>> {
    return this.getById(this.apiUrl, id);
  }

  // Create a new movie
  createMovie(movie: Movie): Observable<ApiResponse<Movie>> {
    return this.create(this.apiUrl, movie);
  }

  // Update an existing movie
  updateMovie(id: number, movie: Movie): Observable<ApiResponse<Movie>> {
    return this.update(this.apiUrl, id, movie);
  }

  // Delete a movie by ID
  deleteMovie(id: number): Observable<ApiResponse<null>> {
    return this.delete(this.apiUrl, id);
  }
}