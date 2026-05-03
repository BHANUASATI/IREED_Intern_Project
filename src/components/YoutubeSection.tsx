'use client'

const videos = [
  {
    title: "Top 5 MBA Exams in India (2023)",
    views: "233k",
    likes: "9k",
    date: "May, 25"
  },
  {
    title: "Which MBA Entrance Exam Should You Take in 2025?",
    views: "5k",
    likes: "183",
    date: "Sep, 25"
  },
  {
    title: "Highest Paying Degrees and JOBS in 2030-35",
    views: "890k",
    likes: "22k",
    date: "Feb, 25"
  },
  {
    title: "HIGH Paying Careers in 2025 - Complete Guide!",
    views: "472k",
    likes: "13k",
    date: "Oct, 25"
  },
  {
    title: "Top Engineering Entrance Exams Other than JEE",
    views: "133k",
    likes: "4.8k",
    date: ""
  }
]

export default function YoutubeSection() {
  return (
    <section className="bg-[#F9F5F0] py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-3xl font-bold mb-8 text-left">
          Explore Colleges & Exams Through{" "}
          <span className="text-orange-500">Youtube Videos</span>
        </h2>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT MAIN VIDEO */}
          <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow">

            <iframe
              className="w-full h-[350px]"
              src="https://www.youtube.com/embed/0YEk_y50KFw"
              title="YouTube video"
              allowFullScreen
            ></iframe>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                CAT Exam Full Details 2026 🔥 Eligibility, Syllabus, Pattern
              </h3>

              <div className="text-sm text-gray-500 flex gap-4">
                <span>93k Views</span>
                <span>3k Likes</span>
                <span>Jul, 25</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div>

            {/* 🔥 WATCH NEXT TITLE */}
            <h3 className="text-lg font-semibold mb-4">
              Watch Next
            </h3>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">

              {videos.map((video, index) => (
                <div
                  key={index}
                  className="flex gap-3 bg-white p-3 rounded-lg cursor-pointer hover:border-orange-500 border transition"
                >

                  {/* 🔥 REAL THUMBNAIL */}
                  <img
                    src="https://img.youtube.com/vi/0YEk_y50KFw/mqdefault.jpg"
                    alt="thumbnail"
                    className="w-28 h-20 object-cover rounded"
                  />

                  {/* TEXT */}
                  <div>
                    <h4 className="text-sm font-medium line-clamp-2">
                      {video.title}
                    </h4>

                    <div className="text-xs text-gray-500 mt-1">
                      {video.views} Views • {video.likes} Likes
                    </div>

                    <div className="text-xs text-gray-400">
                      {video.date}
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}