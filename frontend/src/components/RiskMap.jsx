// import React, { useState } from 'react';
// import { MapPin, Layers, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
// import { indianMineZones } from '../data/indianMinesData';

// const RiskMap = () => {
//   const [selectedZone, setSelectedZone] = useState(null);
//   const [mapView, setMapView] = useState('2d');
//   const [showLabels, setShowLabels] = useState(true);

//   const getRiskColor = (level) => {
//     switch (level) {
//       case 'high': return '#ef4444';
//       case 'medium': return '#f59e0b';
//       case 'low': return '#10b981';
//       default: return '#6b7280';
//     }
//   };

//   const getRiskSize = (probability) => {
//     return Math.max(8, probability * 20);
//   };

//   const getMineTypeColor = (mineType) => {
//     const colors = {
//       'Coal': '#1f2937',
//       'Iron Ore': '#dc2626',
//       'Gold': '#fbbf24',
//       'Bauxite': '#f97316',
//       'Marble': '#e5e7eb',
//       'Limestone': '#6b7280'
//     };
//     return colors[mineType] || '#6b7280';
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-xl font-bold text-gray-800">Interactive Indian Mine Risk Map</h2>
//           <p className="text-sm text-gray-600">भारतीय खान जोखिम मानचित्र</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <button
//             onClick={() => setMapView(mapView === '2d' ? '3d' : '2d')}
//             className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             <Layers className="h-4 w-4" />
//             <span>{mapView === '2d' ? '3D View' : '2D View'}</span>
//           </button>
//           <button
//             onClick={() => setShowLabels(!showLabels)}
//             className="flex items-center space-x-2 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
//           >
//             <MapPin className="h-4 w-4" />
//             <span>{showLabels ? 'Hide Labels' : 'Show Labels'}</span>
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Map Visualization */}
//         <div className="lg:col-span-2">
//           <div className="bg-gray-100 rounded-lg p-4 h-96 relative border-2 border-gray-200">
//             <div className="absolute top-2 left-2 bg-white rounded-lg p-2 shadow-md z-10">
//               <div className="flex items-center space-x-2">
//                 <ZoomIn className="h-4 w-4 text-gray-600 cursor-pointer hover:text-blue-600" />
//                 <ZoomOut className="h-4 w-4 text-gray-600 cursor-pointer hover:text-blue-600" />
//                 <RotateCcw className="h-4 w-4 text-gray-600 cursor-pointer hover:text-blue-600" />
//               </div>
//             </div>

//             {/* Mine Site Visualization */}
//             <svg className="w-full h-full" viewBox="0 0 400 300">
//               {/* Background terrain */}
//               <defs>
//                 <pattern id="terrain" patternUnits="userSpaceOnUse" width="20" height="20">
//                   <rect width="20" height="20" fill="#f3f4f6" />
//                   <circle cx="10" cy="10" r="1" fill="#d1d5db" />
//                 </pattern>
//               </defs>
//               <rect width="400" height="300" fill="url(#terrain)" />
              
//               {/* Indian map outline (simplified) */}
//               <path 
//                 d="M80 80 L320 80 L340 120 L320 200 L280 240 L120 240 L80 200 Z" 
//                 fill="none" 
//                 stroke="#8b5cf6" 
//                 strokeWidth="2" 
//                 strokeDasharray="5,5" 
//               />
              
//               {/* Risk zones */}
//               {indianMineZones.map(zone => (
//                 <g key={zone.id}>
//                   <circle
//                     cx={zone.x}
//                     cy={zone.y}
//                     r={getRiskSize(zone.probability)}
//                     fill={getRiskColor(zone.riskLevel)}
//                     fillOpacity="0.7"
//                     stroke={getMineTypeColor(zone.mineType)}
//                     strokeWidth="2"
//                     className="cursor-pointer hover:fill-opacity-90 transition-all"
//                     onClick={() => setSelectedZone(zone)}
//                   />
//                   {showLabels && (
//                     <text
//                       x={zone.x}
//                       y={zone.y - getRiskSize(zone.probability) - 5}
//                       textAnchor="middle"
//                       className="text-xs font-medium fill-gray-700"
//                     >
//                       {zone.name.split(' - ')[0]}
//                     </text>
//                   )}
//                   <text
//                     x={zone.x}
//                     y={zone.y + 3}
//                     textAnchor="middle"
//                     className="text-xs font-bold fill-white"
//                   >
//                     {(zone.probability * 100).toFixed(0)}%
//                   </text>
//                 </g>
//               ))}
              
//               {/* Scale indicator */}
//               <g transform="translate(20, 260)">
//                 <text x="0" y="0" className="text-xs fill-gray-600">Scale: 500km</text>
//                 <line x1="0" y1="5" x2="50" y2="5" stroke="#6b7280" strokeWidth="2" />
//               </g>
//             </svg>

//             {/* Legend */}
//             <div className="absolute bottom-2 right-2 bg-white rounded-lg p-3 shadow-md">
//               <h4 className="text-sm font-semibold text-gray-700 mb-2">Risk Levels</h4>
//               <div className="space-y-1">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <span className="text-xs text-gray-600">High (&gt;70%)</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <span className="text-xs text-gray-600">Medium (30-70%)</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   <span className="text-xs text-gray-600">Low (&lt;30%)</span>
//                 </div>
//               </div>
//               <div className="mt-2 pt-2 border-t">
//                 <h5 className="text-xs font-semibold text-gray-700 mb-1">Mine Types</h5>
//                 <div className="grid grid-cols-2 gap-1 text-xs">
//                   <div className="flex items-center space-x-1">
//                     <div className="w-2 h-2 rounded-full bg-gray-800"></div>
//                     <span>Coal</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <div className="w-2 h-2 rounded-full bg-red-600"></div>
//                     <span>Iron</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
//                     <span>Gold</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <div className="w-2 h-2 rounded-full bg-orange-500"></div>
//                     <span>Bauxite</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Zone Details Panel */}
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold text-gray-700">Zone Details / क्षेत्र विवरण</h3>
//           {selectedZone ? (
//             <div className="bg-white border rounded-lg p-4 space-y-3">
//               <div className="flex items-center justify-between">
//                 <h4 className="font-medium text-gray-800">{selectedZone.name}</h4>
//                 <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                   selectedZone.riskLevel === 'high' ? 'text-red-600 bg-red-100' :
//                   selectedZone.riskLevel === 'medium' ? 'text-yellow-600 bg-yellow-100' :
//                   'text-green-600 bg-green-100'
//                 }`}>
//                   {selectedZone.riskLevel.toUpperCase()}
//                 </span>
//               </div>
              
//               <div className="space-y-2 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">State / राज्य:</span>
//                   <span className="font-medium">{selectedZone.state}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Mine Type / खान प्रकार:</span>
//                   <span className="font-medium">{selectedZone.mineType}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Risk Probability:</span>
//                   <span className="font-medium">{(selectedZone.probability * 100).toFixed(1)}%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Last Incident:</span>
//                   <span className="font-medium">{selectedZone.lastIncident || 'None'}</span>
//                 </div>
//               </div>

//               <div className="pt-3 border-t">
//                 <h5 className="font-medium text-gray-700 mb-2">Recommended Actions / सुझावित कार्य:</h5>
//                 <ul className="text-sm text-gray-600 space-y-1">
//                   {selectedZone.riskLevel === 'high' && (
//                     <>
//                       <li>• तत्काल कर्मचारियों की निकासी (Immediate evacuation of personnel)</li>
//                       <li>• निगरानी आवृत्ति बढ़ाएं (Increase monitoring frequency)</li>
//                       <li>• अतिरिक्त सेंसर तैनात करें (Deploy additional sensors)</li>
//                       <li>• ढलान स्थिरीकरण पर विचार करें (Consider slope stabilization)</li>
//                     </>
//                   )}
//                   {selectedZone.riskLevel === 'medium' && (
//                     <>
//                       <li>• उन्नत निगरानी प्रोटोकॉल (Enhanced monitoring protocol)</li>
//                       <li>• भारी उपकरण पहुंच प्रतिबंधित करें (Restrict heavy equipment access)</li>
//                       <li>• दैनिक दृश्य निरीक्षण (Daily visual inspections)</li>
//                       <li>• आकस्मिक योजना तैयार करें (Prepare contingency plans)</li>
//                     </>
//                   )}
//                   {selectedZone.riskLevel === 'low' && (
//                     <>
//                       <li>• नियमित निगरानी जारी रखें (Continue routine monitoring)</li>
//                       <li>• साप्ताहिक दृश्य निरीक्षण (Weekly visual inspections)</li>
//                       <li>• वर्तमान प्रोटोकॉल बनाए रखें (Maintain current protocols)</li>
//                     </>
//                   )}
//                 </ul>
//               </div>
//             </div>
//           ) : (
//             <div className="bg-gray-50 border rounded-lg p-4 text-center text-gray-500">
//               <MapPin className="h-8 w-8 mx-auto mb-2 text-gray-400" />
//               <p>Click on a zone in the map to view details</p>
//               <p className="text-xs">विवरण देखने के लिए मानचित्र पर एक क्षेत्र पर क्लिक करें</p>
//             </div>
//           )}

//           {/* Quick Stats */}
//           <div className="bg-white border rounded-lg p-4">
//             <h4 className="font-medium text-gray-700 mb-3">Indian Mine Statistics</h4>
//             <div className="space-y-2 text-sm">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Total Zones:</span>
//                 <span className="font-medium">{indianMineZones.length}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">High Risk:</span>
//                 <span className="font-medium text-red-600">
//                   {indianMineZones.filter(z => z.riskLevel === 'high').length}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Coal Mines:</span>
//                 <span className="font-medium text-gray-800">
//                   {indianMineZones.filter(z => z.mineType === 'Coal').length}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">States Covered:</span>
//                 <span className="font-medium text-blue-600">
//                   {new Set(indianMineZones.map(z => z.state)).size}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RiskMap;


// import React, { useState } from 'react';
// // import { indianMineZones } from '../data/indianMinesData';

// import { MapPin, Layers, ZoomIn, ZoomOut, RotateCcw, AlertTriangle, Shield, TrendingUp, Users } from 'lucide-react';

// // --- MOCK DATA (For self-contained file) ---
// const indianMineZones = [
//   { id: 1, name: 'Ramagiri Gold Mine', state: 'Andhra Pradesh', mineType: 'Gold', workers: 750, riskLevel: 'high', probability: 0.88, lastIncident: '3 hours ago', x: 280, y: 220 },
//   { id: 2, name: 'Jharia Coalfield', state: 'Jharkhand', mineType: 'Coal', workers: 4200, riskLevel: 'critical', probability: 0.95, lastIncident: 'Active Alert', x: 220, y: 100 },
//   { id: 3, name: 'Khetri Copper Site', state: 'Rajasthan', mineType: 'Copper', workers: 1100, riskLevel: 'medium', probability: 0.55, lastIncident: '1 week ago', x: 150, y: 80 },
//   { id: 4, name: 'Bailadila Iron Ore', state: 'Chhattisgarh', mineType: 'Iron Ore', workers: 1800, riskLevel: 'low', probability: 0.22, lastIncident: '3 months ago', x: 260, y: 160 },
//   { id: 5, name: 'Panna Diamond Field', state: 'Madhya Pradesh', mineType: 'Diamond', workers: 500, riskLevel: 'medium', probability: 0.61, lastIncident: '2 days ago', x: 200, y: 140 },
//   { id: 6, name: 'Singareni Coal', state: 'Telangana', mineType: 'Coal', workers: 3000, riskLevel: 'high', probability: 0.78, lastIncident: '1 day ago', x: 300, y: 180 },
//   { id: 7, name: 'Hutti Gold Mine', state: 'Karnataka', mineType: 'Gold', workers: 900, riskLevel: 'low', probability: 0.15, lastIncident: '6 months ago', x: 200, y: 250 },
// ];

// const RiskMap = () => {
//   const [selectedZone, setSelectedZone] = useState(null);
//   // Map control states (zoom/pan logic is simplified for this single file view)
//   const [zoomLevel, setZoomLevel] = useState(1); 
//   const [showLabels, setShowLabels] = useState(true);

//   // --- Utility Functions for Dark/AI Theme ---

//   const getRiskColor = (level) => {
//     switch (level) {
//       case 'critical': return 'text-red-400';
//       case 'high': return '#f87171'; // Red-400
//       case 'medium': return '#fbbf24'; // Amber-400
//       case 'low': return '#4ade80';   // Green-400
//       default: return '#9ca3af';     // Gray-400
//     }
//   };

//   const getRiskSize = (probability) => {
//     // Size based on probability (8px min, 25px max)
//     return Math.max(8, probability * 17) * zoomLevel;
//   };

//   const getMineTypeGlow = (mineType) => {
//     const glows = {
//       'Coal': '#0891b2', // Cyan-600
//       'Iron Ore': '#ef4444', // Red-500
//       'Gold': '#fcd34d', // Amber-300
//       'Copper': '#f97316', // Orange-600
//       'Diamond': '#a78bfa', // Violet-400
//       default: '#94a3b8' // Slate-400
//     };
//     // Use an SVG filter name derived from the glow color for unique filters
//     return `url(#glow-${mineType.replace(/\s/g, '')})`;
//   };

//   // --- Stat Calculation for Quick Stats Panel ---
//   const totalZones = indianMineZones.length;
//   const highRiskCount = indianMineZones.filter(z => z.riskLevel === 'high' || z.riskLevel === 'critical').length;
//   const totalWorkers = indianMineZones.reduce((sum, zone) => sum + zone.workers, 0);

//   return (
//     <div className="space-y-6 p-6 bg-gray-900 rounded-2xl">
      
//       {/* Title and Controls */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-700 pb-4">
//         <div>
//           <h2 className="text-2xl font-bold text-white">AI Geo-Intelligence Risk Map</h2>
//           <p className="text-sm text-gray-400">भारतीय खान जोखिम मानचित्र &mdash; Active Monitoring View</p>
//         </div>
//         <div className="flex items-center space-x-3 mt-3 sm:mt-0">
//           <button
//             onClick={() => setShowLabels(!showLabels)}
//             className="flex items-center space-x-2 px-3 py-2 bg-gray-800 text-gray-300 rounded-xl hover:bg-indigo-900/50 transition-colors border border-gray-700"
//           >
//             <MapPin className="h-4 w-4 text-cyan-400" />
//             <span className="text-sm">{showLabels ? 'Hide Labels' : 'Show Labels'}</span>
//           </button>
//         </div>
//       </div>

//       {/* Map and Details Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
//         {/* --- Map Visualization --- */}
//         <div className="lg:col-span-2 relative bg-gray-950 rounded-xl shadow-inner shadow-black/50 border border-indigo-900/50 overflow-hidden">
//           <div className="absolute top-2 left-2 z-20 flex flex-col space-y-2">
//             <button onClick={() => setZoomLevel(z => Math.min(2, z + 0.2))} className="p-2 bg-gray-800 text-cyan-400 rounded-lg hover:bg-gray-700 transition"><ZoomIn className="h-5 w-5" /></button>
//             <button onClick={() => setZoomLevel(z => Math.max(0.6, z - 0.2))} className="p-2 bg-gray-800 text-cyan-400 rounded-lg hover:bg-gray-700 transition"><ZoomOut className="h-5 w-5" /></button>
//             <button onClick={() => setZoomLevel(1)} className="p-2 bg-gray-800 text-indigo-400 rounded-lg hover:bg-gray-700 transition"><RotateCcw className="h-5 w-5" /></button>
//           </div>

//           {/* SVG Map Area */}
//           <svg 
//             className="w-full h-[550px]" 
//             viewBox="0 0 400 300"
//             style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
//           >
//             {/* SVG Filter for Glow Effect (Reused for different types) */}
//             <defs>
//               {['Coal', 'IronOre', 'Gold', 'Copper', 'Diamond'].map(type => (
//                 <filter key={type} id={`glow-${type}`} x="-50%" y="-50%" width="200%" height="200%">
//                   <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//                   <feMerge>
//                     <feMergeNode in="coloredBlur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//               ))}
              
//               {/* Digital Grid Background */}
//               <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
//                 <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1f2937" strokeWidth="0.5"/>
//               </pattern>
//             </defs>

//             <rect width="400" height="300" fill="url(#grid)" />
            
//             {/* Indian map outline (AI scanning lines) */}
//             <path 
//               d="M80 80 L320 80 L340 120 L320 200 L280 240 L120 240 L80 200 Z" 
//               fill="none" 
//               stroke="#4f46e5" // Indigo 600
//               strokeWidth="1.5" 
//               strokeDasharray="5,10,2,10" // Dotted/Scanning effect
//               className="animate-pulse"
//             />
            
//             {/* Risk zones (Glow and interactivity) */}
//             {indianMineZones.map(zone => (
//               <g key={zone.id} className="cursor-pointer" onClick={() => setSelectedZone(zone)}>
//                 {/* Outer Glow/Halo */}
//                 <circle
//                   cx={zone.x}
//                   cy={zone.y}
//                   r={getRiskSize(zone.probability) + 2}
//                   fill={getRiskColor(zone.riskLevel)}
//                   fillOpacity="0.1"
//                   filter={getMineTypeGlow(zone.mineType)}
//                 />

//                 {/* Main Risk Marker */}
//                 <circle
//                   cx={zone.x}
//                   cy={zone.y}
//                   r={getRiskSize(zone.probability)}
//                   fill={getRiskColor(zone.riskLevel)}
//                   fillOpacity="0.85"
//                   stroke={getRiskColor(zone.riskLevel)}
//                   strokeWidth="0.5"
//                   className="transition-all duration-300 hover:fill-opacity-100"
//                 />
                
//                 {/* Risk Percentage Text */}
//                 <text
//                   x={zone.x}
//                   y={zone.y + 1}
//                   textAnchor="middle"
//                   alignmentBaseline="middle"
//                   className="text-[6px] font-extrabold fill-gray-900" // Dark text over bright marker
//                 >
//                   {(zone.probability * 100).toFixed(0)}%
//                 </text>
                
//                 {/* Zone Label */}
//                 {showLabels && (
//                   <text
//                     x={zone.x}
//                     y={zone.y - getRiskSize(zone.probability) - 4}
//                     textAnchor="middle"
//                     className={`text-[8px] font-medium fill-white pointer-events-none transition-opacity ${
//                       selectedZone?.id === zone.id ? 'opacity-100' : 'opacity-70'
//                     }`}
//                   >
//                     {zone.name.split(' ')[0]} - {zone.state.split(' ')[0]}
//                   </text>
//                 )}
//               </g>
//             ))}
            
//             {/* Legend (Minimalist, dark theme) */}
//             <g transform="translate(300, 270)" className="text-xs fill-gray-400">
//               <text x="0" y="0" className="text-[10px] font-semibold">AI Risk Legend</text>
//               {[
//                 { level: 'Critical', color: '#ef4444' },
//                 { level: 'High', color: '#f87171' },
//                 { level: 'Medium', color: '#fbbf24' },
//                 { level: 'Low', color: '#4ade80' }
//               ].map((item, index) => (
//                 <g key={item.level} transform={`translate(0, ${15 + index * 10})`}>
//                   <circle cx="2" cy="-2" r="3" fill={item.color} />
//                   <text x="8" y="0">{item.level}</text>
//                 </g>
//               ))}
//             </g>
//           </svg>
//         </div>

//         {/* --- Zone Details Panel & Quick Stats --- */}
//         <div className="space-y-6">
          
//           {/* Zone Details */}
//           <div className="bg-gray-800 rounded-xl shadow-lg border border-indigo-700/50 p-5 min-h-[300px]">
//             <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
//               <Shield className="h-5 w-5 text-indigo-400"/>
//               <span>Zone Analysis Report</span>
//             </h3>
//             {selectedZone ? (
//               <div className="space-y-4">
//                 <div className="pb-3 border-b border-gray-700">
//                   <h4 className="text-lg font-extrabold text-cyan-400">{selectedZone.name}</h4>
//                   <span className={`px-3 py-1 mt-1 inline-block rounded-full text-xs font-semibold ${
//                     selectedZone.riskLevel === 'critical' ? 'bg-red-900/50 text-red-300 border border-red-700' :
//                     selectedZone.riskLevel === 'high' ? 'bg-orange-900/50 text-orange-300 border border-orange-700' :
//                     selectedZone.riskLevel === 'medium' ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-700' :
//                     'bg-green-900/50 text-green-300 border border-green-700'
//                   }`}>
//                     {selectedZone.riskLevel.toUpperCase()} RISK
//                   </span>
//                 </div>
                
//                 <div className="space-y-3 text-sm text-gray-300">
//                   <DetailRow label="State / राज्य" value={selectedZone.state} />
//                   <DetailRow label="Mine Type / खान प्रकार" value={selectedZone.mineType} color="text-cyan-400" />
//                   <DetailRow label="Workers On-site" value={selectedZone.workers.toLocaleString()} color="text-purple-400" />
//                   <DetailRow label="AI Risk Probability" value={`${(selectedZone.probability * 100).toFixed(1)}%`} color="text-red-400" />
//                   <DetailRow label="Last Incident" value={selectedZone.lastIncident || 'N/A'} />
//                 </div>

//                 <div className="pt-4 border-t border-gray-700">
//                   <h5 className="font-bold text-indigo-400 mb-2">Immediate Protocol:</h5>
//                   <ul className="text-xs text-gray-400 space-y-1 pl-3 list-disc">
//                     {selectedZone.riskLevel === 'critical' && <li>**Immediate Evacuation** initiated. Deploy emergency drone survey.</li>}
//                     {selectedZone.riskLevel === 'high' && <li>**Restrict Access** and initiate 2-hour sensor validation check.</li>}
//                     {selectedZone.riskLevel === 'medium' && <li>Enhance monitoring frequency (every 15 min). Review structural reports.</li>}
//                     {selectedZone.riskLevel === 'low' && <li>Continue routine monitoring. Daily shift log required.</li>}
//                   </ul>
//                 </div>
//               </div>
//             ) : (
//               <div className="text-center py-10 text-gray-500 border border-dashed border-gray-700 rounded-lg">
//                 <MapPin className="h-8 w-8 mx-auto mb-2 text-indigo-500" />
//                 <p className="text-sm font-medium">Select an AI-flagged zone on the map for detailed analysis.</p>
//                 <p className="text-xs">विवरण देखने के लिए मानचित्र पर एक क्षेत्र चुनें</p>
//               </div>
//             )}
//           </div>

//           {/* Quick Stats Panel */}
//           <div className="grid grid-cols-2 gap-4">
//             <QuickStatCard icon={AlertTriangle} title="High Risk Zones" value={highRiskCount} color="red" />
//             <QuickStatCard icon={Users} title="Total Workers" value={totalWorkers.toLocaleString()} color="cyan" />
//             <QuickStatCard icon={TrendingUp} title="Avg. Risk Score" value={`${(indianMineZones.reduce((s, z) => s + z.probability, 0) / totalZones * 100).toFixed(1)}%`} color="indigo" />
//             <QuickStatCard icon={Shield} title="States Monitored" value={new Set(indianMineZones.map(z => z.state)).size} color="green" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Helper component for cleaner detail rows
// const DetailRow = ({ label, value, color = 'text-gray-200' }) => (
//   <div className="flex justify-between items-center">
//     <span className="text-gray-400">{label}:</span>
//     <span className={`font-semibold ${color}`}>{value}</span>
//   </div>
// );

// // Helper component for quick stats cards
// const QuickStatCard = ({ icon: Icon, title, value, color }) => {
//   const colorClasses = {
//     red: 'text-red-400 bg-red-900/30 border-red-700/50',
//     cyan: 'text-cyan-400 bg-cyan-900/30 border-cyan-700/50',
//     indigo: 'text-indigo-400 bg-indigo-900/30 border-indigo-700/50',
//     green: 'text-green-400 bg-green-900/30 border-green-700/50',
//   };

//   const classNames = colorClasses[color] || colorClasses.indigo;

//   return (
//     <div className={`p-4 rounded-xl border ${classNames}`}>
//       <div className="flex items-center space-x-2 mb-1">
//         <Icon className={`h-4 w-4 ${colorClasses[color]}`} />
//         <p className="text-xs font-medium text-gray-400">{title}</p>
//       </div>
//       <p className="text-xl font-bold text-white">{value}</p>
//     </div>
//   );
// };

// export default RiskMap;





// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { MapPin, Layers, AlertTriangle, Shield, TrendingUp, Users, Search } from 'lucide-react';

// // --- MOCK DATA (Indian Mine Zones) ---
// const indianMineZones = [
//   { id: 1, name: 'Ramagiri Gold Mine', state: 'Andhra Pradesh', mineType: 'Gold', workers: 750, riskLevel: 'medium', probability: 0.58, lastIncident: '3 hours ago', lat: 14.30, lng: 77.50 },
//   { id: 2, name: 'Jharia Coalfield', state: 'Jharkhand (Dhanbad)', mineType: 'Coal', workers: 4200, riskLevel: 'critical', probability: 0.95, lastIncident: 'Active Fire', lat: 23.751, lng: 86.420 },
//   { id: 3, name: 'Koderma Mica Field', state: 'Jharkhand (Koderma)', mineType: 'Mica', workers: 1500, riskLevel: 'high', probability: 0.82, lastIncident: '1 day ago', lat: 24.430, lng: 85.540 },
//   { id: 4, name: 'Noamundi Iron Ore', state: 'Jharkhand (Singhbhum)', mineType: 'Iron Ore', workers: 1800, riskLevel: 'medium', probability: 0.65, lastIncident: '1 week ago', lat: 22.060, lng: 85.510 },
//   { id: 5, name: 'Katrasgarh Colliery', state: 'Jharkhand (Dhanbad)', mineType: 'Coal', workers: 900, riskLevel: 'high', probability: 0.75, lastIncident: '2 days ago', lat: 23.810, lng: 86.310 },
//   { id: 6, name: 'Bailadila Iron Ore', state: 'Chhattisgarh', mineType: 'Iron Ore', workers: 3000, riskLevel: 'low', probability: 0.22, lastIncident: '3 months ago', lat: 18.78, lng: 81.25 },
//   { id: 7, name: 'Hutti Gold Mine', state: 'Karnataka', mineType: 'Gold', workers: 900, riskLevel: 'low', probability: 0.15, lastIncident: '6 months ago', lat: 15.15, lng: 76.81 },
// ];

// // --- UTILITIES ---
// const getRiskColor = (level) => {
//   const colors = {
//     critical: '#ef4444',
//     high: '#f87171',
//     medium: '#fbbf24',
//     low: '#4ade80',
//   };
//   return colors[level] || '#9ca3af';
// };

// const getRiskSize = (probability) => {
//   return 0.5 + probability * 1.0;
// };

// // --- HELPER COMPONENTS ---
// const DetailRow = ({ label, value, color = 'text-gray-200' }) => (
//   <div className="flex justify-between items-center">
//     <span className="text-gray-400">{label}:</span>
//     <span className={`font-semibold ${color}`}>{value}</span>
//   </div>
// );

// const QuickStatCard = ({ icon: Icon, title, value, color }) => {
//   const colorClasses = {
//     red: 'text-red-400 bg-red-900/30 border-red-700/50',
//     cyan: 'text-cyan-400 bg-cyan-900/30 border-cyan-700/50',
//     indigo: 'text-indigo-400 bg-indigo-900/30 border-indigo-700/50',
//     green: 'text-green-400 bg-green-900/30 border-green-700/50',
//   };

//   return (
//     <div className={`p-4 rounded-xl border ${colorClasses[color]}`}>
//       <div className="flex items-center space-x-2 mb-1">
//         <Icon className="h-4 w-4" />
//         <p className="text-xs font-medium text-gray-400">{title}</p>
//       </div>
//       <p className="text-xl font-bold text-white">{value}</p>
//     </div>
//   );
// };

// const RiskMap = () => {
//   // ** API KEY CONFIGURATION **
//   const GMAPS_API_KEY = 'AIzaSyDvwAWXf5_AVQs4N0njEphDEWoU6mMHLus ';
  
//   // ** STATE **
//   const [selectedZone, setSelectedZone] = useState(null);
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [markers, setMarkers] = useState([]);
//   const [center, setCenter] = useState({ lat: 23.81, lng: 86.31 });
//   const [zoom, setZoom] = useState(7);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentLocationName, setCurrentLocationName] = useState('Dhanbad, Jharkhand');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const mapRef = useRef(null);
//   const mapInstanceRef = useRef(null);
//   const markersRef = useRef([]);

//   // --- GOOGLE MAPS SCRIPT LOADING ---
//   const loadGoogleMapsScript = useCallback(() => {
//     if (GMAPS_API_KEY === 'AIzaSyDvwAWXf5_AVQs4N0njEphDEWoU6mMHLus') {
//       setError('Please add your Google Maps API Key to enable the map.');
//       return;
//     }

//     if (window.google) {
//       setMapLoaded(true);
//       return;
//     }

//     if (document.querySelector(`script[src*="maps.googleapis.com"]`)) {
//       return;
//     }

//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${GMAPS_API_KEY}`;
//     script.async = true;
//     script.defer = true;
    
//     script.onload = () => {
//       setMapLoaded(true);
//       setError(null);
//     };

//     script.onerror = () => {
//       setError('Failed to load Google Maps. Check your API key and internet connection.');
//     };

//     document.head.appendChild(script);
//   }, [GMAPS_API_KEY]);

//   useEffect(() => {
//     loadGoogleMapsScript();
//   }, [loadGoogleMapsScript]);

//   // --- MAP INITIALIZATION ---
//   const initMap = useCallback(() => {
//     if (!mapLoaded || !mapRef.current || !window.google) return;

//     // Clear existing markers
//     markersRef.current.forEach(marker => {
//       if (marker && marker.setMap) {
//         marker.setMap(null);
//       }
//     });
//     markersRef.current = [];

//     // Map options with dark theme
//     const mapOptions = {
//       center: center,
//       zoom: zoom,
//       mapTypeId: 'terrain',
//       fullscreenControl: true,
//       mapTypeControl: true,
//       streetViewControl: false,
//       zoomControl: true,
//       styles: [
//         { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
//         { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
//         { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
//         {
//           featureType: "administrative.locality",
//           elementType: "labels.text.fill",
//           stylers: [{ color: "#d59563" }],
//         },
//         {
//           featureType: "poi",
//           elementType: "labels.text.fill",
//           stylers: [{ color: "#d59563" }],
//         },
//         {
//           featureType: "poi.park",
//           elementType: "geometry",
//           stylers: [{ color: "#263c3f" }],
//         },
//         {
//           featureType: "road",
//           elementType: "geometry",
//           stylers: [{ color: "#38414e" }],
//         },
//         {
//           featureType: "road.highway",
//           elementType: "geometry",
//           stylers: [{ color: "#746855" }],
//         },
//         {
//           featureType: "water",
//           elementType: "geometry",
//           stylers: [{ color: "#17263c" }],
//         },
//       ],
//     };

//     const map = new window.google.maps.Map(mapRef.current, mapOptions);
//     mapInstanceRef.current = map;

//     // Create markers
//     const newMarkers = indianMineZones.map(zone => {
//       const color = getRiskColor(zone.riskLevel);
//       const size = getRiskSize(zone.probability);
      
//       const marker = new window.google.maps.Marker({
//         position: { lat: zone.lat, lng: zone.lng },
//         map: map,
//         title: zone.name,
//         icon: {
//           path: window.google.maps.SymbolPath.CIRCLE,
//           fillColor: color,
//           fillOpacity: 0.9,
//           scale: size * 10,
//           strokeColor: '#000',
//           strokeWeight: 1,
//         },
//       });

//       marker.addListener('click', () => {
//         setSelectedZone(zone);
//         map.panTo({ lat: zone.lat, lng: zone.lng });
//         map.setZoom(Math.max(zoom, 10));
//       });

//       return marker;
//     });

//     markersRef.current = newMarkers;
//     setMarkers(newMarkers);
//   }, [mapLoaded, center, zoom]);

//   useEffect(() => {
//     if (mapLoaded) {
//       initMap();
//     }
//   }, [mapLoaded, center, zoom, initMap]);

//   // --- SEARCH HANDLER ---
//   const handleSearch = async (e) => {
//     e.preventDefault();
    
//     if (!window.google || !window.google.maps) {
//       setError("Google Maps API not loaded. Cannot search.");
//       return;
//     }
    
//     if (!searchQuery.trim()) return;

//     setLoading(true);
//     setError(null);
    
//     try {
//       const geocoder = new window.google.maps.Geocoder();
      
//       geocoder.geocode({ address: searchQuery }, (results, status) => {
//         setLoading(false);
        
//         if (status === 'OK' && results && results.length > 0) {
//           const location = results[0].geometry.location;
//           const lat = location.lat();
//           const lng = location.lng();
          
//           // Extract location name
//           const components = results[0].address_components;
//           const locality = components.find(c => c.types.includes('locality'))?.long_name;
//           const adminArea = components.find(c => c.types.includes('administrative_area_level_1'))?.long_name;
//           const country = components.find(c => c.types.includes('country'))?.long_name;
          
//           const locationDisplay = [locality, adminArea, country].filter(Boolean).join(', ');
//           setCurrentLocationName(locationDisplay || results[0].formatted_address);
          
//           setCenter({ lat, lng });
//           setZoom(10);
//           setSearchQuery('');
//           setSelectedZone(null);
//         } else {
//           setError(`Location "${searchQuery}" not found. Try a different search term.`);
//         }
//       });
//     } catch (err) {
//       setError(`Search error: ${err.message}`);
//       setLoading(false);
//     }
//   };

//   // --- STATISTICS ---
//   const totalZones = indianMineZones.length;
//   const highRiskCount = indianMineZones.filter(z => z.riskLevel === 'high' || z.riskLevel === 'critical').length;
//   const totalWorkers = indianMineZones.reduce((sum, zone) => sum + zone.workers, 0);
//   const avgRiskScore = (indianMineZones.reduce((s, z) => s + z.probability, 0) / totalZones * 100).toFixed(1);

//   return (
//     <div className="min-h-screen p-4 md:p-6 bg-gray-900 font-sans">
//       <div className="max-w-7xl mx-auto space-y-6">
        
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-gray-700 pb-4 gap-4">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold text-white">AI Geo-Intelligence Risk Map</h2>
//             <p className="text-sm text-gray-400 mt-1">भारतीय खान जोखिम मानचित्र — Dynamic Monitoring View</p>
//           </div>
          
//           {/* Search Box */}
//           <div className="flex items-center gap-3 w-full lg:w-auto">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
//               placeholder="Search location (e.g., Koderma)"
//               className="flex-1 lg:w-64 px-4 py-2 bg-gray-800 text-white placeholder-gray-500 rounded-xl border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition"
//             />
//             <button
//               onClick={handleSearch}
//               disabled={!mapLoaded || loading}
//               className={`px-4 py-2 flex items-center gap-2 rounded-xl transition-colors font-medium text-sm ${
//                 !mapLoaded || loading 
//                   ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
//                   : 'bg-indigo-600 text-white hover:bg-indigo-500'
//               }`}
//             >
//               <Search className="h-4 w-4" />
//               <span className="hidden sm:inline">Search</span>
//             </button>
//           </div>
//         </div>

//         {/* API Status Alert */}
//         {!mapLoaded && GMAPS_API_KEY === 'AIzaSyDvwAWXf5_AVQs4N0njEphDEWoU6mMHLus' && (
//           <div className="bg-blue-900/40 border border-blue-600/50 p-4 rounded-xl">
//             <p className="text-blue-300 font-medium flex items-center gap-2">
//               <AlertTriangle className="h-5 w-5" />
//               Google Maps API Key Required
//             </p>
//             <p className="text-blue-400 text-sm mt-2">
//               To enable the interactive map and location search, please add your Google Maps API key. 
//               Get a free key at <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer" className="underline">Google Maps Platform</a>.
//             </p>
//           </div>
//         )}

//         {/* Error Alert */}
//         {error && (
//           <div className="bg-red-900/40 border border-red-600/50 p-4 rounded-xl">
//             <p className="text-red-300 font-medium flex items-center gap-2">
//               <AlertTriangle className="h-5 w-5" />
//               {error}
//             </p>
//           </div>
//         )}

//         {/* Loading Indicator */}
//         {loading && (
//           <div className="bg-indigo-900/40 border border-indigo-600/50 p-3 rounded-xl">
//             <p className="text-indigo-300 font-medium flex items-center gap-2">
//               <div className="animate-spin rounded-full h-4 w-4 border-2 border-indigo-300 border-t-transparent"></div>
//               Searching location...
//             </p>
//           </div>
//         )}

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
//           {/* Map Container */}
//           <div className="lg:col-span-2 relative">
//             <div className="absolute top-3 left-3 z-10 px-3 py-2 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700">
//               <p className="text-white font-semibold text-sm">📍 {currentLocationName}</p>
//             </div>
            
//             <div 
//               ref={mapRef}
//               className="w-full h-[400px] md:h-[550px] rounded-xl border-2 border-indigo-600 shadow-2xl bg-gray-800"
//             >
//               {!mapLoaded && GMAPS_API_KEY === 'AIzaSyDvwAWXf5_AVQs4N0njEphDEWoU6mMHLus' && (
//                 <div className="flex items-center justify-center h-full">
//                   <div className="text-center text-gray-400">
//                     <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-600" />
//                     <p className="font-medium">Map Disabled</p>
//                     <p className="text-sm">Add Google Maps API Key to enable</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Side Panel */}
//           <div className="space-y-6">
            
//             {/* Zone Details */}
//             <div className="bg-gray-800 rounded-xl shadow-lg border border-indigo-700/50 p-5 min-h-[300px]">
//               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
//                 <Shield className="h-5 w-5 text-indigo-400"/>
//                 <span>Zone Analysis Report</span>
//               </h3>
              
//               {selectedZone ? (
//                 <div className="space-y-4">
//                   <div className="pb-3 border-b border-gray-700">
//                     <h4 className="text-lg font-bold text-cyan-400">{selectedZone.name}</h4>
//                     <span className={`px-3 py-1 mt-2 inline-block rounded-full text-xs font-semibold ${
//                       selectedZone.riskLevel === 'critical' ? 'bg-red-900/50 text-red-300 border border-red-700' :
//                       selectedZone.riskLevel === 'high' ? 'bg-orange-900/50 text-orange-300 border border-orange-700' :
//                       selectedZone.riskLevel === 'medium' ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-700' :
//                       'bg-green-900/50 text-green-300 border border-green-700'
//                     }`}>
//                       {selectedZone.riskLevel.toUpperCase()} RISK
//                     </span>
//                   </div>
                  
//                   <div className="space-y-3 text-sm">
//                     <DetailRow label="State / District" value={selectedZone.state} />
//                     <DetailRow label="Mine Type" value={selectedZone.mineType} color="text-cyan-400" />
//                     <DetailRow label="Workers On-site" value={selectedZone.workers.toLocaleString()} color="text-purple-400" />
//                     <DetailRow label="AI Risk Probability" value={`${(selectedZone.probability * 100).toFixed(1)}%`} color="text-red-400" />
//                     <DetailRow label="Last Incident" value={selectedZone.lastIncident || 'N/A'} />
//                   </div>

//                   <div className="pt-4 border-t border-gray-700">
//                     <h5 className="font-bold text-indigo-400 mb-2">Immediate Protocol:</h5>
//                     <ul className="text-xs text-gray-400 space-y-1 list-disc pl-4">
//                       {selectedZone.riskLevel === 'critical' && (
//                         <li className="text-red-300">Immediate evacuation initiated. Deploy emergency drone survey.</li>
//                       )}
//                       {selectedZone.riskLevel === 'high' && (
//                         <li className="text-orange-300">Restrict access and initiate 2-hour sensor validation check.</li>
//                       )}
//                       {selectedZone.riskLevel === 'medium' && (
//                         <li className="text-yellow-300">Enhance monitoring frequency (every 15 min). Review structural reports.</li>
//                       )}
//                       {selectedZone.riskLevel === 'low' && (
//                         <li className="text-green-300">Continue routine monitoring. Daily shift log required.</li>
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center py-12 text-gray-500 border border-dashed border-gray-700 rounded-lg">
//                   <MapPin className="h-12 w-12 mx-auto mb-3 text-indigo-500" />
//                   <p className="text-sm font-medium">Select a marker on the map</p>
//                   <p className="text-xs mt-1">Click any colored circle to view detailed analysis</p>
//                   <p className="text-xs text-gray-600 mt-2">विवरण देखने के लिए मानचित्र पर मार्कर चुनें</p>
//                 </div>
//               )}
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 gap-4">
//               <QuickStatCard icon={AlertTriangle} title="High Risk Zones" value={highRiskCount} color="red" />
//               <QuickStatCard icon={Users} title="Total Workers" value={totalWorkers.toLocaleString()} color="cyan" />
//               <QuickStatCard icon={TrendingUp} title="Avg. Risk Score" value={`${avgRiskScore}%`} color="indigo" />
//               <QuickStatCard icon={Layers} title="Zones Monitored" value={totalZones} color="green" />
//             </div>
//           </div>
//         </div>

//         {/* Legend */}
//         <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
//           <h3 className="text-sm font-bold text-white mb-3">Risk Level Legend</h3>
//           <div className="flex flex-wrap gap-4">
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded-full bg-red-500"></div>
//               <span className="text-sm text-gray-300">Critical Risk</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded-full bg-orange-400"></div>
//               <span className="text-sm text-gray-300">High Risk</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
//               <span className="text-sm text-gray-300">Medium Risk</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded-full bg-green-400"></div>
//               <span className="text-sm text-gray-300">Low Risk</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RiskMap;





import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MapPin, Layers, AlertTriangle, Shield, TrendingUp, Users, Search, X } from 'lucide-react';

// --- MOCK DATA (Indian Mine Zones) ---
const indianMineZones = [
  { id: 1, name: 'Ramagiri Gold Mine', state: 'Andhra Pradesh', mineType: 'Gold', workers: 750, riskLevel: 'medium', probability: 0.58, lastIncident: '3 hours ago', lat: 14.30, lng: 77.50 },
  { id: 2, name: 'Jharia Coalfield', state: 'Jharkhand (Dhanbad)', mineType: 'Coal', workers: 4200, riskLevel: 'critical', probability: 0.95, lastIncident: 'Active Fire', lat: 23.751, lng: 86.420 },
  { id: 3, name: 'Koderma Mica Field', state: 'Jharkhand (Koderma)', mineType: 'Mica', workers: 1500, riskLevel: 'high', probability: 0.82, lastIncident: '1 day ago', lat: 24.430, lng: 85.540 },
  { id: 4, name: 'Noamundi Iron Ore', state: 'Jharkhand (Singhbhum)', mineType: 'Iron Ore', workers: 1800, riskLevel: 'medium', probability: 0.65, lastIncident: '1 week ago', lat: 22.060, lng: 85.510 },
  { id: 5, name: 'Katrasgarh Colliery', state: 'Jharkhand (Dhanbad)', mineType: 'Coal', workers: 900, riskLevel: 'high', probability: 0.75, lastIncident: '2 days ago', lat: 23.810, lng: 86.310 },
  { id: 6, name: 'Bailadila Iron Ore', state: 'Chhattisgarh', mineType: 'Iron Ore', workers: 3000, riskLevel: 'low', probability: 0.22, lastIncident: '3 months ago', lat: 18.78, lng: 81.25 },
  { id: 7, name: 'Hutti Gold Mine', state: 'Karnataka', mineType: 'Gold', workers: 900, riskLevel: 'low', probability: 0.15, lastIncident: '6 months ago', lat: 15.15, lng: 76.81 },
  // Adding more Jharkhand mines for better visual representation
  { id: 8, name: 'Tatanagar Quartzite', state: 'Jharkhand (East Singhbhum)', mineType: 'Quartzite', workers: 500, riskLevel: 'low', probability: 0.35, lastIncident: '4 weeks ago', lat: 22.75, lng: 86.18 },
  { id: 9, name: 'Chatra Graphite', state: 'Jharkhand (Chatra)', mineType: 'Graphite', workers: 300, riskLevel: 'medium', probability: 0.60, lastIncident: '10 hours ago', lat: 24.21, lng: 84.88 },
];

// --- UTILITIES ---
const getRiskColor = (level) => {
  const colors = {
    critical: '#ef4444',
    high: '#f87171',
    medium: '#fbbf24',
    low: '#4ade80',
  };
  return colors[level] || '#9ca3af';
};

const getRiskSize = (probability) => {
  return 0.5 + probability * 1.0;
};

// --- HELPER COMPONENTS ---
const DetailRow = ({ label, value, color = 'text-gray-200' }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-400">{label}:</span>
    <span className={`font-semibold ${color}`}>{value}</span>
  </div>
);

const QuickStatCard = ({ icon: Icon, title, value, color }) => {
  const colorClasses = {
    red: 'text-red-400 bg-red-900/30 border-red-700/50',
    cyan: 'text-cyan-400 bg-cyan-900/30 border-cyan-700/50',
    indigo: 'text-indigo-400 bg-indigo-900/30 border-indigo-700/50',
    green: 'text-green-400 bg-green-900/30 border-green-700/50',
  };

  return (
    <div className={`p-4 rounded-xl border ${colorClasses[color]}`}>
      <div className="flex items-center space-x-2 mb-1">
        <Icon className="h-4 w-4" />
        <p className="text-xs font-medium text-gray-400">{title}</p>
      </div>
      <p className="text-xl font-bold text-white">{value}</p>
    </div>
  );
};

const RiskMap = () => {
  // ** API KEY CONFIGURATION **
  // NOTE: This key is intentionally generic to demonstrate the UI. Replace it.
  const GMAPS_API_KEY = 'AIzaSyDvwAWXf5_AVQs4N0njEphDEWoU6mMHLus '; 
    
  // ** STATE **
  const [selectedZone, setSelectedZone] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [center, setCenter] = useState({ lat: 23.81, lng: 86.31 }); // Initial center: Dhanbad, Jharkhand
  const [zoom, setZoom] = useState(7);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLocationName, setCurrentLocationName] = useState('Dhanbad, Jharkhand');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  // Filtered Zones to display on the map (initially all zones)
  const [filteredZones, setFilteredZones] = useState(indianMineZones);
  const [activeFilter, setActiveFilter] = useState(null); // 'Jharkhand' or null

  // --- GOOGLE MAPS SCRIPT LOADING (UNCHANGED) ---
  const loadGoogleMapsScript = useCallback(() => {
    if (GMAPS_API_KEY.trim() === 'AIzaSyDvwAWXf5_AVQs4N0njEphDEWoU6mMHLus ') {
      setError('Please add your Google Maps API Key to enable the map.');
      return;
    }

    if (window.google) {
      setMapLoaded(true);
      return;
    }

    if (document.querySelector(`script[src*="maps.googleapis.com"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GMAPS_API_KEY}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      setMapLoaded(true);
      setError(null);
    };

    script.onerror = () => {
      setError('Failed to load Google Maps. Check your API key and internet connection.');
    };

    document.head.appendChild(script);
  }, [GMAPS_API_KEY]);

  useEffect(() => {
    loadGoogleMapsScript();
  }, [loadGoogleMapsScript]);

  // --- MAP INITIALIZATION & MARKER RENDERING (MODIFIED) ---
  const initMap = useCallback(() => {
    if (!mapLoaded || !mapRef.current || !window.google) return;

    // Clear existing markers
    markersRef.current.forEach(marker => {
      if (marker && marker.setMap) {
        marker.setMap(null);
      }
    });
    markersRef.current = [];

    // Only create a new map instance if one doesn't exist
    let map = mapInstanceRef.current;
    if (!map) {
        const mapOptions = {
            center: center,
            zoom: zoom,
            mapTypeId: 'terrain',
            fullscreenControl: true,
            mapTypeControl: true,
            streetViewControl: false,
            zoomControl: true,
            styles: [
              { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
              { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
              { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
              { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
              { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
              { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
              { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
            ],
          };
        map = new window.google.maps.Map(mapRef.current, mapOptions);
        mapInstanceRef.current = map;
    } else {
        // Pan and Zoom existing map
        map.panTo(center);
        map.setZoom(zoom);
    }


    // Create markers for the currently filtered zones
    const newMarkers = filteredZones.map(zone => { // <-- Use filteredZones here
      const color = getRiskColor(zone.riskLevel);
      const size = getRiskSize(zone.probability);
      
      const marker = new window.google.maps.Marker({
        position: { lat: zone.lat, lng: zone.lng },
        map: map,
        title: zone.name,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: color,
          fillOpacity: 0.9,
          scale: size * 10,
          strokeColor: '#000',
          strokeWeight: 1,
        },
      });

      marker.addListener('click', () => {
        setSelectedZone(zone);
        map.panTo({ lat: zone.lat, lng: zone.lng });
        map.setZoom(Math.max(zoom, 10));
      });

      return marker;
    });

    markersRef.current = newMarkers;
  }, [mapLoaded, center, zoom, filteredZones]); // <-- Re-run initMap when filteredZones changes

  useEffect(() => {
    if (mapLoaded) {
      initMap();
    }
  }, [mapLoaded, center, zoom, initMap]); // <-- initMap has a dependency on filteredZones now

  // --- SEARCH HANDLER (MODIFIED) ---
  const handleSearch = useCallback(async (e) => {
    e.preventDefault();
    
    if (!window.google || !window.google.maps) {
      setError("Google Maps API not loaded. Cannot search.");
      return;
    }
    
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    setLoading(true);
    setError(null);
    setSelectedZone(null); // Clear selected zone on new search

    try {
      // 1. Check for State/Region search, especially "Jharkhand"
      const isStateSearch = query.includes('jharkhand');
      
      if (isStateSearch) {
        // Filter zones for Jharkhand and update the filter state
        const jharkhandZones = indianMineZones.filter(zone => zone.state.toLowerCase().includes('jharkhand'));
        setFilteredZones(jharkhandZones);
        setActiveFilter('Jharkhand');
      } else {
        setFilteredZones(indianMineZones); // Revert to all zones if it's not a state search
        setActiveFilter(null);
      }


      // 2. Geocode the location to center the map
      const geocoder = new window.google.maps.Geocoder();
      
      geocoder.geocode({ address: searchQuery }, (results, status) => {
        setLoading(false);
        
        if (status === 'OK' && results && results.length > 0) {
          const location = results[0].geometry.location;
          const lat = location.lat();
          const lng = location.lng();
          
          // Extract location name
          const components = results[0].address_components;
          const locality = components.find(c => c.types.includes('locality'))?.long_name;
          const adminArea = components.find(c => c.types.includes('administrative_area_level_1'))?.long_name;
          const country = components.find(c => c.types.includes('country'))?.long_name;
          
          const locationDisplay = [locality, adminArea, country].filter(Boolean).join(', ');
          setCurrentLocationName(locationDisplay || results[0].formatted_address);
          
          setCenter({ lat, lng });
          setZoom(isStateSearch ? 8 : 10); // Broader zoom for a state search
          setSearchQuery('');
          
        } else {
          setError(`Location "${searchQuery}" not found. Displaying all zones.`);
          setFilteredZones(indianMineZones);
          setActiveFilter(null);
          // Optional: Re-center to default location if search fails
          setCenter({ lat: 23.81, lng: 86.31 }); 
          setZoom(7);
        }
      });
    } catch (err) {
      setError(`Search error: ${err.message}`);
      setLoading(false);
    }
  }, [searchQuery, mapLoaded]);

  // --- CLEAR FILTER HANDLER ---
  const handleClearFilter = () => {
    setFilteredZones(indianMineZones);
    setActiveFilter(null);
    setCurrentLocationName('Dhanbad, Jharkhand');
    setCenter({ lat: 23.81, lng: 86.31 }); 
    setZoom(7);
    setSelectedZone(null);
  };

  // --- STATISTICS (MODIFIED to use filteredZones) ---
  const displayZones = activeFilter ? filteredZones : indianMineZones;
  const totalZones = displayZones.length;
  const highRiskCount = displayZones.filter(z => z.riskLevel === 'high' || z.riskLevel === 'critical').length;
  const totalWorkers = displayZones.reduce((sum, zone) => sum + zone.workers, 0);
  const avgRiskScore = (displayZones.reduce((s, z) => s + z.probability, 0) / (totalZones || 1) * 100).toFixed(1);


  // JSX RENDER (MODIFIED to include filter display)
  return (
    <div className="min-h-screen p-4 md:p-6 bg-gray-900 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-gray-700 pb-4 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">AI Geo-Intelligence Risk Map</h2>
            <p className="text-sm text-gray-400 mt-1">भारतीय खान जोखिम मानचित्र — Dynamic Monitoring View</p>
          </div>
          
          {/* Search Box (Improved) */}
          <form onSubmit={handleSearch} className="flex items-center gap-3 w-full lg:w-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search location (e.g., Jharkhand, Koderma)"
              className="flex-1 lg:w-64 px-4 py-2 bg-gray-800 text-white placeholder-gray-500 rounded-xl border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition"
            />
            <button
              type="submit"
              disabled={!mapLoaded || loading}
              className={`px-4 py-2 flex items-center gap-2 rounded-xl transition-colors font-medium text-sm ${
                !mapLoaded || loading 
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-500'
              }`}
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </form>
        </div>

        {/* API Status Alert */}
        {!mapLoaded && GMAPS_API_KEY.trim() === 'AIzaSyDvwAWXf5_AVQs4N0njEphDEWoU6mMHLus ' && (
          <div className="bg-blue-900/40 border border-blue-600/50 p-4 rounded-xl">
            <p className="text-blue-300 font-medium flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Google Maps API Key Required
            </p>
            <p className="text-blue-400 text-sm mt-2">
              To enable the interactive map and location search, please add your Google Maps API key. 
              Get a free key at <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer" className="underline">Google Maps Platform</a>.
            </p>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="bg-red-900/40 border border-red-600/50 p-4 rounded-xl">
            <p className="text-red-300 font-medium flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              {error}
            </p>
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="bg-indigo-900/40 border border-indigo-600/50 p-3 rounded-xl">
            <p className="text-indigo-300 font-medium flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-indigo-300 border-t-transparent"></div>
              Searching location...
            </p>
          </div>
        )}

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Map Container */}
          <div className="lg:col-span-2 relative">
            
            {/* Location Display & Active Filter */}
            <div className="absolute top-3 left-3 z-10 px-3 py-2 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700 flex items-center gap-3">
              <p className="text-white font-semibold text-sm">📍 {currentLocationName}</p>
              {activeFilter && (
                <span className="flex items-center gap-1 text-xs text-indigo-300 bg-indigo-900/50 rounded-full px-2 py-0.5 border border-indigo-500 cursor-pointer hover:bg-indigo-800 transition" onClick={handleClearFilter}>
                  Active Filter: {activeFilter} <X className="h-3 w-3 ml-1" />
                </span>
              )}
            </div>
            
            <div 
              ref={mapRef}
              className="w-full h-[400px] md:h-[550px] rounded-xl border-2 border-indigo-600 shadow-2xl bg-gray-800"
            >
              {!mapLoaded && GMAPS_API_KEY.trim() === 'AIzaSyDvwAWXf5_AVQs4N0njEphDEWoU6mMHLus ' && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-gray-400">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-600" />
                    <p className="font-medium">Map Disabled</p>
                    <p className="text-sm">Add Google Maps API Key to enable</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            
            {/* Quick Stats (Now showing stats for Filtered Zones) */}
            <div className="grid grid-cols-2 gap-4">
              <QuickStatCard icon={AlertTriangle} title={`High Risk Zones ${activeFilter ? `(${activeFilter})` : ''}`} value={highRiskCount} color="red" />
              <QuickStatCard icon={Users} title="Total Workers Monitored" value={totalWorkers.toLocaleString()} color="cyan" />
              <QuickStatCard icon={TrendingUp} title="Avg. Risk Score" value={`${avgRiskScore}%`} color="indigo" />
              <QuickStatCard icon={Layers} title="Zones Monitored" value={totalZones} color="green" />
            </div>

            {/* Zone Details */}
            <div className="bg-gray-800 rounded-xl shadow-lg border border-indigo-700/50 p-5 min-h-[300px]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-indigo-400"/>
                <span>Zone Analysis Report</span>
              </h3>
              
              {selectedZone ? (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-gray-700">
                    <h4 className="text-lg font-bold text-cyan-400">{selectedZone.name}</h4>
                    <span className={`px-3 py-1 mt-2 inline-block rounded-full text-xs font-semibold ${
                      selectedZone.riskLevel === 'critical' ? 'bg-red-900/50 text-red-300 border border-red-700' :
                      selectedZone.riskLevel === 'high' ? 'bg-orange-900/50 text-orange-300 border border-orange-700' :
                      selectedZone.riskLevel === 'medium' ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-700' :
                      'bg-green-900/50 text-green-300 border border-green-700'
                    }`}>
                      {selectedZone.riskLevel.toUpperCase()} RISK
                    </span>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <DetailRow label="State / District" value={selectedZone.state} />
                    <DetailRow label="Mine Type" value={selectedZone.mineType} color="text-cyan-400" />
                    <DetailRow label="Workers On-site" value={selectedZone.workers.toLocaleString()} color="text-purple-400" />
                    <DetailRow label="AI Risk Probability" value={`${(selectedZone.probability * 100).toFixed(1)}%`} color="text-red-400" />
                    <DetailRow label="Last Incident" value={selectedZone.lastIncident || 'N/A'} />
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <h5 className="font-bold text-indigo-400 mb-2">Immediate Protocol:</h5>
                    <ul className="text-xs text-gray-400 space-y-1 list-disc pl-4">
                      {selectedZone.riskLevel === 'critical' && (
                        <li className="text-red-300">Immediate evacuation initiated. Deploy emergency drone survey.</li>
                      )}
                      {selectedZone.riskLevel === 'high' && (
                        <li className="text-orange-300">Restrict access and initiate 2-hour sensor validation check.</li>
                      )}
                      {selectedZone.riskLevel === 'medium' && (
                        <li className="text-yellow-300">Enhance monitoring frequency (every 15 min). Review structural reports.</li>
                      )}
                      {selectedZone.riskLevel === 'low' && (
                        <li className="text-green-300">Continue routine monitoring. Daily shift log required.</li>
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500 border border-dashed border-gray-700 rounded-lg">
                  <MapPin className="h-12 w-12 mx-auto mb-3 text-indigo-500" />
                  <p className="text-sm font-medium">Select a marker on the map</p>
                  <p className="text-xs mt-1">Click any colored circle to view detailed analysis</p>
                  <p className="text-xs text-gray-600 mt-2">विवरण देखने के लिए मानचित्र पर मार्कर चुनें</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <h3 className="text-sm font-bold text-white mb-3">Risk Level Legend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="text-sm text-gray-300">Critical Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-orange-400"></div>
              <span className="text-sm text-gray-300">High Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              <span className="text-sm text-gray-300">Medium Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-400"></div>
              <span className="text-sm text-gray-300">Low Risk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskMap;