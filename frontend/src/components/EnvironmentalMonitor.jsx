// import React, { useState } from 'react';
// import { Cloud, Thermometer, Droplets, Wind, Activity, Sun } from 'lucide-react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
// import { environmentalData, sensorData } from '../data/rockfallData';

// const EnvironmentalMonitor = () => {
//   const [selectedMetric, setSelectedMetric] = useState('rainfall');

//   const currentWeather = {
//     temperature: 19,
//     humidity: 78,
//     windSpeed: 15,
//     rainfall: 8.2,
//     pressure: 1013.2,
//     visibility: 8.5
//   };

//   const environmentalMetrics = [
//     { id: 'rainfall', name: 'Rainfall', icon: Droplets, unit: 'mm', color: '#3b82f6', current: currentWeather.rainfall },
//     { id: 'temperature', name: 'Temperature', icon: Thermometer, unit: '°C', color: '#ef4444', current: currentWeather.temperature },
//     { id: 'humidity', name: 'Humidity', icon: Cloud, unit: '%', color: '#10b981', current: currentWeather.humidity },
//     { id: 'windSpeed', name: 'Wind Speed', icon: Wind, unit: 'km/h', color: '#f59e0b', current: currentWeather.windSpeed }
//   ];

//   const getWeatherImpact = (rainfall, windSpeed) => {
//     if (rainfall > 10 || windSpeed > 20) {
//       return { level: 'high', color: 'red', message: 'Severe weather conditions - High rockfall risk' };
//     } else if (rainfall > 5 || windSpeed > 15) {
//       return { level: 'medium', color: 'yellow', message: 'Moderate weather impact - Increased monitoring required' };
//     } else {
//       return { level: 'low', color: 'green', message: 'Favorable weather conditions - Normal operations' };
//     }
//   };

//   const weatherImpact = getWeatherImpact(currentWeather.rainfall, currentWeather.windSpeed);

//   const MetricCard = ({ metric }) => {
//     const Icon = metric.icon;
//     return (
//       <div
//         onClick={() => setSelectedMetric(metric.id)}
//         className={`bg-white border rounded-lg p-4 cursor-pointer transition-all ${
//           selectedMetric === metric.id ? 'border-blue-500 shadow-md' : 'border-gray-200 hover:border-gray-300'
//         }`}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-sm text-gray-600">{metric.name}</p>
//             <p className="text-2xl font-bold" style={{ color: metric.color }}>
//               {metric.current} {metric.unit}
//             </p>
//           </div>
//           <Icon className="h-8 w-8" style={{ color: metric.color }} />
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-xl font-bold text-gray-800">Environmental Monitoring</h2>
//         <div className="flex items-center space-x-2">
//           <Activity className="h-5 w-5 text-blue-600" />
//           <span className="text-sm text-gray-600">Real-time Weather & Sensors</span>
//         </div>
//       </div>

//       {/* Weather Impact Alert */}
//       <div className={`border rounded-lg p-4 ${
//         weatherImpact.level === 'high' ? 'bg-red-50 border-red-200' :
//         weatherImpact.level === 'medium' ? 'bg-yellow-50 border-yellow-200' :
//         'bg-green-50 border-green-200'
//       }`}>
//         <div className="flex items-center space-x-2">
//           <Sun className={`h-5 w-5 ${
//             weatherImpact.level === 'high' ? 'text-red-600' :
//             weatherImpact.level === 'medium' ? 'text-yellow-600' :
//             'text-green-600'
//           }`} />
//           <span className={`font-medium ${
//             weatherImpact.level === 'high' ? 'text-red-800' :
//             weatherImpact.level === 'medium' ? 'text-yellow-800' :
//             'text-green-800'
//           }`}>
//             {weatherImpact.message}
//           </span>
//         </div>
//       </div>

//       {/* Current Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {environmentalMetrics.map(metric => (
//           <MetricCard key={metric.id} metric={metric} />
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Environmental Trends */}
//         <div className="lg:col-span-2 bg-white border rounded-lg p-4">
//           <h3 className="text-lg font-semibold text-gray-700 mb-4">24-Hour Environmental Trends</h3>
//           <div className="h-80">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={environmentalData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="timestamp" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Area 
//                   type="monotone" 
//                   dataKey={selectedMetric} 
//                   stroke={environmentalMetrics.find(m => m.id === selectedMetric)?.color} 
//                   fill={environmentalMetrics.find(m => m.id === selectedMetric)?.color}
//                   fillOpacity={0.3}
//                   name={environmentalMetrics.find(m => m.id === selectedMetric)?.name}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Additional Weather Data */}
//         <div className="space-y-4">
//           <div className="bg-white border rounded-lg p-4">
//             <h3 className="text-lg font-semibold text-gray-700 mb-3">Additional Metrics</h3>
//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">Atmospheric Pressure</span>
//                 <span className="font-medium">{currentWeather.pressure} hPa</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">Visibility</span>
//                 <span className="font-medium">{currentWeather.visibility} km</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">UV Index</span>
//                 <span className="font-medium">5 (Moderate)</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">Dew Point</span>
//                 <span className="font-medium">14°C</span>
//               </div>
//             </div>
//           </div>

//           {/* Sensor Status */}
//           <div className="bg-white border rounded-lg p-4">
//             <h3 className="text-lg font-semibold text-gray-700 mb-3">Sensor Network Status</h3>
//             <div className="space-y-2">
//               {sensorData.map(sensor => (
//                 <div key={sensor.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
//                   <div>
//                     <p className="text-sm font-medium text-gray-700">{sensor.id}</p>
//                     <p className="text-xs text-gray-500">{sensor.location}</p>
//                   </div>
//                   <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                     sensor.status === 'critical' ? 'text-red-600 bg-red-100' :
//                     sensor.status === 'warning' ? 'text-yellow-600 bg-yellow-100' :
//                     'text-green-600 bg-green-100'
//                   }`}>
//                     {sensor.status}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Weather Forecast */}
//           <div className="bg-white border rounded-lg p-4">
//             <h3 className="text-lg font-semibold text-gray-700 mb-3">3-Day Forecast</h3>
//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                   <Cloud className="h-4 w-4 text-gray-500" />
//                   <span className="text-sm text-gray-700">Today</span>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-medium">19°C / 12°C</p>
//                   <p className="text-xs text-gray-500">Rain: 15mm</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                   <Sun className="h-4 w-4 text-yellow-500" />
//                   <span className="text-sm text-gray-700">Tomorrow</span>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-medium">22°C / 15°C</p>
//                   <p className="text-xs text-gray-500">Rain: 2mm</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                   <Sun className="h-4 w-4 text-yellow-500" />
//                   <span className="text-sm text-gray-700">Day 3</span>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-medium">24°C / 17°C</p>
//                   <p className="text-xs text-gray-500">Rain: 0mm</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Environmental Impact Analysis */}
//       <div className="bg-white border rounded-lg p-4">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Environmental Impact on Rockfall Risk</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="font-medium text-gray-700 mb-2">Risk Factors</h4>
//             <ul className="space-y-2 text-sm">
//               <li className="flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//                 <span>Heavy rainfall increases pore pressure and reduces slope stability</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                 <span>Temperature fluctuations cause freeze-thaw cycles in rock joints</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//                 <span>High winds can trigger loose rock movement</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                 <span>Humidity affects rock weathering and joint conditions</span>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-medium text-gray-700 mb-2">Current Risk Assessment</h4>
//             <div className="space-y-2">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">Rainfall Impact:</span>
//                 <span className={`px-2 py-1 rounded text-xs font-medium ${
//                   currentWeather.rainfall > 10 ? 'text-red-600 bg-red-100' :
//                   currentWeather.rainfall > 5 ? 'text-yellow-600 bg-yellow-100' :
//                   'text-green-600 bg-green-100'
//                 }`}>
//                   {currentWeather.rainfall > 10 ? 'High' : currentWeather.rainfall > 5 ? 'Medium' : 'Low'}
//                 </span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">Wind Impact:</span>
//                 <span className={`px-2 py-1 rounded text-xs font-medium ${
//                   currentWeather.windSpeed > 20 ? 'text-red-600 bg-red-100' :
//                   currentWeather.windSpeed > 15 ? 'text-yellow-600 bg-yellow-100' :
//                   'text-green-600 bg-green-100'
//                 }`}>
//                   {currentWeather.windSpeed > 20 ? 'High' : currentWeather.windSpeed > 15 ? 'Medium' : 'Low'}
//                 </span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">Temperature Stability:</span>
//                 <span className="px-2 py-1 rounded text-xs font-medium text-green-600 bg-green-100">
//                   Stable
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnvironmentalMonitor;





// import React, { useState } from 'react';
// import { Cloud, Thermometer, Droplets, Wind, Activity, Sun, CloudRain, Eye, Gauge } from 'lucide-react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

// // Sample data
// const environmentalData = [
//   { timestamp: '00:00', rainfall: 2, temperature: 15, humidity: 82, windSpeed: 10 },
//   { timestamp: '04:00', rainfall: 5, temperature: 14, humidity: 85, windSpeed: 12 },
//   { timestamp: '08:00', rainfall: 8, temperature: 16, humidity: 80, windSpeed: 15 },
//   { timestamp: '12:00', rainfall: 12, temperature: 18, humidity: 78, windSpeed: 18 },
//   { timestamp: '16:00', rainfall: 8, temperature: 19, humidity: 75, windSpeed: 15 },
//   { timestamp: '20:00', rainfall: 4, temperature: 17, humidity: 78, windSpeed: 12 },
//   { timestamp: '24:00', rainfall: 2, temperature: 15, humidity: 82, windSpeed: 10 }
// ];

// const sensorData = [
//   { id: 'SENS-001', location: 'North Slope', status: 'active' },
//   { id: 'SENS-002', location: 'East Ridge', status: 'warning' },
//   { id: 'SENS-003', location: 'South Face', status: 'active' },
//   { id: 'SENS-004', location: 'West Valley', status: 'critical' }
// ];

// const EnvironmentalMonitor = () => {
//   const [selectedMetric, setSelectedMetric] = useState('rainfall');

//   const currentWeather = {
//     temperature: 19,
//     humidity: 78,
//     windSpeed: 15,
//     rainfall: 8.2,
//     pressure: 1013.2,
//     visibility: 8.5
//   };

//   const environmentalMetrics = [
//     { id: 'rainfall', name: 'Rainfall', icon: Droplets, unit: 'mm', color: '#3B82F6', gradient: 'from-blue-500 to-blue-600', current: currentWeather.rainfall },
//     { id: 'temperature', name: 'Temperature', icon: Thermometer, unit: '°C', color: '#EF4444', gradient: 'from-red-500 to-red-600', current: currentWeather.temperature },
//     { id: 'humidity', name: 'Humidity', icon: Cloud, unit: '%', color: '#10B981', gradient: 'from-emerald-500 to-emerald-600', current: currentWeather.humidity },
//     { id: 'windSpeed', name: 'Wind Speed', icon: Wind, unit: 'km/h', color: '#F59E0B', gradient: 'from-amber-500 to-amber-600', current: currentWeather.windSpeed }
//   ];

//   const getWeatherImpact = (rainfall, windSpeed) => {
//     if (rainfall > 10 || windSpeed > 20) {
//       return { level: 'high', color: 'red', message: 'Severe weather conditions - High rockfall risk' };
//     } else if (rainfall > 5 || windSpeed > 15) {
//       return { level: 'medium', color: 'yellow', message: 'Moderate weather impact - Increased monitoring required' };
//     } else {
//       return { level: 'low', color: 'green', message: 'Favorable weather conditions - Normal operations' };
//     }
//   };

//   const weatherImpact = getWeatherImpact(currentWeather.rainfall, currentWeather.windSpeed);

//   const MetricCard = ({ metric }) => {
//     const Icon = metric.icon;
//     const isSelected = selectedMetric === metric.id;
    
//     return (
//       <div
//         onClick={() => setSelectedMetric(metric.id)}
//         className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
//           isSelected 
//             ? 'bg-gradient-to-br ' + metric.gradient + ' shadow-lg scale-105' 
//             : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
//         }`}
//       >
//         <div className="p-6">
//           <div className="flex items-start justify-between mb-4">
//             <div className={`p-3 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-white/10'}`}>
//               <Icon className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-white/80'}`} />
//             </div>
//           </div>
//           <div>
//             <p className={`text-sm mb-1 ${isSelected ? 'text-white/90' : 'text-white/70'}`}>
//               {metric.name}
//             </p>
//             <p className={`text-3xl font-bold ${isSelected ? 'text-white' : 'text-white'}`}>
//               {metric.current}
//               <span className="text-lg ml-1">{metric.unit}</span>
//             </p>
//           </div>
//         </div>
//         {isSelected && (
//           <div className="absolute top-2 right-2">
//             <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen p-6 md:p-8" style={{ background: '#101828' }}>
//       <div className="max-w-10xl mx-auto space-y-6">
//         {/* Header */}
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-3xl font-bold text-white mb-2">Environmental Monitoring</h2>
//             <p className="text-white/60">Real-time weather analysis and sensor data</p>
//           </div>
//           <div className="flex items-center space-x-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
//             <Activity className="h-5 w-5 text-emerald-400 animate-pulse" />
//             <span className="text-sm text-white/80">Live Data</span>
//           </div>
//         </div>

//         {/* Weather Impact Alert */}
//         <div className={`rounded-xl p-5 backdrop-blur-sm border ${
//           weatherImpact.level === 'high' ? 'bg-red-500/20 border-red-500/30' :
//           weatherImpact.level === 'medium' ? 'bg-amber-500/20 border-amber-500/30' :
//           'bg-emerald-500/20 border-emerald-500/30'
//         }`}>
//           <div className="flex items-center space-x-3">
//             <div className={`p-2 rounded-lg ${
//               weatherImpact.level === 'high' ? 'bg-red-500/30' :
//               weatherImpact.level === 'medium' ? 'bg-amber-500/30' :
//               'bg-emerald-500/30'
//             }`}>
//               <Sun className={`h-5 w-5 ${
//                 weatherImpact.level === 'high' ? 'text-red-300' :
//                 weatherImpact.level === 'medium' ? 'text-amber-300' :
//                 'text-emerald-300'
//               }`} />
//             </div>
//             <span className="font-medium text-white">
//               {weatherImpact.message}
//             </span>
//           </div>
//         </div>

//         {/* Current Metrics */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {environmentalMetrics.map(metric => (
//             <MetricCard key={metric.id} metric={metric} />
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           {/* Environmental Trends */}
//           <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
//             <h3 className="text-xl font-semibold text-white mb-6">24-Hour Environmental Trends</h3>
//             <div className="h-100">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={environmentalData}>
//                   <defs>
//                     <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor={environmentalMetrics.find(m => m.id === selectedMetric)?.color} stopOpacity={0.3}/>
//                       <stop offset="95%" stopColor={environmentalMetrics.find(m => m.id === selectedMetric)?.color} stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
//                   <XAxis dataKey="timestamp" stroke="rgba(255,255,255,0.5)" />
//                   <YAxis stroke="rgba(255,255,255,0.5)" />
//                   <Tooltip 
//                     contentStyle={{ 
//                       backgroundColor: 'rgba(16, 24, 40, 0.9)', 
//                       border: '1px solid rgba(255,255,255,0.2)',
//                       borderRadius: '8px',
//                       color: '#fff'
//                     }}
//                   />
//                   <Area 
//                     type="monotone" 
//                     dataKey={selectedMetric} 
//                     stroke={environmentalMetrics.find(m => m.id === selectedMetric)?.color} 
//                     strokeWidth={3}
//                     fill="url(#colorMetric)"
//                     name={environmentalMetrics.find(m => m.id === selectedMetric)?.name}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="space-y-4">
//             {/* Additional Weather Data */}
//             <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
//               <h3 className="text-lg font-semibold text-white mb-4">Additional Metrics</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-2">
//                     <Gauge className="h-4 w-4 text-blue-400" />
//                     <span className="text-sm text-white/80">Pressure</span>
//                   </div>
//                   <span className="font-semibold text-white">{currentWeather.pressure} hPa</span>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-2">
//                     <Eye className="h-4 w-4 text-purple-400" />
//                     <span className="text-sm text-white/80">Visibility</span>
//                   </div>
//                   <span className="font-semibold text-white">{currentWeather.visibility} km</span>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-2">
//                     <Sun className="h-4 w-4 text-yellow-400" />
//                     <span className="text-sm text-white/80">UV Index</span>
//                   </div>
//                   <span className="font-semibold text-white">5 (Moderate)</span>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-2">
//                     <Droplets className="h-4 w-4 text-cyan-400" />
//                     <span className="text-sm text-white/80">Dew Point</span>
//                   </div>
//                   <span className="font-semibold text-white">14°C</span>
//                 </div>
//               </div>
//             </div>

//             {/* Sensor Status */}
//             <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
//               <h3 className="text-lg font-semibold text-white mb-4">Sensor Network</h3>
//               <div className="space-y-2">
//                 {sensorData.map(sensor => (
//                   <div key={sensor.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
//                     <div>
//                       <p className="text-sm font-medium text-white">{sensor.id}</p>
//                       <p className="text-xs text-white/60">{sensor.location}</p>
//                     </div>
//                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                       sensor.status === 'critical' ? 'bg-red-500/30 text-red-300 border border-red-500/50' :
//                       sensor.status === 'warning' ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' :
//                       'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50'
//                     }`}>
//                       {sensor.status}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Weather Forecast */}
//             <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
//               <h3 className="text-lg font-semibold text-white mb-4">3-Day Forecast</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <CloudRain className="h-5 w-5 text-blue-400" />
//                     <span className="text-sm text-white">Today</span>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm font-semibold text-white">19°C / 12°C</p>
//                     <p className="text-xs text-white/60">Rain: 15mm</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <Sun className="h-5 w-5 text-yellow-400" />
//                     <span className="text-sm text-white">Tomorrow</span>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm font-semibold text-white">22°C / 15°C</p>
//                     <p className="text-xs text-white/60">Rain: 2mm</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <Sun className="h-5 w-5 text-yellow-400" />
//                     <span className="text-sm text-white">Day 3</span>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm font-semibold text-white">24°C / 17°C</p>
//                     <p className="text-xs text-white/60">Rain: 0mm</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Environmental Impact Analysis */}
//         <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
//           <h3 className="text-xl font-semibold text-white mb-6">Environmental Impact on Rockfall Risk</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h4 className="font-semibold text-white mb-4 flex items-center">
//                 <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-2"></div>
//                 Risk Factors
//               </h4>
//               <div className="space-y-3">
//                 <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
//                   <div className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
//                   <span className="text-sm text-white/80">Heavy rainfall increases pore pressure and reduces slope stability</span>
//                 </div>
//                 <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
//                   <div className="w-2 h-2 bg-orange-400 rounded-full mt-1.5 flex-shrink-0"></div>
//                   <span className="text-sm text-white/80">Temperature fluctuations cause freeze-thaw cycles in rock joints</span>
//                 </div>
//                 <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
//                   <div className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0"></div>
//                   <span className="text-sm text-white/80">High winds can trigger loose rock movement</span>
//                 </div>
//                 <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
//                   <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
//                   <span className="text-sm text-white/80">Humidity affects rock weathering and joint conditions</span>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h4 className="font-semibold text-white mb-4 flex items-center">
//                 <div className="w-1 h-5 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full mr-2"></div>
//                 Current Risk Assessment
//               </h4>
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <span className="text-sm text-white/80">Rainfall Impact</span>
//                   <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                     currentWeather.rainfall > 10 ? 'bg-red-500/30 text-red-300 border border-red-500/50' :
//                     currentWeather.rainfall > 5 ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' :
//                     'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50'
//                   }`}>
//                     {currentWeather.rainfall > 10 ? 'High' : currentWeather.rainfall > 5 ? 'Medium' : 'Low'}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <span className="text-sm text-white/80">Wind Impact</span>
//                   <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                     currentWeather.windSpeed > 20 ? 'bg-red-500/30 text-red-300 border border-red-500/50' :
//                     currentWeather.windSpeed > 15 ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' :
//                     'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50'
//                   }`}>
//                     {currentWeather.windSpeed > 20 ? 'High' : currentWeather.windSpeed > 15 ? 'Medium' : 'Low'}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <span className="text-sm text-white/80">Temperature Stability</span>
//                   <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/30 text-emerald-300 border border-emerald-500/50">
//                     Stable
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnvironmentalMonitor;

// import React, { useState, useEffect, useCallback } from 'react';
// import { Cloud, Thermometer, Droplets, Wind, Activity, Sun, CloudRain, Eye, Gauge } from 'lucide-react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// // ** MOCK DATA (Used as a fallback if API fails or for initial state) **
// const mockEnvironmentalData = [
//   { timestamp: '00:00', rainfall: 2, temperature: 15, humidity: 82, windSpeed: 10 },
//   { timestamp: '04:00', rainfall: 5, temperature: 14, humidity: 85, windSpeed: 12 },
//   { timestamp: '08:00', rainfall: 8, temperature: 16, humidity: 80, windSpeed: 15 },
//   { timestamp: '12:00', rainfall: 12, temperature: 18, humidity: 78, windSpeed: 18 },
//   { timestamp: '16:00', rainfall: 8, temperature: 19, humidity: 75, windSpeed: 15 },
//   { timestamp: '20:00', rainfall: 4, temperature: 17, humidity: 78, windSpeed: 12 },
//   { timestamp: '24:00', rainfall: 2, temperature: 15, humidity: 82, windSpeed: 10 }
// ];

// const mockCurrentWeather = {
//   temperature: 19,
//   humidity: 78,
//   windSpeed: 15,
//   rainfall: 8.2,
//   pressure: 1013.2,
//   visibility: 8.5
// };

// const sensorData = [
//   { id: 'SENS-001', location: 'North Slope', status: 'active' },
//   { id: 'SENS-002', location: 'East Ridge', status: 'warning' },
//   { id: 'SENS-003', location: 'South Face', status: 'active' },
//   { id: 'SENS-004', location: 'West Valley', status: 'critical' }
// ];

// const EnvironmentalMonitor = () => {
//   // ** API CONFIGURATION **
//   // API Key provided by the user (assuming it is now active)
//   const API_KEY = '92b8287ebeef429f710ba5f450ac9f37'; 
  
//   // Coordinates for Jamshedpur, India
//   const LAT = '22.8046'; 
//   const LON = '86.2029'; 
  
//   // ** STATE **
//   const [selectedMetric, setSelectedMetric] = useState('rainfall');
//   const [currentWeather, setCurrentWeather] = useState(mockCurrentWeather);
//   const [environmentalData, setEnvironmentalData] = useState(mockEnvironmentalData);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [apiStatus, setApiStatus] = useState('checking');

//   // ** DATA FETCHING LOGIC **
//   const fetchWeatherData = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     setApiStatus('fetching');

//     // API URLs
//     const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`;
//     const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`;

//     try {
//       // 1. Fetch Current Weather
//       const currentResponse = await fetch(currentUrl);
      
//       if (!currentResponse.ok) {
//         const errorData = await currentResponse.json().catch(() => ({}));
//         throw new Error(errorData.message || `HTTP Error: ${currentResponse.status} - ${currentResponse.statusText}`);
//       }

//       const currentData = await currentResponse.json();
      
//       if (!currentData.main || !currentData.wind) {
//         throw new Error('Invalid current API response structure.');
//       }

//       // Map current data from API to state structure (rounding values)
//       const newCurrentWeather = {
//         temperature: Math.round(currentData.main.temp * 10) / 10,
//         humidity: Math.round(currentData.main.humidity),
//         // Convert m/s to km/h and round to 1 decimal
//         windSpeed: Math.round(currentData.wind.speed * 3.6 * 10) / 10,
//         // Rainfall in mm (default to 0 if not present)
//         rainfall: currentData.rain?.['1h'] || currentData.rain?.['3h'] || 0,
//         pressure: Math.round(currentData.main.pressure * 10) / 10,
//         // Convert meters to kilometers and round (max 10km for OpenWeatherMap)
//         visibility: currentData.visibility ? Math.round(currentData.visibility / 100) / 10 : 10 
//       };
      
//       setCurrentWeather(newCurrentWeather);

//       // 2. Fetch Forecast Data for Trends
//       const forecastResponse = await fetch(forecastUrl);
      
//       if (!forecastResponse.ok) {
//         const errorData = await forecastResponse.json().catch(() => ({}));
//         throw new Error(errorData.message || `Forecast Error: ${forecastResponse.status}`);
//       }
      
//       const forecastData = await forecastResponse.json();
      
//       if (!forecastData.list || !Array.isArray(forecastData.list)) {
//         throw new Error('Invalid forecast data structure.');
//       }
      
//       // Map forecast data for the next 7 steps (approx 21 hours)
//       const mappedForecast = forecastData.list.slice(0, 7).map(item => {
//         const date = new Date(item.dt * 1000);
//         return {
//           timestamp: date.toLocaleTimeString('en-US', { 
//             hour: '2-digit', 
//             minute: '2-digit', 
//             hour12: false 
//           }),
//           rainfall: item.rain?.['3h'] || 0,
//           temperature: Math.round(item.main.temp * 10) / 10,
//           humidity: Math.round(item.main.humidity),
//           windSpeed: Math.round(item.wind.speed * 3.6 * 10) / 10
//         };
//       });
      
//       setEnvironmentalData(mappedForecast);
//       setApiStatus('success');
//       setError(null);

//     } catch (err) {
//       console.error("API Error:", err);
      
//       let errorMessage = 'Could not fetch real-time data. ';
      
//       if (err.message.includes('401')) {
//         errorMessage += 'Invalid or inactive API key. Please ensure your key is correct and active.';
//       } else if (err.message.includes('429')) {
//         errorMessage += 'API rate limit exceeded. Please wait 5 minutes.';
//       } else {
//         errorMessage += err.message;
//       }
      
//       errorMessage += ' Displaying mock data.';
      
//       setError(errorMessage);
//       setCurrentWeather(mockCurrentWeather);
//       setEnvironmentalData(mockEnvironmentalData);
//       setApiStatus('error');
      
//     } finally {
//       setLoading(false);
//     }
//   }, [API_KEY, LAT, LON]);

//   // ** EFFECT HOOK - Fetch on mount and set refresh interval **
//   useEffect(() => {
//     fetchWeatherData();
    
//     const interval = setInterval(fetchWeatherData, 300000); // Refresh every 5 minutes
//     return () => clearInterval(interval);
//   }, [fetchWeatherData]);

//   // ** DERIVED VALUES **
//   const environmentalMetrics = [
//     { 
//       id: 'rainfall', 
//       name: 'Rainfall', 
//       icon: Droplets, 
//       unit: 'mm', 
//       color: '#3B82F6', 
//       gradient: 'from-blue-500 to-blue-600', 
//       current: currentWeather.rainfall?.toFixed(1) || '0.0' 
//     },
//     { 
//       id: 'temperature', 
//       name: 'Temperature', 
//       icon: Thermometer, 
//       unit: '°C', 
//       color: '#EF4444', 
//       gradient: 'from-red-500 to-red-600', 
//       current: currentWeather.temperature?.toFixed(1) || '—' 
//     },
//     { 
//       id: 'humidity', 
//       name: 'Humidity', 
//       icon: Cloud, 
//       unit: '%', 
//       color: '#10B981', 
//       gradient: 'from-emerald-500 to-emerald-600', 
//       current: currentWeather.humidity?.toFixed(0) || '—' 
//     },
//     { 
//       id: 'windSpeed', 
//       name: 'Wind Speed', 
//       icon: Wind, 
//       unit: 'km/h', 
//       color: '#F59E0B', 
//       gradient: 'from-amber-500 to-amber-600', 
//       current: currentWeather.windSpeed?.toFixed(1) || '—' 
//     }
//   ];

//   const getWeatherImpact = (rainfall, windSpeed) => {
//     const r = parseFloat(rainfall) || 0;
//     const w = parseFloat(windSpeed) || 0;

//     if (r > 10 || w > 20) {
//       return { level: 'high', color: 'red', message: 'Severe weather conditions - High rockfall risk' };
//     } else if (r > 5 || w > 15) {
//       return { level: 'medium', color: 'yellow', message: 'Moderate weather impact - Increased monitoring required' };
//     } else {
//       return { level: 'low', color: 'green', message: 'Favorable weather conditions - Normal operations' };
//     }
//   };

//   const weatherImpact = getWeatherImpact(currentWeather.rainfall, currentWeather.windSpeed);

//   // ** SUB-COMPONENTS **
//   const MetricCard = ({ metric }) => {
//     const Icon = metric.icon;
//     const isSelected = selectedMetric === metric.id;
    
//     return (
//       <div
//         onClick={() => setSelectedMetric(metric.id)}
//         className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
//           isSelected 
//             ? 'bg-gradient-to-br ' + metric.gradient + ' shadow-lg scale-105' 
//             : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
//         }`}
//       >
//         <div className="p-6">
//           <div className="flex items-start justify-between mb-4">
//             <div className={`p-3 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-white/10'}`}>
//               <Icon className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-white/80'}`} />
//             </div>
//           </div>
//           <div>
//             <p className={`text-sm mb-1 ${isSelected ? 'text-white/90' : 'text-white/70'}`}>
//               {metric.name}
//             </p>
//             <p className={`text-3xl font-bold ${isSelected ? 'text-white' : 'text-white'}`}>
//               {loading ? '—' : metric.current}
//               <span className="text-lg ml-1">{metric.unit}</span>
//             </p>
//           </div>
//         </div>
//         {isSelected && (
//           <div className="absolute top-2 right-2">
//             <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   // ** MAIN RENDER **
//   return (
//     <div className="min-h-screen p-6 md:p-8" style={{ background: '#101828' }}>
//       <div className="max-w-7xl mx-auto space-y-6">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h2 className="text-3xl font-bold text-white mb-2">Environmental Monitoring</h2>
//             <p className="text-white/60">Real-time weather analysis and sensor data</p>
//           </div>
//           <div className="flex items-center space-x-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
//             <Activity className={`h-5 w-5 ${
//               apiStatus === 'success' ? 'text-emerald-400 animate-pulse' : 
//               apiStatus === 'fetching' ? 'text-blue-400 animate-spin' : 
//               apiStatus === 'error' ? 'text-red-400' : 
//               'text-gray-400'
//             }`} />
//             <span className="text-sm text-white/80">
//               {apiStatus === 'success' ? 'Live Data' : 
//                apiStatus === 'fetching' ? 'Loading...' : 
//                apiStatus === 'error' ? 'Using Mock Data' : 
//                'Not Connected'}
//             </span>
//           </div>
//         </div>
        
//         {/* Error/Info Alert */}
//         {error && (
//           <div className={`rounded-xl p-4 backdrop-blur-sm border bg-amber-500/20 border-amber-500/30`}>
//             <div className="flex items-start gap-3">
//               <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//               </svg>
//               <div className="flex-1">
//                 <p className="text-sm font-medium text-amber-300">
//                   {error}
//                 </p>
//                 {error.includes('Invalid or inactive API key') && (
//                   <p className="text-xs text-amber-200 mt-1">
//                     Please ensure your OpenWeatherMap key is correct and fully activated (this can take up to 2 hours).
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Weather Impact Alert */}
//         <div className={`rounded-xl p-5 backdrop-blur-sm border ${
//           weatherImpact.level === 'high' ? 'bg-red-500/20 border-red-500/30' :
//           weatherImpact.level === 'medium' ? 'bg-amber-500/20 border-amber-500/30' :
//           'bg-emerald-500/20 border-emerald-500/30'
//         }`}>
//           <div className="flex items-center space-x-3">
//             <div className={`p-2 rounded-lg ${
//               weatherImpact.level === 'high' ? 'bg-red-500/30' :
//               weatherImpact.level === 'medium' ? 'bg-amber-500/30' :
//               'bg-emerald-500/30'
//             }`}>
//               <Sun className={`h-5 w-5 ${
//                 weatherImpact.level === 'high' ? 'text-red-300' :
//                 weatherImpact.level === 'medium' ? 'text-amber-300' :
//                 'text-emerald-300'
//               }`} />
//             </div>
//             <span className="font-medium text-white">
//               {loading ? 'Analyzing...' : weatherImpact.message}
//             </span>
//           </div>
//         </div>

//         {/* Current Metrics */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {environmentalMetrics.map(metric => (
//             <MetricCard key={metric.id} metric={metric} />
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           {/* Environmental Trends */}
//           <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
//             <h3 className="text-xl font-semibold text-white mb-6">24-Hour Environmental Trends</h3>
//             <div className="h-96">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={environmentalData}>
//                   <defs>
//                     <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor={environmentalMetrics.find(m => m.id === selectedMetric)?.color} stopOpacity={0.3}/>
//                       <stop offset="95%" stopColor={environmentalMetrics.find(m => m.id === selectedMetric)?.color} stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
//                   <XAxis dataKey="timestamp" stroke="rgba(255,255,255,0.5)" />
//                   <YAxis stroke="rgba(255,255,255,0.5)" />
//                   <Tooltip 
//                     formatter={(value) => [`${value} ${environmentalMetrics.find(m => m.id === selectedMetric)?.unit || ''}`, environmentalMetrics.find(m => m.id === selectedMetric)?.name]}
//                     contentStyle={{ 
//                       backgroundColor: 'rgba(16, 24, 40, 0.9)', 
//                       border: '1px solid rgba(255,255,255,0.2)',
//                       borderRadius: '8px',
//                       color: '#fff'
//                     }}
//                   />
//                   <Area 
//                     type="monotone" 
//                     dataKey={selectedMetric} 
//                     stroke={environmentalMetrics.find(m => m.id === selectedMetric)?.color} 
//                     strokeWidth={3}
//                     fill="url(#colorMetric)"
//                     name={environmentalMetrics.find(m => m.id === selectedMetric)?.name}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="space-y-4">
//             {/* Additional Weather Data */}
//             <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
//               <h3 className="text-lg font-semibold text-white mb-4">Additional Metrics</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-2">
//                     <Gauge className="h-4 w-4 text-blue-400" />
//                     <span className="text-sm text-white/80">Pressure</span>
//                   </div>
//                   <span className="font-semibold text-white">{currentWeather.pressure?.toFixed(1) || '—'} hPa</span>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-2">
//                     <Eye className="h-4 w-4 text-purple-400" />
//                     <span className="text-sm text-white/80">Visibility</span>
//                   </div>
//                   <span className="font-semibold text-white">{currentWeather.visibility || '—'} km</span>
//                 </div>
//                 {/* Fixed values for UV Index and Dew Point (API access required for real data) */}
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-2">
//                     <Sun className="h-4 w-4 text-yellow-400" />
//                     <span className="text-sm text-white/80">UV Index</span>
//                   </div>
//                   <span className="font-semibold text-white">5 (Moderate)</span> 
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-2">
//                     <Droplets className="h-4 w-4 text-cyan-400" />
//                     <span className="text-sm text-white/80">Dew Point</span>
//                   </div>
//                   <span className="font-semibold text-white">14°C</span> 
//                 </div>
//               </div>
//             </div>

//             {/* Sensor Status */}
//             <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
//               <h3 className="text-lg font-semibold text-white mb-4">Sensor Network</h3>
//               <div className="space-y-2">
//                 {sensorData.map(sensor => (
//                   <div key={sensor.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
//                     <div>
//                       <p className="text-sm font-medium text-white">{sensor.id}</p>
//                       <p className="text-xs text-white/60">{sensor.location}</p>
//                     </div>
//                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                       sensor.status === 'critical' ? 'bg-red-500/30 text-red-300 border border-red-500/50' :
//                       sensor.status === 'warning' ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' :
//                       'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50'
//                     }`}>
//                       {sensor.status}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* 3-Day Forecast (Mock Data - as real forecast requires specific parsing) */}
//             <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
//               <h3 className="text-lg font-semibold text-white mb-4">3-Day Forecast</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <CloudRain className="h-5 w-5 text-blue-400" />
//                     <span className="text-sm text-white">Today</span>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm font-semibold text-white">19°C / 12°C</p>
//                     <p className="text-xs text-white/60">Rain: 15mm</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <Sun className="h-5 w-5 text-yellow-400" />
//                     <span className="text-sm text-white">Tomorrow</span>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm font-semibold text-white">22°C / 15°C</p>
//                     <p className="text-xs text-white/60">Rain: 2mm</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <Sun className="h-5 w-5 text-yellow-400" />
//                     <span className="text-sm text-white">Day 3</span>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm font-semibold text-white">24°C / 17°C</p>
//                     <p className="text-xs text-white/60">Rain: 0mm</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Environmental Impact Analysis */}
//         <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
//           <h3 className="text-xl font-semibold text-white mb-6">Environmental Impact on Rockfall Risk</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h4 className="font-semibold text-white mb-4 flex items-center">
//                 <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-2"></div>
//                 Risk Factors
//               </h4>
//               <div className="space-y-3">
//                 <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
//                   <div className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
//                   <span className="text-sm text-white/80">Heavy rainfall increases pore pressure and reduces slope stability</span>
//                 </div>
//                 <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
//                   <div className="w-2 h-2 bg-orange-400 rounded-full mt-1.5 flex-shrink-0"></div>
//                   <span className="text-sm text-white/80">Temperature fluctuations cause freeze-thaw cycles in rock joints</span>
//                 </div>
//                 <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
//                   <div className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0"></div>
//                   <span className="text-sm text-white/80">High winds can trigger loose rock movement</span>
//                 </div>
//                 <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
//                   <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
//                   <span className="text-sm text-white/80">Humidity affects rock weathering and joint conditions</span>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h4 className="font-semibold text-white mb-4 flex items-center">
//                 <div className="w-1 h-5 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full mr-2"></div>
//                 Current Risk Assessment
//               </h4>
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <span className="text-sm text-white/80">Rainfall Impact</span>
//                   <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                     currentWeather.rainfall > 10 ? 'bg-red-500/30 text-red-300 border border-red-500/50' :
//                     currentWeather.rainfall > 5 ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' :
//                     'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50'
//                   }`}>
//                     {currentWeather.rainfall > 10 ? 'High' : currentWeather.rainfall > 5 ? 'Medium' : 'Low'}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <span className="text-sm text-white/80">Wind Impact</span>
//                   <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                     currentWeather.windSpeed > 20 ? 'bg-red-500/30 text-red-300 border border-red-500/50' :
//                     currentWeather.windSpeed > 15 ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' :
//                     'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50'
//                   }`}>
//                     {currentWeather.windSpeed > 20 ? 'High' : currentWeather.windSpeed > 15 ? 'Medium' : 'Low'}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
//                   <span className="text-sm text-white/80">Temperature Stability</span>
//                   <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/30 text-emerald-300 border border-emerald-500/50">
//                     Stable
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnvironmentalMonitor;



import React, { useState, useEffect, useCallback } from 'react';
import { Cloud, Thermometer, Droplets, Wind, Activity, Sun, CloudRain, Eye, Gauge, MapPin, Search } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// ** MOCK DATA (Used as a fallback) **
const mockEnvironmentalData = [
  { timestamp: '00:00', rainfall: 2, temperature: 15, humidity: 82, windSpeed: 10 },
  { timestamp: '04:00', rainfall: 5, temperature: 14, humidity: 85, windSpeed: 12 },
  { timestamp: '08:00', rainfall: 8, temperature: 16, humidity: 80, windSpeed: 15 },
  { timestamp: '12:00', rainfall: 12, temperature: 18, humidity: 78, windSpeed: 18 },
  { timestamp: '16:00', rainfall: 8, temperature: 19, humidity: 75, windSpeed: 15 },
  { timestamp: '20:00', rainfall: 4, temperature: 17, humidity: 78, windSpeed: 12 },
  { timestamp: '24:00', rainfall: 2, temperature: 15, humidity: 82, windSpeed: 10 }
];

const mockCurrentWeather = {
  temperature: 19,
  humidity: 78,
  windSpeed: 15,
  rainfall: 8.2,
  pressure: 1013.2,
  visibility: 8.5
};

const sensorData = [
  { id: 'SENS-001', location: 'North Slope', status: 'active' },
  { id: 'SENS-002', location: 'East Ridge', status: 'warning' },
  { id: 'SENS-003', location: 'South Face', status: 'active' },
  { id: 'SENS-004', location: 'West Valley', status: 'critical' }
];

const EnvironmentalMonitor = () => {
  // ** API CONFIGURATION **
  const API_KEY = '92b8287ebeef429f710ba5f450ac9f37'; 
  
  // ** LOCATION STATE (Dynamic) **
  const [city, setCity] = useState('Jamshedpur');
  const [country, setCountry] = useState('India');
  const [lat, setLat] = useState('22.8046'); // Default Jamshedpur LAT
  const [lon, setLon] = useState('86.2029'); // Default Jamshedpur LON
  const [tempCityInput, setTempCityInput] = useState('');

  // ** WEATHER DATA STATE **
  const [selectedMetric, setSelectedMetric] = useState('rainfall');
  const [currentWeather, setCurrentWeather] = useState(mockCurrentWeather);
  const [environmentalData, setEnvironmentalData] = useState(mockEnvironmentalData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiStatus, setApiStatus] = useState('checking');

  // ** 1. GEOCODING FUNCTION: Converts City Name to LAT/LON **
  const geocodeLocation = useCallback(async (cityName) => {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    
    try {
      const geoResponse = await fetch(geoUrl);
      const geoData = await geoResponse.json();

      if (!geoResponse.ok || geoData.length === 0) {
        throw new Error('Location not found.');
      }

      const location = geoData[0];
      setLat(location.lat.toFixed(4));
      setLon(location.lon.toFixed(4));
      setCity(location.name);
      setCountry(location.country);
      setTempCityInput(''); 
      return true;

    } catch (err) {
      console.error("Geocoding Error:", err);
      setError(`Location search failed: ${err.message}. Showing previous data.`);
      setLoading(false);
      return false;
    }
  }, [API_KEY]);

  // ** 2. WEATHER FETCHING LOGIC (Uses LAT/LON) **
  const fetchWeatherData = useCallback(async (currentLat, currentLon) => {
    setLoading(true);
    setError(null);
    setApiStatus('fetching');

    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLon}&appid=${API_KEY}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLat}&lon=${currentLon}&appid=${API_KEY}&units=metric`;

    try {
      // 1. Fetch Current Weather
      const currentResponse = await fetch(currentUrl);
      if (!currentResponse.ok) {
        const errorData = await currentResponse.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP Error: ${currentResponse.status}`);
      }
      const currentData = await currentResponse.json();
      
      const newCurrentWeather = {
        temperature: Math.round(currentData.main.temp * 10) / 10,
        humidity: Math.round(currentData.main.humidity),
        windSpeed: Math.round(currentData.wind.speed * 3.6 * 10) / 10,
        rainfall: currentData.rain?.['1h'] || currentData.rain?.['3h'] || 0,
        pressure: Math.round(currentData.main.pressure * 10) / 10,
        visibility: currentData.visibility ? Math.round(currentData.visibility / 100) / 10 : 10
      };
      setCurrentWeather(newCurrentWeather);

      // 2. Fetch Forecast Data for Trends
      const forecastResponse = await fetch(forecastUrl);
      if (!forecastResponse.ok) throw new Error('Forecast API failed.');
      const forecastData = await forecastResponse.json();
      
      const mappedForecast = forecastData.list.slice(0, 7).map(item => {
        const date = new Date(item.dt * 1000);
        return {
          timestamp: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
          rainfall: item.rain?.['3h'] || 0,
          temperature: Math.round(item.main.temp * 10) / 10,
          humidity: Math.round(item.main.humidity),
          windSpeed: Math.round(item.wind.speed * 3.6 * 10) / 10
        };
      });
      
      setEnvironmentalData(mappedForecast);
      setApiStatus('success');
      setError(null);

    } catch (err) {
      console.error("API Error:", err);
      let errorMessage = 'Could not fetch real-time weather. ';
      if (err.message.includes('401')) {
        errorMessage += 'Invalid or inactive API key.';
      } else {
        errorMessage += err.message;
      }
      errorMessage += ' Displaying mock data.';
      
      setError(errorMessage);
      setCurrentWeather(mockCurrentWeather);
      setEnvironmentalData(mockEnvironmentalData);
      setApiStatus('error');
    } finally {
      setLoading(false);
    }
  }, [API_KEY]);

  // ** Handler for Search Button **
  const handleSearch = async (e) => {
    e.preventDefault();
    if (tempCityInput.trim()) {
        await geocodeLocation(tempCityInput.trim());
    }
  };

  // ** EFFECT HOOK - Reruns when LAT or LON changes **
  useEffect(() => {
    // Check if we have valid coordinates before fetching weather
    if (lat && lon) {
      fetchWeatherData(lat, lon);
      
      // Set up refresh interval (5 minutes)
      const interval = setInterval(() => fetchWeatherData(lat, lon), 300000); 
      return () => clearInterval(interval);
    } else {
        setLoading(false);
    }
  }, [fetchWeatherData, lat, lon]);

  // ** DERIVED VALUES AND HELPER FUNCTIONS (No change here) **
  const environmentalMetrics = [
    { id: 'rainfall', name: 'Rainfall', icon: Droplets, unit: 'mm', color: '#3B82F6', gradient: 'from-blue-500 to-blue-600', current: currentWeather.rainfall?.toFixed(1) || '0.0' },
    { id: 'temperature', name: 'Temperature', icon: Thermometer, unit: '°C', color: '#EF4444', gradient: 'from-red-500 to-red-600', current: currentWeather.temperature?.toFixed(1) || '—' },
    { id: 'humidity', name: 'Humidity', icon: Cloud, unit: '%', color: '#10B981', gradient: 'from-emerald-500 to-emerald-600', current: currentWeather.humidity?.toFixed(0) || '—' },
    { id: 'windSpeed', name: 'Wind Speed', icon: Wind, unit: 'km/h', color: '#F59E0B', gradient: 'from-amber-500 to-amber-600', current: currentWeather.windSpeed?.toFixed(1) || '—' }
  ];

  const getWeatherImpact = (rainfall, windSpeed) => {
    const r = parseFloat(rainfall) || 0;
    const w = parseFloat(windSpeed) || 0;
    if (r > 10 || w > 20) {
      return { level: 'high', color: 'red', message: 'Severe weather conditions - High rockfall risk' };
    } else if (r > 5 || w > 15) {
      return { level: 'medium', color: 'yellow', message: 'Moderate weather impact - Increased monitoring required' };
    } else {
      return { level: 'low', color: 'green', message: 'Favorable weather conditions - Normal operations' };
    }
  };

  const weatherImpact = getWeatherImpact(currentWeather.rainfall, currentWeather.windSpeed);

  // ** SUB-COMPONENTS (MetricCard remains the same) **
  const MetricCard = ({ metric }) => {
    const Icon = metric.icon;
    const isSelected = selectedMetric === metric.id;
    return (
      <div
        onClick={() => setSelectedMetric(metric.id)}
        className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
          isSelected 
            ? 'bg-gradient-to-br ' + metric.gradient + ' shadow-lg scale-105' 
            : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
        }`}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-white/10'}`}>
              <Icon className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-white/80'}`} />
            </div>
          </div>
          <div>
            <p className={`text-sm mb-1 ${isSelected ? 'text-white/90' : 'text-white/70'}`}>
              {metric.name}
            </p>
            <p className={`text-3xl font-bold ${isSelected ? 'text-white' : 'text-white'}`}>
              {loading ? '—' : metric.current}
              <span className="text-lg ml-1">{metric.unit}</span>
            </p>
          </div>
        </div>
        {isSelected && (
          <div className="absolute top-2 right-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    );
  };

  // ** MAIN RENDER **
  return (
    <div className="min-h-screen p-6 md:p-8" style={{ background: '#101828' }}>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header and Location Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Environmental Monitoring</h2>
            <div className="flex items-center text-white/60">
                <MapPin className="h-4 w-4 mr-1 text-red-400" />
                <p className="text-base font-semibold">{city}, {country}</p>
                <span className="text-xs ml-3">({lat}, {lon})</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
             {/* Search Bar */}
             <form onSubmit={handleSearch} className="flex items-center bg-white/10 rounded-lg border border-white/20">
                <input
                    type="text"
                    value={tempCityInput}
                    onChange={(e) => setTempCityInput(e.target.value)}
                    placeholder="Enter City/District"
                    className="bg-transparent text-white/90 placeholder-white/50 p-2 focus:outline-none w-48"
                />
                <button 
                    type="submit" 
                    className="p-2 text-white/80 hover:text-white transition-colors"
                    disabled={loading}
                >
                    <Search className="h-5 w-5" />
                </button>
            </form>

            {/* Live Data Status */}
            <div className="flex items-center space-x-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Activity className={`h-5 w-5 ${
                apiStatus === 'success' ? 'text-emerald-400 animate-pulse' : 
                apiStatus === 'fetching' ? 'text-blue-400 animate-spin' : 
                apiStatus === 'error' ? 'text-red-400' : 
                'text-gray-400'
                }`} />
                <span className="text-sm text-white/80">
                {apiStatus === 'success' ? 'Live Data' : 
                apiStatus === 'fetching' ? 'Loading...' : 
                apiStatus === 'error' ? 'Mock Data' : 
                'Not Connected'}
                </span>
            </div>
          </div>
        </div>
        
        {/* Error/Info Alert */}
        {error && (
          <div className={`rounded-xl p-4 backdrop-blur-sm border bg-amber-500/20 border-amber-500/30`}>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-sm font-medium text-amber-300">{error}</p>
            </div>
          </div>
        )}

        {/* Weather Impact Alert */}
        <div className={`rounded-xl p-5 backdrop-blur-sm border ${
          weatherImpact.level === 'high' ? 'bg-red-500/20 border-red-500/30' :
          weatherImpact.level === 'medium' ? 'bg-amber-500/20 border-amber-500/30' :
          'bg-emerald-500/20 border-emerald-500/30'
        }`}>
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${
              weatherImpact.level === 'high' ? 'bg-red-500/30' :
              weatherImpact.level === 'medium' ? 'bg-amber-500/30' :
              'bg-emerald-500/30'
            }`}>
              <Sun className={`h-5 w-5 ${
                weatherImpact.level === 'high' ? 'text-red-300' :
                weatherImpact.level === 'medium' ? 'text-amber-300' :
                'text-emerald-300'
              }`} />
            </div>
            <span className="font-medium text-white">
              {loading ? 'Analyzing...' : weatherImpact.message}
            </span>
          </div>
        </div>
{/* -------------------------------------------------------------------------------------------------------- */}
        {/* Current Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {environmentalMetrics.map(metric => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Environmental Trends */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6">24-Hour Environmental Trends</h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={environmentalData}>
                  <defs>
                    <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={environmentalMetrics.find(m => m.id === selectedMetric)?.color} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={environmentalMetrics.find(m => m.id === selectedMetric)?.color} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="timestamp" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip 
                    formatter={(value) => [`${value} ${environmentalMetrics.find(m => m.id === selectedMetric)?.unit || ''}`, environmentalMetrics.find(m => m.id === selectedMetric)?.name]}
                    contentStyle={{ 
                      backgroundColor: 'rgba(16, 24, 40, 0.9)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey={selectedMetric} 
                    stroke={environmentalMetrics.find(m => m.id === selectedMetric)?.color} 
                    strokeWidth={3}
                    fill="url(#colorMetric)"
                    name={environmentalMetrics.find(m => m.id === selectedMetric)?.name}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            {/* Additional Weather Data */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-white mb-4">Additional Metrics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Gauge className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-white/80">Pressure</span>
                  </div>
                  <span className="font-semibold text-white">{currentWeather.pressure?.toFixed(1) || '—'} hPa</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-white/80">Visibility</span>
                  </div>
                  <span className="font-semibold text-white">{currentWeather.visibility || '—'} km</span>
                </div>
                {/* Fixed values for UV Index and Dew Point */}
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Sun className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-white/80">UV Index</span>
                  </div>
                  <span className="font-semibold text-white">5 (Moderate)</span> 
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm text-white/80">Dew Point</span>
                  </div>
                  <span className="font-semibold text-white">14°C</span> 
                </div>
              </div>
            </div>

            {/* Sensor Status */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-white mb-4">Sensor Network</h3>
              <div className="space-y-2">
                {sensorData.map(sensor => (
                  <div key={sensor.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div>
                      <p className="text-sm font-medium text-white">{sensor.id}</p>
                      <p className="text-xs text-white/60">{sensor.location}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      sensor.status === 'critical' ? 'bg-red-500/30 text-red-300 border border-red-500/50' :
                      sensor.status === 'warning' ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' :
                      'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50'
                    }`}>
                      {sensor.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Impact Analysis */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Environmental Impact on Rockfall Risk</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-2"></div>
                Risk Factors
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-white/80">Heavy rainfall increases pore pressure and reduces slope stability</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-white/80">Temperature fluctuations cause freeze-thaw cycles in rock joints</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-white/80">High winds can trigger loose rock movement</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-white/80">Humidity affects rock weathering and joint conditions</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <div className="w-1 h-5 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full mr-2"></div>
                Current Risk Assessment
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-white/80">Rainfall Impact</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    currentWeather.rainfall > 10 ? 'bg-red-500/30 text-red-300 border border-red-500/50' :
                    currentWeather.rainfall > 5 ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' :
                    'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50'
                  }`}>
                    {currentWeather.rainfall > 10 ? 'High' : currentWeather.rainfall > 5 ? 'Medium' : 'Low'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-white/80">Wind Impact</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    currentWeather.windSpeed > 20 ? 'bg-red-500/30 text-red-300 border border-red-500/50' :
                    currentWeather.windSpeed > 15 ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' :
                    'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50'
                  }`}>
                    {currentWeather.windSpeed > 20 ? 'High' : currentWeather.windSpeed > 15 ? 'Medium' : 'Low'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-white/80">Temperature Stability</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/30 text-emerald-300 border border-emerald-500/50">
                    Stable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalMonitor;