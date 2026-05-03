'use client'
import { useState } from "react"

// IMAGES
import img7 from '../assets/image copy 7.png'
import img8 from '../assets/image copy 8.png'
import img9 from '../assets/image copy 9.png'

const articles = [
  {
    title: "How to analyze the CAT Mock Tests the Right Way",
    desc: "The most potent instrument of CAT preparation is the mock test...",
    author: "Parisha Giria",
    date: "Mar 31, 2026",
    views: "14,482",
    img: img7
  },
  {
    title: "Errors That prevent Students from passing 95 percentile",
    desc: "The level of 85-95 percentile range can be attained...",
    author: "Parisha Giria",
    date: "Mar 31, 2026",
    views: "17",
    img: img8
  },
  {
    title: "Improving the performance of Mock Tests in the Shortest Time",
    desc: "Mock tests form the basis of CAT preparation...",
    author: "Parisha Giria",
    date: "Mar 31, 2026",
    views: "6",
    img: img9
  },
  {
    title: "Extra Article 1",
    desc: "More content here...",
    author: "Author",
    date: "Apr 1, 2026",
    views: "100",
    img: img7
  },
  {
    title: "Extra Article 2",
    desc: "More content here...",
    author: "Author",
    date: "Apr 1, 2026",
    views: "120",
    img: img8
  }
]

export default function Articles() {
  const [visibleCount, setVisibleCount] = useState(3)

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3)
  }

  return (
    <section className="py-12 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-3xl font-bold mb-10">
          Most Searched <span className="text-orange-500">Articles</span>
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {articles.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden transition hover:shadow-lg hover:border-orange-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6">
                  {item.desc}
                </p>

                <div className="text-sm text-gray-500 mb-2">
                  ✍️ {item.author} • 📅 {item.date}
                </div>

                <div className="text-sm text-gray-400 flex justify-between">
                  <span>{item.views} Views</span>
                  <span>0 Shares</span>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* ✅ LOAD MORE BUTTON (CENTERED) */}
        {visibleCount < articles.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition"
            >
              Load More Articles
            </button>
          </div>
        )}

      </div>
    </section>
  )
}