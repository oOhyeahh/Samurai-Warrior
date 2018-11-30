using System;
using System.Collections.Generic;

namespace datingapp.api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime DateofBirth { get; set; }
        public string Description { get; set; }
        public string Army { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}