import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this free?",
      answer: "We offer a free tier with basic diagnostic features and limited roadmap access. Our premium plan unlocks the full AI-powered experience with unlimited mock interviews, detailed visual explanations, and personalized coaching for $29/month."
    },
    {
      question: "Does it replace LeetCode?",
      answer: "Not exactly. We use LeetCode and other platforms as practice sources, but we add the missing layer of intelligence. Think of us as your smart study buddy who knows exactly what you should practice and why, with visual explanations that actually make sense."
    },
    {
      question: "What if my interview is in 2 weeks?",
      answer: "Perfect timing! Our AI creates crash-course roadmaps for urgent interviews. Most users see significant improvement within the first week. We'll focus on your biggest weaknesses first and get you interview-ready fast."
    },
    {
      question: "How is this different from ChatGPT?",
      answer: "ChatGPT gives generic advice. We provide personalized, data-driven insights based on your specific coding patterns. Our weakness radar, adaptive roadmaps, and visual explanations are built specifically for interview prep - not general Q&A."
    },
    {
      question: "Can I trust the roadmap?",
      answer: "Absolutely. Our AI is trained on thousands of successful interview patterns and continuously updated based on real hiring outcomes. Plus, our users consistently report 2.5x faster prep times and 95% pass rates."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Interview Survival Co-pilot.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you succeed. Get in touch anytime.
            </p>
            <button className="neuro-btn text-white px-6 py-3 rounded-xl font-semibold">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
