using AutoMapper;

namespace MoviesApi.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Map Movie to MovieDetailsDto and enable reverse mapping
            CreateMap<Movie, MovieDetailsDto>().ReverseMap();

            // Map MovieDto to Movie, ignoring the Poster property, and enable reverse mapping
            CreateMap<MovieDto, Movie>()
                .ForMember(dest => dest.Poster, opt => opt.Ignore())
                .ReverseMap();
        }
    }
}
