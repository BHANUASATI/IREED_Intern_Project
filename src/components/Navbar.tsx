'use client'

import logo from "../assets/image.png";
import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaWhatsapp } from "react-icons/fa";


// ================= DROPDOWN =================
function Dropdown({ title, items }: { title: string; items: string[] }) {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center gap-1 font-medium cursor-pointer hover:text-orange-500 transition focus:outline-none">
        {title}
        <ChevronDownIcon className="h-4" />
      </MenuButton>

      <MenuItems className="absolute mt-2 w-56 bg-white text-black rounded-lg shadow-lg border p-2 z-50">

        {items.map((item, index) => (
          <MenuItem key={index}>
            {({ active }) => (
              <a
                href="#"
                className={`block px-3 py-2 rounded-md cursor-pointer transition ${
                  active ? "bg-gray-100 text-orange-500" : ""
                }`}
              >
                {item}
              </a>
            )}
          </MenuItem>
        ))}

      </MenuItems>
    </Menu>
  )
}


// ================= NAVBAR =================
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between h-24 px-6 w-full max-w-[1920px] mx-auto">

        {/* LEFT LOGO */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14" />
        </div>

        {/* CENTER */}
        <div className="hidden md:flex items-center gap-8">

          {/* Exams */}
          <Dropdown 
            title="Exams" 
            items={[
              "Management",
              "CAT",
              "XAT",
              "NMAT",
              "SNAP",
              "MICAT",
              "GMAT",
              "More Exams"
            ]} 
          />

          {/* Scholarships */}
          <Dropdown 
            title="Scholarships" 
            items={[
              "School",
              "UG",
              "PG",
              "Fellowship",
              "International"
            ]} 
          />

          {/* Institution */}
          <Dropdown 
            title="Institution" 
            items={[
              "IIMs",
              "IITs",
              "NITs",
              "IIITs",
              "Govt. Institutes",
              "Pvt. Institutes"
            ]} 
          />

          {/* Articles */}
          <Dropdown 
            title="Articles" 
            items={[
              "College News",
              "Student Zone",
              "Faculty Speak",
              "Blogs"
            ]} 
          />

          <a className="font-medium cursor-pointer hover:text-orange-500 transition">
            Admissions Alerts
          </a>

        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-6">

          {/* WhatsApp */}
          <div className="flex items-center gap-2 cursor-pointer text-green-500 hover:text-green-600 transition">
            <FaWhatsapp className="text-2xl" />
            <span className="text-sm font-medium">Subscribe</span>
          </div>

          {/* Login */}
          <button className="bg-orange-500 px-5 py-2 rounded-lg text-white hover:bg-orange-600 transition">
            Login
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XMarkIcon className="h-6" /> : <Bars3Icon className="h-6" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-3">

          <p className="font-medium">Exams</p>
          <p className="ml-3 text-sm text-gray-600">Management</p>

          <p className="font-medium">Scholarships</p>
          <p className="ml-3 text-sm text-gray-600">School / UG / PG</p>

          <p className="font-medium">Institution</p>
          <p className="ml-3 text-sm text-gray-600">Top Institutes</p>

          <p className="font-medium">Articles</p>
          <p className="ml-3 text-sm text-gray-600">Blogs / News</p>

          <p className="cursor-pointer hover:text-orange-500">Admissions Alerts</p>

          <div className="flex items-center gap-2 mt-3 text-green-500">
            <FaWhatsapp className="text-xl" />
            <span>Subscribe</span>
          </div>

          <button className="w-full bg-orange-500 py-2 rounded text-white hover:bg-orange-600 transition">
            Login
          </button>

        </div>
      )}
    </header>
  )
}