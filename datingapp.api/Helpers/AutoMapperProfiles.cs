using System.Linq;
using AutoMapper;
using datingapp.api.Dtos;
using datingapp.api.Models;

namespace datingapp.api.Helpers
{
    //understand the source and their destination
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>().ForMember(dest =>dest.PhotoUrl, opt =>{
                opt.MapFrom(src => src.Photos.FirstOrDefault( p => p.IsMain).Url);
            });
            CreateMap<User, UserForDetailedDto>().ForMember(dest =>dest.PhotoUrl, opt =>{
                opt.MapFrom(src => src.Photos.FirstOrDefault( p => p.IsMain).Url);
            });
            CreateMap<Photo, PhotosForDetailsDto>();
        }
    }
}