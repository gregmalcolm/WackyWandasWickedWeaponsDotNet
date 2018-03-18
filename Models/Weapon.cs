using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WackyWandasWickedWeaponsDotNet.Models
{
    public class Weapon {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Subcategory { get; set; }
        public int Cost {get; set;}
        public string Damage {get; set;}
        public int? Range { get; set;}
        public int? Weight { get; set; }
        public string Tag { get; set; }
        public bool Enchanted {get; set; }
    }    
}