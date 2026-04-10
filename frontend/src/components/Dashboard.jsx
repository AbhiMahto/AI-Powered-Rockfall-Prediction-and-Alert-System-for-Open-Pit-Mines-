// import React from 'react';
// import { TrendingUp, Users, AlertTriangle, Activity, BarChart3, PieChart, LineChart, Gauge, Target, Map } from 'lucide-react';
// import AreaChartComponent from './charts/AreaChart';
// import BarChartComponent from './charts/BarChart';
// import PieChartComponent from './charts/PieChart';
// import LineChartComponent from './charts/LineChart';
// import RadarChartComponent from './charts/RadarChart';
// import GaugeChart from './charts/GaugeChart';
// import BubbleChart from './charts/BubbleChart';
// import TreeMapChart from './charts/TreeMap';
// import StatsCard from './StatsCard';

// const Dashboard = () => {
//   const statsData = [
//     {
//       title: 'Total Revenue',
//       value: '$2,847,392',
//       change: '+12.5%',
//       trend: 'up',
//       icon: TrendingUp,
//       color: 'green',
//       subtitle: 'This month'
//     },
//     {
//       title: 'Active Users',
//       value: '24,847',
//       change: '+8.2%',
//       trend: 'up',
//       icon: Users,
//       color: 'blue',
//       subtitle: 'Online now'
//     },
//     {
//       title: 'Critical Alerts',
//       value: '3',
//       change: '-2',
//       trend: 'down',
//       icon: AlertTriangle,
//       color: 'red',
//       subtitle: 'Requiring attention'
//     },
//     {
//       title: 'System Health',
//       value: '98.7%',
//       change: '+0.3%',
//       trend: 'up',
//       icon: Activity,
//       color: 'purple',
//       subtitle: 'Uptime'
//     }
//   ];

//   const ChartCard = ({ title, icon: Icon, children, className = "" }) => (
//     <div className={`bg-white rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300 ${className}`}>
//       <div className="p-6 border-b border-gray-100">
//         <div className="flex items-center space-x-3">
//           <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
//             <Icon className="h-5 w-5 text-white" />
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
//             <p className="text-sm text-gray-500">Real-time data</p>
//           </div>
//         </div>
//       </div>
//       <div className="p-6">
//         {children}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-8 p-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//             Dashboard Overview
//           </h1>
//           <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your systems today.</p>
//         </div>
//         <div className="flex items-center space-x-3">
//           <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
//             <TrendingUp className="h-4 w-4" />
//             <span>Export Report</span>
//           </button>
//         </div>
//       </div>
      
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {statsData.map((stat, index) => (
//           <StatsCard 
//             key={index}
//             title={stat.title}
//             value={stat.value}
//             change={stat.change}
//             trend={stat.trend}
//             icon={stat.icon}
//             color={stat.color}
//             subtitle={stat.subtitle}
//             delay={index * 100}
//           />
//         ))}
//       </div>
      
//       {/* Main Charts Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <ChartCard title="Revenue Trends" icon={BarChart3} className="lg:col-span-1">
//           <AreaChartComponent />
//         </ChartCard>
//         <ChartCard title="Monthly Sales" icon={TrendingUp} className="lg:col-span-1">
//           <BarChartComponent />
//         </ChartCard>
//       </div>
      
//       {/* Secondary Charts Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <ChartCard title="Traffic Sources" icon={PieChart}>
//           <PieChartComponent />
//         </ChartCard>
//         <ChartCard title="Conversion Rate" icon={LineChart}>
//           <LineChartComponent />
//         </ChartCard>
//         <ChartCard title="Performance Metrics" icon={Target}>
//           <RadarChartComponent />
//         </ChartCard>
//       </div>
      
//       {/* Advanced Analytics */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <ChartCard title="System Utilization" icon={Gauge}>
//           <GaugeChart value={72} min={0} max={100} title="System Utilization" />
//         </ChartCard>
//         <ChartCard title="Data Distribution" icon={Map}>
//           <BubbleChart />
//         </ChartCard>
//         <ChartCard title="Category Analysis" icon={BarChart3}>
//           <TreeMapChart />
//         </ChartCard>
//       </div>

//       {/* Quick Actions */}
//       <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <button className="p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 text-left group">
//             <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
//               <TrendingUp className="h-4 w-4 text-blue-600" />
//             </div>
//             <h4 className="font-medium text-gray-900">Generate Report</h4>
//             <p className="text-sm text-gray-500">Create detailed analytics</p>
//           </button>
//           <button className="p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 text-left group">
//             <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
//               <Users className="h-4 w-4 text-green-600" />
//             </div>
//             <h4 className="font-medium text-gray-900">User Management</h4>
//             <p className="text-sm text-gray-500">Manage user access</p>
//           </button>
//           <button className="p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 text-left group">
//             <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-200 transition-colors">
//               <AlertTriangle className="h-4 w-4 text-orange-600" />
//             </div>
//             <h4 className="font-medium text-gray-900">Alert Settings</h4>
//             <p className="text-sm text-gray-500">Configure notifications</p>
//           </button>
//           <button className="p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 text-left group">
//             <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors">
//               <Activity className="h-4 w-4 text-purple-600" />
//             </div>
//             <h4 className="font-medium text-gray-900">System Health</h4>
//             <p className="text-sm text-gray-500">Monitor performance</p>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React from 'react';
// import { TrendingUp, Users, AlertTriangle, Activity, BarChart3, PieChart, LineChart, Gauge, Target, Map, Settings, Zap, ArrowUp, ArrowDown } from 'lucide-react';

// // --- MOCK DATA ---
// const statsData = [
//     {
//         title: 'Total Sensors Active',
//         value: '356',
//         change: '+4%',
//         trend: 'up',
//         icon: Users,
//         gradient: 'from-blue-600 to-indigo-700',
//         valueColor: 'text-blue-400'
//     },
//     {
//         title: 'Critical Alerts (24h)',
//         value: '3',
//         change: '-2',
//         trend: 'down',
//         icon: AlertTriangle,
//         gradient: 'from-red-600 to-orange-700',
//         valueColor: 'text-red-400',
//         alert: true // Flag this card for special styling
//     },
//     {
//         title: 'Average Risk Index',
//         value: '4.2/10',
//         change: '+0.1%',
//         trend: 'up',
//         icon: Gauge,
//         gradient: 'from-yellow-600 to-orange-500',
//         valueColor: 'text-yellow-400'
//     },
//     {
//         title: 'Model Confidence',
//         value: '98.7%',
//         change: '+0.3%',
//         trend: 'up',
//         icon: Zap,
//         gradient: 'from-teal-600 to-cyan-700',
//         valueColor: 'text-teal-400'
//     }
// ];

// // --- INLINE COMPONENTS ---

// // 1. StatsCard Component
// const StatsCard = ({ title, value, change, trend, icon: Icon, gradient, valueColor, alert }) => {
//     const isUp = trend === 'up';
//     const TrendIcon = isUp ? ArrowUp : ArrowDown;
//     const trendColor = isUp ? 'text-green-400' : 'text-red-400';
    
//     // Conditional classes for the Critical Alert card
//     const alertClasses = alert 
//         ? 'ring-4 ring-red-500/30 animate-pulse' 
//         : 'hover:border-indigo-600';

//     return (
//         <div className={`bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700 transition-all duration-300 ${alertClasses}`}>
//             <div className="flex items-start justify-between">
//                 <div className="flex flex-col">
//                     <p className="text-sm font-medium text-gray-400">{title}</p>
//                     <p className={`text-4xl font-extrabold text-white mt-1 ${valueColor}`}>{value}</p> 
//                 </div>
//                 <div className={`w-12 h-12 ${gradient} rounded-xl flex items-center justify-center shadow-lg transform rotate-3`}>
//                     <Icon className="h-6 w-6 text-white" />
//                 </div>
//             </div>
//             <div className="mt-4 flex items-center space-x-2">
//                 <TrendIcon className={`h-4 w-4 ${trendColor}`} />
//                 <span className={`text-sm font-semibold ${trendColor}`}>{change}</span>
//                 <span className="text-sm text-gray-500">vs yesterday</span>
//             </div>
//         </div>
//     );
// };

// // 2. ChartCard Component (Uses a simple Div mockup for visualization)
// const ChartCard = ({ title, icon: Icon, children, className = "", subtitle }) => (
//     <div className={`bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-indigo-500/20 hover:border-indigo-600 ${className}`}>
//         <div className="p-6 border-b border-gray-700 flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
//                     <Icon className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                     <h2 className="text-xl font-bold text-white">{title}</h2>
//                     <p className="text-sm text-gray-400">{subtitle}</p>
//                 </div>
//             </div>
//             <button className="text-sm text-indigo-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700/50 font-medium">
//                 Analyze <TrendingUp className="h-3 w-3 inline ml-1" />
//             </button>
//         </div>
//         <div className="p-6">
//             {children}
//         </div>
//     </div>
// );

// // 3. Simple Mockup for Area Chart Visualization (Smoother, gradient fill)
// const AreaChartMockup = () => (
//     <div className="h-48 relative pt-4">
//         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//             {/* Gradient definition for the fill */}
//             <defs>
//                 <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8"/>
//                     <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.1"/>
//                 </linearGradient>
//             </defs>
            
//             {/* Smoother Line Data (Example points) */}
//             <polyline 
//                 fill="none" 
//                 stroke="#4F46E5" 
//                 strokeWidth="1.5" 
//                 points="0,85 10,70 20,78 30,55 40,68 50,45 60,55 70,30 80,45 90,25 100,40" 
//             />
            
//             {/* Area Fill (Matches line data for the smooth area effect) */}
//             <polygon 
//                 fill="url(#areaGradient)" 
//                 points="0,85 10,70 20,78 30,55 40,68 50,45 60,55 70,30 80,45 90,25 100,40 100,100 0,100" 
//             />
//         </svg>
//         <div className="absolute bottom-0 w-full text-xs text-gray-500 flex justify-between px-1">
//             <span>00:00</span>
//             <span>06:00</span>
//             <span>12:00</span>
//             <span>18:00</span>
//             <span>23:59</span>
//         </div>
//     </div>
// );

// // 4. Simple Mockup for Pie Chart Visualization (More vibrant rings)
// const PieChartMockup = () => (
//     <div className="flex items-center justify-around h-48">
//         <div className="relative w-40 h-40 rounded-full bg-transparent p-1 shadow-inner" style={{ 
//              // Using conic-gradient for the pie segments
//             background: 'conic-gradient(#06B6D4 0% 25%, #4F46E5 25% 70%, #F87171 70% 100%)'
//         }}>
//             <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-800">
//                 <span className="text-white text-xl font-bold">4.2</span>
//             </div>
//         </div>
//         <div className="space-y-3 text-sm text-gray-300">
//             <p className="flex items-center"><span className="inline-block w-3 h-3 rounded-full bg-cyan-500 mr-2 shadow-cyan-500/50 shadow"></span> High Risk (25%)</p>
//             <p className="flex items-center"><span className="inline-block w-3 h-3 rounded-full bg-indigo-500 mr-2 shadow-indigo-500/50 shadow"></span> Medium Risk (45%)</p>
//             <p className="flex items-center"><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2 shadow-red-500/50 shadow"></span> Low Risk (30%)</p>
//         </div>
//     </div>
// );


// // 5. Health Bar Component (Used in Sensor Health Mockup)
// const HealthBar = ({ label, percentage, color }) => (
//     <div className="p-2 bg-gray-700/50 rounded-lg">
//         <div className="flex justify-between text-sm text-gray-300 mb-1">
//             <span className="font-medium">{label}</span>
//             <span className="font-bold text-white">{percentage}%</span>
//         </div>
//         <div className="w-full bg-gray-900 rounded-full h-2.5">
//             <div 
//                 className={`h-2.5 rounded-full ${color} transition-all duration-500`} 
//                 style={{ width: `${percentage}%` }}
//             ></div>
//         </div>
//     </div>
// );

// // 6. Quick Action Button Component (Updated for a more dramatic effect)
// const ActionButton = ({ icon: Icon, title, subtitle, color }) => (
//     <button className={`p-5 ${color} text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] text-left group border border-current`}>
//         <Icon className="h-6 w-6 mb-3 group-hover:rotate-6 transition-transform" />
//         <h4 className="font-extrabold text-sm">{title}</h4>
//         <p className="text-xs opacity-90 mt-1">{subtitle}</p>
//     </button>
// );


// // --- MAIN DASHBOARD COMPONENT ---
// const Dashboard = () => {

//   return (
//     // Apply dark background and Poppins font
//     <div className="bg-gray-900 min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
//         <div className="space-y-10 p-8 max-w-7xl mx-auto">
            
//             {/* Header */}
//             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4 border-gray-800">
//                 <div>
//                     <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
//                         RockGuard AI Dashboard
//                     </h1>
//                     <p className="text-lg text-indigo-400 mt-2 flex items-center space-x-2">
//                         <Zap className="h-5 w-5" />
//                         <span>AI-Driven Analysis and Site Overview</span>
//                     </p>
//                 </div>
//                 <div className="mt-4 sm:mt-0 flex items-center space-x-3">
//                     <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-bold rounded-xl shadow-xl shadow-indigo-500/40 hover:shadow-2xl transition-all duration-300 flex items-center space-x-2">
//                         <BarChart3 className="h-4 w-4" />
//                         <span>Full Report</span>
//                     </button>
//                 </div>
//             </div>
            
//             {/* Stats Cards Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {statsData.map((stat, index) => (
//                     <StatsCard 
//                         key={index}
//                         title={stat.title}
//                         value={stat.value}
//                         change={stat.change}
//                         trend={stat.trend}
//                         icon={stat.icon}
//                         gradient={`bg-gradient-to-br ${stat.gradient}`}
//                         valueColor={stat.valueColor}
//                         alert={stat.alert}
//                     />
//                 ))}
//             </div>
            
//             {/* Main Charts Grid: Displacement & Risk */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 {/* Real-time Displacement */}
//                 <ChartCard 
//                     title="Real-Time Displacement (mm)" 
//                     icon={LineChart} 
//                     subtitle="Rock Movement Over Last 24 Hours"
//                     className="lg:col-span-2"
//                 >
//                     <AreaChartMockup />
//                 </ChartCard>
                
//                 {/* Risk Distribution */}
//                 <ChartCard 
//                     title="Current Risk Distribution" 
//                     icon={PieChart} 
//                     subtitle="Percentage breakdown by risk level"
//                 >
//                     <PieChartMockup />
//                 </ChartCard>
//             </div>
            
//             {/* Secondary Analytics Grid: Velocity & Sensor Status */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
//                 {/* Velocity Trends */}
//                 <ChartCard 
//                     title="Predictive Strain Rate (mm/hr)" 
//                     icon={TrendingUp} 
//                     subtitle="Forecasted deformation velocity based on model"
//                 >
//                     {/* Placeholder for Line Chart (Simplified Mockup) */}
//                     <div className="h-48 flex items-center justify-center">
//                         <div className="w-full h-full bg-gray-900 rounded-lg p-3 border border-gray-700">
//                             <div className="h-full relative">
//                                 {/* Gray Grid Lines */}
//                                 <div className="absolute top-0 left-0 w-full h-full border-t border-r border-gray-700">
//                                     <div className="w-full h-1/3 border-b border-gray-700"></div>
//                                     <div className="w-full h-1/3 border-b border-gray-700"></div>
//                                 </div>
                                
//                                 {/* Line Path */}
//                                 <div className="absolute inset-0">
//                                     <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                                         <polyline 
//                                             fill="none" 
//                                             stroke="#10B981" // Teal color for forecast line
//                                             strokeWidth="2" 
//                                             points="0,80 10,70 20,75 30,60 40,55 50,40 60,35 70,20 80,15 90,10 100,5" 
//                                         />
//                                     </svg>
//                                 </div>
//                                 <div className="absolute top-[8%] left-[90%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-teal-500 border-2 border-white shadow-lg" />
//                             </div>
//                         </div>
//                     </div>
//                 </ChartCard>

//                 {/* Sensor Health */}
//                 <ChartCard 
//                     title="Sensor Network Health" 
//                     icon={Activity} 
//                     subtitle="Current uptime and data integrity status"
//                 >
//                     <div className="h-48 space-y-3 pt-2">
//                         <HealthBar label="Geophones" percentage={95} color="bg-teal-500" />
//                         <HealthBar label="Extensometers" percentage={88} color="bg-blue-500" />
//                         <HealthBar label="Strain Gauges" percentage={99} color="bg-green-500" />
//                         <HealthBar label="Inclinometers" percentage={75} color="bg-yellow-500" />
//                     </div>
//                 </ChartCard>
//             </div>

//             {/* Quick Actions Footer */}
//             <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-2xl">
//                 <h3 className="text-xl font-bold text-white mb-6">Immediate Actions</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                     <ActionButton icon={AlertTriangle} title="Manage Alerts" subtitle="Review and resolve incidents" color="bg-red-600 hover:bg-red-700" />
//                     <ActionButton icon={Settings} title="Configure Sensors" subtitle="Adjust monitoring parameters" color="bg-indigo-600 hover:bg-indigo-700" />
//                     <ActionButton icon={Map} title="View Geologic Map" subtitle="Analyze structural context" color="bg-teal-600 hover:bg-teal-700" />
//                     <ActionButton icon={Target} title="Set Prediction Target" subtitle="Focus resources on specific areas" color="bg-purple-600 hover:bg-purple-700" />
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default Dashboard;




import React from 'react';
import { TrendingUp, Users, AlertTriangle, Activity, BarChart3, PieChart, LineChart, Gauge, Target, Map, Settings, Zap, ArrowUp, ArrowDown } from 'lucide-react';

// --- MOCK DATA ---
const statsData = [
    {
        title: 'Total Sensors Active',
        value: '356',
        change: '+4%',
        trend: 'up',
        icon: Users,
        gradient: 'from-blue-600 to-indigo-700',
        valueColor: 'text-blue-400'
    },
    {
        title: 'Critical Alerts (24h)',
        value: '3',
        change: '-2',
        trend: 'down',
        icon: AlertTriangle,
        gradient: 'from-red-600 to-orange-700',
        valueColor: 'text-red-400',
        alert: true // Flag this card for special styling
    },
    {
        title: 'Average Risk Index',
        value: '4.2/10',
        change: '+0.1%',
        trend: 'up',
        icon: Gauge,
        gradient: 'from-yellow-600 to-orange-500',
        valueColor: 'text-yellow-400'
    },
    {
        title: 'Model Confidence',
        value: '98.7%',
        change: '+0.3%',
        trend: 'up',
        icon: Zap,
        gradient: 'from-teal-600 to-cyan-700',
        valueColor: 'text-teal-400'
    }
];

// --- INLINE COMPONENTS ---

// 1. StatsCard Component
const StatsCard = ({ title, value, change, trend, icon: Icon, gradient, valueColor, alert }) => {
    const isUp = trend === 'up';
    const TrendIcon = isUp ? ArrowUp : ArrowDown;
    const trendColor = isUp ? 'text-green-400' : 'text-red-400';
    
    // Conditional classes for the Critical Alert card
    const alertClasses = alert 
        ? 'ring-4 ring-red-500/30 animate-pulse' 
        : 'hover:border-indigo-600';

    return (
        <div className={`bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700 transition-all duration-300 ${alertClasses}`}>
            <div className="flex items-start justify-between">
                <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-400">{title}</p>
                    <p className={`text-4xl font-extrabold text-white mt-1 ${valueColor}`}>{value}</p> 
                </div>
                <div className={`w-12 h-12 ${gradient} rounded-xl flex items-center justify-center shadow-lg transform rotate-3`}>
                    <Icon className="h-6 w-6 text-white" />
                </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
                <TrendIcon className={`h-4 w-4 ${trendColor}`} />
                <span className={`text-sm font-semibold ${trendColor}`}>{change}</span>
                <span className="text-sm text-gray-500">vs yesterday</span>
            </div>
        </div>
    );
};

// 2. ChartCard Component (Uses a simple Div mockup for visualization)
const ChartCard = ({ title, icon: Icon, children, className = "", subtitle }) => (
    <div className={`bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-indigo-500/20 hover:border-indigo-600 ${className}`}>
        <div className="p-6 border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <p className="text-sm text-gray-400">{subtitle}</p>
                </div>
            </div>
            <button className="text-sm text-indigo-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700/50 font-medium">
                Analyze <TrendingUp className="h-3 w-3 inline ml-1" />
            </button>
        </div>
        <div className="p-6">
            {children}
        </div>
    </div>
);

// 3. Simple Mockup for Area Chart Visualization (Cleaner, bolder, focusing on trend)
const AreaChartMockup = () => (
    <div className="h-48 relative pt-4">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Horizontal Grid lines (Subtle) */}
            <line x1="0" y1="20" x2="100" y2="20" stroke="#374151" strokeWidth="0.3" strokeDasharray="1 1" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#374151" strokeWidth="0.3" strokeDasharray="1 1" />
            <line x1="0" y1="80" x2="100" y2="80" stroke="#374151" strokeWidth="0.3" strokeDasharray="1 1" />
            
            {/* Gradient definition for the fill (Bolder color stops) */}
            <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.1"/>
                </linearGradient>
            </defs>
            
            {/* Smoother Line Data (Simplified points for cleaner look) */}
            <polyline 
                fill="none" 
                stroke="#A5B4FC" // Lighter indigo for better contrast
                strokeWidth="2.5" // Bolder line
                points="0,85 10,65 20,70 30,50 40,55 50,30 60,40 70,20 80,35 90,15 100,25" 
            />
            
            {/* Area Fill */}
            <polygon 
                fill="url(#areaGradient)" 
                points="0,85 10,65 20,70 30,50 40,55 50,30 60,40 70,20 80,35 90,15 100,25 100,100 0,100" 
            />
        </svg>
        <div className="absolute bottom-0 w-full text-xs text-gray-500 flex justify-between px-1">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>23:59</span>
        </div>
    </div>
);

// 4. Simple Mockup for Pie Chart Visualization (Clean, flat donut chart)
const PieChartMockup = () => (
    <div className="flex items-center justify-around h-48">
        <div className="relative w-40 h-40 rounded-full bg-transparent p-1 shadow-inner flex items-center justify-center">
             {/* Simple Donut Chart using CSS conic-gradient */}
             <div 
                className="w-full h-full rounded-full"
                style={{
                    background: 'conic-gradient(#06B6D4 0% 25%, #4F46E5 25% 70%, #F87171 70% 100%)',
                    clipPath: 'circle(40% at 50% 50%)' // Creates the donut hole
                }}
            ></div>
            
            {/* Center text for value */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-3xl font-extrabold">4.2</span>
            </div>
        </div>
        <div className="space-y-3 text-sm text-gray-300">
            <p className="flex items-center"><span className="inline-block w-3 h-3 rounded-full bg-cyan-500 mr-2"></span> High Risk (25%)</p>
            <p className="flex items-center"><span className="inline-block w-3 h-3 rounded-full bg-indigo-500 mr-2"></span> Medium Risk (45%)</p>
            <p className="flex items-center"><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span> Low Risk (30%)</p>
        </div>
    </div>
);


// 5. Health Bar Component (Used in Sensor Health Mockup)
const HealthBar = ({ label, percentage, color }) => (
    <div className="p-2 bg-gray-700/50 rounded-lg">
        <div className="flex justify-between text-sm text-gray-300 mb-1">
            <span className="font-medium">{label}</span>
            <span className="font-bold text-white">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-900 rounded-full h-2.5">
            <div 
                className={`h-2.5 rounded-full ${color} transition-all duration-500`} 
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);

// 6. Quick Action Button Component (Updated for a more dramatic effect)
const ActionButton = ({ icon: Icon, title, subtitle, color }) => (
    <button className={`p-5 ${color} text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] text-left group border border-current`}>
        <Icon className="h-6 w-6 mb-3 group-hover:rotate-6 transition-transform" />
        <h4 className="font-extrabold text-sm">{title}</h4>
        <p className="text-xs opacity-90 mt-1">{subtitle}</p>
    </button>
);


// --- MAIN DASHBOARD COMPONENT ---
const Dashboard = () => {

  return (
    // Apply dark background and Poppins font
    <div className="bg-gray-900 min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="space-y-10 p-8 max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4 border-gray-800">
                <div>
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        RockGuard AI Dashboard
                    </h1>
                    <p className="text-lg text-indigo-400 mt-2 flex items-center space-x-2">
                        <Zap className="h-5 w-5" />
                        <span>AI-Driven Analysis and Site Overview</span>
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center space-x-3">
                    <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-bold rounded-xl shadow-xl shadow-indigo-500/40 hover:shadow-2xl transition-all duration-300 flex items-center space-x-2">
                        <BarChart3 className="h-4 w-4" />
                        <span>Full Report</span>
                    </button>
                </div>
            </div>
            
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                    <StatsCard 
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        trend={stat.trend}
                        icon={stat.icon}
                        gradient={`bg-gradient-to-br ${stat.gradient}`}
                        valueColor={stat.valueColor}
                        alert={stat.alert}
                    />
                ))}
            </div>
            
            {/* Main Charts Grid: Displacement & Risk */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Real-time Displacement */}
                <ChartCard 
                    title="Real-Time Displacement (mm)" 
                    icon={LineChart} 
                    subtitle="Rock Movement Over Last 24 Hours"
                    className="lg:col-span-2"
                >
                    <AreaChartMockup />
                </ChartCard>
                
                {/* Risk Distribution */}
                <ChartCard 
                    title="Current Risk Distribution" 
                    icon={PieChart} 
                    subtitle="Percentage breakdown by risk level"
                >
                    <PieChartMockup />
                </ChartCard>
            </div>
            
            {/* Secondary Analytics Grid: Velocity & Sensor Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Velocity Trends */}
                <ChartCard 
                    title="Predictive Strain Rate (mm/hr)" 
                    icon={TrendingUp} 
                    subtitle="Forecasted deformation velocity based on model"
                >
                    {/* Placeholder for Line Chart (Simplified Mockup - Bolder Line, simpler grid) */}
                    <div className="h-48 flex items-center justify-center">
                        <div className="w-full h-full bg-gray-800 rounded-lg p-3">
                            <div className="h-full relative">
                                {/* Subtle Grid Lines */}
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <div className="w-full h-1/3 border-b border-gray-700/50"></div>
                                    <div className="w-full h-1/3 border-b border-gray-700/50"></div>
                                </div>
                                
                                {/* Line Path - Bolder and teal color */}
                                <div className="absolute inset-0">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <polyline 
                                            fill="none" 
                                            stroke="#2DD4BF" // Bolder Teal
                                            strokeWidth="3" 
                                            points="0,80 10,70 20,75 30,60 40,55 50,40 60,35 70,20 80,15 90,10 100,5" 
                                        />
                                    </svg>
                                </div>
                                {/* Highlighted Endpoint */}
                                <div className="absolute top-[8%] left-[90%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-teal-400 ring-4 ring-teal-400/30" />
                            </div>
                        </div>
                    </div>
                </ChartCard>

                {/* Sensor Health */}
                <ChartCard 
                    title="Sensor Network Health" 
                    icon={Activity} 
                    subtitle="Current uptime and data integrity status"
                >
                    <div className="h-48 space-y-3 pt-2">
                        <HealthBar label="Geophones" percentage={95} color="bg-teal-500" />
                        <HealthBar label="Extensometers" percentage={88} color="bg-blue-500" />
                        <HealthBar label="Strain Gauges" percentage={99} color="bg-green-500" />
                        <HealthBar label="Inclinometers" percentage={75} color="bg-yellow-500" />
                    </div>
                </ChartCard>
            </div>

            {/* Quick Actions Footer */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6">Immediate Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <ActionButton icon={AlertTriangle} title="Manage Alerts" subtitle="Review and resolve incidents" color="bg-red-600 hover:bg-red-700" />
                    <ActionButton icon={Settings} title="Configure Sensors" subtitle="Adjust monitoring parameters" color="bg-indigo-600 hover:bg-indigo-700" />
                    <ActionButton icon={Map} title="View Geologic Map" subtitle="Analyze structural context" color="bg-teal-600 hover:bg-teal-700" />
                    <ActionButton icon={Target} title="Set Prediction Target" subtitle="Focus resources on specific areas" color="bg-purple-600 hover:bg-purple-700" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
