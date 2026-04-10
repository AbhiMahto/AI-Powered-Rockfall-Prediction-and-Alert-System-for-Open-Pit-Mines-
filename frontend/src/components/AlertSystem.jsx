// import React, { useState, useEffect } from 'react';
// import { Bell, AlertTriangle, CheckCircle, Clock, Mail, MessageSquare, Phone } from 'lucide-react';
// import { alertHistory } from '../data/rockfallData';

// const AlertSystem = () => {
//   const [alerts, setAlerts] = useState(alertHistory);
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [filterType, setFilterType] = useState('all');
//   const [newAlert, setNewAlert] = useState({
//     type: 'warning',
//     zone: '',
//     message: ''
//   });

//   const alertTypes = [
//     { id: 'critical', name: 'Critical', color: 'red', icon: AlertTriangle },
//     { id: 'warning', name: 'Warning', color: 'yellow', icon: Bell },
//     { id: 'info', name: 'Info', color: 'blue', icon: CheckCircle }
//   ];

//   const alertStatuses = [
//     { id: 'active', name: 'Active', color: 'red' },
//     { id: 'acknowledged', name: 'Acknowledged', color: 'yellow' },
//     { id: 'monitoring', name: 'Monitoring', color: 'blue' },
//     { id: 'resolved', name: 'Resolved', color: 'green' }
//   ];

//   const filteredAlerts = alerts.filter(alert => {
//     const statusMatch = filterStatus === 'all' || alert.status === filterStatus;
//     const typeMatch = filterType === 'all' || alert.type === filterType;
//     return statusMatch && typeMatch;
//   });

//   const getAlertColor = (type) => {
//     switch (type) {
//       case 'critical': return 'text-red-600 bg-red-100 border-red-200';
//       case 'warning': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
//       case 'info': return 'text-blue-600 bg-blue-100 border-blue-200';
//       default: return 'text-gray-600 bg-gray-100 border-gray-200';
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'active': return 'text-red-600 bg-red-100';
//       case 'acknowledged': return 'text-yellow-600 bg-yellow-100';
//       case 'monitoring': return 'text-blue-600 bg-blue-100';
//       case 'resolved': return 'text-green-600 bg-green-100';
//       default: return 'text-gray-600 bg-gray-100';
//     }
//   };

//   const handleStatusChange = (alertId, newStatus) => {
//     setAlerts(prev => prev.map(alert => 
//       alert.id === alertId ? { ...alert, status: newStatus } : alert
//     ));
//   };

//   const handleCreateAlert = () => {
//     if (newAlert.zone && newAlert.message) {
//       const alert = {
//         id: Date.now(),
//         timestamp: new Date().toLocaleString(),
//         type: newAlert.type,
//         zone: newAlert.zone,
//         message: newAlert.message,
//         status: 'active'
//       };
//       setAlerts(prev => [alert, ...prev]);
//       setNewAlert({ type: 'warning', zone: '', message: '' });
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-xl font-bold text-gray-800">Alert Management System</h2>
//         <div className="flex items-center space-x-2">
//           <Bell className="h-5 w-5 text-blue-600" />
//           <span className="text-sm text-gray-600">Real-time Notifications</span>
//         </div>
//       </div>

//       {/* Alert Statistics */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         {alertTypes.map(type => {
//           const count = alerts.filter(alert => alert.type === type.id && alert.status === 'active').length;
//           const Icon = type.icon;
//           return (
//             <div key={type.id} className="bg-white border rounded-lg p-4">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-600">{type.name} Alerts</p>
//                   <p className={`text-2xl font-bold text-${type.color}-600`}>{count}</p>
//                 </div>
//                 <Icon className={`h-8 w-8 text-${type.color}-500`} />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Alert List */}
//         <div className="lg:col-span-2 space-y-4">
//           {/* Filters */}
//           <div className="flex flex-wrap gap-2">
//             <select
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//               className="px-3 py-2 border rounded-lg text-sm"
//             >
//               <option value="all">All Status</option>
//               {alertStatuses.map(status => (
//                 <option key={status.id} value={status.id}>{status.name}</option>
//               ))}
//             </select>
//             <select
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value)}
//               className="px-3 py-2 border rounded-lg text-sm"
//             >
//               <option value="all">All Types</option>
//               {alertTypes.map(type => (
//                 <option key={type.id} value={type.id}>{type.name}</option>
//               ))}
//             </select>
//           </div>

//           {/* Alert Cards */}
//           <div className="space-y-3">
//             {filteredAlerts.map(alert => (
//               <div key={alert.id} className={`border rounded-lg p-4 ${getAlertColor(alert.type)}`}>
//                 <div className="flex items-start justify-between mb-2">
//                   <div className="flex items-center space-x-2">
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAlertColor(alert.type)}`}>
//                       {alert.type.toUpperCase()}
//                     </span>
//                     <span className="text-sm font-medium text-gray-700">{alert.zone}</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
//                       {alert.status.toUpperCase()}
//                     </span>
//                     <Clock className="h-4 w-4 text-gray-500" />
//                     <span className="text-xs text-gray-500">{alert.timestamp}</span>
//                   </div>
//                 </div>
                
//                 <p className="text-sm text-gray-700 mb-3">{alert.message}</p>
                
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-2">
//                     <Mail className="h-4 w-4 text-gray-500" />
//                     <MessageSquare className="h-4 w-4 text-gray-500" />
//                     <Phone className="h-4 w-4 text-gray-500" />
//                   </div>
                  
//                   <select
//                     value={alert.status}
//                     onChange={(e) => handleStatusChange(alert.id, e.target.value)}
//                     className="px-2 py-1 border rounded text-xs"
//                   >
//                     {alertStatuses.map(status => (
//                       <option key={status.id} value={status.id}>{status.name}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Alert Creation & Settings */}
//         <div className="space-y-4">
//           {/* Create New Alert */}
//           <div className="bg-white border rounded-lg p-4">
//             <h3 className="text-lg font-semibold text-gray-700 mb-3">Create Alert</h3>
//             <div className="space-y-3">
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Alert Type</label>
//                 <select
//                   value={newAlert.type}
//                   onChange={(e) => setNewAlert(prev => ({ ...prev, type: e.target.value }))}
//                   className="w-full px-3 py-2 border rounded-md text-sm"
//                 >
//                   {alertTypes.map(type => (
//                     <option key={type.id} value={type.id}>{type.name}</option>
//                   ))}
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Zone</label>
//                 <input
//                   type="text"
//                   value={newAlert.zone}
//                   onChange={(e) => setNewAlert(prev => ({ ...prev, zone: e.target.value }))}
//                   className="w-full px-3 py-2 border rounded-md text-sm"
//                   placeholder="e.g., North Slope A"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Message</label>
//                 <textarea
//                   value={newAlert.message}
//                   onChange={(e) => setNewAlert(prev => ({ ...prev, message: e.target.value }))}
//                   className="w-full px-3 py-2 border rounded-md text-sm"
//                   rows="3"
//                   placeholder="Describe the alert condition..."
//                 />
//               </div>
              
//               <button
//                 onClick={handleCreateAlert}
//                 className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Create Alert
//               </button>
//             </div>
//           </div>

//           {/* Notification Settings */}
//           <div className="bg-white border rounded-lg p-4">
//             <h3 className="text-lg font-semibold text-gray-700 mb-3">Notification Settings</h3>
//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-700">Email Notifications</span>
//                 <input type="checkbox" defaultChecked className="rounded" />
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-700">SMS Alerts</span>
//                 <input type="checkbox" defaultChecked className="rounded" />
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-700">Push Notifications</span>
//                 <input type="checkbox" defaultChecked className="rounded" />
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-700">Sound Alerts</span>
//                 <input type="checkbox" className="rounded" />
//               </div>
//             </div>
            
//             <div className="mt-4 pt-3 border-t">
//               <h4 className="text-sm font-medium text-gray-700 mb-2">Alert Thresholds</h4>
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs text-gray-600">Critical Risk Level</span>
//                   <span className="text-xs font-medium">≥ 70%</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs text-gray-600">Warning Risk Level</span>
//                   <span className="text-xs font-medium">≥ 30%</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs text-gray-600">Displacement Threshold</span>
//                   <span className="text-xs font-medium">≥ 10mm</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Emergency Contacts */}
//           <div className="bg-white border rounded-lg p-4">
//             <h3 className="text-lg font-semibold text-gray-700 mb-3">Emergency Contacts</h3>
//             <div className="space-y-2 text-sm">
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-600">Mine Safety Officer</span>
//                 <span className="font-medium">+1-555-0123</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-600">Emergency Response</span>
//                 <span className="font-medium">+1-555-0911</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-600">Geotechnical Team</span>
//                 <span className="font-medium">+1-555-0456</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-600">Operations Manager</span>
//                 <span className="font-medium">+1-555-0789</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlertSystem;






import React, { useState } from 'react';
import { Bell, AlertTriangle, CheckCircle, Clock, Mail, MessageSquare, Phone, TrendingUp, Zap, Settings, Shield } from 'lucide-react';

// Mock Alert Data (since we cannot import from '../data/rockfallData')
const initialAlertHistory = [
  { id: 101, timestamp: '10:55 AM', type: 'critical', zone: 'Zone C-1 North Face', message: 'Strain gauges reporting 90% threshold breach. Immediate evacuation initiated.', status: 'active' },
  { id: 102, timestamp: '10:40 AM', type: 'warning', zone: 'Access Tunnel Beta', message: 'Acoustic monitoring anomaly detected. Potential micro-fractures identified.', status: 'acknowledged' },
  { id: 103, timestamp: '09:30 AM', type: 'info', zone: 'Processing Plant', message: 'System maintenance scheduled for tonight at 23:00. No operational impact expected.', status: 'monitoring' },
  { id: 104, timestamp: 'Yesterday', type: 'critical', zone: 'South Slope D-5', message: 'Rock displacement exceeded 15mm limit. Resolved by rock bolting team.', status: 'resolved' },
  { id: 105, timestamp: 'Yesterday', type: 'warning', zone: 'Exploration Drill Site', message: 'Humidity fluctuation detected near seismic sensor array.', status: 'active' },
];


// --- Stat Card Component for reuse ---
const StatCard = ({ title, value, icon: Icon, gradient, bgColor, valueColor }) => (
  <div className={`p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl border border-gray-700 ${bgColor}`}>
    <div className="flex items-start justify-between">
      <div className="flex flex-col">
        <p className="text-sm font-medium text-gray-400">{title}</p>
        <p className={`text-3xl font-extrabold mt-1 ${valueColor}`}>{value}</p> 
      </div>
      <div className={`w-10 h-10 ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
    </div>
  </div>
);


const AlertSystem = () => {
  const [alerts, setAlerts] = useState(initialAlertHistory);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [newAlert, setNewAlert] = useState({
    type: 'warning',
    zone: '',
    message: ''
  });

  const alertTypes = [
    { id: 'critical', name: 'Critical', color: 'red', icon: AlertTriangle },
    { id: 'warning', name: 'Warning', color: 'yellow', icon: Bell },
    { id: 'info', name: 'Information', color: 'blue', icon: CheckCircle }
  ];

  const alertStatuses = [
    { id: 'active', name: 'Active', color: 'red' },
    { id: 'acknowledged', name: 'Acknowledged', color: 'yellow' },
    { id: 'monitoring', name: 'Monitoring', color: 'blue' },
    { id: 'resolved', name: 'Resolved', color: 'green' }
  ];

  const filteredAlerts = alerts.filter(alert => {
    const statusMatch = filterStatus === 'all' || alert.status === filterStatus;
    const typeMatch = filterType === 'all' || alert.type === filterType;
    return statusMatch && typeMatch;
  });

  // Updated color scheme for Dark Mode consistency
  const getAlertColor = (type) => {
    switch (type) {
      case 'critical': return 'text-red-400 bg-red-900/40 border-red-700 hover:bg-red-900/60';
      case 'warning': return 'text-yellow-400 bg-yellow-900/40 border-yellow-700 hover:bg-yellow-900/60';
      case 'info': return 'text-blue-400 bg-blue-900/40 border-blue-700 hover:bg-blue-900/60';
      default: return 'text-gray-400 bg-gray-700/50 border-gray-600 hover:bg-gray-700';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-red-400 bg-red-900/60 border border-red-700';
      case 'acknowledged': return 'text-yellow-400 bg-yellow-900/60 border border-yellow-700';
      case 'monitoring': return 'text-blue-400 bg-blue-900/60 border border-blue-700';
      case 'resolved': return 'text-green-400 bg-green-900/60 border border-green-700';
      default: return 'text-gray-400 bg-gray-700/50 border border-gray-600';
    }
  };

  const handleStatusChange = (alertId, newStatus) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, status: newStatus } : alert
    ));
  };

  const handleCreateAlert = () => {
    if (newAlert.zone && newAlert.message) {
      const alert = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        type: newAlert.type,
        zone: newAlert.zone.toUpperCase(),
        message: newAlert.message,
        status: 'active'
      };
      setAlerts(prev => [alert, ...prev]);
      setNewAlert({ type: 'warning', zone: '', message: '' });
    }
  };

  // Helper for Stat Card values
  const getAlertCount = (type) => alerts.filter(alert => alert.type === type && alert.status === 'active').length;

  return (
    // Apply dark background and Poppins font
    <div className="bg-gray-900 min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="space-y-8 p-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4 border-gray-800">
          <div>
            <h1 className="text-4xl font-extrabold text-white">
              RockGuard Alert Console
            </h1>
            <p className="text-base text-gray-400 mt-1">Real-time rockfall precursor alerts and incident management.</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-2 p-2 bg-gray-800 rounded-xl border border-gray-700">
            <Zap className="h-5 w-5 text-cyan-400" />
            <span className="text-sm text-gray-300 font-medium">AI-Powered Predictions</span>
          </div>
        </div>

        {/* Alert Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Active Alerts" 
            value={alerts.filter(a => a.status === 'active').length} 
            icon={AlertTriangle} 
            gradient="bg-gradient-to-br from-red-600 to-orange-700"
            bgColor="bg-gray-800"
            valueColor="text-white"
          />
          <StatCard 
            title="Critical Risk" 
            value={getAlertCount('critical')} 
            icon={Zap} 
            gradient="bg-gradient-to-br from-purple-600 to-red-700"
            bgColor="bg-gray-800"
            valueColor="text-red-400"
          />
          <StatCard 
            title="Warning Level" 
            value={getAlertCount('warning')} 
            icon={Bell} 
            gradient="bg-gradient-to-br from-yellow-500 to-orange-600"
            bgColor="bg-gray-800"
            valueColor="text-yellow-400"
          />
          <StatCard 
            title="Resolved (24h)" 
            value={alerts.filter(a => a.status === 'resolved').length} 
            icon={CheckCircle} 
            gradient="bg-gradient-to-br from-green-600 to-emerald-700"
            bgColor="bg-gray-800"
            valueColor="text-green-400"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Alert List and Filters (Left/Main Column) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Incident Feed</h3>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-5">
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-2 border border-gray-600 rounded-xl text-sm bg-gray-900 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                        <option value="all">All Statuses</option>
                        {alertStatuses.map(status => (
                            <option key={status.id} value={status.id}>{status.name}</option>
                        ))}
                    </select>
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="px-4 py-2 border border-gray-600 rounded-xl text-sm bg-gray-900 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                        <option value="all">All Types</option>
                        {alertTypes.map(type => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                </div>

                {/* Alert Cards */}
                <div className="space-y-4">
                    {filteredAlerts.length > 0 ? (
                        filteredAlerts.map(alert => (
                            <div key={alert.id} className={`rounded-xl p-5 transition-all duration-300 ${getAlertColor(alert.type)}`}>
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center space-x-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getAlertColor(alert.type)} border`}>
                                            {alert.type}
                                        </span>
                                        <span className="text-base font-semibold text-gray-200">{alert.zone}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusColor(alert.status)}`}>
                                            {alert.status}
                                        </span>
                                        <Clock className="h-4 w-4 text-gray-400" />
                                        <span className="text-xs text-gray-400">{alert.timestamp}</span>
                                    </div>
                                </div>
                                
                                <p className="text-sm text-gray-300 mb-4 border-l-4 border-current pl-4">
                                    {alert.message}
                                </p>
                                
                                <div className="flex items-center justify-between border-t border-gray-700 pt-3">
                                    <div className="flex items-center space-x-3">
                                        <button className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"><Mail className="h-4 w-4" /></button>
                                        <button className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"><MessageSquare className="h-4 w-4" /></button>
                                        <button className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"><Phone className="h-4 w-4" /></button>
                                    </div>
                                    
                                    <select
                                        value={alert.status}
                                        onChange={(e) => handleStatusChange(alert.id, e.target.value)}
                                        className="px-3 py-1 border border-gray-600 rounded-lg text-xs bg-gray-900 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
                                    >
                                        {alertStatuses.map(status => (
                                            <option key={status.id} value={status.id}>{status.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-6 text-center text-gray-500 bg-gray-700/50 rounded-xl">
                            No alerts match the current filter criteria.
                        </div>
                    )}
                </div>
            </div>
          </div>

          {/* Alert Creation & Settings (Right Column) */}
          <div className="space-y-6">
            
            {/* Create New Alert */}
            <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-indigo-400"/>
                  <span>Manual Alert Creation</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Alert Type</label>
                  <select
                    value={newAlert.type}
                    onChange={(e) => setNewAlert(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg text-sm bg-gray-900 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {alertTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Affected Zone (e.g., A-1, North Slope)</label>
                  <input
                    type="text"
                    value={newAlert.zone}
                    onChange={(e) => setNewAlert(prev => ({ ...prev, zone: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg text-sm bg-gray-900 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g., North Slope A"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Detailed Message</label>
                  <textarea
                    value={newAlert.message}
                    onChange={(e) => setNewAlert(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg text-sm bg-gray-900 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    rows="3"
                    placeholder="Describe the alert condition..."
                  />
                </div>
                
                <button
                  onClick={handleCreateAlert}
                  className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/50"
                >
                  Confirm & Broadcast Alert
                </button>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Settings className="h-5 w-5 text-indigo-400"/>
                <span>Notification Control</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                  <span className="text-sm text-gray-300">Minimum Displacement Threshold</span>
                  <span className="text-sm font-semibold text-cyan-400">10 mm</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Email Notifications</span>
                  <input type="checkbox" defaultChecked className="rounded text-indigo-600 bg-gray-700 border-gray-600 focus:ring-indigo-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">SMS Alerts (Critical Only)</span>
                  <input type="checkbox" defaultChecked className="rounded text-indigo-600 bg-gray-700 border-gray-600 focus:ring-indigo-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Sound Siren Alerts</span>
                  <input type="checkbox" className="rounded text-indigo-600 bg-gray-700 border-gray-600 focus:ring-indigo-500" />
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-indigo-400"/>
                  <span>Emergency Contacts</span>
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-900/50 hover:bg-gray-700/50 transition-colors">
                  <span className="text-gray-400">Mine Safety Officer</span>
                  <span className="font-semibold text-indigo-400">+1-555-0123</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-900/50 hover:bg-gray-700/50 transition-colors">
                  <span className="text-gray-400">Emergency Response</span>
                  <span className="font-semibold text-red-400">+1-555-0911</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-900/50 hover:bg-gray-700/50 transition-colors">
                  <span className="text-gray-400">Geotechnical Team Lead</span>
                  <span className="font-semibold text-indigo-400">+1-555-0456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertSystem;
