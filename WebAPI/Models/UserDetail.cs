using System;
using System.Collections.Generic;

#nullable disable

namespace Pravin_TN7941_WebAPI.Models
{
    public partial class UserDetail
    {
        public string LoginId { get; set; }
        public string UserName { get; set; }
        public long Phone { get; set; }
        public string Address { get; set; }
        public string Password { get; set; }
    }
}
