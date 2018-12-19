using System.Collections.Generic;
using System.Threading.Tasks;
using warrior.api.Helpers;
using warrior.api.Models;

namespace warrior.api.Data
{
    public interface IMatchingRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<PagedList<User>> GetUsers(UserParams userParams);
        Task<User> GetUser(int id);
        Task<Photo> GetPhoto(int id);
        Task<Photo> GetMainPhotoForUser(int userid);
    }
}