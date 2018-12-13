using System.Collections.Generic;
using warrior.api.Models;

namespace warrior.api.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Description { get; set; }
        public string ClanOrAlliance { get; set; }
        public ICollection<PhotosForDetailsDto> Photos { get; set; }
        public string PhotoUrl { get; set; }
    }
}