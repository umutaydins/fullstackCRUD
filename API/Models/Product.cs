using Microsoft.Identity.Client;

namespace API.Models
{

    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public double Price { get; set; }
        public bool IsInStore { get; set; }
        
    }
    
    
}