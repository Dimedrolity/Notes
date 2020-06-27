using System;

namespace Notes.DAL.Entities
{
    public class Note
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string Content { get; set; } = null!;
        
        private TimeZoneInfo ekaterinburgZone = TimeZoneInfo.FindSystemTimeZoneById("Ekaterinburg Standard Time");
        public DateTime DateOfLastChange { get; set; }


        public Note()
        {
        }

        public Note(string? title, string content)
        {
            Title = title;
            Content = content;
            DateOfLastChange = GetDateTimeNowInEkaterinburg();
        }

        private DateTime GetDateTimeNowInEkaterinburg()
        {
            var utcTime = DateTime.Now.ToUniversalTime();
            var ekaterinburgTime = TimeZoneInfo.ConvertTime(utcTime, ekaterinburgZone);
            return ekaterinburgTime;
        }
        
        public void UpdateDateOfLastChange()
        {
            DateOfLastChange = GetDateTimeNowInEkaterinburg();
        }
    }
}