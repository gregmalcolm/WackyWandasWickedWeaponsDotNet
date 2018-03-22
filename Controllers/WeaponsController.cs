using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WackyWandasWickedWeaponsDotNet.Models;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;

namespace WackyWandasWickedWeaponsDotNet.Controllers
{
    [Route("api/[controller]")]
    public class WeaponsController : Controller
    {
        public async Task<string> Index()
        {
            List<Weapon> weapons = new List<Weapon>(); 

            using (var client = new HttpClient())
            {
                string baseurl = "http://localhost:4000";

                client.BaseAddress = new Uri(baseurl);  
                client.DefaultRequestHeaders.Clear();  
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));  

                var queryParams = new List<string>();
                foreach(var query in HttpContext.Request.Query) {
                    queryParams.Add($"{query.Key}={query.Value.ToString()}");
                }
                var queryString = String.Join("&", queryParams.ToArray());

                var response = await client.GetAsync($"/weapons?{queryString}");
                var body = await response.Content.ReadAsStringAsync();
                return body;
            }  
            
        }

        public class Attributes
        {
            public string name { get; set; }
            public string category { get; set; }
            public string subcategory { get; set; }
            public int cost { get; set; }
            public string damage { get; set; }
            public int? range { get; set; }
            public int? weight { get; set; }
            public string tag { get; set; }
        }

        public class Datum
        {
            public string id { get; set; }
            public string type { get; set; }
            public Attributes attributes { get; set; }
        }

        public class Links
        {
            public string self { get; set; }
            public string first { get; set; }
            public object prev { get; set; }
            public string next { get; set; }
            public string last { get; set; }
        }

        public class RootObject
        {
            public List<Datum> data { get; set; }
            public Links links { get; set; }
        }        
    }
}