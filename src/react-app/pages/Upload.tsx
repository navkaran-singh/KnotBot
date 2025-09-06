import { useState } from 'react';
import { CloudArrowUp, FileText, X } from '@phosphor-icons/react';
import Card from '@/react-app/components/ui/Card';
import Button from '@/react-app/components/ui/Button';
import Header from '@/react-app/components/layout/Header';
import Sidebar from '@/react-app/components/layout/Sidebar';

export default function Upload() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleFileUpload = () => {
    // Simulate file upload
    setUploadedFile('sample_resume.pdf');
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="p-6 space-y-8">
          {/* Header Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Upload Resume</h1>
            <p className="text-gray-600">Upload your resume to get personalized interview recommendations</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            {/* Upload Card */}
            <Card>
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Resume Analysis</h2>
                
                {!uploadedFile ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                    <CloudArrowUp size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Drag & drop your resume here
                    </h3>
                    <p className="text-gray-600 mb-4">
                      or click to browse your files
                    </p>
                    <Button disabled onClick={handleFileUpload}>
                      Choose File
                    </Button>
                    <p className="text-xs text-gray-500 mt-4">
                      Supports PDF, DOC, DOCX files up to 10MB
                    </p>
                  </div>
                ) : (
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{uploadedFile}</p>
                          <p className="text-sm text-gray-500">2.3 MB • Uploaded just now</p>
                        </div>
                      </div>
                      <button
                        onClick={removeFile}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Analysis Results */}
            {uploadedFile && (
              <Card>
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">Analysis Results</h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                      <h3 className="font-semibold text-green-800 mb-2">Strengths Identified</h3>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Strong backend development experience</li>
                        <li>• Python and JavaScript proficiency</li>
                        <li>• Database design experience</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                      <h3 className="font-semibold text-yellow-800 mb-2">Areas to Improve</h3>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• System design fundamentals</li>
                        <li>• Algorithm optimization techniques</li>
                        <li>• Distributed systems knowledge</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <h3 className="font-semibold text-blue-800 mb-2">Recommended Focus Areas</h3>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Dynamic Programming problems</li>
                        <li>• Graph algorithms</li>
                        <li>• System design practice</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button disabled>
                      Generate Study Plan
                    </Button>
                    <Button variant="outline" disabled>
                      View Detailed Report
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Instructions */}
            <Card>
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">How It Works</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-indigo-600">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Upload Your Resume</h3>
                      <p className="text-sm text-gray-600">Our AI analyzes your experience and skills</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-indigo-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Get Personalized Insights</h3>
                      <p className="text-sm text-gray-600">Receive targeted recommendations based on your background</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-indigo-600">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Start Focused Practice</h3>
                      <p className="text-sm text-gray-600">Begin your customized interview preparation journey</p>
                    </div>
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
