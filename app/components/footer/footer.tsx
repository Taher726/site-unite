import { Facebook, Twitter, Linkedin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#30394A] text-gray-300 px-6 py-10 rounded-t-3xl mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Left: Description + Social Icons */}
        <div className="flex flex-col items-start justify-center">
          <p className="text-sm leading-relaxed mb-6">
            Our data center powers fast, secure AI and big data solutions.
            Follow us on LinkedIn, Facebook, and Instagram for updates.
          </p>

        </div>

        {/* Middle: Company Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Media Kit</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Right: Collaborators Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Collaborators</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">University of Sfax</a></li>
            <li><a href="#" className="hover:underline">IEEE</a></li>
          </ul>
        </div>

        <div>
          <ul className='space-y-2 text-sm'>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Help Centre</a></li>
            <li><a href="#" className="hover:underline">Tutorials</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom divider and copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>© 2025 Created with ❤️</p>
      </div>
    </footer>
  );
}
