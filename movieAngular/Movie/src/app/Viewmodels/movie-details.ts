export interface MovieDetails {
    id: number;                // Id of the movie
    title: string;            // Title of the movie
    year: number;             // Release year of the movie
    rate: number;             // Rating of the movie
    storyline: string;        // Storyline of the movie
    poster?: Uint8Array;      // Poster image (optional)
    genreId: number;          // Genre Id
    genreName: string;        // Genre name
}