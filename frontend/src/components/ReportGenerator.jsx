// import React, { useState } from 'react';
// import { Download, FileText, Calendar, AlertTriangle, Users, MapPin } from 'lucide-react';
// import { expandedIndianMineZones, stateWiseStatistics, emergencyResponseTeams } from '../data/expandedIndianMinesData';

// const ReportGenerator = () => {
//   const [reportType, setReportType] = useState('safety');
//   const [selectedZones, setSelectedZones] = useState([]);
//   const [dateRange, setDateRange] = useState({
//     start: '2024-08-01',
//     end: '2024-09-04'
//   });
//   const [isGenerating, setIsGenerating] = useState(false);

//   const reportTypes = [
//     { id: 'safety', name: 'Safety Compliance Report', description: 'Complete safety assessment and compliance status' },
//     { id: 'risk', name: 'Risk Analysis Report', description: 'Detailed risk analysis with predictions' },
//     { id: 'incident', name: 'Incident Report', description: 'Historical incidents and response analysis' },
//     { id: 'worker', name: 'Worker Safety Report', description: 'Worker-focused safety metrics and alerts' },
//     { id: 'environmental', name: 'Environmental Impact Report', description: 'Environmental factors affecting mine safety' }
//   ];

//   const generateReport = () => {
//     setIsGenerating(true);
    
//     setTimeout(() => {
//       const reportData = {
//         reportType: reportType,
//         generatedAt: new Date().toLocaleString(),
//         dateRange: dateRange,
//         selectedZones: selectedZones.length > 0 ? selectedZones : expandedIndianMineZones.map(z => z.id),
//         summary: generateReportSummary(),
//         recommendations: generateRecommendations()
//       };
      
//       downloadReport(reportData);
//       setIsGenerating(false);
//     }, 2000);
//   };

//   const generateReportSummary = () => {
//     const zones = selectedZones.length > 0 
//       ? expandedIndianMineZones.filter(z => selectedZones.includes(z.id))
//       : expandedIndianMineZones;

//     const highRiskCount = zones.filter(z => z.riskLevel === 'high' || z.riskLevel === 'critical').length;
//     const totalWorkers = zones.reduce((sum, z) => sum + z.workers, 0);
//     const criticalZones = zones.filter(z => z.riskLevel === 'critical');

//     return {
//       totalZones: zones.length,
//       highRiskZones: highRiskCount,
//       totalWorkers: totalWorkers,
//       criticalZones: criticalZones.length,
//       statesAffected: new Set(zones.map(z => z.state)).size,
//       averageRisk: (zones.reduce((sum, z) => sum + z.probability, 0) / zones.length * 100).toFixed(1)
//     };
//   };

//   const generateRecommendations = () => {
//     const summary = generateReportSummary();
//     const recommendations = [];

//     if (summary.criticalZones > 0) {
//       recommendations.push('तत्काल कार्य बंद करें और सभी कर्मचारियों को निकालें (Immediate work stoppage and worker evacuation required)');
//     }
    
//     if (summary.highRiskZones > 3) {
//       recommendations.push('अतिरिक्त सुरक्षा उपकरण और निगरानी सिस्टम लगाएं (Deploy additional safety equipment and monitoring systems)');
//     }
    
//     if (summary.averageRisk > 50) {
//       recommendations.push('व्यापक सुरक्षा ऑडिट और जोखिम मूल्यांकन करें (Conduct comprehensive safety audit and risk assessment)');
//     }
    
//     recommendations.push('सभी श्रमिकों को अनिवार्य सुरक्षा प्रशिक्षण दें (Mandatory safety training for all workers)');
//     recommendations.push('आपातकालीन प्रतिक्रिया योजना को अपडेट करें (Update emergency response plans)');

//     return recommendations;
//   };

//   const downloadReport = (reportData) => {
//     const reportContent = generateReportHTML(reportData);
//     const blob = new Blob([reportContent], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `Indian_Mine_Safety_Report_${reportData.reportType}_${new Date().toISOString().split('T')[0]}.html`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };

//   const generateReportHTML = (data) => {
//     const zones = selectedZones.length > 0 
//       ? expandedIndianMineZones.filter(z => selectedZones.includes(z.id))
//       : expandedIndianMineZones;

//     return `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Indian Mine Safety Report - ${data.reportType.toUpperCase()}</title>
//     <style>
//         body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
//         .header { background: linear-gradient(135deg, #ff6b35, #f7931e); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
//         .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
//         .summary { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0; }
//         .zone-card { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 8px; }
//         .high-risk { border-left: 5px solid #dc3545; }
//         .medium-risk { border-left: 5px solid #ffc107; }
//         .low-risk { border-left: 5px solid #28a745; }
//         .critical-risk { border-left: 5px solid #6f42c1; background: #fff5f5; }
//         .recommendations { background: #e7f3ff; padding: 15px; border-radius: 8px; margin: 20px 0; }
//         .emergency-contacts { background: #fff2e7; padding: 15px; border-radius: 8px; margin: 20px 0; }
//         table { width: 100%; border-collapse: collapse; margin: 20px 0; }
//         th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
//         th { background: #f8f9fa; font-weight: bold; }
//         .footer { text-align: center; margin-top: 40px; padding: 20px; background: #f8f9fa; border-radius: 8px; }
//     </style>
// </head>
// <body>
//     <div class="header">
//         <div class="logo">🇮🇳 भारतीय खान सुरक्षा रिपोर्ट / Indian Mine Safety Report</div>
//         <h1>${reportTypes.find(r => r.id === data.reportType)?.name || 'Safety Report'}</h1>
//         <p>Generated on: ${data.generatedAt}</p>
//         <p>Report Period: ${data.dateRange.start} to ${data.dateRange.end}</p>
//     </div>

//     <div class="summary">
//         <h2>📊 Executive Summary / कार्यकारी सारांश</h2>
//         <table>
//             <tr><th>Metric / मेट्रिक</th><th>Value / मान</th></tr>
//             <tr><td>Total Mine Zones / कुल खान क्षेत्र</td><td>${data.summary.totalZones}</td></tr>
//             <tr><td>High Risk Zones / उच्च जोखिम क्षेत्र</td><td>${data.summary.highRiskZones}</td></tr>
//             <tr><td>Critical Zones / गंभीर क्षेत्र</td><td>${data.summary.criticalZones}</td></tr>
//             <tr><td>Total Workers / कुल श्रमिक</td><td>${data.summary.totalWorkers}</td></tr>
//             <tr><td>States Affected / प्रभावित राज्य</td><td>${data.summary.statesAffected}</td></tr>
//             <tr><td>Average Risk Level / औसत जोखिम स्तर</td><td>${data.summary.averageRisk}%</td></tr>
//         </table>
//     </div>

//     <h2>🗺️ Mine Zone Details / खान क्षेत्र विवरण</h2>
//     ${zones.map(zone => `
//         <div class="zone-card ${zone.riskLevel === 'critical' ? 'critical-risk' : zone.riskLevel}-risk">
//             <h3>${zone.name}</h3>
//             <p><strong>State / राज्य:</strong> ${zone.state} | <strong>District / जिला:</strong> ${zone.district}</p>
//             <p><strong>Mine Type / खान प्रकार:</strong> ${zone.mineType} | <strong>Workers / श्रमिक:</strong> ${zone.workers}</p>
//             <p><strong>Risk Level / जोखिम स्तर:</strong> ${zone.riskLevel.toUpperCase()} (${(zone.probability * 100).toFixed(1)}%)</p>
//             <p><strong>Last Incident / अंतिम घटना:</strong> ${zone.lastIncident || 'None recorded / कोई रिकॉर्ड नहीं'}</p>
//         </div>
//     `).join('')}

//     <div class="recommendations">
//         <h2>🛡️ Safety Recommendations / सुरक्षा सिफारिशें</h2>
//         <ul>
//             ${data.recommendations.map(rec => `<li>${rec}</li>`).join('')}
//         </ul>
//     </div>

//     <div class="emergency-contacts">
//         <h2>🚨 Emergency Contacts / आपातकालीन संपर्क</h2>
//         <h3>Central Authorities / केंद्रीय अधिकारी</h3>
//         <ul>
//             ${Object.entries(emergencyResponseTeams.Central).map(([name, contact]) => 
//                 `<li><strong>${name}:</strong> ${contact.phone} | ${contact.email}</li>`
//             ).join('')}
//         </ul>
//         <h3>Regional Authorities / क्षेत्रीय अधिकारी</h3>
//         <ul>
//             ${Object.entries(emergencyResponseTeams.Regional).map(([name, contact]) => 
//                 `<li><strong>${name}:</strong> ${contact.phone} | ${contact.email}</li>`
//             ).join('')}
//         </ul>
//     </div>

//     <div class="footer">
//         <p><strong>Disclaimer:</strong> This report is generated by AI-based analysis for informational purposes. 
//         Please consult with certified mine safety professionals for official assessments.</p>
//         <p><strong>अस्वीकरण:</strong> यह रिपोर्ट सूचनात्मक उद्देश्यों के लिए AI-आधारित विश्लेषण द्वारा तैयार की गई है। 
//         आधिकारिक मूल्यांकन के लिए प्रमाणित खान सुरक्षा पेशेवरों से सलाह लें।</p>
//         <p>Generated by Indian Mine Safety & Rockfall Prediction System</p>
//     </div>
// </body>
// </html>`;
//   };

//   const handleZoneSelection = (zoneId) => {
//     setSelectedZones(prev => 
//       prev.includes(zoneId) 
//         ? prev.filter(id => id !== zoneId)
//         : [...prev, zoneId]
//     );
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-xl font-bold text-gray-800">Safety Report Generator</h2>
//           <p className="text-sm text-gray-600">सुरक्षा रिपोर्ट जेनरेटर</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <FileText className="h-5 w-5 text-blue-600" />
//           <span className="text-sm text-gray-600">PDF & HTML Reports</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Report Configuration */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Report Type Selection */}
//           <div className="bg-white border rounded-lg p-4">
//             <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Report Type</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               {reportTypes.map(type => (
//                 <div
//                   key={type.id}
//                   onClick={() => setReportType(type.id)}
//                   className={`p-4 border rounded-lg cursor-pointer transition-all ${
//                     reportType === type.id 
//                       ? 'border-blue-500 bg-blue-50' 
//                       : 'border-gray-200 hover:border-gray-300'
//                   }`}
//                 >
//                   <h4 className="font-medium text-gray-800">{type.name}</h4>
//                   <p className="text-xs text-gray-600 mt-1">{type.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Date Range */}
//           <div className="bg-white border rounded-lg p-4">
//             <h3 className="text-lg font-semibold text-gray-700 mb-3">Report Period</h3>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Start Date</label>
//                 <input
//                   type="date"
//                   value={dateRange.start}
//                   onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">End Date</label>
//                 <input
//                   type="date"
//                   value={dateRange.end}
//                   onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Zone Selection */}
//           <div className="bg-white border rounded-lg p-4">
//             <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Mine Zones (Optional)</h3>
//             <p className="text-sm text-gray-600 mb-3">Leave empty to include all zones</p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
//               {expandedIndianMineZones.map(zone => (
//                 <label key={zone.id} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
//                   <input
//                     type="checkbox"
//                     checked={selectedZones.includes(zone.id)}
//                     onChange={() => handleZoneSelection(zone.id)}
//                     className="rounded"
//                   />
//                   <div className="flex-1">
//                     <span className="text-sm font-medium text-gray-700">{zone.name}</span>
//                     <div className="flex items-center space-x-2 text-xs text-gray-500">
//                       <span>{zone.state}</span>
//                       <span className={`px-1 rounded ${
//                         zone.riskLevel === 'critical' ? 'bg-purple-100 text-purple-600' :
//                         zone.riskLevel === 'high' ? 'bg-red-100 text-red-600' :
//                         zone.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-600' :
//                         'bg-green-100 text-green-600'
//                       }`}>
//                         {zone.riskLevel}
//                       </span>
//                     </div>
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Report Preview & Generation */}
//         <div className="space-y-4">
//           <div className="bg-white border rounded-lg p-4">
//             <h3 className="text-lg font-semibold text-gray-700 mb-3">Report Preview</h3>
//             <div className="space-y-2 text-sm">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Report Type:</span>
//                 <span className="font-medium">{reportTypes.find(r => r.id === reportType)?.name}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Zones Selected:</span>
//                 <span className="font-medium">{selectedZones.length || expandedIndianMineZones.length}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Date Range:</span>
//                 <span className="font-medium">{dateRange.start} to {dateRange.end}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Format:</span>
//                 <span className="font-medium">HTML</span>
//               </div>
//             </div>
//           </div>

//           <button
//             onClick={generateReport}
//             disabled={isGenerating}
//             className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
//           >
//             {isGenerating ? (
//               <>
//                 <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
//                 <span>Generating Report...</span>
//               </>
//             ) : (
//               <>
//                 <Download className="h-5 w-5" />
//                 <span>Generate & Download Report</span>
//               </>
//             )}
//           </button>

//           {/* Quick Stats */}
//           <div className="bg-white border rounded-lg p-4">
//             <h4 className="font-medium text-gray-700 mb-3">Current Statistics</h4>
//             <div className="space-y-2 text-sm">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Total Mines:</span>
//                 <span className="font-medium">{expandedIndianMineZones.length}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Critical Risk:</span>
//                 <span className="font-medium text-purple-600">
//                   {expandedIndianMineZones.filter(z => z.riskLevel === 'critical').length}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">High Risk:</span>
//                 <span className="font-medium text-red-600">
//                   {expandedIndianMineZones.filter(z => z.riskLevel === 'high').length}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Total Workers:</span>
//                 <span className="font-medium text-blue-600">
//                   {expandedIndianMineZones.reduce((sum, z) => sum + z.workers, 0).toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportGenerator;



import React, { useState } from 'react';
import { Download, FileText, Calendar, AlertTriangle, Users, MapPin, FileCheck, Shield, TrendingUp, Activity } from 'lucide-react';

// Sample data
const expandedIndianMineZones = [
  { id: 'MZ-001', name: 'Jharia Coal Field', state: 'Jharkhand', district: 'Dhanbad', mineType: 'Coal', workers: 1250, probability: 0.82, riskLevel: 'critical', lastIncident: '2024-08-15' },
  { id: 'MZ-002', name: 'Raniganj Coalfields', state: 'West Bengal', district: 'Paschim Bardhaman', mineType: 'Coal', workers: 980, probability: 0.68, riskLevel: 'high', lastIncident: '2024-07-22' },
  { id: 'MZ-003', name: 'Bailadila Iron Ore', state: 'Chhattisgarh', district: 'Dantewada', mineType: 'Iron', workers: 850, probability: 0.45, riskLevel: 'medium', lastIncident: '2024-06-10' },
  { id: 'MZ-004', name: 'Kolar Gold Fields', state: 'Karnataka', district: 'Kolar', mineType: 'Gold', workers: 420, probability: 0.75, riskLevel: 'high', lastIncident: '2024-08-28' },
  { id: 'MZ-005', name: 'Singareni Collieries', state: 'Telangana', district: 'Khammam', mineType: 'Coal', workers: 1100, probability: 0.55, riskLevel: 'medium', lastIncident: null }
];

const emergencyResponseTeams = {
  Central: {
    'DGMS Emergency Control': { phone: '1800-11-7777', email: 'emergency@dgms.gov.in' },
    'Ministry of Mines': { phone: '011-2338-1234', email: 'mines@gov.in' }
  },
  Regional: {
    'Eastern Region HQ': { phone: '0326-222-1234', email: 'eastern@dgms.gov.in' },
    'Western Region HQ': { phone: '022-2202-5678', email: 'western@dgms.gov.in' }
  }
};

const ReportGenerator = () => {
  const [reportType, setReportType] = useState('safety');
  const [selectedZones, setSelectedZones] = useState([]);
  const [dateRange, setDateRange] = useState({
    start: '2024-08-01',
    end: '2024-09-04'
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const reportTypes = [
    { 
      id: 'safety', 
      name: 'Safety Compliance Report', 
      description: 'Complete safety assessment and compliance status',
      icon: Shield,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      id: 'risk', 
      name: 'Risk Analysis Report', 
      description: 'Detailed risk analysis with predictions',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600'
    },
    { 
      id: 'incident', 
      name: 'Incident Report', 
      description: 'Historical incidents and response analysis',
      icon: FileCheck,
      color: 'from-orange-500 to-orange-600'
    },
    { 
      id: 'worker', 
      name: 'Worker Safety Report', 
      description: 'Worker-focused safety metrics and alerts',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      id: 'environmental', 
      name: 'Environmental Impact Report', 
      description: 'Environmental factors affecting mine safety',
      icon: TrendingUp,
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const generateReport = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const reportData = {
        reportType: reportType,
        generatedAt: new Date().toLocaleString(),
        dateRange: dateRange,
        selectedZones: selectedZones.length > 0 ? selectedZones : expandedIndianMineZones.map(z => z.id),
        summary: generateReportSummary(),
        recommendations: generateRecommendations()
      };
      
      downloadReport(reportData);
      setIsGenerating(false);
    }, 2000);
  };

  const generateReportSummary = () => {
    const zones = selectedZones.length > 0 
      ? expandedIndianMineZones.filter(z => selectedZones.includes(z.id))
      : expandedIndianMineZones;

    const highRiskCount = zones.filter(z => z.riskLevel === 'high' || z.riskLevel === 'critical').length;
    const totalWorkers = zones.reduce((sum, z) => sum + z.workers, 0);
    const criticalZones = zones.filter(z => z.riskLevel === 'critical');

    return {
      totalZones: zones.length,
      highRiskZones: highRiskCount,
      totalWorkers: totalWorkers,
      criticalZones: criticalZones.length,
      statesAffected: new Set(zones.map(z => z.state)).size,
      averageRisk: (zones.reduce((sum, z) => sum + z.probability, 0) / zones.length * 100).toFixed(1)
    };
  };

  const generateRecommendations = () => {
    const summary = generateReportSummary();
    const recommendations = [];

    if (summary.criticalZones > 0) {
      recommendations.push('तत्काल कार्य बंद करें और सभी कर्मचारियों को निकालें (Immediate work stoppage and worker evacuation required)');
    }
    
    if (summary.highRiskZones > 3) {
      recommendations.push('अतिरिक्त सुरक्षा उपकरण और निगरानी सिस्टम लगाएं (Deploy additional safety equipment and monitoring systems)');
    }
    
    if (summary.averageRisk > 50) {
      recommendations.push('व्यापक सुरक्षा ऑडिट और जोखिम मूल्यांकन करें (Conduct comprehensive safety audit and risk assessment)');
    }
    
    recommendations.push('सभी श्रमिकों को अनिवार्य सुरक्षा प्रशिक्षण दें (Mandatory safety training for all workers)');
    recommendations.push('आपातकालीन प्रतिक्रिया योजना को अपडेट करें (Update emergency response plans)');

    return recommendations;
  };

  const downloadReport = (reportData) => {
    const reportContent = generateReportHTML(reportData);
    const blob = new Blob([reportContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Indian_Mine_Safety_Report_${reportData.reportType}_${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generateReportHTML = (data) => {
    const zones = selectedZones.length > 0 
      ? expandedIndianMineZones.filter(z => selectedZones.includes(z.id))
      : expandedIndianMineZones;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Indian Mine Safety Report - ${data.reportType.toUpperCase()}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f7fa; padding: 40px; line-height: 1.6; }
        .container { max-width: 1200px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; }
        .header h1 { font-size: 32px; margin-bottom: 10px; }
        .header p { opacity: 0.9; font-size: 14px; }
        .content { padding: 40px; }
        .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0; }
        .summary-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; }
        .summary-card h3 { font-size: 14px; opacity: 0.9; margin-bottom: 10px; }
        .summary-card .value { font-size: 36px; font-weight: bold; }
        .section { margin: 40px 0; }
        .section h2 { font-size: 24px; color: #1a202c; margin-bottom: 20px; border-left: 4px solid #667eea; padding-left: 15px; }
        .zone-card { border: 1px solid #e2e8f0; padding: 25px; margin: 15px 0; border-radius: 12px; transition: all 0.3s; }
        .zone-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .zone-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .zone-header h3 { font-size: 20px; color: #1a202c; }
        .risk-badge { padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
        .risk-critical { background: #fed7d7; color: #742a2a; }
        .risk-high { background: #feebc8; color: #7c2d12; }
        .risk-medium { background: #fef3c7; color: #78350f; }
        .risk-low { background: #d1fae5; color: #064e3b; }
        .zone-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .detail-item { display: flex; flex-direction: column; }
        .detail-label { font-size: 12px; color: #718096; margin-bottom: 5px; }
        .detail-value { font-size: 16px; font-weight: 600; color: #1a202c; }
        .recommendations { background: #edf2f7; padding: 30px; border-radius: 12px; }
        .recommendations ul { list-style: none; }
        .recommendations li { padding: 12px 0; border-bottom: 1px solid #cbd5e0; display: flex; align-items: start; }
        .recommendations li:before { content: '✓'; color: #48bb78; font-weight: bold; margin-right: 12px; font-size: 18px; }
        .emergency-section { background: #fff5f5; padding: 30px; border-radius: 12px; border-left: 4px solid #f56565; }
        .emergency-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px; }
        .emergency-card { background: white; padding: 20px; border-radius: 8px; }
        .emergency-card h4 { color: #1a202c; margin-bottom: 15px; }
        .contact-item { padding: 10px 0; border-bottom: 1px solid #e2e8f0; }
        .contact-item:last-child { border: none; }
        .footer { background: #2d3748; color: white; padding: 30px; text-align: center; }
        .footer p { margin: 10px 0; opacity: 0.8; }
        @media print { body { padding: 0; } .container { box-shadow: none; } }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🇮🇳 भारतीय खान सुरक्षा रिपोर्ट</h1>
            <h1>Indian Mine Safety Report</h1>
            <p style="margin-top: 20px; font-size: 18px;">${reportTypes.find(r => r.id === data.reportType)?.name || 'Safety Report'}</p>
            <p>Generated on: ${data.generatedAt}</p>
            <p>Report Period: ${data.dateRange.start} to ${data.dateRange.end}</p>
        </div>

        <div class="content">
            <div class="summary-grid">
                <div class="summary-card">
                    <h3>Total Mine Zones</h3>
                    <div class="value">${data.summary.totalZones}</div>
                </div>
                <div class="summary-card">
                    <h3>High Risk Zones</h3>
                    <div class="value">${data.summary.highRiskZones}</div>
                </div>
                <div class="summary-card">
                    <h3>Total Workers</h3>
                    <div class="value">${data.summary.totalWorkers.toLocaleString()}</div>
                </div>
                <div class="summary-card">
                    <h3>Average Risk</h3>
                    <div class="value">${data.summary.averageRisk}%</div>
                </div>
            </div>

            <div class="section">
                <h2>🗺️ Mine Zone Details / खान क्षेत्र विवरण</h2>
                ${zones.map(zone => `
                    <div class="zone-card">
                        <div class="zone-header">
                            <h3>${zone.name}</h3>
                            <span class="risk-badge risk-${zone.riskLevel}">${zone.riskLevel}</span>
                        </div>
                        <div class="zone-details">
                            <div class="detail-item">
                                <span class="detail-label">State / राज्य</span>
                                <span class="detail-value">${zone.state}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">District / जिला</span>
                                <span class="detail-value">${zone.district}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Mine Type / खान प्रकार</span>
                                <span class="detail-value">${zone.mineType}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Workers / श्रमिक</span>
                                <span class="detail-value">${zone.workers.toLocaleString()}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Risk Probability / जोखिम संभावना</span>
                                <span class="detail-value">${(zone.probability * 100).toFixed(1)}%</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Last Incident / अंतिम घटना</span>
                                <span class="detail-value">${zone.lastIncident || 'No records'}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="section">
                <div class="recommendations">
                    <h2>🛡️ Safety Recommendations / सुरक्षा सिफारिशें</h2>
                    <ul>
                        ${data.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="section">
                <div class="emergency-section">
                    <h2>🚨 Emergency Contacts / आपातकालीन संपर्क</h2>
                    <div class="emergency-grid">
                        <div class="emergency-card">
                            <h4>Central Authorities / केंद्रीय अधिकारी</h4>
                            ${Object.entries(emergencyResponseTeams.Central).map(([name, contact]) => `
                                <div class="contact-item">
                                    <strong>${name}</strong><br>
                                    📞 ${contact.phone}<br>
                                    ✉️ ${contact.email}
                                </div>
                            `).join('')}
                        </div>
                        <div class="emergency-card">
                            <h4>Regional Authorities / क्षेत्रीय अधिकारी</h4>
                            ${Object.entries(emergencyResponseTeams.Regional).map(([name, contact]) => `
                                <div class="contact-item">
                                    <strong>${name}</strong><br>
                                    📞 ${contact.phone}<br>
                                    ✉️ ${contact.email}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <p><strong>Disclaimer:</strong> This report is generated by AI-based analysis for informational purposes. 
            Please consult with certified mine safety professionals for official assessments.</p>
            <p><strong>अस्वीकरण:</strong> यह रिपोर्ट सूचनात्मक उद्देश्यों के लिए AI-आधारित विश्लेषण द्वारा तैयार की गई है। 
            आधिकारिक मूल्यांकन के लिए प्रमाणित खान सुरक्षा पेशेवरों से सलाह लें।</p>
            <p style="margin-top: 20px;">Generated by Indian Mine Safety & Rockfall Prediction System</p>
        </div>
    </div>
</body>
</html>`;
  };

  const handleZoneSelection = (zoneId) => {
    setSelectedZones(prev => 
      prev.includes(zoneId) 
        ? prev.filter(id => id !== zoneId)
        : [...prev, zoneId]
    );
  };

  const summary = generateReportSummary();

  return (
    <div className="min-h-screen p-6 md:p-8" style={{ background: '#101828' }}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Safety Report Generator</h2>
            <p className="text-white/60">सुरक्षा रिपोर्ट जेनरेटर - Generate comprehensive safety reports</p>
          </div>
          <div className="flex items-center space-x-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <FileText className="h-5 w-5 text-blue-400" />
            <span className="text-sm text-white/80">HTML Reports</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Report Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Report Type Selection */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-5">Select Report Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reportTypes.map(type => {
                  const Icon = type.icon;
                  return (
                    <div
                      key={type.id}
                      onClick={() => setReportType(type.id)}
                      className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
                        reportType === type.id 
                          ? 'bg-gradient-to-br ' + type.color + ' shadow-lg scale-105' 
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <Icon className={`h-6 w-6 ${reportType === type.id ? 'text-white' : 'text-white/60'}`} />
                          {reportType === type.id && (
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <h4 className={`font-semibold mb-1 ${reportType === type.id ? 'text-white' : 'text-white/90'}`}>
                          {type.name}
                        </h4>
                        <p className={`text-xs ${reportType === type.id ? 'text-white/80' : 'text-white/50'}`}>
                          {type.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Date Range */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-5">
                <Calendar className="h-5 w-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Report Period</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Start Date</label>
                  <input
                    type="date"
                    value={dateRange.start}
                    onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">End Date</label>
                  <input
                    type="date"
                    value={dateRange.end}
                    onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Zone Selection */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Select Mine Zones</h3>
                </div>
                <span className="text-sm text-white/60">
                  {selectedZones.length > 0 ? `${selectedZones.length} selected` : 'All zones'}
                </span>
              </div>
              <p className="text-sm text-white/60 mb-4">Leave empty to include all zones in the report</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2 scrollbar-thin">
                {expandedIndianMineZones.map(zone => (
                  <label 
                    key={zone.id} 
                    className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedZones.includes(zone.id)}
                      onChange={() => handleZoneSelection(zone.id)}
                      className="w-4 h-4 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">{zone.name}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          zone.riskLevel === 'critical' ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50' :
                          zone.riskLevel === 'high' ? 'bg-red-500/30 text-red-300 border border-red-500/50' :
                          zone.riskLevel === 'medium' ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' :
                          'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50'
                        }`}>
                          {zone.riskLevel}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-white/50 mt-1">
                        <span>{zone.state}</span>
                        <span>•</span>
                        <span>{zone.workers} workers</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            {/* Generate Button */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Report Preview</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Report Type:</span>
                  <span className="font-medium text-white">{reportTypes.find(r => r.id === reportType)?.name.split(' ')[0]}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Zones:</span>
                  <span className="font-medium text-white">{selectedZones.length || expandedIndianMineZones.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Period:</span>
                  <span className="font-medium text-white">{Math.ceil((new Date(dateRange.end) - new Date(dateRange.start)) / (1000 * 60 * 60 * 24))} days</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Format:</span>
                  <span className="font-medium text-white">HTML</span>
                </div>
              </div>
              <button
                onClick={generateReport}
                disabled={isGenerating}
                className="w-full flex items-center justify-center space-x-2 px-4 py-4 bg-white text-purple-600 rounded-lg hover:bg-white/90 disabled:opacity-50 transition-all font-semibold shadow-lg"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-purple-600 border-t-transparent rounded-full"></div>
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5" />
                    <span>Generate Report</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="h-5 w-5 text-emerald-400" />
                <h4 className="font-semibold text-white">Current Statistics</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-white/70">Total Mines</span>
                  <span className="font-bold text-white text-lg">{summary.totalZones}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-white/70">Critical Risk</span>
                  <span className="font-bold text-purple-400 text-lg">{summary.criticalZones}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-white/70">High Risk</span>
                  <span className="font-bold text-red-400 text-lg">{summary.highRiskZones}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-white/70">Total Workers</span>
                  <span className="font-bold text-blue-400 text-lg">{summary.totalWorkers.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-white/70">Avg Risk Level</span>
                  <span className="font-bold text-amber-400 text-lg">{summary.averageRisk}%</span>
                </div>
              </div>
            </div>

            {/* Risk Distribution */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                <h4 className="font-semibold text-white">Risk Distribution</h4>
              </div>
              <div className="space-y-3">
                {[
                  { level: 'Critical', count: expandedIndianMineZones.filter(z => z.riskLevel === 'critical').length, color: 'purple', gradient: 'from-purple-500 to-purple-600' },
                  { level: 'High', count: expandedIndianMineZones.filter(z => z.riskLevel === 'high').length, color: 'red', gradient: 'from-red-500 to-red-600' },
                  { level: 'Medium', count: expandedIndianMineZones.filter(z => z.riskLevel === 'medium').length, color: 'amber', gradient: 'from-amber-500 to-amber-600' },
                  { level: 'Low', count: expandedIndianMineZones.filter(z => z.riskLevel === 'low').length, color: 'emerald', gradient: 'from-emerald-500 to-emerald-600' }
                ].map(item => (
                  <div key={item.level} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/80">{item.level}</span>
                      <span className="text-white font-semibold">{item.count}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.gradient} transition-all duration-500`}
                        style={{ width: `${(item.count / expandedIndianMineZones.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Report Types Info */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
              <div className="flex items-center space-x-2 mb-4">
                <FileCheck className="h-5 w-5 text-blue-400" />
                <h4 className="font-semibold text-white">What's Included</h4>
              </div>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Comprehensive zone analysis</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Safety recommendations</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Emergency contact details</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Risk assessment metrics</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Bilingual (Hindi/English)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerator;