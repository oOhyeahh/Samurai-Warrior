using System.Linq;
using AutoMapper;
using warrior.api.Dtos;
using warrior.api.Models;

namespace warrior.api.Helpers
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

            CreateMap<UserForUpdateDto, User>();

            CreateMap<Photo,PhotoForReturnDto>();

            CreateMap<PhotoForCreationDto, Photo>();

            CreateMap<UserForRegisterDto,User>();
        }
    }
}