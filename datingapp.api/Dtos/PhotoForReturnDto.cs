using Microsoft.AspNetCore.Http;

namespace datingapp.api.Dtos
{
    public class PhotoForReturnDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public IFormFile File { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }
    }
}