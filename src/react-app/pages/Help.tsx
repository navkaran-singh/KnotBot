import { useState } from 'react';
import { Question, ChatCircle, FileText, Lightbulb } from '@phosphor-icons/react';
import Card from '@/react-app/components/ui/Card';
import Button from '@/react-app/components/ui/Button';
import Input from '@/react-app/components/ui/Input';
import Header from '@/react-app/components/layout/Header';
import Sidebar from '@/react-app/components/layout/Sidebar';

export default function Help() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const faqs = [
    {
      question: "How does the AI weakness radar work?",
      answer: "Our AI analyzes your problem-solving patterns, time taken, and accuracy across different topics to identify areas where you need the most improvement."
    },
    {
      question: "Can I customize my study roadmap?",
      answer: "Yes! While our AI creates an optimized path, you can adjust the roadmap based on your preferences and timeline."
    },
    {
      question: "How accurate are the interview predictions?",
      answer: "Our predictions are based on data from thousands of successful interviews and have a 95% accuracy rate for identifying readiness."
    },
    {
      question: "What if I'm preparing for a specific company?",
      answer: "You can filter problems and practice sessions based on specific companies and their known interview patterns."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="p-6 space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
            <p className="text-gray-600">Find answers to common questions and get help</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card hover className="text-center">
                <ChatCircle size={48} className="text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                <Button size="sm" disabled>Start Chat</Button>
              </Card>
              
              <Card hover className="text-center">
                <FileText size={48} className="text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 mb-4">Browse our comprehensive guides</p>
                <Button size="sm" variant="outline" disabled>View Docs</Button>
              </Card>
              
              <Card hover className="text-center">
                <Lightbulb size={48} className="text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tutorials</h3>
                <p className="text-gray-600 mb-4">Watch step-by-step video guides</p>
                <Button size="sm" variant="outline" disabled>Watch Videos</Button>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Contact Support</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Name" placeholder="Your name" />
                  <Input label="Email" type="email" placeholder="your@email.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm">
                    <option>General Question</option>
                    <option>Technical Issue</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm"
                    placeholder="Describe your question or issue..."
                  />
                </div>
                
                <Button disabled>Send Message</Button>
              </div>
            </Card>

            {/* FAQ */}
            <Card>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Question size={24} className="text-indigo-600" />
                  <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex justify-between items-center cursor-pointer p-4 rounded-xl hover:bg-gray-50 transition-colors">
                        <h3 className="font-medium text-gray-900">{faq.question}</h3>
                        <div className="text-gray-400 group-open:rotate-180 transition-transform">
                          ▼
                        </div>
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </Card>

            {/* Additional Resources */}
            <Card>
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Additional Resources</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <button 
                    disabled 
                    className="p-4 text-left rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <h3 className="font-medium text-gray-900 mb-1">Getting Started Guide</h3>
                    <p className="text-sm text-gray-600">Learn the basics of using Interview Survival Co-pilot</p>
                  </button>
                  
                  <button 
                    disabled 
                    className="p-4 text-left rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <h3 className="font-medium text-gray-900 mb-1">Best Practices</h3>
                    <p className="text-sm text-gray-600">Tips for effective interview preparation</p>
                  </button>
                  
                  <button 
                    disabled 
                    className="p-4 text-left rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <h3 className="font-medium text-gray-900 mb-1">Troubleshooting</h3>
                    <p className="text-sm text-gray-600">Common issues and solutions</p>
                  </button>
                  
                  <button 
                    disabled 
                    className="p-4 text-left rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <h3 className="font-medium text-gray-900 mb-1">API Documentation</h3>
                    <p className="text-sm text-gray-600">Technical documentation for developers</p>
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
