
import React, { useState } from 'react';
import { Search, Code, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface ErrorCode {
  code: string;
  description: string;
}

const errorCodes: ErrorCode[] = [
  { code: 'auth/claims-too-large', description: 'Custom claims are larger than 1000 bytes.' },
  { code: 'auth/email-already-exists', description: 'Email already used by another account.' },
  { code: 'auth/id-token-expired', description: 'ID token has expired.' },
  { code: 'auth/id-token-revoked', description: 'ID token has been revoked.' },
  { code: 'auth/insufficient-permission', description: 'The credentials used lack the permission to perform the requested auth operation.' },
  { code: 'auth/internal-error', description: 'Internal error. Usually transient — try again.' },
  { code: 'auth/invalid-argument', description: 'A method was called with invalid arguments.' },
  { code: 'auth/invalid-claims', description: 'Custom user claims are improperly formatted.' },
  { code: 'auth/invalid-continue-uri', description: 'The continue URL must be a valid URL string.' },
  { code: 'auth/invalid-creation-time', description: 'The creation time must be a valid UTC date string.' },
  { code: 'auth/invalid-credential', description: 'The credential is malformed or has expired.' },
  { code: 'auth/invalid-disabled-field', description: 'The disabled field must be a boolean.' },
  { code: 'auth/invalid-display-name', description: 'Display name must be a valid string.' },
  { code: 'auth/invalid-dynamic-link-domain', description: 'The dynamic link domain is invalid.' },
  { code: 'auth/invalid-email', description: 'Email is not valid.' },
  { code: 'auth/invalid-hash-algorithm', description: 'The hashing algorithm is unsupported.' },
  { code: 'auth/invalid-hash-block-size', description: 'Hash block size must be a valid number.' },
  { code: 'auth/invalid-hash-derived-key-length', description: 'Derived key length must be a valid number.' },
  { code: 'auth/invalid-hash-key', description: 'The key must be a valid byte buffer.' },
  { code: 'auth/invalid-hash-memory-cost', description: 'Memory cost must be a valid number.' },
  { code: 'auth/invalid-hash-parallelization', description: 'Parallelization must be a valid number.' },
  { code: 'auth/invalid-hash-rounds', description: 'Rounds must be a valid number.' },
  { code: 'auth/invalid-hash-salt-separator', description: 'Salt separator must be a valid byte buffer.' },
  { code: 'auth/invalid-id-token', description: 'The provided ID token is malformed or invalid.' },
  { code: 'auth/invalid-last-sign-in-time', description: 'The last sign-in time must be a valid UTC string.' },
  { code: 'auth/invalid-page-token', description: 'The page token provided is not valid.' },
  { code: 'auth/invalid-password', description: 'Password is not strong enough or is empty.' },
  { code: 'auth/invalid-password-hash', description: 'Password hash must be a valid byte buffer.' },
  { code: 'auth/invalid-password-salt', description: 'Password salt must be a valid byte buffer.' },
  { code: 'auth/invalid-phone-number', description: 'Phone number is invalid.' },
  { code: 'auth/invalid-photo-url', description: 'Photo URL is invalid.' },
  { code: 'auth/invalid-provider-id', description: 'Provider ID is not supported.' },
  { code: 'auth/invalid-session-cookie-duration', description: 'Session cookie duration must be between 5 minutes and 2 weeks.' },
  { code: 'auth/invalid-uid', description: 'UID must be a non-empty string ≤ 128 characters.' },
  { code: 'auth/maximum-user-count-exceeded', description: 'You tried to import too many users at once.' },
  { code: 'auth/missing-android-pkg-name', description: 'Android package name must be provided for link generation.' },
  { code: 'auth/missing-continue-uri', description: 'A valid `continueUrl` must be provided.' },
  { code: 'auth/missing-hash-algorithm', description: 'Hash algorithm must be specified for import.' },
  { code: 'auth/missing-ios-bundle-id', description: 'iOS bundle ID must be provided.' },
  { code: 'auth/missing-uid', description: 'No UID provided for the operation.' },
  { code: 'auth/operation-not-allowed', description: 'The auth provider is disabled in the Firebase Console.' },
  { code: 'auth/phone-number-already-exists', description: 'Another account already uses this phone number.' },
  { code: 'auth/project-not-found', description: 'Firebase project was not found or access is unauthorized.' },
  { code: 'auth/reserved-claims', description: 'One or more custom claims are reserved and cannot be set.' },
  { code: 'auth/session-cookie-expired', description: 'The session cookie has expired.' },
  { code: 'auth/session-cookie-revoked', description: 'The session cookie has been revoked.' },
  { code: 'auth/uid-already-exists', description: 'The UID is already in use.' },
  { code: 'auth/user-not-found', description: 'No user record found for the given identifier.' },
  { code: 'auth/user-disabled', description: 'The user account has been disabled.' },
  { code: 'auth/user-token-expired', description: 'The user\'s ID token has expired. (Alias of `auth/id-token-expired`)' }
];

const ErrorCodeTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCodes = errorCodes.filter(
    (error) =>
      error.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      error.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5 transition-colors duration-300" />
        <Input
          type="text"
          placeholder="Search error codes or descriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12 text-base bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-sm focus:bg-white dark:focus:bg-gray-800 transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />
      </div>

      {/* Table Container */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/30 dark:border-gray-700/30 overflow-hidden transition-colors duration-300">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-gray-700/80 dark:to-gray-600/80 backdrop-blur-sm px-6 py-4 border-b border-gray-200/30 dark:border-gray-700/30 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2 flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
              <span className="font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">Error Code</span>
            </div>
            <div className="lg:col-span-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 transition-colors duration-300" />
              <span className="font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">Description</span>
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100/50 dark:divide-gray-700/50 max-h-[600px] overflow-y-auto transition-colors duration-300">
          {filteredCodes.map((error, index) => (
            <div
              key={error.code}
              className="px-6 py-4 hover:bg-blue-50/30 dark:hover:bg-gray-700/30 transition-all duration-200 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-start">
                <div className="lg:col-span-2">
                  <code className="inline-block bg-gray-100/80 dark:bg-gray-700/80 text-red-600 dark:text-red-400 px-3 py-1.5 rounded-lg text-sm font-mono border border-gray-200/50 dark:border-gray-600/50 group-hover:bg-red-50/80 dark:group-hover:bg-red-900/20 transition-colors duration-200">
                    {error.code}
                  </code>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-200">
                    {error.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCodes.length === 0 && (
          <div className="px-6 py-12 text-center">
            <AlertCircle className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4 transition-colors duration-300" />
            <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-300">No error codes found</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm transition-colors duration-300">Try adjusting your search term</p>
          </div>
        )}

        {/* Footer */}
        <div className="bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm px-6 py-3 border-t border-gray-200/30 dark:border-gray-700/30 transition-colors duration-300">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center transition-colors duration-300">
            Showing {filteredCodes.length} of {errorCodes.length} authentication error codes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorCodeTable;
