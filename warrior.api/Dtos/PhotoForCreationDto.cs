using Microsoft.AspNetCore.Http;

namespace warrior.api.Dtos
{
    public class PhotoForCreationDto
    {
        public string Url { get; set; }
        public IFormFile File { get; set; }
        public string PublicId { get; set; }

    }
}