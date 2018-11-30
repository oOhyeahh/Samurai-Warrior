using datingapp.api.Models;

namespace datingapp.api.Dtos
{
    public class PhotosForDetailsDto
    {
        public int Id { get; set; }
        public string Url {get; set;}
        public bool IsMain { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}