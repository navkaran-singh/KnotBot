import { Target, Clock, TrendUp } from '@phosphor-icons/react';

export default function Mission() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Mission Statement */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                We're on a mission to{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  end wasted time
                </span>{' '}
                in coding prep.
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Engineers shouldn't grind hundreds of problems just to fail interviews. 
                Our co-pilot gives clarity, speed, and confidence when it matters most.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Precision Over Volume</h3>
                  <p className="text-gray-300">Focus on what actually matters instead of solving random problems.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Time Is Sacred</h3>
                  <p className="text-gray-300">Every engineer's time should be spent learning, not guessing.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Real Understanding</h3>
                  <p className="text-gray-300">Build lasting knowledge that works under interview pressure.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">The Problem We're Solving</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                  <span className="text-gray-300">Average prep time</span>
                  <span className="text-red-400 font-bold">6 months</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                  <span className="text-gray-300">Problems solved</span>
                  <span className="text-red-400 font-bold">500+</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                  <span className="text-gray-300">Interview pass rate</span>
                  <span className="text-red-400 font-bold">30%</span>
                </div>
              </div>

              <div className="my-6 text-center">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-2" />
                <span className="text-gray-400 text-sm">With Interview Survival Co-pilot</span>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mt-2" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <span className="text-gray-300">Time to interview-ready</span>
                  <span className="text-green-400 font-bold">2-3 weeks</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <span className="text-gray-300">Targeted problems</span>
                  <span className="text-green-400 font-bold">50-80</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <span className="text-gray-300">Success rate</span>
                  <span className="text-green-400 font-bold">95%</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="neuro-btn glow text-white px-8 py-4 rounded-xl font-semibold text-lg">
                Join the Mission
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
