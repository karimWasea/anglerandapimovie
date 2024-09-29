export interface Movie {
    title: string;             // Title of the movie (MaxLength: 250)
    year: number;              // Release year of the movie
    rate: number;              // Rating of the movie
    storyline: string;         // Storyline of the movie (MaxLength: 2500)
    poster: string; // Assume this is of type File for file upload
    genreId: number; 
    id: number;                // Id of the movie
   genreName: string;        // Genre name          // Genre Id (byte in C# is typically a number in TypeScript)
}
