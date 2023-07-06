using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Pravin_TN7941_WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace Pravin_TN7941_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodMenuController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<FoodDetail>> Get()
        {
            using (FoodDbContext entities = new FoodDbContext())
            {
                return await entities.FoodDetail.ToListAsync();
            }
        }
    }
}
