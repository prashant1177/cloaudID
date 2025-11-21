
import { Cloud, Twitter, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Cloud className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold">One ID</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Redefining digital identity for the modern web. Secure, private, and universally connected.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Platform</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 21-11-2025 Created By Prashant Patil.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};