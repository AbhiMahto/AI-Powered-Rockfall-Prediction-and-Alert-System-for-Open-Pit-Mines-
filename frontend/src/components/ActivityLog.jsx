// import React, { useState } from 'react';
// import { Activity, Clock, User, Shield, AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react';

// const ActivityLog = () => {
//   const [filter, setFilter] = useState('all');
  
//   const activities = [
//     {
//       id: 1,
//       type: 'login',
//       user: 'Admin User',
//       action: 'Logged in successfully',
//       timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
//       status: 'success',
//       details: 'Login from Chrome on Windows'
//     },
//     {
//       id: 2,
//       type: 'alert',
//       user: 'System',
//       action: 'Critical alert triggered',
//       timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
//       status: 'critical',
//       details: 'High risk detected in Zone A-3'
//     },
//     {
//       id: 3,
//       type: 'report',
//       user: 'Admin User',
//       action: 'Generated safety report',
//       timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
//       status: 'info',
//       details: 'Weekly safety report for all zones'
//     },
//     {
//       id: 4,
//       type: 'settings',
//       user: 'Admin User',
//       action: 'Updated notification settings',
//       timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
//       status: 'info',
//       details: 'Enabled SMS alerts for critical events'
//     },
//     {
//       id: 5,
//       type: 'alert',
//       user: 'System',
//       action: 'Alert resolved',
//       timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
//       status: 'success',
//       details: 'Zone B-2 risk level normalized'
//     },
//     {
//       id: 6,
//       type: 'login',
//       user: 'Admin User',
//       action: 'Failed login attempt',
//       timestamp: new Date(Date.now() - 1000 * 60 * 90), // 1.5 hours ago
//       status: 'error',
//       details: 'Invalid password from Chrome on Windows'
//     }
//   ];

//   const getActivityIcon = (type, status) => {
//     switch (type) {
//       case 'login':
//         return status === 'success' ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />;
//       case 'alert':
//         return <AlertTriangle className="h-4 w-4" />;
//       case 'report':
//         return <Activity className="h-4 w-4" />;
//       case 'settings':
//         return <Shield className="h-4 w-4" />;
//       default:
//         return <Info className="h-4 w-4" />;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'success':
//         return 'text-green-600 bg-green-100';
//       case 'error':
//         return 'text-red-600 bg-red-100';
//       case 'critical':
//         return 'text-red-600 bg-red-100';
//       case 'info':
//         return 'text-blue-600 bg-blue-100';
//       default:
//         return 'text-gray-600 bg-gray-100';
//     }
//   };

//   const filteredActivities = filter === 'all' 
//     ? activities 
//     : activities.filter(activity => activity.type === filter);

//   const formatTime = (timestamp) => {
//     const now = new Date();
//     const diff = now - timestamp;
//     const minutes = Math.floor(diff / (1000 * 60));
//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));

//     if (minutes < 60) {
//       return `${minutes} minutes ago`;
//     } else if (hours < 24) {
//       return `${hours} hours ago`;
//     } else {
//       return `${days} days ago`;
//     }
//   };

//   return (
//     <div className="space-y-8 p-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//             Activity Log
//           </h1>
//           <p className="text-gray-600 mt-2">Monitor system activities and user actions</p>
//         </div>
//         <div className="flex items-center space-x-3">
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           >
//             <option value="all">All Activities</option>
//             <option value="login">Login Events</option>
//             <option value="alert">Alerts</option>
//             <option value="report">Reports</option>
//             <option value="settings">Settings</option>
//           </select>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
//               <Activity className="h-5 w-5 text-white" />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-600">Total Activities</p>
//               <p className="text-2xl font-bold text-gray-900">{activities.length}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
//               <CheckCircle className="h-5 w-5 text-white" />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-600">Successful</p>
//               <p className="text-2xl font-bold text-gray-900">
//                 {activities.filter(a => a.status === 'success').length}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
//               <AlertTriangle className="h-5 w-5 text-white" />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-600">Critical</p>
//               <p className="text-2xl font-bold text-gray-900">
//                 {activities.filter(a => a.status === 'critical').length}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
//               <User className="h-5 w-5 text-white" />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-600">Users Active</p>
//               <p className="text-2xl font-bold text-gray-900">1</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Activity List */}
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden">
//         <div className="p-6 border-b border-gray-100">
//           <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
//         </div>
        
//         <div className="divide-y divide-gray-100">
//           {filteredActivities.map((activity) => (
//             <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
//               <div className="flex items-start space-x-4">
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(activity.status)}`}>
//                   {getActivityIcon(activity.type, activity.status)}
//                 </div>
                
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center justify-between">
//                     <p className="text-sm font-medium text-gray-900">{activity.action}</p>
//                     <div className="flex items-center space-x-2 text-xs text-gray-500">
//                       <Clock className="h-3 w-3" />
//                       <span>{formatTime(activity.timestamp)}</span>
//                     </div>
//                   </div>
                  
//                   <div className="mt-1 flex items-center space-x-2">
//                     <User className="h-3 w-3 text-gray-400" />
//                     <span className="text-sm text-gray-600">{activity.user}</span>
//                     <span className="text-gray-400">•</span>
//                     <span className="text-sm text-gray-500">{activity.details}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActivityLog;



import React, { useState } from 'react';
import { Activity, Clock, User, Shield, AlertTriangle, CheckCircle, XCircle, Info, TrendingUp, Filter } from 'lucide-react';

const ActivityLog = () => {
  const [filter, setFilter] = useState('all');
  
  // Mock activity data
  const activities = [
    {
      id: 1,
      type: 'login',
      user: 'Admin User',
      action: 'Logged in successfully',
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
      status: 'success',
      details: 'Login from Chrome on Windows'
    },
    {
      id: 2,
      type: 'alert',
      user: 'System',
      action: 'Critical rockfall precursor alert triggered',
      timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
      status: 'critical',
      details: 'High risk anomaly detected in Zone A-3'
    },
    {
      id: 3,
      type: 'report',
      user: 'Admin User',
      action: 'Generated predictive analysis report',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      status: 'info',
      details: 'Bi-weekly rock stress simulation results'
    },
    {
      id: 4,
      type: 'settings',
      user: 'Admin User',
      action: 'Updated system security policies',
      timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
      status: 'info',
      details: 'Enabled MFA for all safety managers'
    },
    {
      id: 5,
      type: 'alert',
      user: 'System',
      action: 'Initial alert resolved and closed',
      timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
      status: 'success',
      details: 'Zone B-2 risk level normalized after intervention'
    },
    {
      id: 6,
      type: 'login',
      user: 'Admin User',
      action: 'Failed login attempt',
      timestamp: new Date(Date.now() - 1000 * 60 * 90), // 1.5 hours ago
      status: 'error',
      details: 'Invalid password attempted on restricted port'
    }
  ];

  // Helper functions
  const getActivityIcon = (type, status) => {
    switch (type) {
      case 'login':
        return status === 'success' ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />;
      case 'alert':
        return <AlertTriangle className="h-4 w-4" />;
      case 'report':
        return <Activity className="h-4 w-4" />;
      case 'settings':
        return <Shield className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status) => {
    // Colors updated for dark theme background (bg-gray-800)
    switch (status) {
      case 'success':
        return 'text-green-400 bg-green-900/40 border-green-700';
      case 'error':
      case 'critical':
        return 'text-red-400 bg-red-900/40 border-red-700';
      case 'info':
        return 'text-blue-400 bg-blue-900/40 border-blue-700';
      default:
        return 'text-gray-400 bg-gray-700/50 border-gray-600';
    }
  };

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(activity => activity.type === filter);

  const formatTime = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hr ago`;
    return `${days} days ago`;
  };

  // --- STAT CARD COMPONENT ---
  const StatCard = ({ title, value, icon: Icon, gradient, bgColor }) => (
    <div className={`p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl border border-gray-700 ${bgColor}`}>
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <p className="text-3xl font-extrabold text-white mt-1">{value}</p> 
        </div>
        <div className={`w-10 h-10 ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    // Updated outer background to deep gray
    <div className="bg-gray-900 min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="space-y-8 p-8 max-w-7xl mx-auto">
        
        {/* Header & Filter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4 border-gray-800">
          <div>
            {/* Title text set to white */}
            <h1 className="text-4xl font-extrabold text-white">
              Activity & Audit Log
            </h1>
            <p className="text-base text-gray-400 mt-1">Real-time monitoring of all critical system activities and user actions.</p>
          </div>
          
          <div className="mt-4 sm:mt-0 flex items-center space-x-2">
            <Filter className="h-4 w-4 text-cyan-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              // Filter styled for dark mode
              className="px-4 py-2 text-sm border border-gray-700 rounded-xl appearance-none bg-gray-800 text-gray-300 transition-shadow shadow-md hover:shadow-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <option value="all">All Activities</option>
              <option value="login">Login Events</option>
              <option value="alert">Alerts</option>
              <option value="report">Reports</option>
              <option value="settings">Configuration</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Activities" 
            value={activities.length} 
            icon={Activity} 
            gradient="bg-gradient-to-br from-indigo-600 to-blue-700"
            bgColor="bg-gray-800" // Dark card background
          />
          <StatCard 
            title="Successful Events" 
            value={activities.filter(a => a.status === 'success').length} 
            icon={CheckCircle} 
            gradient="bg-gradient-to-br from-green-500 to-emerald-600"
            bgColor="bg-gray-800" // Dark card background
          />
          <StatCard 
            title="Critical Alerts" 
            value={activities.filter(a => a.status === 'critical').length} 
            icon={AlertTriangle} 
            gradient="bg-gradient-to-br from-red-500 to-orange-600"
            bgColor="bg-gray-800" // Dark card background
          />
          <StatCard 
            title="Avg. Daily Logins" 
            value="4.7" 
            icon={TrendingUp} 
            gradient="bg-gradient-to-br from-purple-500 to-pink-600"
            bgColor="bg-gray-800" // Dark card background
          />
        </div>

        {/* Activity List */}
        <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-xl font-semibold text-white">
              {filter === 'all' ? 'All Recent Activities' : `Filtered by ${filter.charAt(0).toUpperCase() + filter.slice(1)}`}
            </h3>
          </div>
          
          <div className="divide-y divide-gray-700">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity) => (
                <div key={activity.id} className="p-5 hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-start space-x-4">
                    
                    {/* Icon and Status */}
                    <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center border-2 ${getStatusColor(activity.status)}`}>
                      {getActivityIcon(activity.type, activity.status)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        {/* Action and Time */}
                        <p className="text-base font-semibold text-white truncate">{activity.action}</p>
                        <div className="flex items-center space-x-1 text-xs text-gray-400 mt-1 sm:mt-0 flex-shrink-0">
                          <Clock className="h-3 w-3" />
                          <span>{formatTime(activity.timestamp)}</span>
                        </div>
                      </div>
                      
                      {/* User and Details */}
                      <div className="mt-1 flex items-center space-x-3 text-sm">
                        <div className="flex items-center space-x-1 text-gray-300">
                          <User className="h-3.5 w-3.5 text-gray-500" />
                          <span className="font-medium">{activity.user}</span>
                        </div>
                        <span className="text-gray-600 hidden sm:inline">•</span>
                        <span className="text-gray-400 text-sm hidden sm:inline">{activity.details}</span>
                      </div>
                      {/* Details for mobile view */}
                      <p className="text-gray-400 text-sm mt-0.5 sm:hidden">{activity.details}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-400">
                No activities found matching the current filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
