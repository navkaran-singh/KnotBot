import { EnvelopeSimple, Brain } from '@phosphor-icons/react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Email Capture */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Interview Survival Co-pilot</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Join thousands of engineers who've transformed their interview prep. 
              Get early access and exclusive updates.
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="glass rounded-xl p-1 flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="neuro-btn text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
                >
                  <EnvelopeSimple className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          </div>

          {/* Right Column - Links */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Interview Survival Co-pilot. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Built with ❤️ for engineers
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
