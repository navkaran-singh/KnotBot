import { ArrowRight, Brain, TrendUp, ChartLineUp } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
        {/* Floating Network Nodes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass text-white px-4 py-2 rounded-full text-sm font-medium">
              <Brain className="w-4 h-4" />
              AI-Powered Interview Prep
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Stop wasting time.{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Start preparing smarter.
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-xl">
                Your AI-powered co-pilot for coding interviews — weakness radar, smart roadmap, and visual explanations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="neuro-btn glow text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-2 group">
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="glass text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">
                <TrendUp className="w-5 h-5" />
                View Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2.5x</div>
                <div className="text-sm text-gray-400">Faster Prep</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Engineers Helped</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="glass rounded-2xl p-6 shadow-2xl">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">Your Prep Dashboard</h3>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  
                  {/* Weakness Radar */}
                  <div className="glass-dark rounded-xl p-4">
                    <h4 className="text-gray-300 font-medium mb-3">Weakness Radar</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-2">
                          <div className="w-6 h-6 bg-red-400 rounded-full" />
                        </div>
                        <span className="text-xs text-gray-400">Arrays</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-2">
                          <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                        </div>
                        <span className="text-xs text-gray-400">DP</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                          <div className="w-6 h-6 bg-green-400 rounded-full" />
                        </div>
                        <span className="text-xs text-gray-400">Trees</span>
                      </div>
                    </div>
                  </div>

                  {/* Smart Roadmap */}
                  <div className="glass-dark rounded-xl p-4">
                    <h4 className="text-gray-300 font-medium mb-3">Smart Roadmap</h4>
                    <div className="space-y-2">
                      {['Two Sum (Easy)', 'Valid Parentheses (Easy)', 'Merge Intervals (Medium)'].map((problem, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                          <ChartLineUp className="w-4 h-4 text-indigo-400" />
                          <span className="text-sm text-gray-300">{problem}</span>
                          <div className="ml-auto w-2 h-2 bg-indigo-400 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-3">
                <Brain className="w-8 h-8 text-indigo-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
