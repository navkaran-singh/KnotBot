import { MagnifyingGlass, MapPin, BookOpen } from '@phosphor-icons/react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MagnifyingGlass,
      title: 'Quick Diagnostic',
      subtitle: 'Weakness Radar',
      description: 'Take our 15-minute assessment to identify your coding interview blind spots.',
      details: 'Our AI analyzes your problem-solving patterns, speed, and accuracy across all major topics.',
    },
    {
      icon: MapPin,
      title: 'Smart Roadmap',
      subtitle: 'Focus Only on What Matters',
      description: 'Get a personalized study plan targeting your specific weaknesses first.',
      details: 'Skip the grinding. Our algorithm creates the shortest path to interview readiness.',
    },
    {
      icon: BookOpen,
      title: 'Visual Explanations',
      subtitle: 'Real Confidence',
      description: 'Master concepts with step-by-step visual breakdowns and instant practice feedback.',
      details: 'No more confusion. See exactly how algorithms work with interactive diagrams.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            How It <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to interview mastery. No more guesswork.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 z-0" />
              )}
              
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-indigo-600" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-indigo-600 font-medium text-sm">{step.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 italic">{step.details}</p>
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="neuro-btn glow text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-2 group">
            Start Your Diagnostic
            <MagnifyingGlass className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
