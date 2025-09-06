import { useState } from 'react';
import { ArrowLeft, MagnifyingGlass } from '@phosphor-icons/react';
import Button from '@/react-app/components/ui/Button';
import Header from '@/react-app/components/layout/Header';
import Sidebar from '@/react-app/components/layout/Sidebar';

export default function NotFound() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="p-6">
          <div className="max-w-2xl mx-auto text-center py-20">
            {/* Large 404 */}
            <div className="mb-8">
              <h1 className="text-9xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                404
              </h1>
            </div>

            {/* Error Message */}
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Page Not Found</h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
              </p>
            </div>

            {/* Illustration */}
            <div className="mb-12">
              <div className="w-48 h-48 mx-auto glass rounded-2xl flex items-center justify-center">
                <MagnifyingGlass size={64} className="text-gray-400" />
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button disabled>
                  <ArrowLeft size={16} />
                  Go Back Home
                </Button>
                <Button variant="outline" disabled>
                  Contact Support
                </Button>
              </div>
              
              <p className="text-sm text-gray-500">
                If you think this is a mistake, please contact our support team.
              </p>
            </div>

            {/* Helpful Links */}
            <div className="mt-16 p-6 glass rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <button 
                  disabled 
                  className="p-4 text-left rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <h4 className="font-medium text-gray-900">Dashboard</h4>
                  <p className="text-sm text-gray-600">View your progress and stats</p>
                </button>
                <button 
                  disabled 
                  className="p-4 text-left rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <h4 className="font-medium text-gray-900">Practice</h4>
                  <p className="text-sm text-gray-600">Start solving problems</p>
                </button>
                <button 
                  disabled 
                  className="p-4 text-left rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <h4 className="font-medium text-gray-900">Results</h4>
                  <p className="text-sm text-gray-600">Check your performance</p>
                </button>
                <button 
                  disabled 
                  className="p-4 text-left rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <h4 className="font-medium text-gray-900">Profile</h4>
                  <p className="text-sm text-gray-600">Manage your account</p>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
