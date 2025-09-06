import { useState } from 'react';
import { Table, ChartBar, MagnifyingGlass, Funnel } from '@phosphor-icons/react';
import Card from '@/react-app/components/ui/Card';
import Button from '@/react-app/components/ui/Button';
import Input from '@/react-app/components/ui/Input';
import Header from '@/react-app/components/layout/Header';
import Sidebar from '@/react-app/components/layout/Sidebar';

export default function Results() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'table' | 'graph'>('table');

  const mockData = [
    { name: 'Two Sum', topic: 'Arrays', difficulty: 'Easy', score: 95, attempts: 3, lastAttempt: '2 days ago' },
    { name: 'Valid Parentheses', topic: 'Stack', difficulty: 'Easy', score: 88, attempts: 2, lastAttempt: '3 days ago' },
    { name: 'Merge Intervals', topic: 'Arrays', difficulty: 'Medium', score: 72, attempts: 5, lastAttempt: '1 day ago' },
    { name: 'Binary Tree Inorder', topic: 'Trees', difficulty: 'Medium', score: 65, attempts: 4, lastAttempt: '4 days ago' },
    { name: 'Longest Substring', topic: 'Sliding Window', difficulty: 'Medium', score: 81, attempts: 3, lastAttempt: '5 days ago' },
    { name: 'Word Ladder', topic: 'BFS', difficulty: 'Hard', score: 45, attempts: 7, lastAttempt: '1 week ago' },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="p-6 space-y-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Results & Insights</h1>
              <p className="text-gray-600">Track your problem-solving progress and performance</p>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-2 glass rounded-xl p-1">
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                  viewMode === 'table' 
                    ? 'bg-indigo-500 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Table size={16} />
                Table
              </button>
              <button
                onClick={() => setViewMode('graph')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                  viewMode === 'graph' 
                    ? 'bg-indigo-500 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ChartBar size={16} />
                Graph
              </button>
            </div>
          </div>

          {/* Filters */}
          <Card>
            <div className="grid md:grid-cols-4 gap-4">
              <Input 
                placeholder="Search problems..." 
                icon={<MagnifyingGlass size={16} className="text-gray-400" />}
              />
              <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm">
                <option>All Topics</option>
                <option>Arrays</option>
                <option>Trees</option>
                <option>Dynamic Programming</option>
                <option>Graphs</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm">
                <option>All Difficulties</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
              <Button variant="outline" disabled>
                <Funnel size={16} />
                More Filters
              </Button>
            </div>
          </Card>

          {/* Content Area */}
          {viewMode === 'table' ? (
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Problem</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Topic</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Difficulty</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Score</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Attempts</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Last Attempt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4">
                          <div className="font-medium text-gray-900">{item.name}</div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-gray-600">{item.topic}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                            {item.difficulty}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(item.score)}`}>
                            {item.score}%
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-gray-600">{item.attempts}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-gray-600">{item.lastAttempt}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ) : (
            <Card>
              <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl">
                <div className="text-center space-y-4">
                  <ChartBar size={48} className="text-gray-400 mx-auto" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Graph View</h3>
                    <p className="text-gray-600">Performance visualization will appear here</p>
                  </div>
                  <Button variant="outline" disabled>
                    Generate Chart
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}
