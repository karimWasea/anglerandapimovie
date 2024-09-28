using Microsoft.EntityFrameworkCore;

namespace MoviesApi.Services
{
    public class GenresService : IGenresService
    {
        private readonly ApplicationDbContext _context;

        public GenresService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Genre> Add(Genre genre)
        {
            await _context.AddAsync(genre);
            _context.SaveChanges();

            return genre;
        }

        public Genre Delete(Genre genre)
        {
            _context.Remove(genre);
            _context.SaveChanges();

            return genre;
        }

        public async Task<IEnumerable<Genre>> GetAll(string? filterBy, int pageNumber, int pageSize)
        {
            var query = _context.Genres
                .Where(g => string.IsNullOrEmpty(filterBy) || g.Name.Contains(filterBy))
                .OrderBy(g => g.Name);

            return await query
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }


        //public async Task<IEnumerable<Genre>> GetAll(string? Filterby)
        //{
        //    return await _context.Genres.Where(t => (t.Name.Contains(Filterby) || string.IsNullOrEmpty(Filterby))).OrderBy(g => g.Name).ToListAsync();
        //}

        public async Task<Genre> GetById(byte id)
        {
            return await _context.Genres.SingleOrDefaultAsync(g => g.Id == id);
        }

        public Task<bool> IsvalidGenre(byte id)
        {
            return _context.Genres.AnyAsync(g => g.Id == id);
        }

        public Genre Update(Genre genre)
        {
            _context.Update(genre);
            _context.SaveChanges();

            return genre;
        }
    }
}
