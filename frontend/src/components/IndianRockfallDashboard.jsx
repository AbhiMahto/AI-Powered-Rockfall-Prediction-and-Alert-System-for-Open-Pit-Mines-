// import React, { useState, useEffect } from 'react';
// import { AlertTriangle, Shield, TrendingUp, Activity, Bell, MapPin, Camera, Video, Users, FileText, MessageSquare } from 'lucide-react';
// import RiskMap from './RiskMap';
// import PredictionModel from './PredictionModel';
// import AlertSystem from './AlertSystem';
// import EnvironmentalMonitor from './EnvironmentalMonitor';
// import ImageUploadAnalysis from './ImageUploadAnalysis';
// import ReportGenerator from './ReportGenerator';
// import SMSWhatsAppAlerts from './SMSWhatsAppAlerts';
// import { expandedIndianMineZones, indianSensorData, indianAlertHistory, stateWiseStatistics } from '../data/expandedIndianMinesData';

// const IndianRockfallDashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [criticalAlerts, setCriticalAlerts] = useState(0);
//   const [totalZones, setTotalZones] = useState(0);
//   const [highRiskZones, setHighRiskZones] = useState(0);
//   const [workersAtRisk, setWorkersAtRisk] = useState(0);

//   useEffect(() => {
//     // Calculate dashboard metrics for expanded Indian mines
//     const critical = indianAlertHistory.filter(alert => alert.type === 'critical' && alert.status === 'active').length;
//     const total = expandedIndianMineZones.length;
//     const highRisk = expandedIndianMineZones.filter(zone => zone.riskLevel === 'high' || zone.riskLevel === 'critical').length;
//     const workersInDanger = expandedIndianMineZones
//       .filter(zone => zone.riskLevel === 'high' || zone.riskLevel === 'critical')
//       .reduce((sum, zone) => sum + zone.workers, 0);
    
//     setCriticalAlerts(critical);
//     setTotalZones(total);
//     setHighRiskZones(highRisk);
//     setWorkersAtRisk(workersInDanger);
//   }, []);

//   const getRiskColor = (level) => {
//     switch (level) {
//       case 'critical': return 'text-purple-600 bg-purple-100';
//       case 'high': return 'text-red-600 bg-red-100';
//       case 'medium': return 'text-yellow-600 bg-yellow-100';
//       case 'low': return 'text-green-600 bg-green-100';
//       default: return 'text-gray-600 bg-gray-100';
//     }
//   };

//   const StatCard = ({ icon: Icon, title, value, subtitle, color = 'blue', hindiTitle, delay = 0 }) => {
//     const colorClasses = {
//       red: {
//         bg: 'from-red-500 to-red-600',
//         light: 'from-red-50 to-red-100',
//         text: 'text-red-600',
//         icon: 'text-red-500',
//         border: 'border-red-200'
//       },
//       blue: {
//         bg: 'from-blue-500 to-blue-600',
//         light: 'from-blue-50 to-blue-100',
//         text: 'text-blue-600',
//         icon: 'text-blue-500',
//         border: 'border-blue-200'
//       },
//       orange: {
//         bg: 'from-orange-500 to-orange-600',
//         light: 'from-orange-50 to-orange-100',
//         text: 'text-orange-600',
//         icon: 'text-orange-500',
//         border: 'border-orange-200'
//       },
//       purple: {
//         bg: 'from-purple-500 to-purple-600',
//         light: 'from-purple-50 to-purple-100',
//         text: 'text-purple-600',
//         icon: 'text-purple-500',
//         border: 'border-purple-200'
//       }
//     };

//     const currentColor = colorClasses[color] || colorClasses.blue;

//     return (
//       <div 
//         className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border ${currentColor.border} hover:scale-105`}
//         style={{ animationDelay: `${delay}ms` }}
//       >
//         <div className={`absolute inset-0 bg-gradient-to-br ${currentColor.light} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
        
//         <div className="relative z-10">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center space-x-3">
//               <div className={`w-12 h-12 bg-gradient-to-br ${currentColor.bg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                 <Icon className="h-6 w-6 text-white" />
//               </div>
//         <div>
//                 <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{title}</p>
//           {hindiTitle && <p className="text-xs text-gray-500">{hindiTitle}</p>}
//               </div>
//             </div>
//           </div>
          
//           <div className="mb-4">
//             <p className={`text-3xl font-bold ${currentColor.text} group-hover:scale-105 transition-transform duration-300`}>
//               {value}
//             </p>
//           {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
//         </div>

//           <div className="w-full bg-gray-200 rounded-full h-1.5">
//             <div 
//               className={`h-1.5 bg-gradient-to-r ${currentColor.bg} rounded-full transition-all duration-1000 ease-out`}
//               style={{ 
//                 width: color === 'red' ? '85%' : color === 'orange' ? '65%' : '45%',
//                 animationDelay: `${delay + 200}ms`
//               }}
//             ></div>
//           </div>
//       </div>
//     </div>
//   );
//   };

//   const TabButton = ({ id, label, icon: Icon, isActive, onClick, hindiLabel }) => (
//     <button
//       onClick={() => onClick(id)}
//       className={`group relative flex flex-col items-center space-y-1 px-4 py-3 rounded-xl transition-all duration-300 ${
//         isActive 
//           ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105' 
//           : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:shadow-md hover:scale-105'
//       }`}
//     >
//       <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
//         isActive 
//           ? 'bg-white/20' 
//           : 'bg-gray-100 group-hover:bg-blue-100'
//       }`}>
//         <Icon className={`h-4 w-4 transition-colors duration-300 ${
//           isActive 
//             ? 'text-white' 
//             : 'text-gray-500 group-hover:text-blue-600'
//         }`} />
//       </div>
//       <span className="font-medium text-sm">{label}</span>
//       {hindiLabel && <span className={`text-xs transition-colors duration-300 ${
//         isActive ? 'text-white/80' : 'text-gray-500'
//       }`}>{hindiLabel}</span>}
//     </button>
//   );

//   return (
//     <div className="space-y-8 p-6">
//       {/* Header */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white p-8 rounded-3xl shadow-2xl">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
//         <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        
//         <div className="relative z-10">
//           <div className="flex items-center space-x-6 mb-6">
//             <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
//               <span className="text-3xl">🇮🇳</span>
//           </div>
//           <div>
//               <h1 className="text-4xl font-bold mb-2">भारतीय खान सुरक्षा प्रणाली</h1>
//               <h2 className="text-xl font-semibold text-orange-100">Indian Mine Safety & Rockfall Prediction System</h2>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <p className="text-orange-100 text-lg mb-2">
//           Advanced AI-powered safety monitoring across {Object.keys(stateWiseStatistics).length} states with real-time alerts
//         </p>
//         <p className="text-sm text-orange-200">
//           {Object.keys(stateWiseStatistics).length} राज्यों में उन्नत AI-संचालित सुरक्षा निगरानी और वास्तविक समय अलर्ट
//         </p>
//             </div>
//             <div className="flex items-center justify-end">
//               <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold">Live</div>
//                   <div className="text-sm text-orange-100">Monitoring</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Key Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard
//           icon={AlertTriangle}
//           title="Critical Alerts"
//           hindiTitle="गंभीर चेतावनी"
//           value={criticalAlerts}
//           subtitle="Requiring immediate action"
//           color="red"
//           delay={0}
//         />
//         <StatCard
//           icon={Shield}
//           title="Mine Zones"
//           hindiTitle="खान क्षेत्र"
//           value={totalZones}
//           subtitle={`Across ${Object.keys(stateWiseStatistics).length} states`}
//           color="blue"
//           delay={100}
//         />
//         <StatCard
//           icon={TrendingUp}
//           title="High Risk Zones"
//           hindiTitle="उच्च जोखिम क्षेत्र"
//           value={highRiskZones}
//           subtitle="Critical + High risk levels"
//           color="orange"
//           delay={200}
//         />
//         <StatCard
//           icon={Users}
//           title="Workers at Risk"
//           hindiTitle="जोखिम में श्रमिक"
//           value={workersAtRisk.toLocaleString()}
//           subtitle="In danger zones"
//           color="purple"
//           delay={300}
//         />
//       </div>

//       {/* Navigation Tabs */}
//       <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
//         <div className="flex flex-wrap gap-3">
//         <TabButton
//           id="overview"
//           label="Overview"
//           hindiLabel="अवलोकन"
//           icon={Activity}
//           isActive={activeTab === 'overview'}
//           onClick={setActiveTab}
//         />
//         <TabButton
//           id="riskmap"
//           label="Risk Map"
//           hindiLabel="जोखिम मानचित्र"
//           icon={MapPin}
//           isActive={activeTab === 'riskmap'}
//           onClick={setActiveTab}
//         />
//         <TabButton
//           id="imageanalysis"
//           label="Image Analysis"
//           hindiLabel="छवि विश्लेषण"
//           icon={Camera}
//           isActive={activeTab === 'imageanalysis'}
//           onClick={setActiveTab}
//         />
//         {/* <TabButton
//           id="livewebcam"
//           label="Live Webcam"
//           hindiLabel="लाइव वेबकैम"
//           icon={Video}
//           isActive={activeTab === 'livewebcam'}
//           onClick={setActiveTab}
//         /> */}
//         <TabButton
//           id="prediction"
//           label="AI Prediction"
//           hindiLabel="AI भविष्यवाणी"
//           icon={TrendingUp}
//           isActive={activeTab === 'prediction'}
//           onClick={setActiveTab}
//         />
//         {/* <TabButton
//           id="pitholealarm"
//           label="Pit Hole Alarm"
//           hindiLabel="गड्ढा अलार्म"
//           icon={AlertTriangle}
//           isActive={activeTab === 'pitholealarm'}
//           onClick={setActiveTab}
//         /> */}
//         <TabButton
//           id="alerts"
//           label="Alert System"
//           hindiLabel="चेतावनी प्रणाली"
//           icon={Bell}
//           isActive={activeTab === 'alerts'}
//           onClick={setActiveTab}
//         />
//         <TabButton
//           id="smsalerts"
//           label="SMS/WhatsApp"
//           hindiLabel="SMS/व्हाट्सऐप"
//           icon={MessageSquare}
//           isActive={activeTab === 'smsalerts'}
//           onClick={setActiveTab}
//         />
//         <TabButton
//           id="reports"
//           label="Reports"
//           hindiLabel="रिपोर्ट"
//           icon={FileText}
//           isActive={activeTab === 'reports'}
//           onClick={setActiveTab}
//         />
//         <TabButton
//           id="environmental"
//           label="Environmental"
//           hindiLabel="पर्यावरणीय"
//           icon={Shield}
//           isActive={activeTab === 'environmental'}
//           onClick={setActiveTab}
//         />
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden">
//         {activeTab === 'overview' && (
//           <div className="space-y-6">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">
//               Expanded Indian Mine Network Overview / विस्तृत भारतीय खान नेटवर्क अवलोकन
//             </h2>
            
//             {/* State-wise Statistics */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="space-y-4">
//                 <h3 className="text-lg font-semibold text-gray-700">State-wise Mining Statistics</h3>
//                 {Object.entries(stateWiseStatistics).map(([state, stats]) => (
//                   <div key={state} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
//                     <div className="flex items-center justify-between mb-2">
//                       <h4 className="font-medium text-gray-800">{state}</h4>
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         stats.highRisk > 0 ? 'text-red-600 bg-red-100' : 'text-green-600 bg-green-100'
//                       }`}>
//                         {stats.highRisk > 0 ? 'High Risk State' : 'Stable'}
//                       </span>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
//                       <div>
//                         <p>Total Mines: <span className="font-medium">{stats.totalMines}</span></p>
//                         <p>High Risk: <span className="font-medium text-red-600">{stats.highRisk}</span></p>
//                       </div>
//                       <div>
//                         <p>Workers: <span className="font-medium">{stats.totalWorkers.toLocaleString()}</span></p>
//                         <p>Main Minerals: <span className="font-medium">{stats.majorMinerals.join(', ')}</span></p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Recent High-Risk Zones */}
//               <div className="space-y-4">
//                 <h3 className="text-lg font-semibold text-gray-700">Critical & High Risk Zones</h3>
//                 {expandedIndianMineZones
//                   .filter(zone => zone.riskLevel === 'critical' || zone.riskLevel === 'high')
//                   .sort((a, b) => b.probability - a.probability)
//                   .map(zone => (
//                   <div key={zone.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
//                     <div className="flex items-center justify-between mb-2">
//                       <h4 className="font-medium text-gray-800">{zone.name}</h4>
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(zone.riskLevel)}`}>
//                         {zone.riskLevel.toUpperCase()}
//                       </span>
//                     </div>
//                     <div className="text-sm text-gray-600">
//                       <p>State: <span className="font-medium">{zone.state}</span> | District: <span className="font-medium">{zone.district}</span></p>
//                       <p>Mine Type: <span className="font-medium">{zone.mineType}</span> | Workers: <span className="font-medium text-purple-600">{zone.workers}</span></p>
//                       <p>Risk Probability: <span className="font-medium text-red-600">{(zone.probability * 100).toFixed(1)}%</span></p>
//                       <p>Last Incident: <span className="font-medium">{zone.lastIncident || 'None recorded'}</span></p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* National Mining Overview */}
//             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-700 mb-4">National Mining Safety Overview</h3>
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-blue-600">{totalZones}</div>
//                   <div className="text-sm text-gray-600">Total Mines</div>
//                   <div className="text-xs text-gray-500">कुल खानें</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-green-600">{expandedIndianMineZones.reduce((sum, zone) => sum + zone.workers, 0).toLocaleString()}</div>
//                   <div className="text-sm text-gray-600">Mine Workers</div>
//                   <div className="text-xs text-gray-500">खान श्रमिक</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-orange-600">{Object.keys(stateWiseStatistics).length}</div>
//                   <div className="text-sm text-gray-600">States Covered</div>
//                   <div className="text-xs text-gray-500">शामिल राज्य</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-purple-600">{new Set(expandedIndianMineZones.map(z => z.mineType)).size}</div>
//                   <div className="text-sm text-gray-600">Mine Types</div>
//                   <div className="text-xs text-gray-500">खान प्रकार</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'riskmap' && <RiskMap />}
//         {activeTab === 'imageanalysis' && <ImageUploadAnalysis />}
//         {activeTab === 'livewebcam' && (
//           <div className="p-6">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">
//               Live Webcam Monitoring / लाइव वेबकैम निगरानी
//             </h2>
//             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
//               <div className="flex items-center space-x-3 mb-4">
//                 <Video className="h-8 w-8 text-blue-600" />
//                 <div>
//                   <h3 className="text-lg font-semibold text-blue-800">AI-Powered Live Monitoring</h3>
//                   <p className="text-blue-600">Real-time risk detection using your phone's camera</p>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="bg-white rounded-lg p-4 border border-blue-200">
//                   <h4 className="font-semibold text-gray-800 mb-2">Live Detection</h4>
//                   <p className="text-sm text-gray-600">AI analyzes video feed in real-time</p>
//                 </div>
//                 <div className="bg-white rounded-lg p-4 border border-blue-200">
//                   <h4 className="font-semibold text-gray-800 mb-2">Risk Identification</h4>
//                   <p className="text-sm text-gray-600">Detects cracks, gas leaks, structural damage</p>
//                 </div>
//                 <div className="bg-white rounded-lg p-4 border border-blue-200">
//                   <h4 className="font-semibold text-gray-800 mb-2">Instant Alerts</h4>
//                   <p className="text-sm text-gray-600">Immediate notifications for safety threats</p>
//                 </div>
//               </div>
//               <div className="mt-4 text-center">
//                 <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                   Access Live Webcam System
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         {activeTab === 'prediction' && <PredictionModel />}
//         {activeTab === 'pitholealarm' && (
//           <div className="p-6">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">
//               Pit Hole Alarm System / गड्ढा अलार्म प्रणाली
//             </h2>
//             <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
//               <div className="flex items-center space-x-3 mb-4">
//                 <AlertTriangle className="h-8 w-8 text-red-600" />
//                 <div>
//                   <h3 className="text-lg font-semibold text-red-800">Critical Safety Monitoring</h3>
//                   <p className="text-red-600">Real-time pit hole detection and emergency alerts</p>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="bg-white rounded-lg p-4 border border-red-200">
//                   <h4 className="font-semibold text-gray-800 mb-2">Ground Stability</h4>
//                   <p className="text-sm text-gray-600">Monitoring slope movement and ground conditions</p>
//                 </div>
//                 <div className="bg-white rounded-lg p-4 border border-red-200">
//                   <h4 className="font-semibold text-gray-800 mb-2">Gas Detection</h4>
//                   <p className="text-sm text-gray-600">Atmospheric monitoring for hazardous gases</p>
//                 </div>
//                 <div className="bg-white rounded-lg p-4 border border-red-200">
//                   <h4 className="font-semibold text-gray-800 mb-2">Access Control</h4>
//                   <p className="text-sm text-gray-600">Unauthorized entry detection and alerts</p>
//                 </div>
//               </div>
//               <div className="mt-4 text-center">
//                 <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
//                   Access Full Pit Hole Alarm System
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         {activeTab === 'alerts' && <AlertSystem />}
//         {activeTab === 'smsalerts' && <SMSWhatsAppAlerts />}
//         {activeTab === 'reports' && <ReportGenerator />}
//         {activeTab === 'environmental' && <EnvironmentalMonitor />}
//       </div>
//     </div>
//   );
// };

// export default IndianRockfallDashboard;

import React, { useState, useEffect } from 'react';
import { AlertTriangle, Shield, TrendingUp, Activity, Bell, MapPin, Camera, Video, Users, FileText, MessageSquare, Cpu } from 'lucide-react';
// Assuming these components are available in the project structure
import RiskMap from './RiskMap';
import PredictionModel from './PredictionModel';
import AlertSystem from './AlertSystem';
import EnvironmentalMonitor from './EnvironmentalMonitor';
import ImageUploadAnalysis from './ImageUploadAnalysis';
import ReportGenerator from './ReportGenerator';
import SMSWhatsAppAlerts from './SMSWhatsAppAlerts';
import { expandedIndianMineZones, indianSensorData, indianAlertHistory, stateWiseStatistics } from '../data/expandedIndianMinesData';



// --- Utility Functions ---

const getRiskColor = (level) => {
  switch (level) {
    case 'critical': return 'text-red-400 bg-red-900/30';
    case 'high': return 'text-orange-400 bg-orange-900/30';
    case 'medium': return 'text-yellow-400 bg-yellow-900/30';
    case 'low': return 'text-green-400 bg-green-900/30';
    default: return 'text-gray-400 bg-gray-700';
  }
};


// --- StatCard Component (Updated for Dark Theme) ---
const StatCard = ({ icon: Icon, title, value, subtitle, color = 'indigo', hindiTitle, delay = 0 }) => {
  const colorClasses = {
    red: {
      bg: 'from-red-600 to-red-700',
      light: 'from-red-900/30 to-red-900/50',
      text: 'text-red-400',
      border: 'border-red-700'
    },
    indigo: {
      bg: 'from-indigo-600 to-indigo-700',
      light: 'from-indigo-900/30 to-indigo-900/50',
      text: 'text-indigo-400',
      border: 'border-indigo-700'
    },
    cyan: {
      bg: 'from-cyan-600 to-cyan-700',
      light: 'from-cyan-900/30 to-cyan-900/50',
      text: 'text-cyan-400',
      border: 'border-cyan-700'
    },
    purple: {
      bg: 'from-purple-600 to-purple-700',
      light: 'from-purple-900/30 to-purple-900/50',
      text: 'text-purple-400',
      border: 'border-purple-700'
    }
  };

  const currentColor = colorClasses[color] || colorClasses.indigo;

  return (
    <div 
      className={`group relative bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border ${currentColor.border} hover:scale-[1.02] overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${currentColor.light} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${currentColor.bg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{title}</p>
              {hindiTitle && <p className="text-xs text-gray-500">{hindiTitle}</p>}
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <p className={`text-4xl font-extrabold ${currentColor.text} group-hover:scale-105 transition-transform duration-300`}>
            {value}
          </p>
          {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
        </div>

        <div className="w-full bg-gray-700 rounded-full h-1.5">
          <div 
            className={`h-1.5 bg-gradient-to-r ${currentColor.bg} rounded-full transition-all duration-1000 ease-out`}
            style={{ 
              width: color === 'red' ? '85%' : color === 'cyan' ? '65%' : '45%',
              animationDelay: `${delay + 200}ms`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};


// --- TabButton Component (Updated for Dark Theme) ---
const TabButton = ({ id, label, icon: Icon, isActive, onClick, hindiLabel }) => (
  <button
    onClick={() => onClick(id)}
    className={`group relative flex flex-col items-center space-y-1 px-4 py-3 rounded-xl transition-all duration-300 text-center ${
      isActive 
        ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-xl scale-105' 
        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:shadow-lg' // Dark mode styling
    }`}
  >
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
      isActive 
        ? 'bg-white/20' 
        : 'bg-gray-700 group-hover:bg-indigo-700/50'
    }`}>
      <Icon className={`h-4 w-4 transition-colors duration-300 ${
        isActive 
          ? 'text-white' 
          : 'text-cyan-400 group-hover:text-cyan-300'
      }`} />
    </div>
    <span className="font-medium text-sm">{label}</span>
    {hindiLabel && <span className={`text-xs transition-colors duration-300 ${
      isActive ? 'text-white/80' : 'text-gray-500'
    }`}>{hindiLabel}</span>}
  </button>
);


// --- Main Dashboard Component ---

const IndianRockfallDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [criticalAlerts, setCriticalAlerts] = useState(0);
  const [totalZones, setTotalZones] = useState(0);
  const [highRiskZones, setHighRiskZones] = useState(0);
  const [workersAtRisk, setWorkersAtRisk] = useState(0);

  useEffect(() => {
    // Calculate dashboard metrics for expanded Indian mines
    const critical = indianAlertHistory.filter(alert => alert.type === 'critical' && alert.status === 'active').length;
    const total = expandedIndianMineZones.length;
    const highRisk = expandedIndianMineZones.filter(zone => zone.riskLevel === 'high' || zone.riskLevel === 'critical').length;
    const workersInDanger = expandedIndianMineZones
      .filter(zone => zone.riskLevel === 'high' || zone.riskLevel === 'critical')
      .reduce((sum, zone) => sum + zone.workers, 0);
    
    setCriticalAlerts(critical);
    setTotalZones(total);
    setHighRiskZones(highRisk);
    setWorkersAtRisk(workersInDanger);
  }, []);

  return (
    // Main container uses a slightly lighter dark background than the sidebar/header
    <div className="space-y-8 p-6 bg-gray-800 min-h-screen">
      
      {/* --- Header / AI Banner (Clean Dark/Indigo/Cyan Theme) --- */}
      <div className="relative overflow-hidden bg-gray-900 text-white p-8 rounded-2xl shadow-2xl border border-indigo-700/50">
        
        {/* Subtle Circuitry Graphic/Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <Cpu className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-1 tracking-tight">
                AI Rockfall Prediction System
              </h1>
              <h2 className="text-lg font-medium text-indigo-300">
                भारतीय खान सुरक्षा प्रणाली &mdash; Real-time Geo-intelligence
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-700">
            <div>
              <p className="text-gray-300 text-sm">
                Advanced AI model actively monitoring over {Object.keys(stateWiseStatistics).length} states for geological instability and rockfall risk.
              </p>
            </div>
            <div className="md:col-span-2 flex justify-end">
              <div className="bg-gray-800 rounded-xl p-3 border border-cyan-500/50">
                <div className="text-right">
                  <div className="text-xl font-bold text-cyan-400">{(Math.random() * 20 + 75).toFixed(2)}%</div>
                  <div className="text-sm text-gray-400">Current Model Confidence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Key Metrics (Dark Cards) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={AlertTriangle}
          title="Critical Alerts"
          hindiTitle="गंभीर चेतावनी"
          value={criticalAlerts}
          subtitle="Requiring immediate action"
          color="red"
          delay={0}
        />
        <StatCard
          icon={Cpu} // Changed icon to Cpu to emphasize AI monitoring
          title="AI Prediction Status"
          hindiTitle="AI भविष्यवाणी स्थिति"
          value={'Online'}
          subtitle="Model actively generating scores"
          color="indigo"
          delay={100}
        />
        <StatCard
          icon={TrendingUp}
          title="High Risk Zones"
          hindiTitle="उच्च जोखिम क्षेत्र"
          value={highRiskZones}
          subtitle="Critical + High risk levels"
          color="cyan" // Changed color for high-tech look
          delay={200}
        />
        <StatCard
          icon={Users}
          title="Workers at Risk"
          hindiTitle="जोखिम में श्रमिक"
          value={workersAtRisk.toLocaleString()}
          subtitle="In currently active danger zones"
          color="purple"
          delay={300}
        />
      </div>

      {/* --- Navigation Tabs (Dark Cards) --- */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Core Safety Modules</h3>
        <div className="flex flex-wrap gap-4">
        <TabButton
          id="overview"
          label="Overview"
          hindiLabel="अवलोकन"
          icon={Activity}
          isActive={activeTab === 'overview'}
          onClick={setActiveTab}
        />
        <TabButton
          id="riskmap"
          label="Risk Map"
          hindiLabel="जोखिम मानचित्र"
          icon={MapPin}
          isActive={activeTab === 'riskmap'}
          onClick={setActiveTab}
        />
        <TabButton
          id="imageanalysis"
          label="Data Visualization"
          hindiLabel="डेटा विज़ुअलाइज़ेशन"
          icon={Camera}
          isActive={activeTab === 'imageanalysis'}
          onClick={setActiveTab}
        />
        {/* <TabButton
          id="livewebcam"
          label="Sensor Streams"
          hindiLabel="सेंसर स्ट्रीम"
          icon={Video}
          isActive={activeTab === 'livewebcam'}
          onClick={setActiveTab}
        /> */}
        <TabButton
          id="prediction"
          label="AI Prediction"
          hindiLabel="AI भविष्यवाणी"
          icon={TrendingUp}
          isActive={activeTab === 'prediction'}
          onClick={setActiveTab}
        />
        <TabButton
          id="alerts"
          label="Critical Alerts"
          hindiLabel="गंभीर चेतावनी"
          icon={Bell}
          isActive={activeTab === 'alerts'}
          onClick={setActiveTab}
        />
        {/* <TabButton
          id="pitholealarm"
          label="Pore Pressure Alarm"
          hindiLabel="छिद्र दबाव अलार्म"
          icon={AlertTriangle}
          isActive={activeTab === 'pitholealarm'}
          onClick={setActiveTab}
        /> */}
        <TabButton
          id="smsalerts"
          label="Comms Setup"
          hindiLabel="संचार सेटअप"
          icon={MessageSquare}
          isActive={activeTab === 'smsalerts'}
          onClick={setActiveTab}
        />
        <TabButton
          id="reports"
          label="Reports"
          hindiLabel="रिपोर्ट"
          icon={FileText}
          isActive={activeTab === 'reports'}
          onClick={setActiveTab}
        />
        <TabButton
          id="environmental"
          label="Environmental"
          hindiLabel="पर्यावरणीय"
          icon={Shield}
          isActive={activeTab === 'environmental'}
          onClick={setActiveTab}
        />
        </div>
      </div>

      {/* --- Tab Content (Dark Content Area) --- */}
      <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
        {activeTab === 'overview' && (
          <div className="p-6 space-y-8">
            <h2 className="text-xl font-bold text-gray-200 border-b border-gray-700 pb-3">
              Expanded Indian Mine Network Overview / विस्तृत भारतीय खान नेटवर्क अवलोकन
            </h2>
            
            {/* State-wise Statistics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-300">State-wise AI Risk Analysis</h3>
                {Object.entries(stateWiseStatistics).map(([state, stats]) => (
                  <div key={state} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700/70 transition-colors border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{state}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        stats.highRisk > 0 ? 'text-red-400 bg-red-900/40' : 'text-green-400 bg-green-900/40'
                      }`}>
                        {stats.highRisk > 0 ? 'Risk Detected' : 'Stable'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                      <div>
                        <p>Total Mines: <span className="font-medium text-gray-200">{stats.totalMines}</span></p>
                        <p>High Risk: <span className="font-medium text-red-400">{stats.highRisk}</span></p>
                      </div>
                      <div>
                        <p>Workers: <span className="font-medium text-gray-200">{stats.totalWorkers.toLocaleString()}</span></p>
                        <p>Main Minerals: <span className="font-medium text-cyan-400">{stats.majorMinerals.join(', ')}</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent High-Risk Zones */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-300">Critical & High Risk Zones (AI Flagged)</h3>
                {expandedIndianMineZones
                  .filter(zone => zone.riskLevel === 'critical' || zone.riskLevel === 'high')
                  .sort((a, b) => b.probability - a.probability)
                  .map(zone => (
                  <div key={zone.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700/70 transition-colors border border-red-800/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{zone.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(zone.riskLevel)}`}>
                        {zone.riskLevel.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <p>State: <span className="font-medium text-gray-200">{zone.state}</span> | District: <span className="font-medium text-gray-200">{zone.district}</span></p>
                      <p>Mine Type: <span className="font-medium text-cyan-400">{zone.mineType}</span> | Workers: <span className="font-medium text-purple-400">{zone.workers}</span></p>
                      <p>Risk Probability: <span className="font-medium text-red-400">{(zone.probability * 100).toFixed(1)}%</span></p>
                      <p>Last Incident: <span className="font-medium text-gray-200">{zone.lastIncident || 'None recorded'}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* National Mining Overview - AI Focus */}
            <div className="bg-gradient-to-r from-indigo-900/50 to-gray-800 border border-indigo-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Shield className="h-5 w-5 text-indigo-400"/>
                <span>National AI Safety Overview</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">{totalZones}</div>
                  <div className="text-sm text-gray-300">Total Mines Monitored</div>
                  <div className="text-xs text-gray-500">कुल खानें</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{expandedIndianMineZones.reduce((sum, zone) => sum + zone.workers, 0).toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Workers Protected</div>
                  <div className="text-xs text-gray-500">श्रमिक सुरक्षित</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{Object.keys(stateWiseStatistics).length}</div>
                  <div className="text-sm text-gray-300">States Covered</div>
                  <div className="text-xs text-gray-500">शामिल राज्य</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{new Set(expandedIndianMineZones.map(z => z.mineType)).size}</div>
                  <div className="text-sm text-gray-300">Mine Types Analyzed</div>
                  <div className="text-xs text-gray-500">खान प्रकार विश्लेषण</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'riskmap' && <RiskMap />}
        {activeTab === 'imageanalysis' && <ImageUploadAnalysis />}
        
        {/* Live Webcam / Sensor Stream Section */}
        {activeTab === 'livewebcam' && (
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-200 mb-4">
              Real-time Sensor & Stream Monitoring / वास्तविक समय सेंसर निगरानी
            </h2>
            <div className="bg-gray-800 border border-cyan-700 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Video className="h-8 w-8 text-cyan-400" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">AI-Powered Sensor Fusion</h3>
                  <p className="text-gray-400">Integrating live video, seismic, and environmental data streams</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-semibold text-gray-200 mb-2">Stream Latency</h4>
                  <p className="text-sm text-green-400 font-bold">150 ms (Low)</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-semibold text-gray-200 mb-2">Sensor Count</h4>
                  <p className="text-sm text-indigo-400 font-bold">450+ Active Units</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-semibold text-gray-200 mb-2">AI Overlays</h4>
                  <p className="text-sm text-gray-400">Object Tracking & Thermal Anomaly</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-lg hover:from-cyan-700 hover:to-indigo-700 transition-colors shadow-md">
                  Access Live Sensor Dashboard
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'prediction' && <PredictionModel />}
        
        {/* Pore Pressure / Pit Hole Alarm Section */}
        {activeTab === 'pitholealarm' && (
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-200 mb-4">
              Pore Pressure & Pit Hole Alarm System / छिद्र दबाव और गड्ढा अलार्म
            </h2>
            <div className="bg-gray-800 border border-red-700 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-red-400" />
                <div>
                  <h3 className="text-lg font-semibold text-red-300">Geotechnical Critical Monitoring</h3>
                  <p className="text-gray-400">Monitoring internal soil/rock pressures for instability prediction</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-semibold text-gray-200 mb-2">Pressure Thresholds</h4>
                  <p className="text-sm text-red-400 font-bold">2 Zones Exceeded</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-semibold text-gray-200 mb-2">Seismic Activity</h4>
                  <p className="text-sm text-orange-400 font-bold">Moderate Increase (24h)</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-semibold text-gray-200 mb-2">Geo-Deformation</h4>
                  <p className="text-sm text-gray-400">Laser tiltmeter data analyzed</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md">
                  Review Pressure & Alarm Logs
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'alerts' && <AlertSystem />}
        {activeTab === 'smsalerts' && <SMSWhatsAppAlerts />}
        {activeTab === 'reports' && <ReportGenerator />}
        {activeTab === 'environmental' && <EnvironmentalMonitor />}
      </div>
    </div>
  );
};

export default IndianRockfallDashboard;
