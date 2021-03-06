using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Notes.DAL;

namespace Notes
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            const string connectionString =
                "Host=ec2-54-217-236-206.eu-west-1.compute.amazonaws.com; Database=d95p62a4oe7qv4; Username=wsthjffxruuaja; Password=587da3e4afcbe39c9826693dc97f34c694d4c6a5c9ae901376d6fbc5adc429f5; sslmode=Require; Trust Server Certificate=true;";

            services.AddDbContext<NotesDbContext>(options => options.UseNpgsql(connectionString));

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseDefaultFiles();
            
            app.UseStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}