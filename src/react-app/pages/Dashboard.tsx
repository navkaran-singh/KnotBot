import { useState } from 'react';
import { TrendUp, Target, Brain, Clock, ArrowRight } from '@phosphor-icons/react';
import Card from '@/react-app/components/ui/Card';
import Button from '@/react-app/components/ui/Button';
import Header from '@/react-app/components/layout/Header';
import Sidebar from '@/react-app/components/layout/Sidebar';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { label: 'Problems Solved', value: '47', change: '+12%', icon: TrendUp, color: 'text-green-500' },
    { label: 'Accuracy Rate', value: '78%', change: '+5%', icon: Target, color: 'text-blue-500' },
    { label: 'Study Streak', value: '12 days', change: '+3', icon: Brain, color: 'text-purple-500' },
    { label: 'Time Spent', value: '24h', change: '+2h', icon: Clock, color: 'text-orange-500' },
  ];

  const weaknessData = [
    { topic: 'Dynamic Programming', score: 45, color: 'bg-red-400' },
    { topic: 'Graph Algorithms', score: 62, color: 'bg-yellow-400' },
    { topic: 'Binary Trees', score: 78, color: 'bg-green-400' },
    { topic: 'Arrays & Strings', score: 85, color: 'bg-green-500' },
  ];

  const roadmapItems = [
    { problem: 'Climbing Stairs', difficulty: 'Easy', status: 'completed' },
    { problem: 'House Robber', difficulty: 'Medium', status: 'in-progress' },
    { problem: 'Longest Common Subsequence', difficulty: 'Medium', status: 'upcoming' },
    { problem: 'Edit Distance', difficulty: 'Hard', status: 'upcoming' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="p-6 space-y-8">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
            <p className="text-gray-600">Here's your coding interview prep progress</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} hover>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center`}>
                    <stat.icon size={24} className={stat.color} />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Weakness Radar */}
            <Card>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Weakness Radar</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                
                <div className="space-y-4">
                  {weaknessData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{item.topic}</span>
                        <span className="text-sm text-gray-500">{item.score}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.color}`} 
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Smart Roadmap */}
            <Card>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Smart Roadmap</h2>
                  <Button variant="outline" size="sm">Customize</Button>
                </div>
                
                <div className="space-y-3">
                  {roadmapItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'completed' ? 'bg-green-500' :
                        item.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{item.problem}</p>
                        <p className="text-xs text-gray-500">{item.difficulty}</p>
                      </div>
                      <ArrowRight size={16} className="text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Button disabled className="h-20 flex-col gap-2">
                  <Brain size={24} />
                  Start Practice Session
                </Button>
                <Button variant="outline" disabled className="h-20 flex-col gap-2">
                  <Target size={24} />
                  Take Assessment
                </Button>
                <Button variant="outline" disabled className="h-20 flex-col gap-2">
                  <TrendUp size={24} />
                  View Progress
                </Button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
