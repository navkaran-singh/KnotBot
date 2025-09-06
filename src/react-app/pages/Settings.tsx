import { useState } from 'react';
import { Bell, Shield, Moon, User } from '@phosphor-icons/react';
import Card from '@/react-app/components/ui/Card';
import Button from '@/react-app/components/ui/Button';
import Header from '@/react-app/components/layout/Header';
import Sidebar from '@/react-app/components/layout/Sidebar';

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="p-6 space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Manage your account preferences and settings</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Account Settings */}
            <Card>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <User size={24} className="text-indigo-600" />
                  <h2 className="text-xl font-bold text-gray-900">Account Settings</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <h3 className="font-medium text-gray-900">Change Password</h3>
                      <p className="text-sm text-gray-600">Update your account password</p>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      Change
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600">Add extra security to your account</p>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      Enable
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <h3 className="font-medium text-gray-900">Delete Account</h3>
                      <p className="text-sm text-gray-600">Permanently delete your account</p>
                    </div>
                    <Button variant="outline" size="sm" disabled className="text-red-600 border-red-300">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Notifications */}
            <Card>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Bell size={24} className="text-indigo-600" />
                  <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    { title: 'Email Notifications', desc: 'Receive updates via email' },
                    { title: 'Practice Reminders', desc: 'Daily reminders to practice' },
                    { title: 'Progress Updates', desc: 'Weekly progress summaries' },
                    { title: 'New Features', desc: 'Get notified about new features' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600" />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Privacy & Security */}
            <Card>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Shield size={24} className="text-indigo-600" />
                  <h2 className="text-xl font-bold text-gray-900">Privacy & Security</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <h3 className="font-medium text-gray-900">Data Export</h3>
                      <p className="text-sm text-gray-600">Download your data</p>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      Export
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <h3 className="font-medium text-gray-900">Privacy Settings</h3>
                      <p className="text-sm text-gray-600">Manage data sharing preferences</p>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Appearance */}
            <Card>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Moon size={24} className="text-indigo-600" />
                  <h2 className="text-xl font-bold text-gray-900">Appearance</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <h3 className="font-medium text-gray-900">Dark Mode</h3>
                      <p className="text-sm text-gray-600">Switch to dark theme</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600" />
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <h3 className="font-medium text-gray-900">Language</h3>
                      <p className="text-sm text-gray-600">Choose your preferred language</p>
                    </div>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
