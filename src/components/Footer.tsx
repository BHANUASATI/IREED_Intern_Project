import { FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#072B2B] via-[#0a3535] to-[#072B2B] text-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {/* Exams */}
          <div>
            <h3 className="font-bold mb-4">Exams</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">CAT</li>
              <li className="hover:text-orange-400 cursor-pointer">XAT</li>
              <li className="hover:text-orange-400 cursor-pointer">SNAP</li>
              <li className="hover:text-orange-400 cursor-pointer">GMAT</li>
              <li className="hover:text-orange-400 cursor-pointer">NMAT</li>
              <li className="hover:text-orange-400 cursor-pointer">Other Exams</li>
            </ul>
          </div>

          {/* Scholarships */}
          <div>
            <h3 className="font-bold mb-4">Scholarships</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">School</li>
              <li className="hover:text-orange-400 cursor-pointer">UG</li>
              <li className="hover:text-orange-400 cursor-pointer">PG</li>
              <li className="hover:text-orange-400 cursor-pointer">Fellowship</li>
              <li className="hover:text-orange-400 cursor-pointer">International</li>
            </ul>
          </div>

          {/* Institutes */}
          <div>
            <h3 className="font-bold mb-4">Institutes</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">IIM</li>
              <li className="hover:text-orange-400 cursor-pointer">IIT</li>
              <li className="hover:text-orange-400 cursor-pointer">NIT</li>
              <li className="hover:text-orange-400 cursor-pointer">IIIT</li>
              <li className="hover:text-orange-400 cursor-pointer">Govt. Institutes</li>
              <li className="hover:text-orange-400 cursor-pointer">Private Institutes</li>
            </ul>
          </div>

          {/* Colleges By */}
          <div>
            <h3 className="font-bold mb-4">Colleges By</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">Location</li>
              <li className="hover:text-orange-400 cursor-pointer">North</li>
              <li className="hover:text-orange-400 cursor-pointer">South</li>
              <li className="hover:text-orange-400 cursor-pointer">West</li>
              <li className="hover:text-orange-400 cursor-pointer">East</li>
              <li className="hover:text-orange-400 cursor-pointer">Central</li>
            </ul>
          </div>

          {/* Articles */}
          <div>
            <h3 className="font-bold mb-4">Articles</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">MBA News</li>
              <li className="hover:text-orange-400 cursor-pointer">Student Zone</li>
              <li className="hover:text-orange-400 cursor-pointer">Faculty Zone</li>
              <li className="hover:text-orange-400 cursor-pointer">Authors</li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="font-bold mb-4">Other Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">About Us</li>
              <li className="hover:text-orange-400 cursor-pointer">Contact Us</li>
              <li className="hover:text-orange-400 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-orange-400 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* FOOTER SECTION */}
        <div className="border-t-2 border-orange-400 mt-10 pt-6 px-4 
                flex justify-between items-center">

          {/* LEFT: SOCIAL ICONS */}
          <div className="flex gap-6 text-xl">
            <FaTwitter className="cursor-pointer hover:text-orange-400 transition" />
            <FaLinkedin className="cursor-pointer hover:text-orange-400 transition" />
            <FaFacebook className="cursor-pointer hover:text-orange-400 transition" />
            <FaYoutube className="cursor-pointer hover:text-orange-400 transition" />
          </div>

          {/* RIGHT: TEXT */}
          <div className="text-sm text-right">
            © 2025 TopCollegeInfo India Pvt Ltd. Powered by{" "}
            <a
              href="https://ireedmedia.com"
              className="text-orange-500 hover:text-orange-600 cursor-pointer transition font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              IREED Media
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}