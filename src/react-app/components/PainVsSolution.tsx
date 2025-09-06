import { Clock, Target, Brain, TrendUp, X, Check } from '@phosphor-icons/react';

export default function PainVsSolution() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Stop the <span className="text-red-500">endless grind</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional interview prep is broken. We fixed it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* The Old Way */}
          <div className="group">
            <div className="glass border-red-200/50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:border-red-300/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Old Way</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endless Grinding</h4>
                    <p className="text-gray-600">Solve 500+ problems with no clear direction or progress tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Scattered Preparation</h4>
                    <p className="text-gray-600">Random topics, no personalized focus on your actual weaknesses</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Brain className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Interview Anxiety</h4>
                    <p className="text-gray-600">Show up uncertain, stressed, and unprepared for what matters</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-red-50 rounded-xl border border-red-200">
                <p className="text-red-800 font-medium text-center">
                  Result: Months wasted, confidence crushed
                </p>
              </div>
            </div>
          </div>

          {/* The New Way */}
          <div className="group">
            <div className="glass border-green-200/50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:border-green-300/50 glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The New Way</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <TrendUp className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">AI-Driven Roadmap</h4>
                    <p className="text-gray-600">Personalized learning path based on your specific skill gaps</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Targeted Practice</h4>
                    <p className="text-gray-600">Focus only on what matters — weakness radar shows exactly what to fix</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Brain className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Real Confidence</h4>
                    <p className="text-gray-600">Visual explanations and instant clarity build lasting understanding</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
                <p className="text-indigo-800 font-medium text-center">
                  Result: 2-3 weeks to interview-ready confidence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
