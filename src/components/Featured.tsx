'use client'
import { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const data = [
  {
    name: "Christ University – Pune (Lavasa) Campus",
    location: "Lavasa, Maharashtra",
    type: "(private-university)",
    courses: "1 Course",
    fees: "INR 10.68 Lakhs",
    package: "INR 20 LPA"
  },
  {
    name: "Indian Institute of Information Technology, Lucknow",
    location: "Lucknow, Uttar Pradesh",
    type: "(iiits)",
    courses: "1 Course",
    fees: "INR 7.5 Lakhs for 2 year",
    package: "INR 48 LPA"
  },
  {
    name: "Indian Institute of Technology, Guwahati",
    location: "Guwahati, Assam",
    type: "(iit)",
    courses: "1 Course",
    fees: "9.46 Lakhs",
    package: "15 - 20 LPA"
  },
  {
    name: "Indian Institute of Management, Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "(iim)",
    courses: "3 Courses",
    fees: "26.5 Lakhs",
    package: "1,10,00,000"
  },
  {
    name: "Jio Institute, Mumbai",
    location: "Mumbai, Maharashtra",
    type: "(private-university)",
    courses: "2 Courses",
    fees: "6 Lakhs",
    package: "17 LPA"
  },
  {
    name: "Symbiosis Institute of Digital and Telecom Management (SIDTM), Pune",
    location: "Pune, Maharashtra",
    type: "(private-university)",
    courses: "1 Course",
    fees: "INR 16.1 – 16.9 Lakhs",
    package: "INR 29.04 LPA"
  }
]

export default function Featured() {
  const [start, setStart] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  // ✅ RESPONSIVE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1)
      else if (window.innerWidth < 1024) setItemsPerView(2)
      else setItemsPerView(4)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // ✅ SLIDER CONTROL
  const next = () => {
    setStart(prev =>
      prev >= data.length - itemsPerView ? 0 : prev + 1
    )
  }

  const prev = () => {
    setStart(prev =>
      prev === 0 ? data.length - itemsPerView : prev - 1
    )
  }

  // ✅ AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(next, 3000)
    return () => clearInterval(interval)
  }, [itemsPerView])

  return (
    <section className="bg-[#f4f6f8] py-12 sm:py-24 px-4 sm:px-10">

      <div className="max-w-[1500px] mx-auto relative">

        <h2 className="text-xl sm:text-3xl font-bold mb-8 sm:mb-14">
          Featured <span className="text-orange-500">Institution</span>
        </h2>

        {/* BUTTONS */}
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full items-center justify-center shadow border"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <button
          onClick={next}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full items-center justify-center shadow border"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>

        <div className="px-2 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {data.slice(start, start + itemsPerView).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 border flex flex-col justify-between"
              >

                <div>
                  <h3 className="font-semibold text-sm sm:text-base mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600">{item.location}</p>
                  <p className="text-xs text-gray-400 mb-2">{item.type}</p>

                  <p className="text-xs sm:text-sm text-gray-500">Courses:</p>
                  <p className="text-blue-600 text-xs sm:text-sm mb-2">
                    {item.courses}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-500">Fees:</p>
                  <p className="text-xs sm:text-sm mb-2">{item.fees}</p>

                  <p className="text-xs sm:text-sm text-gray-500">
                    Package: <span className="text-blue-600">{item.package}</span>
                  </p>
                </div>

                <button className="mt-3 border border-orange-500 text-orange-500 py-1 rounded hover:bg-orange-500 hover:text-white text-xs sm:text-sm">
                  KNOW MORE
                </button>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}