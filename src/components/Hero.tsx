'use client'
import { useState, useEffect } from "react"

import img1 from "../assets/image1.jpg"
import img2 from "../assets/image2.jpg"
import img3 from "../assets/image3.jpg"

export default function Hero() {
  const images = [img1, img2, img3]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[888px] overflow-hidden">

      {/* BACKGROUND */}
      <img
        src={images[current]}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">

        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Turn Your <span className="text-orange-500">Ambition</span> into{" "}
          <span className="text-orange-500">Admission</span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-lg md:text-xl mb-8">
          Get Expert Insights on MBA Exams, Colleges & Careers.
        </p>

        {/* SEARCH BAR */}
        <div className="flex w-full max-w-xl bg-white rounded-lg overflow-hidden shadow-lg">

          <input
            type="text"
            placeholder="Search for college..."
            className="flex-1 px-4 py-3 text-black outline-none"
          />

          <button className="bg-orange-500 px-6 py-3 text-white hover:bg-orange-600 transition">
            Search
          </button>

        </div>

      </div>
    </section>
  )
}