import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg- text-white py-8 ">
      <div className="container mx-auto px-4">
        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">
          <Link href="/" className="hover:text-info">Home</Link>
          <Link href="/about" className="hover:text-info">About</Link>
          <Link href="/skills" className="hover:text-info">Skills</Link>
          <Link href="/projects" className="hover:text-info">Projects</Link>
          <Link href="/blogs" className="hover:text-info">Blogs</Link>
          <Link href="/services" className="hover:text-info">Services</Link>
          <Link href="/contact" className="hover:text-info">Contact</Link>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700 w-full" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} All rights reserved by <span className="text-info text-base font-semibold">Md Sizzad Hosen</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
