using Microsoft.AspNetCore.Mvc;

using MoviesApi.Services;

namespace MoviesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly IGenresService _genresService;

        public GenresController(IGenresService genresService)
        {
            _genresService = genresService;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllAsync([FromQuery] string? filterBy = null, [FromQuery] int pageNumber = 1, [FromQuery] int pageSize = 10)
        {
            var genres = await _genresService.GetAll(filterBy, pageNumber, pageSize);
            return Ok(genres);
        }

        //public async Task<IActionResult> GetAllAsync([FromQuery] string? filterBy = null)
        //{
        //    var genres = await _genresService.GetAll(filterBy);
        //    return Ok(genres);
        //}

        [HttpPost]
        public async Task<IActionResult> CreateAsync(GenreDto dto)
        {
            var genre = new Genre { Name = dto.Name };

            await _genresService.Add(genre);

            return Ok(genre);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(byte id, [FromBody] GenreDto dto)
        {
            var genre = await _genresService.GetById(id);

            if (genre == null)
                return NotFound($"No genre was found with ID: {id}");

            genre.Name = dto.Name;

            _genresService.Update(genre);

            return Ok(genre);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(byte id)
        {
            var genre = await _genresService.GetById(id);

            if (genre == null)
                return NotFound($"No genre was found with ID: {id}");

            _genresService.Delete(genre);

            return Ok(genre);
        }

    }
}