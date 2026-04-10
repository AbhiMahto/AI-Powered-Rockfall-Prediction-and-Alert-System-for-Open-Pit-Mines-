// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { Bell, Search, Settings, User, LogOut, Shield, Activity } from 'lucide-react';

// const Header = () => {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       // In a real app, this would trigger search functionality
//       console.log('Searching for:', searchQuery);
//     }
//   };

//   return (
//     <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
//       <div className="flex justify-between items-center px-6 py-4">
//         {/* Logo and Brand */}
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
//               <Shield className="h-6 w-6 text-white" />
//             </div>
//             <div>
//               <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                 RockGuard Pro
//               </h1>
//               <p className="text-xs text-gray-500 font-medium">Safety Intelligence Platform</p>
//             </div>
//           </div>
//         </div>

      

//         <header className="flex items-center justify-center py-4">
//   <div className="text-center">
//     <h1 className="text-xl md:text-2xl font-bold text-gray-900">
//       Indian Mine Safety & Rockfall Prediction System
//     </h1>
//     <h1 className="text-xl md:text-2xl font-bold text-gray-900 mt-1">
//       भारतीय खान सुरक्षा प्रणाली
//     </h1>
//   </div>
// </header>


//         {/* Right Side Actions */}
//         <div className="flex items-center space-x-3">
//           {/* Notifications */}
//           <div className="relative">
//             <button className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors duration-200 relative">
//               <Bell className="h-5 w-5 text-gray-600" />
//               <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
//                 <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
//               </span>
//             </button>
//           </div>

//           {/* Settings */}
//           <button className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors duration-200">
//             <Settings className="h-5 w-5 text-gray-600" />
//           </button>

//           {/* Profile Dropdown */}
//           <div className="relative">
//             <button 
//               onClick={() => setIsProfileOpen(!isProfileOpen)} 
//               className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
//             >
//               <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm shadow-md">
//                 <User className="h-4 w-4" />
//               </div>
//               <div className="text-left hidden sm:block">
//                 <p className="text-sm font-medium text-gray-900">{user?.name || 'Admin User'}</p>
//                 <p className="text-xs text-gray-500">{user?.role || 'Safety Manager'}</p>
//               </div>
//             </button>
            
//             {isProfileOpen && (
//               <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
//                 <div className="px-4 py-3 border-b border-gray-100">
//                   <p className="text-sm font-medium text-gray-900">{user?.name || 'Admin User'}</p>
//                   <p className="text-xs text-gray-500">{user?.email || 'admin@mineguard.com'}</p>
//                 </div>
//                 <button 
//                   onClick={() => { navigate('/profile'); setIsProfileOpen(false); }}
//                   className="w-full flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
//                 >
//                   <User className="h-4 w-4 mr-3" />
//                   Your Profile
//                 </button>
//                 <button 
//                   onClick={() => { navigate('/settings'); setIsProfileOpen(false); }}
//                   className="w-full flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
//                 >
//                   <Settings className="h-4 w-4 mr-3" />
//                   Settings
//                 </button>
//                 <button 
//                   onClick={() => { navigate('/activity'); setIsProfileOpen(false); }}
//                   className="w-full flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
//                 >
//                   <Activity className="h-4 w-4 mr-3" />
//                   Activity Log
//                 </button>
//                 <hr className="my-2" />
//                 <button 
//                   onClick={handleLogout}
//                   className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
//                 >
//                   <LogOut className="h-4 w-4 mr-3" />
//                   Sign out
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Bell, Search, Settings, User, LogOut, Cpu, Activity, Zap } from 'lucide-react';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // isSearchOpen state is not used in the current component, but kept for future use if search bar is re-enabled.
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would trigger search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    // Dark/Opaque Theme: Changed from bg-gray-900/90 backdrop-blur-lg to solid bg-gray-900
    <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50 shadow-xl">
      <div className="flex justify-between items-center px-6 py-3">
        
        {/* LEFT: Logo and Brand (Harmonized with Sidebar) */}
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate('/dashboard')}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
            <Cpu className="h-5 w-5 text-white" />
          </div>
          <div className="hidden sm:block">
            {/* UPDATED: Using a text gradient for "ROCKGUARD" to make it pop and clear */}
            <h1 className="text-xl font-extrabold tracking-wider">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ROCKGUARD
              </span>
              <span className="text-cyan-400 ml-1">AI</span>
            </h1>
          </div>
        </div>

        {/* CENTER: Title */}
        <div className="flex-1 max-w-xl flex items-center justify-center mx-4">
            {/* Main Title (Hidden on small screens) */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-200 hidden lg:block">
                Indian Mine Safety & Rockfall Prediction System
              </h1>
              <h1 className="text-lg font-semibold text-gray-500 mt-0.5 hidden lg:block">
                भारतीय खान सुरक्षा प्रणाली
              </h1>
            </div>
        </div>

        {/* RIGHT: Actions and Profile */}
        <div className="flex items-center space-x-1 sm:space-x-3">
          
          {/* Notifications */}
          <div className="relative">
            <button className="p-2 rounded-full text-gray-300 hover:bg-gray-700 transition-colors duration-200 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-0 -right-0.5 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold text-white border border-gray-900">
                3
              </span>
            </button>
          </div>

          {/* Settings (Icon only) */}
          <button className="p-2 rounded-full text-gray-300 hover:bg-gray-700 transition-colors duration-200 hidden md:block">
            <Settings className="h-5 w-5" />
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)} 
              // Use slightly darker hover state for dark theme
              className="flex items-center space-x-2 p-1 rounded-xl transition-colors duration-200 focus:outline-none hover:bg-gray-700/50"
            >
              {/* Avatar */}
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
                <User className="h-4 w-4" />
              </div>
              
              {/* Name and Role */}
              <div className="text-left hidden sm:block">
                <p className="text-sm font-medium text-white">{user?.name || 'Admin User'}</p>
                <p className="text-xs text-gray-400">{user?.role || 'Chief Geologist'}</p>
              </div>
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 py-2 z-50 origin-top-right animate-in fade-in zoom-in-95">
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="text-sm font-medium text-white">{user?.name || 'Admin User'}</p>
                  <p className="text-xs text-gray-400">{user?.email || 'admin@rockfall.in'}</p>
                </div>
                
                {/* Dropdown Items - Updated colors for dark theme */}
                <button 
                  onClick={() => { navigate('/profile'); setIsProfileOpen(false); }}
                  className="w-full flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-700 transition-colors text-left"
                >
                  <User className="h-4 w-4 mr-3 text-cyan-400" />
                  Your Profile
                </button>
                <button 
                  onClick={() => { navigate('/settings'); setIsProfileOpen(false); }}
                  className="w-full flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-700 transition-colors text-left"
                >
                  <Settings className="h-4 w-4 mr-3 text-cyan-400" />
                  System Settings
                </button>
                <button 
                  onClick={() => { navigate('/activity'); setIsProfileOpen(false); }}
                  className="w-full flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-700 transition-colors text-left"
                >
                  <Activity className="h-4 w-4 mr-3 text-cyan-400" />
                  Activity Log
                </button>
                <hr className="my-2 border-gray-700" />
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-2.5 text-sm text-red-400 hover:bg-red-900/30 transition-colors text-left"
                >
                  <LogOut className="h-4 w-4 mr-3" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
