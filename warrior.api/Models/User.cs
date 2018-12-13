using System;
using System.Collections.Generic;

namespace warrior.api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime DateofBirth { get; set; }
        public DateTime Died { get; set; }
        public string Description { get; set; }
        public string ClanOrAlliance { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}