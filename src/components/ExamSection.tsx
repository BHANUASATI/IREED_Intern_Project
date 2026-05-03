'use client'
import { useEffect, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

// IMPORT IMAGES
import img1 from '../assets/image copy.png'
import img2 from '../assets/image copy 2.png'
import img3 from '../assets/image copy 3.png'
import img4 from '../assets/image copy 4.png'
import img5 from '../assets/image copy 5.png'
import img6 from '../assets/image copy 6.png'

const exams = [
  { title: "Business Analytics Aptitude Test (BAAT)", desc: "The BAAT 2026 is conducted by BITS Pilani for admission to MBA in Business Analytics.", img: img1 },
  { title: "Management Aptitude Test (MAT)", desc: "MAT is a national-level exam conducted by AIMA for MBA admission in 600+ colleges.", img: img2 },
  { title: "Integrated Programme in Management Aptitude Test (IPMAT)", desc: "IPMAT is for 5-year integrated MBA programs conducted by IIM Indore & Rohtak.", img: img3 },
  { title: "Common Management Admission Test (CMAT)", desc: "CMAT is conducted by NTA and accepted by AICTE-approved MBA colleges.", img: img4 },
  { title: "Maharashtra Common Entrance Test (MAH-CET)", desc: "MAH-CET is a state-level exam for MBA admission in Maharashtra institutes.", img: img5 },
  { title: "KIIT School of Management Entrance Exam (KIITEE)", desc: "KIITEE is a university-level entrance exam conducted by KIIT.", img: img6 }
]

export default function ExploreExams() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  // RESPONSIVE LOGIC
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [currentIndex, itemsPerView])

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= exams.length - itemsPerView ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? exams.length - itemsPerView : prev - 1
    )
  }

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#F9F5F0] overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-left">
          Explore <span className="text-orange-500">Exams</span>
        </h2>

        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-3 shadow-md hover:bg-orange-500 hover:text-white transition"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="hidden sm:block absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-3 shadow-md hover:bg-orange-500 hover:text-white transition"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {exams.map((exam, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4 flex-shrink-0"
                >
                  <div className="bg-white border rounded-2xl p-6 sm:p-8 text-center transition duration-300 hover:border-orange-500 hover:shadow-xl cursor-pointer h-[280px] sm:h-[320px] flex flex-col justify-center items-center">

                    {/* IMAGE */}
                    <img
                      src={exam.img}
                      alt={exam.title}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-3 sm:mb-4"
                    />

                    {/* TITLE */}
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                      {exam.title}
                    </h3>

                    {/* CATEGORY */}
                    <p className="text-xs sm:text-sm text-orange-500 mb-2 sm:mb-3">
                      Category: Management
                    </p>

                    {/* HIDE DESCRIPTION ON SMALL SCREEN */}
                    <p className="hidden sm:block text-sm text-gray-600 leading-relaxed">
                      {exam.desc}
                    </p>

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