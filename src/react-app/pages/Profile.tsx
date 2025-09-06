import { useState } from 'react';
import { User, Envelope, MapPin, Briefcase, Camera } from '@phosphor-icons/react';
import Card from '@/react-app/components/ui/Card';
import Button from '@/react-app/components/ui/Button';
import Input from '@/react-app/components/ui/Input';
import Header from '@/react-app/components/layout/Header';
import Sidebar from '@/react-app/components/layout/Sidebar';

export default function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    location: 'San Francisco, CA',
    company: 'Tech Corp',
    yearsOfExperience: '3',
    bio: 'Software engineer passionate about building scalable applications and solving complex problems.',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="p-6 space-y-8">
          {/* Header Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
            <p className="text-gray-600">Manage your account information and preferences</p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card>
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                      <User size={32} className="text-white" />
                    </div>
                    <button 
                      disabled
                      className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Camera size={16} className="text-gray-600" />
                    </button>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{formData.firstName} {formData.lastName}</h2>
                    <p className="text-gray-600">{formData.company}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Envelope size={16} />
                      {formData.email}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      {formData.location}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Briefcase size={16} />
                      {formData.yearsOfExperience} years experience
                    </div>
                  </div>
                  
                  <Button variant="outline" disabled className="w-full">
                    Change Photo
                  </Button>
                </div>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                    />
                    <Input
                      label="Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                    />
                  </div>
                  
                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    />
                    <Input
                      label="Company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                  
                  <Input
                    label="Years of Experience"
                    type="number"
                    value={formData.yearsOfExperience}
                    onChange={(e) => handleInputChange('yearsOfExperience', e.target.value)}
                  />
                </div>
              </Card>

              <Card>
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">About</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      value={formData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 bg-white/50 backdrop-blur-sm"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Preferences</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Email Notifications</h4>
                        <p className="text-sm text-gray-600">Receive updates about your progress</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600" />
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Weekly Reminders</h4>
                        <p className="text-sm text-gray-600">Get reminded to practice regularly</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600" />
                      </label>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button disabled>
                  Save Changes
                </Button>
                <Button variant="outline" disabled>
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
