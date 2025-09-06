import { Target, MapPin, Eye, ChatCircle } from '@phosphor-icons/react';

export default function Features() {
  const features = [
    {
      icon: Target,
      title: 'Weakness Radar',
      description: 'Visual heatmap showing exactly which topics need attention',
      details: ['Real-time progress tracking', 'Topic-specific difficulty analysis', 'Performance trend visualization'],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: MapPin,
      title: 'Smart Roadmap',
      description: 'AI-curated problem sequences optimized for your learning style',
      details: ['Personalized difficulty progression', 'Time-based milestone planning', 'Adaptive problem selection'],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Eye,
      title: 'Visual Explanations',
      description: 'Step-by-step algorithm breakdowns with interactive diagrams',
      details: ['Algorithm visualization', 'Code execution tracing', 'Complexity analysis charts'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: ChatCircle,
      title: 'Mock Interview Mode',
      description: 'AI-powered practice sessions with real-time feedback',
      details: ['Simulated interview pressure', 'Communication skill evaluation', 'Instant performance scoring'],
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Powerful <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to ace your coding interviews, powered by AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature List */}
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full`} />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Demo Badge */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm group-hover:underline transition-all duration-200">
                    View Demo →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="mt-20 glass rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                See It In Action
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Watch how our AI identifies your weaknesses, creates a custom roadmap, 
                and guides you through visual explanations that actually make sense.
              </p>
              <button className="neuro-btn text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
                Watch 2-min Demo
                <Eye className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="glass-dark rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Live Demo</span>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="space-y-3">
                  {['Analyzing coding patterns...', 'Generating roadmap...', 'Creating visual explanations...'].map((step, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                      <span className="text-gray-300 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
