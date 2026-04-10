// import React, { useState, useRef } from 'react';
// import { Upload, Camera, AlertTriangle, CheckCircle, Eye, Download } from 'lucide-react';

// const ImageUploadAnalysis = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [analysisResult, setAnalysisResult] = useState(null);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const fileInputRef = useRef(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setUploadedImage({
//           file: file,
//           url: e.target.result,
//           name: file.name,
//           size: file.size
//         });
//         setAnalysisResult(null);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const analyzeImage = () => {
//     setIsAnalyzing(true);
    
//     // Simulate AI analysis
//     setTimeout(() => {
//       const mockAnalysis = {
//         overallRisk: Math.random() > 0.5 ? 'high' : 'medium',
//         riskProbability: 0.65 + Math.random() * 0.3,
//         detectedFeatures: [
//           { feature: 'Loose Rock Formations', confidence: 0.89, risk: 'high', location: { x: 45, y: 30 } },
//           { feature: 'Crack Patterns', confidence: 0.76, risk: 'medium', location: { x: 65, y: 45 } },
//           { feature: 'Weathered Surface', confidence: 0.82, risk: 'medium', location: { x: 30, y: 60 } },
//           { feature: 'Unstable Slope Angle', confidence: 0.91, risk: 'high', location: { x: 55, y: 25 } }
//         ],
//         recommendations: [
//           'तत्काल भूवैज्ञानिक सर्वेक्षण की आवश्यकता (Immediate geological survey required)',
//           'ढीली चट्टानों को हटाने के लिए नियंत्रित विस्फोट (Controlled blasting to remove loose rocks)',
//           'अतिरिक्त सहायक संरचनाओं की स्थापना (Installation of additional support structures)',
//           'कर्मचारियों के लिए वैकल्पिक मार्ग (Alternative routes for workers)'
//         ],
//         safetyScore: 35, // out of 100
//         analysisTime: '2.3 seconds',
//         imageQuality: 'Good'
//       };
      
//       setAnalysisResult(mockAnalysis);
//       setIsAnalyzing(false);
//     }, 2500);
//   };

//   const getRiskColor = (risk) => {
//     switch (risk) {
//       case 'high': return 'text-red-600 bg-red-100 border-red-200';
//       case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
//       case 'low': return 'text-green-600 bg-green-100 border-green-200';
//       default: return 'text-gray-600 bg-gray-100 border-gray-200';
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-xl font-bold text-gray-800">Mine Image Analysis</h2>
//         <div className="flex items-center space-x-2">
//           <Camera className="h-5 w-5 text-blue-600" />
//           <span className="text-sm text-gray-600">AI-Powered Risk Detection</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Image Upload Section */}
//         <div className="space-y-4">
//           <div className="bg-white border rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">Upload Mine Image</h3>
            
//             {!uploadedImage ? (
//               <div
//                 onClick={() => fileInputRef.current?.click()}
//                 className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 transition-colors"
//               >
//                 <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                 <p className="text-gray-600 mb-2">Click to upload mine image</p>
//                 <p className="text-sm text-gray-500">Supports JPG, PNG, WebP (Max 10MB)</p>
//                 <p className="text-xs text-gray-400 mt-2">
//                   खान की तस्वीर अपलोड करें (Upload mine image)
//                 </p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 <div className="relative">
//                   <img
//                     src={uploadedImage.url}
//                     alt="Uploaded mine"
//                     className="w-full h-64 object-cover rounded-lg border"
//                   />
//                   {analysisResult && (
//                     <div className="absolute inset-0">
//                       {analysisResult.detectedFeatures.map((feature, index) => (
//                         <div
//                           key={index}
//                           className={`absolute w-4 h-4 rounded-full border-2 ${
//                             feature.risk === 'high' ? 'bg-red-500 border-red-600' :
//                             feature.risk === 'medium' ? 'bg-yellow-500 border-yellow-600' :
//                             'bg-green-500 border-green-600'
//                           }`}
//                           style={{
//                             left: `${feature.location.x}%`,
//                             top: `${feature.location.y}%`,
//                             transform: 'translate(-50%, -50%)'
//                           }}
//                           title={feature.feature}
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </div>
                
//                 <div className="flex items-center justify-between text-sm text-gray-600">
//                   <span>{uploadedImage.name}</span>
//                   <span>{(uploadedImage.size / 1024 / 1024).toFixed(2)} MB</span>
//                 </div>
                
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={analyzeImage}
//                     disabled={isAnalyzing}
//                     className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
//                   >
//                     {isAnalyzing ? (
//                       <>
//                         <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
//                         <span>विश्लेषण कर रहे हैं... (Analyzing...)</span>
//                       </>
//                     ) : (
//                       <>
//                         <Eye className="h-4 w-4" />
//                         <span>Analyze Risk</span>
//                       </>
//                     )}
//                   </button>
                  
//                   <button
//                     onClick={() => fileInputRef.current?.click()}
//                     className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
//                   >
//                     Change Image
//                   </button>
//                 </div>
//               </div>
//             )}
            
//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="hidden"
//             />
//           </div>

//           {/* Quick Analysis Tips */}
//           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//             <h4 className="font-medium text-blue-800 mb-2">Analysis Tips</h4>
//             <ul className="text-sm text-blue-700 space-y-1">
//               <li>• Clear, high-resolution images work best</li>
//               <li>• Include rock faces and slope areas</li>
//               <li>• Avoid shadows and poor lighting</li>
//               <li>• Multiple angles provide better analysis</li>
//               <li>• साफ और उच्च गुणवत्ता की तस्वीरें बेहतर परिणाम देती हैं</li>
//             </ul>
//           </div>
//         </div>

//         {/* Analysis Results */}
//         <div className="space-y-4">
//           {analysisResult ? (
//             <>
//               {/* Overall Risk Assessment */}
//               <div className="bg-white border rounded-lg p-4">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-3">Risk Assessment Results</h3>
                
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div className="text-center">
//                     <div className={`text-3xl font-bold mb-1 ${
//                       analysisResult.overallRisk === 'high' ? 'text-red-600' :
//                       analysisResult.overallRisk === 'medium' ? 'text-yellow-600' :
//                       'text-green-600'
//                     }`}>
//                       {(analysisResult.riskProbability * 100).toFixed(1)}%
//                     </div>
//                     <div className="text-sm text-gray-600">Risk Probability</div>
//                   </div>
                  
//                   <div className="text-center">
//                     <div className={`text-3xl font-bold mb-1 ${
//                       analysisResult.safetyScore < 40 ? 'text-red-600' :
//                       analysisResult.safetyScore < 70 ? 'text-yellow-600' :
//                       'text-green-600'
//                     }`}>
//                       {analysisResult.safetyScore}
//                     </div>
//                     <div className="text-sm text-gray-600">Safety Score</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between text-sm text-gray-600">
//                   <span>Analysis Time: {analysisResult.analysisTime}</span>
//                   <span>Image Quality: {analysisResult.imageQuality}</span>
//                 </div>
//               </div>

//               {/* Detected Features */}
//               <div className="bg-white border rounded-lg p-4">
//                 <h4 className="font-medium text-gray-700 mb-3">Detected Risk Features</h4>
//                 <div className="space-y-2">
//                   {analysisResult.detectedFeatures.map((feature, index) => (
//                     <div key={index} className={`p-3 rounded-lg border ${getRiskColor(feature.risk)}`}>
//                       <div className="flex items-center justify-between mb-1">
//                         <span className="font-medium">{feature.feature}</span>
//                         <span className="text-xs px-2 py-1 rounded-full bg-white">
//                           {(feature.confidence * 100).toFixed(0)}% confident
//                         </span>
//                       </div>
//                       <div className="text-sm opacity-80">
//                         Risk Level: {feature.risk.toUpperCase()}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Recommendations */}
//               <div className="bg-white border rounded-lg p-4">
//                 <h4 className="font-medium text-gray-700 mb-3">
//                   Safety Recommendations / सुरक्षा सिफारिशें
//                 </h4>
//                 <ul className="space-y-2">
//                   {analysisResult.recommendations.map((rec, index) => (
//                     <li key={index} className="flex items-start space-x-2">
//                       <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
//                       <span className="text-sm text-gray-700">{rec}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex space-x-2">
//                 <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
//                   <Download className="h-4 w-4" />
//                   <span>Download Report</span>
//                 </button>
//                 <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
//                   <AlertTriangle className="h-4 w-4" />
//                   <span>Send Alert</span>
//                 </button>
//               </div>
//             </>
//           ) : (
//             <div className="bg-gray-50 border rounded-lg p-8 text-center">
//               <Camera className="h-12 w-12 text-gray-400 mx-auto mb-3" />
//               <p className="text-gray-600 mb-2">Upload an image to start AI analysis</p>
//               <p className="text-sm text-gray-500">
//                 विश्लेषण शुरू करने के लिए एक तस्वीर अपलोड करें
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Sample Images for Testing */}
//       <div className="bg-white border rounded-lg p-4">
//         <h3 className="text-lg font-semibold text-gray-700 mb-3">Sample Test Images</h3>
//         <p className="text-sm text-gray-600 mb-3">
//           You can use these sample descriptions to test the system:
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="border rounded-lg p-3">
//             <h4 className="font-medium text-gray-700">High Risk Scenario</h4>
//             <p className="text-xs text-gray-600">Loose rocks, visible cracks, steep slopes</p>
//           </div>
//           <div className="border rounded-lg p-3">
//             <h4 className="font-medium text-gray-700">Medium Risk Scenario</h4>
//             <p className="text-xs text-gray-600">Some weathering, moderate slope angles</p>
//           </div>
//           <div className="border rounded-lg p-3">
//             <h4 className="font-medium text-gray-700">Low Risk Scenario</h4>
//             <p className="text-xs text-gray-600">Stable rock face, proper support structures</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageUploadAnalysis;







// import React, { useState, useRef, useCallback, useEffect } from 'react';
// import { Upload, Camera, AlertTriangle, CheckCircle, Eye, Download, Loader2, ArrowRight } from 'lucide-react';

// // Utility component for displaying risk-colored chips
// const RiskChip = ({ risk, children }) => {
//   const baseClasses = 'px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 border';
//   let colorClasses;

//   switch (risk.toLowerCase()) {
//     case 'high':
//       colorClasses = 'bg-red-600 text-white border-red-800 shadow-md shadow-red-500/30';
//       break;
//     case 'medium':
//       colorClasses = 'bg-yellow-500 text-gray-900 border-yellow-700 shadow-md shadow-yellow-500/30';
//       break;
//     case 'low':
//       colorClasses = 'bg-green-600 text-white border-green-800 shadow-md shadow-green-500/30';
//       break;
//     default:
//       colorClasses = 'bg-gray-600 text-gray-200 border-gray-700';
//   }

//   return <span className={`${baseClasses} ${colorClasses}`}>{children}</span>;
// };

// // Utility function to get color for score/probability
// const getColorByScore = (value, threshold1 = 40, threshold2 = 70) => {
//   if (value < threshold1) return 'text-red-500';
//   if (value < threshold2) return 'text-yellow-500';
//   return 'text-green-500';
// };

// const ImageUploadAnalysis = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [analysisResult, setAnalysisResult] = useState(null);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const fileInputRef = useRef(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (!file.type.startsWith('image/')) {
//         console.error("Invalid file type. Please upload an image.");
//         return;
//       }
//       if (file.size > 10 * 1024 * 1024) { // 10MB limit
//         console.error("File size exceeds 10MB limit.");
//         return;
//       }

//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setUploadedImage({
//           file: file,
//           url: e.target.result,
//           name: file.name,
//           size: file.size
//         });
//         setAnalysisResult(null); // Clear previous results on new upload
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const analyzeImage = useCallback(() => {
//     if (!uploadedImage) return;

//     setIsAnalyzing(true);
//     setAnalysisResult(null); // Clear previous result display

//     // --- Gemini API Call Simulation ---
//     // In a real application, you would make an API call here to a backend
//     // service that interfaces with the Gemini API for image analysis.
//     // The system prompt would guide the model to act as a geological/mine safety expert.
    
//     // Simulate AI analysis delay
//     setTimeout(() => {
//       const isHighRisk = Math.random() < 0.7; // Higher chance of high risk for simulation
//       const overallRisk = isHighRisk ? 'high' : (Math.random() < 0.5 ? 'medium' : 'low');

//       let riskProbability;
//       let safetyScore;

//       if (overallRisk === 'high') {
//           riskProbability = 0.8 + Math.random() * 0.15; // 80-95%
//           safetyScore = 20 + Math.random() * 20; // 20-40
//       } else if (overallRisk === 'medium') {
//           riskProbability = 0.5 + Math.random() * 0.25; // 50-75%
//           safetyScore = 40 + Math.random() * 30; // 40-70
//       } else {
//           riskProbability = 0.1 + Math.random() * 0.2; // 10-30%
//           safetyScore = 70 + Math.random() * 25; // 70-95
//       }

//       const mockAnalysis = {
//         overallRisk: overallRisk,
//         riskProbability: riskProbability,
//         detectedFeatures: [
//           { feature: 'Loose Rock Formations', confidence: 0.89, risk: 'high', location: { x: 45, y: 30 } },
//           { feature: 'Crack Patterns (Tension)', confidence: 0.76, risk: 'medium', location: { x: 65, y: 45 } },
//           { feature: 'Weathered Surface', confidence: 0.82, risk: 'medium', location: { x: 30, y: 60 } },
//           { feature: 'Unstable Slope Angle (>60°)', confidence: 0.95, risk: 'high', location: { x: 55, y: 25 } },
//           { feature: 'Water Seepage/Slickensides', confidence: 0.61, risk: 'medium', location: { x: 75, y: 70 } },
//           ...(overallRisk === 'low' ? [{ feature: 'Intact Support Structures', confidence: 0.98, risk: 'low', location: { x: 10, y: 80 } }] : [])
//         ].filter(() => Math.random() > 0.3), // Randomly hide some features
//         recommendations: [
//           'तत्काल भूवैज्ञानिक सर्वेक्षण की आवश्यकता (Immediate geological survey required)',
//           'सभी कर्मचारियों को क्षेत्र से तुरंत बाहर निकालें (Immediately evacuate all personnel from the area)',
//           'ढीली चट्टानों को हटाने के लिए नियंत्रित विस्फोट की योजना बनाएं (Plan controlled blasting for loose rock removal)',
//           'प्रभावित क्षेत्र में शार्टक्रीट का प्रयोग करें (Apply shotcrete/support in the affected area)',
//           'कर्मचारियों के लिए वैकल्पिक मार्ग निर्धारित करें (Designate alternative safe routes for workers)'
//         ].filter((_, i) => i < 5 - (Math.random() * 2)), // Fewer recommendations for lower risk
//         safetyScore: Math.round(safetyScore),
//         analysisTime: '2.3 seconds',
//         imageQuality: 'High Definition',
//       };
      
//       setAnalysisResult(mockAnalysis);
//       setIsAnalyzing(false);
//     }, 2500);
//   }, [uploadedImage]);

//   const getRiskColorClass = (risk) => {
//     switch (risk.toLowerCase()) {
//       case 'high': return 'bg-red-500 border-red-700';
//       case 'medium': return 'bg-yellow-400 border-yellow-600';
//       case 'low': return 'bg-green-500 border-green-700';
//       default: return 'bg-gray-400 border-gray-600';
//     }
//   };

//   const ProgressRing = ({ percentage, colorClass }) => {
//     const radius = 50;
//     const circumference = 2 * Math.PI * radius;
//     const offset = circumference - (percentage / 100) * circumference;

//     return (
//       <svg className="w-24 h-24 transform -rotate-90">
//         <circle
//           className="text-gray-700" // Darker track color
//           strokeWidth="8"
//           stroke="currentColor"
//           fill="transparent"
//           r={radius}
//           cx="60"
//           cy="60"
//         />
//         <circle
//           className={colorClass}
//           strokeWidth="8"
//           strokeDasharray={circumference}
//           strokeDashoffset={offset}
//           strokeLinecap="round"
//           stroke="currentColor"
//           fill="transparent"
//           r={radius}
//           cx="60"
//           cy="60"
//         />
//       </svg>
//     );
//   };

//   const getProgressColor = (score) => {
//     if (score < 40) return 'text-red-500';
//     if (score < 70) return 'text-yellow-500';
//     return 'text-green-500';
//   }

//   const RiskSummaryCard = ({ result }) => (
//     <div className="p-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl shadow-black/50 transition-all hover:shadow-2xl hover:shadow-black/70 space-y-4">
//       <div className="flex items-center justify-between border-b border-gray-700 pb-3 mb-3">
//         <h3 className="text-xl font-extrabold text-gray-100">Overall Risk Assessment</h3>
//         <RiskChip risk={result.overallRisk}>
//           {result.overallRisk.toUpperCase()} RISK
//         </RiskChip>
//       </div>

//       <div className="grid grid-cols-2 gap-6 text-center">
//         {/* Risk Probability Ring */}
//         <div className="flex flex-col items-center">
//           <div className="relative flex justify-center items-center">
//             <ProgressRing 
//               percentage={result.riskProbability * 100}
//               colorClass={getProgressColor(result.riskProbability * 100)}
//             />
//             <div className="absolute flex flex-col items-center">
//               <span className={`text-3xl font-bold ${getColorByScore(result.riskProbability * 100)}`}>
//                 {(result.riskProbability * 100).toFixed(0)}%
//               </span>
//               <span className="text-sm text-gray-400 mt-1">Risk Chance</span>
//             </div>
//           </div>
//         </div>

//         {/* Safety Score Ring */}
//         <div className="flex flex-col items-center">
//           <div className="relative flex justify-center items-center">
//             <ProgressRing 
//               percentage={result.safetyScore}
//               colorClass={getProgressColor(result.safetyScore)}
//             />
//             <div className="absolute flex flex-col items-center">
//               <span className={`text-3xl font-bold ${getColorByScore(result.safetyScore)}`}>
//                 {result.safetyScore}
//               </span>
//               <span className="text-sm text-gray-400 mt-1">Safety Score (100)</span>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="text-sm text-gray-400 pt-4 flex justify-between">
//         <span>Analysis Time: <span className="font-medium text-gray-300">{result.analysisTime}</span></span>
//         <span>Quality: <span className="font-medium text-gray-300">{result.imageQuality}</span></span>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-900 p-6 sm:p-10 font-sans">
//       <header className="mb-8">
//         <h1 className="text-3xl font-extrabold text-white flex items-center space-x-3">
//           <Camera className="h-7 w-7 text-blue-400" />
//           <span>Mine Safety AI Analyzer</span>
//         </h1>
//         <p className="text-gray-400 mt-1">
//           Automated geological risk detection for proactive mine safety management.
//         </p>
//       </header>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* LEFT COLUMN: Upload and Image Preview */}
//         <div className="lg:col-span-1 space-y-6">
//           <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl shadow-black/50">
//             <h2 className="text-xl font-bold text-gray-100 mb-4">
//               {uploadedImage ? 'View & Analyze Image' : 'Upload Mine Image'}
//             </h2>
            
//             {!uploadedImage ? (
//               <div
//                 onClick={() => fileInputRef.current?.click()}
//                 className="border-2 border-dashed border-gray-600 bg-gray-700 rounded-xl p-10 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-900 transition-all duration-300 group"
//               >
//                 <Upload className="h-10 w-10 text-blue-300 mx-auto mb-3 group-hover:text-blue-500 transition-colors" />
//                 <p className="text-gray-300 font-medium mb-1">Drag & Drop or <span className="text-blue-400 group-hover:underline">Click to Upload</span></p>
//                 <p className="text-sm text-gray-400">JPG, PNG, WebP (Max 10MB)</p>
//                 <p className="text-xs text-gray-500 mt-3">
//                   सुरक्षा विश्लेषण के लिए खान की तस्वीर अपलोड करें
//                 </p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 <div className="relative rounded-xl overflow-hidden shadow-lg shadow-black/50">
//                   <img
//                     src={uploadedImage.url}
//                     alt="Uploaded mine face"
//                     className="w-full h-72 object-cover"
//                   />
//                   {analysisResult && (
//                     <div className="absolute inset-0 transition-opacity duration-500 hover:opacity-100 opacity-80">
//                       {analysisResult.detectedFeatures.map((feature, index) => (
//                         <div
//                           key={index}
//                           className={`absolute w-4 h-4 rounded-full border-2 transform -translate-x-1/2 -translate-y-1/2 ${
//                             getRiskColorClass(feature.risk)
//                           } animate-pulse`}
//                           style={{
//                             left: `${feature.location.x}%`,
//                             top: `${feature.location.y}%`,
//                           }}
//                           title={`${feature.feature} (${(feature.confidence * 100).toFixed(0)}% Conf.)`}
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </div>
                
//                 <div className="text-sm text-gray-200">
//                   <p className="font-semibold">{uploadedImage.name}</p>
//                   <p className="text-xs text-gray-400">{(uploadedImage.size / 1024 / 1024).toFixed(2)} MB</p>
//                 </div>
                
//                 <div className="flex flex-col space-y-2">
//                   <button
//                     onClick={analyzeImage}
//                     disabled={isAnalyzing}
//                     className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:from-blue-600 hover:to-indigo-600 disabled:opacity-50 transition-all duration-300"
//                   >
//                     {isAnalyzing ? (
//                       <>
//                         <Loader2 className="h-5 w-5 animate-spin" />
//                         <span>AI Analysis in Progress...</span>
//                       </>
//                     ) : (
//                       <>
//                         <Eye className="h-5 w-5" />
//                         <span>Run Full Risk Analysis</span>
//                       </>
//                     )}
//                   </button>
                  
//                   <button
//                     onClick={() => fileInputRef.current?.click()}
//                     disabled={isAnalyzing}
//                     className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-600 text-gray-200 font-medium rounded-lg hover:bg-gray-700 disabled:opacity-50 transition-colors"
//                   >
//                     <Upload className="h-4 w-4" />
//                     <span>Change Image</span>
//                   </button>
//                 </div>
//               </div>
//             )}
            
//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/jpeg, image/png, image/webp"
//               onChange={handleImageUpload}
//               className="hidden"
//             />
//           </div>

//           {/* Tips Section */}
//           <div className="bg-blue-950 border border-blue-800 rounded-2xl p-5 shadow-inner shadow-black/30">
//             <h4 className="font-bold text-blue-300 mb-2 flex items-center space-x-2">
//                 <CheckCircle className="h-5 w-5 text-blue-400" />
//                 <span>Best Practice Guidelines</span>
//             </h4>
//             <ul className="text-sm text-blue-400 space-y-1">
//               <li>• Focus on **rock faces, slopes, and support structures.**</li>
//               <li>• Ensure images are **well-lit** and in high resolution.</li>
//               <li>• Use images taken from a **safe, stable position.**</li>
//             </ul>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: Analysis Results */}
//         <div className="lg:col-span-2 space-y-6">
//           {analysisResult ? (
//             <>
//               {/* Overall Risk Summary Card */}
//               <RiskSummaryCard result={analysisResult} />

//               {/* Detected Features & Recommendations */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
//                 {/* Detected Features */}
//                 <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl shadow-black/50">
//                   <h4 className="text-lg font-bold text-gray-100 mb-4 border-b border-gray-700 pb-3">Detected Risk Features <span className="text-gray-500">({analysisResult.detectedFeatures.length})</span></h4>
//                   <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
//                     {analysisResult.detectedFeatures.map((feature, index) => (
//                       <div key={index} className="p-3 rounded-xl bg-gray-700 border border-gray-600 hover:shadow-lg transition-shadow">
//                         <div className="flex items-start justify-between">
//                           <span className="font-semibold text-gray-200 flex-1">{feature.feature}</span>
//                           <RiskChip risk={feature.risk}>{feature.risk.toUpperCase()}</RiskChip>
//                         </div>
//                         <div className="text-xs text-gray-400 mt-1">
//                           Confidence: <span className="font-medium text-gray-300">{(feature.confidence * 100).toFixed(0)}%</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Recommendations */}
//                 <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl shadow-black/50">
//                   <h4 className="text-lg font-bold text-gray-100 mb-4 border-b border-gray-700 pb-3">Immediate Action Recommendations</h4>
//                   <ul className="space-y-4 max-h-80 overflow-y-auto pr-2">
//                     {analysisResult.recommendations.map((rec, index) => (
//                       <li key={index} className="flex items-start space-x-3 border-l-4 border-orange-500 pl-3">
//                         <AlertTriangle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
//                         <span className="text-sm text-gray-200 font-medium leading-relaxed">{rec}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex space-x-4 pt-4">
//                 <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg shadow-green-500/50 hover:bg-green-600 transition-colors">
//                   <Download className="h-5 w-5" />
//                   <span>Download Full Report (PDF)</span>
//                 </button>
//                 <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg shadow-red-500/50 hover:bg-red-600 transition-colors">
//                   <AlertTriangle className="h-5 w-5" />
//                   <span>Issue Emergency Alert</span>
//                 </button>
//               </div>
//             </>
//           ) : isAnalyzing ? (
//              <div className="lg:col-span-2 flex flex-col items-center justify-center bg-gray-800 border border-gray-700 rounded-2xl p-12 shadow-2xl shadow-black/50 h-full min-h-[500px]">
//                 <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
//                 <p className="text-xl font-semibold text-gray-100">Scanning Image for Geological Risks...</p>
//                 <p className="text-sm text-gray-400 mt-2">
//                   This process simulates advanced AI analysis and may take a few moments.
//                 </p>
//              </div>
//           ) : (
//             <div className="lg:col-span-2 flex flex-col items-center justify-center bg-gray-800 border border-gray-700 rounded-2xl p-12 shadow-2xl shadow-black/50 h-full min-h-[500px]">
//               <Camera className="h-16 w-16 text-gray-600 mx-auto mb-4" />
//               <p className="text-xl font-semibold text-gray-100 mb-2">Analysis Panel Ready</p>
//               <p className="text-md text-gray-400 text-center max-w-sm">
//                 Upload a mine face image on the left to activate the AI risk assessment and view safety recommendations here.
//               </p>
//               <p className="text-sm text-gray-500 mt-4 flex items-center space-x-1">
//                 <ArrowRight className="h-4 w-4" />
//                 <span>Proactive Safety Starts Here</span>
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
      
//       {/* Footer/Disclaimer */}
//       <footer className="mt-10 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
//         Disclaimer: This is an AI simulation. Real-world mine safety decisions must be confirmed by certified geological engineers.
//       </footer>
//     </div>
//   );
// };

// export default ImageUploadAnalysis;
  



import React, { useState, useRef, useCallback } from 'react';
import { Upload, Camera, AlertTriangle, CheckCircle, Eye, Download, Loader2, ArrowRight } from 'lucide-react';

// Utility component for displaying risk-colored chips
const RiskChip = ({ risk, children }) => {
  const baseClasses = 'px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 border';
  let colorClasses;

  switch (risk.toLowerCase()) {
    case 'high':
      colorClasses = 'bg-red-600 text-white border-red-800 shadow-md shadow-red-500/30';
      break;
    case 'medium':
      colorClasses = 'bg-yellow-500 text-gray-900 border-yellow-700 shadow-md shadow-yellow-500/30';
      break;
    case 'low':
      colorClasses = 'bg-green-600 text-white border-green-800 shadow-md shadow-green-500/30';
      break;
    default:
      colorClasses = 'bg-gray-600 text-gray-200 border-gray-700';
  }

  return <span className={`${baseClasses} ${colorClasses}`}>{children}</span>;
};

// Utility function to get color for score/probability
const getColorByScore = (value, threshold1 = 40, threshold2 = 70) => {
  if (value < threshold1) return 'text-red-500';
  if (value < threshold2) return 'text-yellow-500';
  return 'text-green-500';
};

const ImageUploadAnalysis = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        console.error("Invalid file type. Please upload an image.");
        return;
      }
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        console.error("File size exceeds 10MB limit.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage({
          file: file,
          url: e.target.result,
          name: file.name,
          size: file.size
        });
        setAnalysisResult(null); // Clear previous results on new upload
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = useCallback(() => {
    if (!uploadedImage) return;

    setIsAnalyzing(true);
    setAnalysisResult(null); // Clear previous result display

    // --- Gemini API Call Simulation ---
    // Simulate AI analysis delay
    setTimeout(() => {
      const isHighRisk = Math.random() < 0.7; // Higher chance of high risk for simulation
      const overallRisk = isHighRisk ? 'high' : (Math.random() < 0.5 ? 'medium' : 'low');

      let riskProbability;
      let safetyScore;

      if (overallRisk === 'high') {
          riskProbability = 0.8 + Math.random() * 0.15; // 80-95%
          safetyScore = 20 + Math.random() * 20; // 20-40
      } else if (overallRisk === 'medium') {
          riskProbability = 0.5 + Math.random() * 0.25; // 50-75%
          safetyScore = 40 + Math.random() * 30; // 40-70
      } else {
          riskProbability = 0.1 + Math.random() * 0.2; // 10-30%
          safetyScore = 70 + Math.random() * 25; // 70-95
      }

      const mockAnalysis = {
        overallRisk: overallRisk,
        riskProbability: riskProbability,
        detectedFeatures: [
          { feature: 'Loose Rock Formations', confidence: 0.89, risk: 'high', location: { x: 45, y: 30 } },
          { feature: 'Crack Patterns (Tension)', confidence: 0.76, risk: 'medium', location: { x: 65, y: 45 } },
          { feature: 'Weathered Surface', confidence: 0.82, risk: 'medium', location: { x: 30, y: 60 } },
          { feature: 'Unstable Slope Angle (>60°)', confidence: 0.95, risk: 'high', location: { x: 55, y: 25 } },
          { feature: 'Water Seepage/Slickensides', confidence: 0.61, risk: 'medium', location: { x: 75, y: 70 } },
          ...(overallRisk === 'low' ? [{ feature: 'Intact Support Structures', confidence: 0.98, risk: 'low', location: { x: 10, y: 80 } }] : [])
        ].filter(() => Math.random() > 0.3), // Randomly hide some features
        recommendations: [
          'तत्काल भूवैज्ञानिक सर्वेक्षण की आवश्यकता (Immediate geological survey required)',
          'सभी कर्मचारियों को क्षेत्र से तुरंत बाहर निकालें (Immediately evacuate all personnel from the area)',
          'ढीली चट्टानों को हटाने के लिए नियंत्रित विस्फोट की योजना बनाएं (Plan controlled blasting for loose rock removal)',
          'प्रभावित क्षेत्र में शार्टक्रीट का प्रयोग करें (Apply shotcrete/support in the affected area)',
          'कर्मचारियों के लिए वैकल्पिक मार्ग निर्धारित करें (Designate alternative safe routes for workers)'
        ].filter((_, i) => i < 5 - (Math.random() * 2)), // Fewer recommendations for lower risk
        safetyScore: Math.round(safetyScore),
        analysisTime: '2.3 seconds',
        imageQuality: 'High Definition',
      };
      
      setAnalysisResult(mockAnalysis);
      setIsAnalyzing(false);
    }, 2500);
  }, [uploadedImage]);

  const getRiskColorClass = (risk) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'bg-red-500 border-red-700';
      case 'medium': return 'bg-yellow-400 border-yellow-600';
      case 'low': return 'bg-green-500 border-green-700';
      default: return 'bg-gray-400 border-gray-600';
    }
  };

  const ProgressRing = ({ percentage, colorClass }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg className="w-24 h-24 transform -rotate-90">
        <circle
          className="text-gray-700" // Darker track color
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className={colorClass}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
      </svg>
    );
  };

  const getProgressColor = (score) => {
    if (score < 40) return 'text-red-500';
    if (score < 70) return 'text-yellow-500';
    return 'text-green-500';
  }
// UPDATED RiskSummaryCard COMPONENT: Rings removed, data displayed as text
const RiskSummaryCard = ({ result }) => (
    <div className="p-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl shadow-black/50 transition-all hover:shadow-2xl hover:shadow-black/70 space-y-4">
      <div className="flex items-center justify-between border-b border-gray-700 pb-3 mb-3">
        <h3 className="text-xl font-extrabold text-gray-100">Overall Risk Assessment</h3>
        <RiskChip risk={result.overallRisk}>
          {result.overallRisk.toUpperCase()} RISK
        </RiskChip>
      </div>

      {/* REPLACED Rings with simple, centered text metrics */}
      <div className="flex flex-col sm:flex-row items-center justify-around gap-6 text-center pt-2 pb-4">
        
        {/* Risk Probability Metric */}
        <div className="flex flex-col items-center">
          <span className={`text-5xl font-extrabold ${getColorByScore(result.riskProbability * 100)}`}>
            {(result.riskProbability * 100).toFixed(0)}%
          </span>
          <span className="text-sm text-gray-400 mt-1">Risk Chance</span>
        </div>

        {/* Vertical Divider (Visible only on medium/large screens) */}
        <div className="hidden sm:block w-px h-16 bg-gray-700"></div>
        
        {/* Safety Score Metric */}
        <div className="flex flex-col items-center">
          <span className={`text-5xl font-extrabold ${getColorByScore(result.safetyScore)}`}>
            {result.safetyScore}
          </span>
          <span className="text-sm text-gray-400 mt-1">Safety Score (100)</span>
        </div>
      </div>
      
      {/* Footer Details */}
      <div className="text-sm text-gray-400 pt-4 flex justify-between border-t border-gray-700">
        <span>Analysis Time: <span className="font-medium text-gray-300">{result.analysisTime}</span></span>
        <span>Quality: <span className="font-medium text-gray-300">{result.imageQuality}</span></span>
      </div>
    </div>
);

  return (
    <div className="min-h-screen bg-gray-900 p-6 sm:p-10 font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-white flex items-center space-x-3">
          <Camera className="h-7 w-7 text-blue-400" />
          <span>Mine Safety AI Analyzer</span>
        </h1>
        <p className="text-gray-400 mt-1">
          Automated geological risk detection for proactive mine safety management.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: Upload and Image Preview (The Sidebar) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl shadow-black/50">
            <h2 className="text-xl font-bold text-gray-100 mb-4">
              {uploadedImage ? 'View & Analyze Image' : 'Upload Mine Image'}
            </h2>
            
            {!uploadedImage ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-600 bg-gray-700 rounded-xl p-10 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-900 transition-all duration-300 group"
              >
                <Upload className="h-10 w-10 text-blue-300 mx-auto mb-3 group-hover:text-blue-500 transition-colors" />
                <p className="text-gray-300 font-medium mb-1">Drag & Drop or <span className="text-blue-400 group-hover:underline">Click to Upload</span></p>
                <p className="text-sm text-gray-400">JPG, PNG, WebP (Max 10MB)</p>
                <p className="text-xs text-gray-500 mt-3">
                  सुरक्षा विश्लेषण के लिए खान की तस्वीर अपलोड करें
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg shadow-black/50">
                  <img
                    src={uploadedImage.url}
                    alt="Uploaded mine face"
                    className="w-full h-72 object-cover"
                  />
                  {analysisResult && (
                    <div className="absolute inset-0 transition-opacity duration-500 hover:opacity-100 opacity-80">
                      {analysisResult.detectedFeatures.map((feature, index) => (
                        <div
                          key={index}
                          className={`absolute w-4 h-4 rounded-full border-2 transform -translate-x-1/2 -translate-y-1/2 ${
                            getRiskColorClass(feature.risk)
                          } animate-pulse`}
                          style={{
                            left: `${feature.location.x}%`,
                            top: `${feature.location.y}%`,
                          }}
                          title={`${feature.feature} (${(feature.confidence * 100).toFixed(0)}% Conf.)`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="text-sm text-gray-200">
                  <p className="font-semibold">{uploadedImage.name}</p>
                  <p className="text-xs text-gray-400">{(uploadedImage.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={analyzeImage}
                    disabled={isAnalyzing}
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:from-blue-600 hover:to-indigo-600 disabled:opacity-50 transition-all duration-300"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>AI Analysis in Progress...</span>
                      </>
                    ) : (
                      <>
                        <Eye className="h-5 w-5" />
                        <span>Run Full Risk Analysis</span>
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isAnalyzing}
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-600 text-gray-200 font-medium rounded-lg hover:bg-gray-700 disabled:opacity-50 transition-colors"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Change Image</span>
                  </button>
                </div>
              </div>
            )}
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg, image/png, image/webp"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Tips Section */}
          <div className="bg-blue-950 border border-blue-800 rounded-2xl p-5 shadow-inner shadow-black/30">
            <h4 className="font-bold text-blue-300 mb-2 flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-400" />
                <span>Best Practice Guidelines</span>
            </h4>
            <ul className="text-sm text-blue-400 space-y-1">
              <li>• Focus on **rock faces, slopes, and support structures.**</li>
              <li>• Ensure images are **well-lit** and in high resolution.</li>
              <li>• Use images taken from a **safe, stable position.**</li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: Analysis Results */}
        <div className="lg:col-span-2 space-y-6">
          {analysisResult ? (
            <>
              {/* Overall Risk Summary Card - Now Fixed! */}
              <RiskSummaryCard result={analysisResult} />

              {/* Detected Features & Recommendations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Detected Features */}
                <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl shadow-black/50">
                  <h4 className="text-lg font-bold text-gray-100 mb-4 border-b border-gray-700 pb-3">Detected Risk Features <span className="text-gray-500">({analysisResult.detectedFeatures.length})</span></h4>
                  <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                    {analysisResult.detectedFeatures.map((feature, index) => (
                      <div key={index} className="p-3 rounded-xl bg-gray-700 border border-gray-600 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between">
                          <span className="font-semibold text-gray-200 flex-1">{feature.feature}</span>
                          <RiskChip risk={feature.risk}>{feature.risk.toUpperCase()}</RiskChip>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          Confidence: <span className="font-medium text-gray-300">{(feature.confidence * 100).toFixed(0)}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl shadow-black/50">
                  <h4 className="text-lg font-bold text-gray-100 mb-4 border-b border-gray-700 pb-3">Immediate Action Recommendations</h4>
                  <ul className="space-y-4 max-h-80 overflow-y-auto pr-2">
                    {analysisResult.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-3 border-l-4 border-orange-500 pl-3">
                        <AlertTriangle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-200 font-medium leading-relaxed">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg shadow-green-500/50 hover:bg-green-600 transition-colors">
                  <Download className="h-5 w-5" />
                  <span>Download Full Report (PDF)</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg shadow-red-500/50 hover:bg-red-600 transition-colors">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Issue Emergency Alert</span>
                </button>
              </div>
            </>
          ) : isAnalyzing ? (
             <div className="lg:col-span-2 flex flex-col items-center justify-center bg-gray-800 border border-gray-700 rounded-2xl p-12 shadow-2xl shadow-black/50 h-full min-h-[500px]">
                <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
                <p className="text-xl font-semibold text-gray-100">Scanning Image for Geological Risks...</p>
                <p className="text-sm text-gray-400 mt-2">
                  This process simulates advanced AI analysis and may take a few moments.
                </p>
             </div>
          ) : (
            <div className="lg:col-span-2 flex flex-col items-center justify-center bg-gray-800 border border-gray-700 rounded-2xl p-12 shadow-2xl shadow-black/50 h-full min-h-[500px]">
              <Camera className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-100 mb-2">Analysis Panel Ready</p>
              <p className="text-md text-gray-400 text-center max-w-sm">
                Upload a mine face image on the left to activate the AI risk assessment and view safety recommendations here.
              </p>
              <p className="text-sm text-gray-500 mt-4 flex items-center space-x-1">
                <ArrowRight className="h-4 w-4" />
                <span>Proactive Safety Starts Here</span>
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer/Disclaimer */}
      <footer className="mt-10 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
        Disclaimer: This is an AI simulation. Real-world mine safety decisions must be confirmed by certified geological engineers.
      </footer>
    </div>
  );
};

export default ImageUploadAnalysis;



