import { Facebook, Twitter, Linkedin, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <div className='bg-white'>
      <footer className="bg-[#30394A] text-gray-300 px-6 py-10 rounded-t-3xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left: Description + Social Icons */}
          <div className="flex flex-col items-start justify-center">
            <p className="text-sm leading-relaxed mb-6">
              Our data center powers fast, secure AI and big data solutions.
            </p>

          </div>

          {/* Middle: Company Links */} 
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/features" className="hover:underline">Features</Link></li>
              <li><Link href="/resources" className="hover:underline">Resources</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Right: Collaborators Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Collaborators</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://uss.rnu.tn/" className="hover:underline" target='blank'>University of Sfax</a></li>
              <li><a href="https://fss.rnu.tn/" className="hover:underline" target='blank'>Faculty of Sciences of Sfax</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 HPC, Big Data & AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
