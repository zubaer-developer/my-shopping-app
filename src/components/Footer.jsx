import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              N
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              NEXT<span className="text-blue-500">APP</span>
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Building the next generation of web experiences with speed,
            efficiency, and elegant design. Your one-stop shop for premium
            items.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
              <Facebook size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
              <Twitter size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
              <Instagram size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
              <Linkedin size={18} />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-4 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/items"
                className="hover:text-blue-500 transition-colors"
              >
                Browse Items
              </Link>
            </li>
            <li>
              <Link
                href="/add-item"
                className="hover:text-blue-500 transition-colors"
              >
                Add New Item
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="hover:text-blue-500 transition-colors"
              >
                Login / Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
            Support
          </h4>
          <ul className="space-y-4 font-medium">
            <li className="hover:text-blue-500 transition-colors cursor-pointer">
              Help Center
            </li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">
              Cookie Settings
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <MapPin size={20} className="text-blue-500" />
              <span>123 Tech Avenue, Dhaka, BD</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-blue-500" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-blue-500" />
              <span>support@nextapp.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left items-center">
        <p className="text-slate-500 text-sm italic">
          © 2026 My Shopping App. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 flex justify-center md:justify-end gap-6 text-sm font-bold text-slate-500 uppercase tracking-tighter">
          <span>English</span>
          <span>USD</span>
          <span>Bangladesh</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
