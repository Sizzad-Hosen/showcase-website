import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaSkype, FaFacebook } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className="min-h-screen  text-white flex mx-auto pt-6 justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-8xl pt-7  h-1/2">
        {/* Contact Info */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">CONTACT INFO</h2>
          <div className="mb-4 flex items-center gap-4">
            <FaEnvelope className="text-2xl" />
            <div>
              <p>sizzadhosen@gmail.com</p>
              <p>sizzadhosen079@gmail.com</p>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <FaPhone className="text-2xl" />
            <div>
              <p>+880 1793942267</p>
              <p>+8801708694445</p>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl" />
            <p>Dinajpur,Sadar, Bangladesh</p>
          </div>
          {/* Social Icons */}
          <h3 className="text-lg font-semibold mt-6">SOCIAL INFO</h3>
          <div className="flex gap-4 mt-2 pt-3 ">
            <Link href="https://www.linkedin.com/in/md-sizzad-hosen-5a2618301/">
            <FaLinkedin className="text-6xl cursor-pointer hover:text-blue-500" />

            </Link>
            <Link href="https://github.com/Sizzad-Hosen">
            <FaGithub className="text-6xl cursor-pointer hover:text-gray-400" />

            </Link>
            <Link href="https://www.facebook.com/sizzadhosenofficial">
           
            <FaFacebook className="text-6xl cursor-pointer hover:text-blue-600" />

            </Link>
           
           
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-5xl font-bold mb-6">
            Let's Work <span className="text-blue-400">Together</span>
          </h2>
          <form>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your message"
              rows="4"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gray-600 rounded-md text-white hover:bg-gray-500 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
