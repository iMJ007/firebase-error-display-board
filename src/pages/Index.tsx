
import React from 'react';
import ErrorCodeTable from '@/components/ErrorCodeTable';
import ThemeToggle from '@/components/ThemeToggle';
import { Shield, Database, Code2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-500">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-3xl transition-colors duration-500"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 dark:from-indigo-600/20 dark:to-pink-600/20 rounded-full blur-3xl transition-colors duration-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 dark:from-cyan-600/10 dark:to-blue-600/10 rounded-full blur-3xl transition-colors duration-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-gray-200/30 dark:border-gray-700/30 mb-6 transition-colors duration-300">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Authentication
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight transition-colors duration-300">
            Firebase Auth
            <span className="block text-4xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Error Reference
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Comprehensive guide to Firebase Authentication error codes and their descriptions. 
            Search and explore all authentication-related error messages.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/30 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">47</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Error Codes</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/30 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">100%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Coverage</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/30 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">Auth</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Category</p>
              </div>
            </div>
          </div>
        </div>

        {/* Error Code Table */}
        <ErrorCodeTable />

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200/30 dark:border-gray-700/30 transition-colors duration-300">
          <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
            Built with love by{' '}
            <a 
              href="https://junaidgandhi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 underline decoration-1 underline-offset-2 hover:decoration-2"
            >
              M Junaid Gandhi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
