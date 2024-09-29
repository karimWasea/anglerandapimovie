import { Component, OnInit } from '@angular/core';
 
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Movie } from 'src/app/Viewmodels/movie';
import { MoviesService } from 'src/app/Servevess/movie.service';
import { ApiResponse } from 'src/app/Viewmodels/api-response';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  movieForm: FormGroup;
  editingMovieId: number | null = null;
      bootstrap: any; // Add this line

  constructor(private moviesService: MoviesService, private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      title: [''],
      year: [''],
      rate: [''],
      genreId: [''],
      storyline: [''],
      poster: [null]
    });
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(params?: HttpParams): void {
    this.moviesService.getAllMovies(params).subscribe(
      (response: ApiResponse<Movie[]>) => {
        this.movies = response.data;
       console.log(response.data);
         
      },
      error => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  createMovie(): void {
    if (this.movieForm.valid) {
      this.moviesService.createMovie(this.movieForm.value).subscribe(
        () => {
          this.loadMovies();
          this.movieForm.reset();
          this.closeModal(); // Close the modal
        },
        error => {
          console.error('Error creating movie:', error);
        }
      );
    }
  }

  editMovie(id: number): void {
    this.editingMovieId = id;
    const movieToEdit = this.movies.find(movie => movie.id === id);
    if (movieToEdit) {
      this.movieForm.patchValue(movieToEdit);
      this.openModal(); // Open the modal
    }
  }

  updateMovie(): void {
    if (this.movieForm.valid && this.editingMovieId !== null) {
      this.moviesService.updateMovie(this.editingMovieId, this.movieForm.value).subscribe(
        () => {
          this.loadMovies();
          this.movieForm.reset();
          this.editingMovieId = null; // Clear editing state
          this.closeModal(); // Close the modal
        },
        error => {
          console.error('Error updating movie:', error);
        }
      );
    }
  }

  deleteMovie(id: number): void {
    if (confirm('Are you sure you want to delete this movie?')) {
      this.moviesService.deleteMovie(id).subscribe(
        () => {
          this.loadMovies();
        },
        error => {
          console.error('Error deleting movie:', error);
        }
      );
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.movieForm.patchValue({ poster: file });
    }
  }

  openModal(): void {
    const modal = new this.bootstrap.Modal(document.getElementById('movieModal'));
    modal.show();
  }

  closeModal(): void {
    const modal = new this.bootstrap.Modal(document.getElementById('movieModal'));
    modal.hide();
  }
}