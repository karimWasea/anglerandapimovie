using Microsoft.EntityFrameworkCore;

namespace MoviesApi.Models  // Change to the correct namespace
{
    public partial class ApplicationDbContext
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed data for Genres
            modelBuilder.Entity<Genre>().HasData(
                new Genre { Id = 1, Name = "Action" },
                new Genre { Id = 2, Name = "Drama" },
                new Genre { Id = 3, Name = "Comedy" }
            );

            // Seed data for Movies
            modelBuilder.Entity<Movie>().HasData(
                new Movie
                {
                    Id = 1,
                    Title = "Inception",
                    Year = 2010,
                    Rate = 8.8,
                    Storeline = "A thief with the ability to enter people's dreams takes on the ultimate heist.",
                    Poster = null, // Assuming null for seed data
                    GenreId = 1
                },
                new Movie
                {
                    Id = 2,
                    Title = "The Dark Knight",
                    Year = 2008,
                    Rate = 9.0,
                    Storeline = "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological tests of his ability to fight injustice.",
                    Poster = null,
                    GenreId = 1
                },
                new Movie
                {
                    Id = 3,
                    Title = "The Pursuit of Happyness",
                    Year = 2006,
                    Rate = 8.0,
                    Storeline = "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor.",
                    Poster = null,
                    GenreId = 2
                }
            );
        }
    }
}
