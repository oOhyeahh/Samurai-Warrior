using System;
using System.ComponentModel.DataAnnotations;

namespace datingapp.api.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        [StringLength(8 , MinimumLength= 4 , ErrorMessage ="You must specify at least 4 and 8 characters")]
        public string Password { get; set; }
        public string ClanOrAlliance { get; set; }

        [Required]
        public  DateTime DateofBirth { get; set; }

        public DateTime Died { get; set; }
        
    }
}