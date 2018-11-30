using System.Collections.Generic;
using datingapp.api.Models;

namespace datingapp.api.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Description { get; set; }
        public string Army { get; set; }
        public ICollection<PhotosForDetailsDto> Photos { get; set; }
        public string PhotoUrl { get; set; }
    }
}