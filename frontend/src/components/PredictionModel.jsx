// import React, { useState } from 'react';
// import { Brain, TrendingUp, Database, Settings, Play, BarChart3 } from 'lucide-react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
// import { predictionHistory, riskTrendData } from '../data/rockfallData';

// const PredictionModel = () => {
//   const [selectedModel, setSelectedModel] = useState('neural_network');
//   const [isTraining, setIsTraining] = useState(false);
//   const [predictionInput, setPredictionInput] = useState({
//     displacement: '',
//     strain: '',
//     porePressure: '',
//     rainfall: '',
//     temperature: '',
//     vibration: ''
//   });
//   const [predictionResult, setPredictionResult] = useState(null);

//   const modelTypes = [
//     { id: 'neural_network', name: 'Deep Neural Network', accuracy: 92.5, description: 'Multi-layer perceptron with temporal features' },
//     { id: 'random_forest', name: 'Random Forest', accuracy: 88.3, description: 'Ensemble method with geological features' },
//     { id: 'svm', name: 'Support Vector Machine', accuracy: 85.7, description: 'Non-linear SVM with RBF kernel' },
//     { id: 'lstm', name: 'LSTM Network', accuracy: 94.1, description: 'Long Short-Term Memory for time series' }
//   ];

//   const handlePrediction = () => {
//     setIsTraining(true);
    
//     // Simulate AI prediction calculation
//     setTimeout(() => {
//       const displacement = parseFloat(predictionInput.displacement) || 0;
//       const strain = parseFloat(predictionInput.strain) || 0;
//       const porePressure = parseFloat(predictionInput.porePressure) || 0;
//       const rainfall = parseFloat(predictionInput.rainfall) || 0;
//       const vibration = parseFloat(predictionInput.vibration) || 0;
      
//       // Mock prediction algorithm
//       let riskScore = 0;
//       riskScore += displacement * 0.3;
//       riskScore += strain * 100;
//       riskScore += porePressure * 0.002;
//       riskScore += rainfall * 0.05;
//       riskScore += vibration * 0.08;
      
//       // Normalize to 0-1 range
//       riskScore = Math.min(Math.max(riskScore / 10, 0), 1);
      
//       const confidence = 0.85 + Math.random() * 0.1;
//       const timeToFailure = riskScore > 0.7 ? Math.random() * 24 : Math.random() * 168;
      
//       setPredictionResult({
//         riskProbability: riskScore,
//         confidence: confidence,
//         timeToFailure: timeToFailure,
//         riskLevel: riskScore > 0.7 ? 'high' : riskScore > 0.3 ? 'medium' : 'low',
//         recommendations: generateRecommendations(riskScore)
//       });
      
//       setIsTraining(false);
//     }, 2000);
//   };

//   const generateRecommendations = (riskScore) => {
//     if (riskScore > 0.7) {
//       return [
//         'Immediate evacuation of personnel from affected area',
//         'Deploy emergency response team',
//         'Increase sensor monitoring frequency to real-time',
//         'Consider controlled blasting to reduce slope stress'
//       ];
//     } else if (riskScore > 0.3) {
//       return [
//         'Enhanced monitoring protocol activation',
//         'Restrict heavy equipment in the area',
//         'Schedule additional geotechnical assessment',
//         'Prepare evacuation contingency plans'
//       ];
//     } else {
//       return [
//         'Continue routine monitoring',
//         'Maintain current safety protocols',
//         'Schedule regular visual inspections',
//         'Monitor weather conditions closely'
//       ];
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setPredictionInput(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-xl font-bold text-gray-800">AI Prediction Model</h2>
//         <div className="flex items-center space-x-2">
//           <Brain className="h-5 w-5 text-blue-600" />
//           <span className="text-sm text-gray-600">Machine Learning Engine</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Model Selection */}
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold text-gray-700">Model Selection</h3>
//           <div className="space-y-3">
//             {modelTypes.map(model => (
//               <div
//                 key={model.id}
//                 onClick={() => setSelectedModel(model.id)}
//                 className={`p-4 border rounded-lg cursor-pointer transition-all ${
//                   selectedModel === model.id 
//                     ? 'border-blue-500 bg-blue-50' 
//                     : 'border-gray-200 hover:border-gray-300'
//                 }`}
//               >
//                 <div className="flex items-center justify-between mb-2">
//                   <h4 className="font-medium text-gray-800">{model.name}</h4>
//                   <span className="text-sm font-medium text-green-600">{model.accuracy}%</span>
//                 </div>
//                 <p className="text-xs text-gray-600">{model.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Input Parameters */}
//           <div className="bg-white border rounded-lg p-4">
//             <h4 className="font-medium text-gray-700 mb-3">Input Parameters</h4>
//             <div className="space-y-3">
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Displacement (mm)</label>
//                 <input
//                   type="number"
//                   value={predictionInput.displacement}
//                   onChange={(e) => handleInputChange('displacement', e.target.value)}
//                   className="w-full px-3 py-2 border rounded-md text-sm"
//                   placeholder="0.0"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Strain (με)</label>
//                 <input
//                   type="number"
//                   value={predictionInput.strain}
//                   onChange={(e) => handleInputChange('strain', e.target.value)}
//                   className="w-full px-3 py-2 border rounded-md text-sm"
//                   placeholder="0.0"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Pore Pressure (kPa)</label>
//                 <input
//                   type="number"
//                   value={predictionInput.porePressure}
//                   onChange={(e) => handleInputChange('porePressure', e.target.value)}
//                   className="w-full px-3 py-2 border rounded-md text-sm"
//                   placeholder="0.0"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Rainfall (mm)</label>
//                 <input
//                   type="number"
//                   value={predictionInput.rainfall}
//                   onChange={(e) => handleInputChange('rainfall', e.target.value)}
//                   className="w-full px-3 py-2 border rounded-md text-sm"
//                   placeholder="0.0"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Vibration (mm/s)</label>
//                 <input
//                   type="number"
//                   value={predictionInput.vibration}
//                   onChange={(e) => handleInputChange('vibration', e.target.value)}
//                   className="w-full px-3 py-2 border rounded-md text-sm"
//                   placeholder="0.0"
//                 />
//               </div>
//             </div>

//             <button
//               onClick={handlePrediction}
//               disabled={isTraining}
//               className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
//             >
//               {isTraining ? (
//                 <>
//                   <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
//                   <span>Processing...</span>
//                 </>
//               ) : (
//                 <>
//                   <Play className="h-4 w-4" />
//                   <span>Run Prediction</span>
//                 </>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Prediction Results */}
//         <div className="lg:col-span-2 space-y-4">
//           <h3 className="text-lg font-semibold text-gray-700">Prediction Results</h3>
          
//           {predictionResult ? (
//             <div className="space-y-4">
//               {/* Risk Assessment */}
//               <div className="bg-white border rounded-lg p-4">
//                 <h4 className="font-medium text-gray-700 mb-3">Risk Assessment</h4>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="text-center">
//                     <div className={`text-3xl font-bold mb-1 ${
//                       predictionResult.riskLevel === 'high' ? 'text-red-600' :
//                       predictionResult.riskLevel === 'medium' ? 'text-yellow-600' :
//                       'text-green-600'
//                     }`}>
//                       {(predictionResult.riskProbability * 100).toFixed(1)}%
//                     </div>
//                     <div className="text-sm text-gray-600">Risk Probability</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-blue-600 mb-1">
//                       {(predictionResult.confidence * 100).toFixed(1)}%
//                     </div>
//                     <div className="text-sm text-gray-600">Model Confidence</div>
//                   </div>
//                 </div>
                
//                 <div className="mt-4 p-3 bg-gray-50 rounded-lg">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-600">Estimated Time to Failure:</span>
//                     <span className="font-medium">
//                       {predictionResult.timeToFailure < 24 
//                         ? `${predictionResult.timeToFailure.toFixed(1)} hours`
//                         : `${(predictionResult.timeToFailure / 24).toFixed(1)} days`
//                       }
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Recommendations */}
//               <div className="bg-white border rounded-lg p-4">
//                 <h4 className="font-medium text-gray-700 mb-3">AI Recommendations</h4>
//                 <ul className="space-y-2">
//                   {predictionResult.recommendations.map((rec, index) => (
//                     <li key={index} className="flex items-start space-x-2">
//                       <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
//                       <span className="text-sm text-gray-700">{rec}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ) : (
//             <div className="bg-gray-50 border rounded-lg p-8 text-center">
//               <Brain className="h-12 w-12 text-gray-400 mx-auto mb-3" />
//               <p className="text-gray-600">Enter sensor data and run prediction to see AI analysis</p>
//             </div>
//           )}

//           {/* Model Performance */}
//           <div className="bg-white border rounded-lg p-4">
//             <h4 className="font-medium text-gray-700 mb-3">Model Performance History</h4>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={predictionHistory}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="date" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={2} name="Predicted Risk" />
//                   <Line type="monotone" dataKey="actual" stroke="#ef4444" strokeWidth={2} name="Actual Risk" />
//                   <Line type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={2} name="Accuracy" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Risk Trend Analysis */}
//       <div className="bg-white border rounded-lg p-4">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Risk Trend Analysis</h3>
//         <div className="h-80">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={riskTrendData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="northSlope" stroke="#ef4444" strokeWidth={2} name="North Slope A" />
//               <Line type="monotone" dataKey="southBench" stroke="#f59e0b" strokeWidth={2} name="South Bench B" />
//               <Line type="monotone" dataKey="eastWall" stroke="#10b981" strokeWidth={2} name="East Wall C" />
//               <Line type="monotone" dataKey="westTerrace" stroke="#8b5cf6" strokeWidth={2} name="West Terrace D" />
//               <Line type="monotone" dataKey="centralPit" stroke="#06b6d4" strokeWidth={2} name="Central Pit E" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PredictionModel;


// import React, { useState, useCallback } from 'react';
// import { Brain, TrendingUp, Database, Settings, Play, BarChart3, Clock, AlertTriangle, CloudRain, Zap, CheckCircle, Radio, X } from 'lucide-react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // Global variables provided by the environment (must be defined)
// const apiKey = "";
// const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

// // --- MOCK DATA ---
// const mockPredictionHistory = [
//     { date: 'Mon', predicted: 0.55, actual: 0.58, accuracy: 0.93 },
//     { date: 'Tue', predicted: 0.61, actual: 0.60, accuracy: 0.94 },
//     { date: 'Wed', predicted: 0.75, actual: 0.78, accuracy: 0.91 },
//     { date: 'Thu', predicted: 0.48, actual: 0.45, accuracy: 0.95 },
//     { date: 'Fri', predicted: 0.82, actual: 0.81, accuracy: 0.92 },
// ];

// const modelTypes = [
//     { id: 'neural_network', name: 'Deep Neural Net (DNN)', accuracy: 92.5, description: 'Multi-layer perceptron with temporal features' },
//     { id: 'lstm', name: 'LSTM Network (Time Series)', accuracy: 94.1, description: 'Long Short-Term Memory for time series data' },
//     { id: 'random_forest', name: 'Random Forest (Ensemble)', accuracy: 88.3, description: 'Ensemble method with aggregated geotechnical features' },
// ];

// const predefinedScenarios = [
//     { 
//         name: 'High Displacement Alarm', 
//         icon: <TrendingUp className="h-4 w-4 text-red-400" />,
//         data: { displacement: '5.5', strain: '250', porePressure: '150', rainfall: '0', vibration: '0.5' },
//     },
//     { 
//         name: 'Post-Rainfall Saturation', 
//         icon: <CloudRain className="h-4 w-4 text-blue-400" />,
//         data: { displacement: '1.2', strain: '120', porePressure: '280', rainfall: '150', vibration: '0.1' },
//     },
//     { 
//         name: 'Seismic Vibration Spike', 
//         icon: <Zap className="h-4 w-4 text-yellow-400" />,
//         data: { displacement: '0.8', strain: '80', porePressure: '50', rainfall: '10', vibration: '1.8' },
//     },
// ];
// // -----------------------------------------------------------------------------------

// // Component for the Risk Probability Gauge
// const RiskGauge = ({ probability, timeToFailure }) => {
//     const radius = 50;
//     const circumference = 2 * Math.PI * radius;
//     const offset = circumference - (probability * circumference);
//     const percentage = (probability * 100).toFixed(1);

//     let color = '#10b981'; // green
//     let riskText = 'Low Risk';
    
//     if (probability > 0.75) {
//         color = '#ef4444'; // red
//         riskText = 'CRITICAL RISK';
//     } else if (probability > 0.4) {
//         color = '#f59e0b'; // amber
//         riskText = 'Elevated Risk';
//     }

//     return (
//         <div className="relative flex items-center justify-center">
//             <svg className="w-32 h-32 transform -rotate-90">
//                 <circle
//                     className="text-gray-700"
//                     strokeWidth="8"
//                     fill="transparent"
//                     r={radius}
//                     cx="64"
//                     cy="64"
//                 />
//                 <circle
//                     stroke={color}
//                     strokeWidth="8"
//                     strokeDasharray={circumference}
//                     strokeDashoffset={offset}
//                     strokeLinecap="round"
//                     fill="transparent"
//                     r={radius}
//                     cx="64"
//                     cy="64"
//                     style={{ transition: 'stroke-dashoffset 0.5s' }}
//                 />
//             </svg>
//             <div className="absolute flex flex-col items-center">
//                 <span className={`text-3xl font-extrabold`} style={{ color }}>{percentage}%</span>
//                 <span className="text-xs text-gray-400 mt-1">{riskText}</span>
//             </div>
//         </div>
//     );
// };

// // Custom Alert Modal Component
// const AlertModal = ({ isVisible, onClose, prediction }) => {
//     if (!isVisible) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
//             <div className="bg-gray-800 border-4 border-red-500 rounded-xl p-6 w-11/12 max-w-md shadow-2xl">
//                 <div className="flex justify-between items-start">
//                     <h3 className="text-3xl font-bold text-red-400 flex items-center">
//                         <AlertTriangle className="h-8 w-8 mr-3 animate-pulse" />
//                         CRITICAL ALERT
//                     </h3>
//                     <button onClick={onClose} className="text-gray-400 hover:text-white transition">
//                         <X className="h-6 w-6" />
//                     </button>
//                 </div>
//                 <div className="mt-4 border-t border-gray-700 pt-4">
//                     <p className="text-lg text-gray-200 mb-2">Rockfall probability exceeds **75%**.</p>
//                     <p className="text-sm text-gray-400">
//                         The AI model predicts a **Risk Probability Score of {(prediction.riskProbability * 100).toFixed(1)}%** with an estimated time to failure of **{prediction.timeToFailure.toFixed(1)} hours**.
//                     </p>
//                     <ul className="mt-4 space-y-2 text-sm text-red-200 list-disc list-inside bg-red-900/30 p-3 rounded">
//                         {prediction.recommendations.map((rec, index) => (
//                             <li key={index} className='font-medium'>{rec}</li>
//                         ))}
//                     </ul>
//                 </div>
//                 <button
//                     onClick={onClose}
//                     className="w-full mt-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
//                 >
//                     Acknowledge and Initiate Protocols
//                 </button>
//             </div>
//         </div>
//     );
// };

// // New Component: Simulates Backend AI Report Generation
// const SafetyReportGenerator = ({ predictionResult, predictionInput, selectedModel, modelTypes }) => {
//     const [report, setReport] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const generateReport = async () => {
//         if (!predictionResult) return;
//         setIsLoading(true);
//         setReport('');

//         const modelName = modelTypes.find(m => m.id === selectedModel)?.name || 'AI Model';
        
//         // Prepare detailed prompt based on current prediction data
//         const userQuery = `
//         Act as a senior Geotechnical Engineer specializing in open-pit mine safety. Based on the following AI prediction results, generate a concise, professional, and urgent safety summary report (approximately 150 words). 
//         The report must include:
//         1. A clear statement of the current Risk Probability and Time to Failure (in hours).
//         2. Interpretation of the input sensor data (Displacement, Pore Pressure, and Vibration) as contributing factors.
//         3. A mandatory, prioritized safety action plan (3 to 4 points).
        
//         ---
//         AI Model Used: ${modelName}
//         Risk Probability Score: ${(predictionResult.riskProbability * 100).toFixed(1)}%
//         Estimated Time to Failure: ${predictionResult.timeToFailure.toFixed(1)} hours
//         Key Input Data:
//         - Displacement: ${predictionInput.displacement} mm/h
//         - Strain: ${predictionInput.strain} µ$\epsilon$
//         - Pore Pressure: ${predictionInput.porePressure} kPa
//         - Rainfall (24h): ${predictionInput.rainfall} mm/d
//         - Vibration: ${predictionInput.vibration} mm/s
//         ---
//         `;

//         const systemPrompt = "You are a highly analytical and experienced Geotechnical Engineer. Your response must be direct, use technical language appropriately, and focus strictly on safety protocol recommendations. Do not use markdown headers or lists.";

//         const payload = {
//             contents: [{ parts: [{ text: userQuery }] }],
//             systemInstruction: { parts: [{ text: systemPrompt }] },
//             tools: [{ "google_search": {} }],
//         };

//         try {
//             const response = await fetch(apiUrl, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(payload)
//             });
            
//             const result = await response.json();
//             const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
//             if (text) {
//                 setReport(text);
//             } else {
//                 setReport('Error: Could not generate report. Check API connection or prediction result structure.');
//             }
//         } catch (error) {
//             console.error("Gemini API Error:", error);
//             setReport('Network error during report generation. Please check connectivity.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="bg-gray-800 border border-indigo-600 rounded-xl p-4 shadow-2xl">
//             <h4 className="font-semibold text-lg text-indigo-400 mb-3 flex items-center">
//                 <Brain className="h-5 w-5 mr-2" /> AI Geotechnical Safety Summary
//             </h4>

//             {predictionResult ? (
//                 <>
//                     <button
//                         onClick={generateReport}
//                         disabled={isLoading}
//                         className="w-full py-2 mb-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 transition-colors flex items-center justify-center space-x-2"
//                     >
//                         {isLoading ? (
//                             <>
//                                 <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
//                                 <span>Generating Expert Report...</span>
//                             </>
//                         ) : (
//                             <span>Generate Detailed Safety Report</span>
//                         )}
//                     </button>

//                     <div className="min-h-32 text-sm text-gray-300 bg-gray-900 p-3 rounded-lg border border-gray-700 overflow-y-auto">
//                         {report || (
//                             <p className="text-gray-500 italic">Click the button above to generate a narrative safety report using the Gemini AI based on the current prediction data.</p>
//                         )}
//                     </div>
//                 </>
//             ) : (
//                 <p className="text-gray-500 text-center py-4">Run a prediction first to enable the AI safety report generator.</p>
//             )}
//         </div>
//     );
// };


// const PredictionModel = () => {
//     const [selectedModel, setSelectedModel] = useState('lstm');
//     const [isTraining, setIsTraining] = useState(false);
//     const [predictionInput, setPredictionInput] = useState({
//         displacement: '', strain: '', porePressure: '', rainfall: '', vibration: ''
//     });
//     const [predictionResult, setPredictionResult] = useState(null);
//     const [dataFeedStatus] = useState('Active');
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handlePrediction = useCallback(() => {
//         setIsTraining(true);
//         setPredictionResult(null);
//         setIsModalOpen(false);
        
//         // Simulate backend prediction logic
//         setTimeout(() => {
//             try {
//                 const displacement = parseFloat(predictionInput.displacement) || 0;
//                 const strain = parseFloat(predictionInput.strain) || 0;
//                 const porePressure = parseFloat(predictionInput.porePressure) || 0;
//                 const rainfall = parseFloat(predictionInput.rainfall) || 0;
//                 const vibration = parseFloat(predictionInput.vibration) || 0;
                
//                 // Mock Prediction Algorithm: High risk if displacement is high or combined factors are severe
//                 let riskScore = (displacement * 0.05) + (strain * 0.003) + (porePressure * 0.0015) + (rainfall * 0.0008) + (vibration * 0.08);
//                 riskScore = Math.min(Math.max(riskScore * 1.5, 0.1), 0.95);
                
//                 const confidence = 0.88 + Math.random() * 0.05;
//                 const timeToFailure = (1 - riskScore) * (200 + Math.random() * 100);
                
//                 const result = {
//                     riskProbability: riskScore,
//                     confidence: confidence,
//                     timeToFailure: timeToFailure,
//                     riskLevel: riskScore > 0.75 ? 'high' : riskScore > 0.4 ? 'medium' : 'low',
//                     recommendations: generateRecommendations(riskScore),
//                     modelUsed: modelTypes.find(m => m.id === selectedModel)?.name
//                 };

//                 setPredictionResult(result);
//                 if (result.riskLevel === 'high') {
//                     setIsModalOpen(true); // Trigger custom alert modal
//                 }

//             } catch (error) {
//                 console.error("Prediction Error:", error);
//                 setPredictionResult({ riskProbability: 0, confidence: 0, timeToFailure: 0, riskLevel: 'error', recommendations: ['Error in processing data.'], modelUsed: 'N/A' });
//             }
//             setIsTraining(false);
//         }, 1800);
//     }, [predictionInput, selectedModel]);

//     const generateRecommendations = (riskScore) => {
//         if (riskScore > 0.75) {
//             return [
//                 'IMMEDIATE evacuation of all personnel from danger zones.',
//                 'Contact Emergency Response Teams (ERT) and halt operations.',
//                 'Activate drone surveillance and secure the perimeter.',
//                 'Initiate 5-minute sensor polling for critical data.'
//             ];
//         } else if (riskScore > 0.4) {
//             return [
//                 'Implement Level 2 monitoring protocol (15-min sensor polls).',
//                 'Restrict non-essential movement within the influence zone.',
//                 'Schedule next geotechnical inspection within 4 hours.',
//                 'Analyze contributing factors (e.g., pore pressure increase).'
//             ];
//         } else {
//             return [
//                 'Continue routine safety monitoring (Level 1 protocol).',
//                 'Verify sensor calibration logs.',
//                 'Perform standard pre-shift visual inspection.',
//             ];
//         }
//     };

//     const handleScenarioSelect = (scenario) => {
//         setPredictionInput(scenario.data);
//         setPredictionResult(null);
//     };

//     const handleInputChange = (field, value) => {
//         setPredictionInput(prev => ({
//             ...prev,
//             [field]: value
//         }));
//     };

//     const getStatusIndicator = () => {
//         const color = dataFeedStatus === 'Active' ? 'text-green-400' : dataFeedStatus === 'Latency' ? 'text-yellow-400' : 'text-red-400';
//         const text = dataFeedStatus === 'Active' ? 'Active' : dataFeedStatus === 'Latency' ? 'High Latency' : 'Offline';
//         const Icon = dataFeedStatus === 'Active' ? CheckCircle : Radio;
//         return <span className={`flex items-center ${color}`}><Icon className="h-4 w-4 mr-1" /> {text}</span>;
//     };

//     const getRiskColor = (level) => {
//         if (level === 'high') return 'border-red-500 bg-red-900/20';
//         if (level === 'medium') return 'border-yellow-500 bg-yellow-900/20';
//         return 'border-green-500 bg-green-900/20';
//     };


//     return (
//         <div className="p-6 bg-gray-900 min-h-screen text-gray-100 space-y-8 font-inter">
            
//             {/* Custom Alert Modal */}
//             {predictionResult && <AlertModal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)} prediction={predictionResult} />}

//             {/* Header */}
//             <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-700 pb-4">
//                 <div>
//                     <h2 className="text-3xl font-extrabold text-blue-400">Mine Slope Stability Command Center</h2>
//                     <p className="text-sm text-gray-400">Real-time predictive analysis using $${selectedModel === 'lstm' ? 'LSTM' : selectedModel === 'neural_network' ? 'DNN' : 'RF'}$$ model integration.</p>
//                 </div>
//                 <div className="flex items-center space-x-4 mt-3 md:mt-0">
//                     <div className="text-sm text-gray-400">Feed: {getStatusIndicator()}</div>
//                     <Brain className="h-6 w-6 text-blue-500" />
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                
//                 {/* --- INPUT & MODEL CONFIG (COL 1) --- */}
//                 <div className="lg:col-span-1 space-y-6">
                    
//                     {/* Model Selector */}
//                     <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-xl">
//                         <h3 className="font-semibold text-lg text-gray-200 mb-3 flex items-center"><Settings className="h-5 w-5 mr-2 text-indigo-400" /> Model Selection</h3>
//                         <div className="space-y-2">
//                             {modelTypes.map(model => (
//                                 <div
//                                     key={model.id}
//                                     onClick={() => setSelectedModel(model.id)}
//                                     className={`p-3 rounded-lg cursor-pointer transition-all border ${
//                                         selectedModel === model.id 
//                                             ? 'border-indigo-500 bg-indigo-900/40 shadow-lg' 
//                                             : 'border-gray-700 hover:bg-gray-700'
//                                     }`}
//                                 >
//                                     <h4 className="font-medium text-gray-100">{model.name}</h4>
//                                     <span className={`text-xs font-bold ${model.accuracy > 90 ? 'text-green-400' : 'text-yellow-400'}`}>
//                                         Accuracy: {model.accuracy}%
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Sensor Data Input */}
//                     <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-xl">
//                         <h4 className="font-semibold text-lg text-gray-200 mb-3 flex items-center"><Database className="h-5 w-5 mr-2 text-sky-400" /> Sensor Data Input</h4>
                        
//                         <label className="block text-sm text-gray-400 mb-2">Quick Scenario Load</label>
//                         <div className="grid grid-cols-3 gap-2 mb-4">
//                             {predefinedScenarios.map(scenario => (
//                                 <button
//                                     key={scenario.name}
//                                     onClick={() => handleScenarioSelect(scenario)}
//                                     className={`w-full text-center p-2 rounded-lg text-xs transition-colors flex flex-col items-center justify-center ${
//                                         predictionInput.displacement === scenario.data.displacement ? 'bg-blue-600 border-blue-400' : 'bg-gray-700 hover:bg-gray-600'
//                                     }`}
//                                 >
//                                     {scenario.icon}
//                                     <span className="mt-1">{scenario.name.split(' ')[0]}</span>
//                                 </button>
//                             ))}
//                         </div>

//                         <div className="space-y-3 pt-3 border-t border-gray-700">
//                             {Object.keys(predictionInput).map(field => (
//                                 <div key={field}>
//                                     <label className="block text-sm font-medium text-gray-400 mb-1 capitalize">
//                                         {field.replace(/([A-Z])/g, ' $1')} ({field === 'displacement' ? 'mm/h' : field === 'strain' ? '$\mu \epsilon$' : field === 'porePressure' ? 'kPa' : field === 'rainfall' ? 'mm/d' : 'mm/s'})
//                                     </label>
//                                     <input
//                                         type="number"
//                                         value={predictionInput[field]}
//                                         onChange={(e) => handleInputChange(field, e.target.value)}
//                                         className="w-full px-3 py-2 border rounded-md text-sm bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
//                                         placeholder="0.0"
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         <button
//                             onClick={handlePrediction}
//                             disabled={isTraining}
//                             className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-lg"
//                         >
//                             {isTraining ? (
//                                 <>
//                                     <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
//                                     <span>Predicting...</span>
//                                 </>
//                             ) : (
//                                 <>
//                                     <Play className="h-5 w-5" />
//                                     <span>Run Prediction</span>
//                                 </>
//                             )}
//                         </button>
//                     </div>
//                 </div>

//                 {/* --- RESULTS & REPORT (COL 2, 3, 4) --- */}
//                 <div className="lg:col-span-3 space-y-6">
//                     <h3 className="font-semibold text-xl text-gray-200">Prediction Results & AI Interpretation</h3>

//                     {predictionResult ? (
//                         <>
//                             <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 p-4 rounded-xl border-2 ${getRiskColor(predictionResult.riskLevel)}`}>
                                
//                                 {/* 1. Risk Gauge */}
//                                 <div className="flex flex-col items-center justify-center">
//                                     <h4 className="font-medium text-gray-300 mb-3">Overall Risk Score</h4>
//                                     <RiskGauge 
//                                         probability={predictionResult.riskProbability} 
//                                         timeToFailure={predictionResult.timeToFailure} 
//                                     />
//                                 </div>

//                                 {/* 2. Core Metrics */}
//                                 <div className="space-y-4 pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-gray-700 sm:pl-4">
//                                     <div className='pb-2 border-b border-gray-700'>
//                                         <div className="text-3xl font-extrabold text-red-400">
//                                             {predictionResult.timeToFailure.toFixed(1)} hrs
//                                         </div>
//                                         <div className="text-sm text-gray-400">Time to Failure (Estimated)</div>
//                                     </div>
//                                     <div>
//                                         <div className="text-2xl font-bold text-indigo-400">
//                                             {(predictionResult.confidence * 100).toFixed(1)}%
//                                         </div>
//                                         <div className="text-sm text-gray-400">Model Confidence</div>
//                                     </div>
//                                     <div className='text-sm font-medium text-gray-200'>
//                                         <p className='text-xs text-gray-400'>Model Used:</p>
//                                         <p>{predictionResult.modelUsed}</p>
//                                     </div>
//                                 </div>

//                                 {/* 3. Protocols */}
//                                 <div className="pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-gray-700 sm:pl-4">
//                                     <h4 className="font-semibold text-gray-200 mb-2 flex items-center">
//                                         <TrendingUp className="h-5 w-5 mr-2 text-green-400" /> Immediate Protocols
//                                     </h4>
//                                     <ul className="space-y-1">
//                                         {predictionResult.recommendations.map((rec, index) => (
//                                             <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
//                                                 <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
//                                                 <span>{rec}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                     {predictionResult.riskLevel === 'high' && (
//                                         <button
//                                             onClick={() => setIsModalOpen(true)}
//                                             className="w-full mt-3 flex items-center justify-center space-x-2 px-2 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 transition-colors"
//                                         >
//                                             <AlertTriangle className="h-5 w-5" />
//                                             TRIGGER ALERT
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
                            
//                             {/* AI Safety Report Generator - Backend Simulation */}
//                             <SafetyReportGenerator 
//                                 predictionResult={predictionResult} 
//                                 predictionInput={predictionInput} 
//                                 selectedModel={selectedModel} 
//                                 modelTypes={modelTypes} 
//                             />
//                         </>
//                     ) : (
//                         <div className="bg-gray-800 border border-gray-700 rounded-xl p-12 text-center shadow-xl">
//                             <Brain className="h-16 w-16 text-gray-600 mx-auto mb-3" />
//                             <p className="text-gray-400">Run a prediction to view the real-time AI Risk Analysis and generate a Geotechnical Safety Report.</p>
//                         </div>
//                     )}

//                     {/* Model Performance History Chart */}
//                     <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-xl">
//                         <h4 className="font-semibold text-gray-200 mb-3 flex items-center"><BarChart3 className="h-5 w-5 mr-2 text-orange-400" /> Model Performance History (Last 5 Runs)</h4>
//                         <div className="h-64">
//                             <ResponsiveContainer width="100%" height="100%">
//                                 <LineChart data={mockPredictionHistory} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                                     <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
//                                     <XAxis dataKey="date" stroke="#cbd5e0" />
//                                     <YAxis stroke="#cbd5e0" />
//                                     <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563', color: '#fff' }} />
//                                     <Legend iconType="circle" wrapperStyle={{ color: '#cbd5e0' }} />
//                                     <Line type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={2} name="Predicted Risk" />
//                                     <Line type="monotone" dataKey="actual" stroke="#ef4444" strokeWidth={2} name="Actual Risk" />
//                                     <Line type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={2} name="Accuracy" />
//                                 </LineChart>
//                             </ResponsiveContainer>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PredictionModel;


import React, { useState, useCallback } from 'react';
import { Brain, TrendingUp, Database, Settings, Play, BarChart3, Clock, AlertTriangle, CloudRain, Zap, CheckCircle, Radio, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Global variables provided by the environment (must be defined)
const apiKey = "";
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

// --- MOCK DATA ---
const mockPredictionHistory = [
    { date: 'Mon', predicted: 0.55, actual: 0.58, accuracy: 0.93 },
    { date: 'Tue', predicted: 0.61, actual: 0.60, accuracy: 0.94 },
    { date: 'Wed', predicted: 0.75, actual: 0.78, accuracy: 0.91 },
    { date: 'Thu', predicted: 0.48, actual: 0.45, accuracy: 0.95 },
    { date: 'Fri', predicted: 0.82, actual: 0.81, accuracy: 0.92 },
];

const modelTypes = [
    { id: 'neural_network', name: 'Deep Neural Net (DNN)', accuracy: 92.5, description: 'Multi-layer perceptron with temporal features' },
    { id: 'lstm', name: 'LSTM Network (Time Series)', accuracy: 94.1, description: 'Long Short-Term Memory for time series data' },
    { id: 'random_forest', name: 'Random Forest (Ensemble)', accuracy: 88.3, description: 'Ensemble method with aggregated geotechnical features' },
];

const predefinedScenarios = [
    { 
        name: 'High Displacement Alarm', 
        icon: <TrendingUp className="h-4 w-4 text-red-400" />,
        data: { displacement: '5.5', strain: '250', porePressure: '150', rainfall: '0', vibration: '0.5' },
    },
    { 
        name: 'Post-Rainfall Saturation', 
        icon: <CloudRain className="h-4 w-4 text-blue-400" />,
        data: { displacement: '1.2', strain: '120', porePressure: '280', rainfall: '150', vibration: '0.1' },
    },
    { 
        name: 'Seismic Vibration Spike', 
        icon: <Zap className="h-4 w-4 text-yellow-400" />,
        data: { displacement: '0.8', strain: '80', porePressure: '50', rainfall: '10', vibration: '1.8' },
    },
];
// -----------------------------------------------------------------------------------

// Component for the Risk Probability Gauge
const RiskGauge = ({ probability, timeToFailure }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (probability * circumference);
    const percentage = (probability * 100).toFixed(1);

    let color = '#10b981'; // green
    let riskText = 'Low Risk';
    
    if (probability > 0.75) {
        color = '#ef4444'; // red
        riskText = 'CRITICAL RISK';
    } else if (probability > 0.4) {
        color = '#f59e0b'; // amber
        riskText = 'Elevated Risk';
    }

    return (
        <div className="relative flex items-center justify-center">
            <svg className="w-32 h-32 transform -rotate-90">
                <circle
                    className="text-gray-700"
                    strokeWidth="8"
                    fill="transparent"
                    r={radius}
                    cx="64"
                    cy="64"
                />
                <circle
                    stroke={color}
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    fill="transparent"
                    r={radius}
                    cx="64"
                    cy="64"
                    style={{ transition: 'stroke-dashoffset 0.5s' }}
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className={`text-3xl font-extrabold`} style={{ color }}>{percentage}%</span>
                <span className="text-xs text-gray-400 mt-1">{riskText}</span>
            </div>
        </div>
    );
};

// Custom Alert Modal Component
const AlertModal = ({ isVisible, onClose, prediction }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
            <div className="bg-gray-800 border-4 border-red-500 rounded-xl p-6 w-11/12 max-w-md shadow-2xl">
                <div className="flex justify-between items-start">
                    <h3 className="text-3xl font-bold text-red-400 flex items-center">
                        <AlertTriangle className="h-8 w-8 mr-3 animate-pulse" />
                        CRITICAL ALERT
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <div className="mt-4 border-t border-gray-700 pt-4">
                    <p className="text-lg text-gray-200 mb-2">Rockfall probability exceeds **75%**.</p>
                    <p className="text-sm text-gray-400">
                        The AI model predicts a **Risk Probability Score of {(prediction.riskProbability * 100).toFixed(1)}%** with an estimated time to failure of **{prediction.timeToFailure.toFixed(1)} hours**.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-red-200 list-disc list-inside bg-red-900/30 p-3 rounded">
                        {prediction.recommendations.map((rec, index) => (
                            <li key={index} className='font-medium'>{rec}</li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={onClose}
                    className="w-full mt-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                    Acknowledge and Initiate Protocols
                </button>
            </div>
        </div>
    );
};

// New Component: Simulates Backend AI Report Generation
const SafetyReportGenerator = ({ predictionResult, predictionInput, selectedModel, modelTypes }) => {
    const [report, setReport] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const generateReport = async () => {
        if (!predictionResult) return;
        setIsLoading(true);
        setReport('');

        const modelName = modelTypes.find(m => m.id === selectedModel)?.name || 'AI Model';
        
        // Prepare detailed prompt based on current prediction data
        const userQuery = `
        Act as a senior Geotechnical Engineer specializing in open-pit mine safety. Based on the following AI prediction results, generate a concise, professional, and urgent safety summary report (approximately 150 words). 
        The report must include:
        1. A clear statement of the current Risk Probability and Time to Failure (in hours).
        2. Interpretation of the input sensor data (Displacement, Pore Pressure, and Vibration) as contributing factors.
        3. A mandatory, prioritized safety action plan (3 to 4 points).
        
        ---
        AI Model Used: ${modelName}
        Risk Probability Score: ${(predictionResult.riskProbability * 100).toFixed(1)}%
        Estimated Time to Failure: ${predictionResult.timeToFailure.toFixed(1)} hours
        Key Input Data:
        - Displacement: ${predictionInput.displacement} mm/h
        - Strain: ${predictionInput.strain} µ$\epsilon$
        - Pore Pressure: ${predictionInput.porePressure} kPa
        - Rainfall (24h): ${predictionInput.rainfall} mm/d
        - Vibration: ${predictionInput.vibration} mm/s
        ---
        `;

        const systemPrompt = "You are a highly analytical and experienced Geotechnical Engineer. Your response must be direct, use technical language appropriately, and focus strictly on safety protocol recommendations. Do not use markdown headers or lists.";

        const payload = {
            contents: [{ parts: [{ text: userQuery }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
            tools: [{ "google_search": {} }],
        };

        const maxRetries = 3;
        let lastError = null;

        for (let i = 0; i < maxRetries; i++) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                
                if (!response.ok) {
                    const errorBody = await response.text();
                    throw new Error(`API returned status ${response.status}: ${errorBody}`);
                }

                const result = await response.json();
                const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
                
                if (text) {
                    setReport(text);
                    setIsLoading(false);
                    return; // Success, exit function
                } else {
                    throw new Error('API response missing text content.');
                }
            } catch (error) {
                lastError = error;
                // Implement exponential backoff delay
                if (i < maxRetries - 1) {
                    const delay = Math.pow(2, i) * 1000;
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }
        
        // If all retries fail
        console.error("Gemini API Error after multiple retries:", lastError);
        setReport(`Failed to generate report after ${maxRetries} attempts. Last error: ${lastError?.message || 'Unknown network error.'}`);
        setIsLoading(false);
    };

    return (
        <div className="bg-gray-800 border border-indigo-600 rounded-xl p-4 shadow-2xl">
            <h4 className="font-semibold text-lg text-indigo-400 mb-3 flex items-center">
                <Brain className="h-5 w-5 mr-2" /> AI Geotechnical Safety Summary
            </h4>

            {predictionResult ? (
                <>
                    <button
                        onClick={generateReport}
                        disabled={isLoading}
                        className="w-full py-2 mb-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 transition-colors flex items-center justify-center space-x-2"
                    >
                        {isLoading ? (
                            <>
                                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                                <span>Generating Expert Report...</span>
                            </>
                        ) : (
                            <span>Generate Detailed Safety Report</span>
                        )}
                    </button>

                    <div className="min-h-32 text-sm text-gray-300 bg-gray-900 p-3 rounded-lg border border-gray-700 overflow-y-auto">
                        {report || (
                            <p className="text-gray-500 italic">Click the button above to generate a narrative safety report using the Gemini AI based on the current prediction data.</p>
                        )}
                    </div>
                </>
            ) : (
                <p className="text-gray-500 text-center py-4">Run a prediction first to enable the AI safety report generator.</p>
            )}
        </div>
    );
};


const PredictionModel = () => {
    const [selectedModel, setSelectedModel] = useState('lstm');
    const [isTraining, setIsTraining] = useState(false);
    const [predictionInput, setPredictionInput] = useState({
        displacement: '', strain: '', porePressure: '', rainfall: '', vibration: ''
    });
    const [predictionResult, setPredictionResult] = useState(null);
    const [dataFeedStatus] = useState('Active');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePrediction = useCallback(() => {
        setIsTraining(true);
        setPredictionResult(null);
        setIsModalOpen(false);
        
        // Simulate backend prediction logic
        setTimeout(() => {
            try {
                const displacement = parseFloat(predictionInput.displacement) || 0;
                const strain = parseFloat(predictionInput.strain) || 0;
                const porePressure = parseFloat(predictionInput.porePressure) || 0;
                const rainfall = parseFloat(predictionInput.rainfall) || 0;
                const vibration = parseFloat(predictionInput.vibration) || 0;
                
                // Mock Prediction Algorithm: High risk if displacement is high or combined factors are severe
                let riskScore = (displacement * 0.05) + (strain * 0.003) + (porePressure * 0.0015) + (rainfall * 0.0008) + (vibration * 0.08);
                riskScore = Math.min(Math.max(riskScore * 1.5, 0.1), 0.95);
                
                const confidence = 0.88 + Math.random() * 0.05;
                const timeToFailure = (1 - riskScore) * (200 + Math.random() * 100);
                
                const result = {
                    riskProbability: riskScore,
                    confidence: confidence,
                    timeToFailure: timeToFailure,
                    riskLevel: riskScore > 0.75 ? 'high' : riskScore > 0.4 ? 'medium' : 'low',
                    recommendations: generateRecommendations(riskScore),
                    modelUsed: modelTypes.find(m => m.id === selectedModel)?.name
                };

                setPredictionResult(result);
                if (result.riskLevel === 'high') {
                    setIsModalOpen(true); // Trigger custom alert modal
                }

            } catch (error) {
                console.error("Prediction Error:", error);
                setPredictionResult({ riskProbability: 0, confidence: 0, timeToFailure: 0, riskLevel: 'error', recommendations: ['Error in processing data.'], modelUsed: 'N/A' });
            }
            setIsTraining(false);
        }, 1800);
    }, [predictionInput, selectedModel]);

    const generateRecommendations = (riskScore) => {
        if (riskScore > 0.75) {
            return [
                'IMMEDIATE evacuation of all personnel from danger zones.',
                'Contact Emergency Response Teams (ERT) and halt operations.',
                'Activate drone surveillance and secure the perimeter.',
                'Initiate 5-minute sensor polling for critical data.'
            ];
        } else if (riskScore > 0.4) {
            return [
                'Implement Level 2 monitoring protocol (15-min sensor polls).',
                'Restrict non-essential movement within the influence zone.',
                'Schedule next geotechnical inspection within 4 hours.',
                'Analyze contributing factors (e.g., pore pressure increase).'
            ];
        } else {
            return [
                'Continue routine safety monitoring (Level 1 protocol).',
                'Verify sensor calibration logs.',
                'Perform standard pre-shift visual inspection.',
            ];
        }
    };

    const handleScenarioSelect = (scenario) => {
        setPredictionInput(scenario.data);
        setPredictionResult(null);
    };

    const handleInputChange = (field, value) => {
        setPredictionInput(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const getStatusIndicator = () => {
        const color = dataFeedStatus === 'Active' ? 'text-green-400' : dataFeedStatus === 'Latency' ? 'text-yellow-400' : 'text-red-400';
        const text = dataFeedStatus === 'Active' ? 'Active' : dataFeedStatus === 'Latency' ? 'High Latency' : 'Offline';
        const Icon = dataFeedStatus === 'Active' ? CheckCircle : Radio;
        return <span className={`flex items-center ${color}`}><Icon className="h-4 w-4 mr-1" /> {text}</span>;
    };

    const getRiskColor = (level) => {
        if (level === 'high') return 'border-red-500 bg-red-900/20';
        if (level === 'medium') return 'border-yellow-500 bg-yellow-900/20';
        return 'border-green-500 bg-green-900/20';
    };


    return (
        <div className="p-6 bg-gray-900 min-h-screen text-gray-100 space-y-8 font-inter">
            
            {/* Custom Alert Modal */}
            {predictionResult && <AlertModal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)} prediction={predictionResult} />}

            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-700 pb-4">
                <div>
                    <h2 className="text-3xl font-extrabold text-blue-400">Mine Slope Stability Command Center</h2>
                    <p className="text-sm text-gray-400">Real-time predictive analysis using $${selectedModel === 'lstm' ? 'LSTM' : selectedModel === 'neural_network' ? 'DNN' : 'RF'}$$ model integration.</p>
                </div>
                <div className="flex items-center space-x-4 mt-3 md:mt-0">
                    <div className="text-sm text-gray-400">Feed: {getStatusIndicator()}</div>
                    <Brain className="h-6 w-6 text-blue-500" />
                </div>
            </div>

            {/* Change: Adjusted grid to 3 columns (1/3 : 2/3 split) for better balance on medium-large screens */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* --- INPUT & MODEL CONFIG (COL 1) --- */}
                <div className="lg:col-span-1 space-y-6">
                    
                    {/* Model Selector */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-xl">
                        <h3 className="font-semibold text-lg text-gray-200 mb-3 flex items-center"><Settings className="h-5 w-5 mr-2 text-indigo-400" /> Model Selection</h3>
                        <div className="space-y-2">
                            {modelTypes.map(model => (
                                <div
                                    key={model.id}
                                    onClick={() => setSelectedModel(model.id)}
                                    className={`p-3 rounded-lg cursor-pointer transition-all border ${
                                        selectedModel === model.id 
                                            ? 'border-indigo-500 bg-indigo-900/40 shadow-lg' 
                                            : 'border-gray-700 hover:bg-gray-700'
                                    }`}
                                >
                                    <h4 className="font-medium text-gray-100">{model.name}</h4>
                                    <span className={`text-xs font-bold ${model.accuracy > 90 ? 'text-green-400' : 'text-yellow-400'}`}>
                                        Accuracy: {model.accuracy}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sensor Data Input */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-xl">
                        <h4 className="font-semibold text-lg text-gray-200 mb-3 flex items-center"><Database className="h-5 w-5 mr-2 text-sky-400" /> Sensor Data Input</h4>
                        
                        <label className="block text-sm text-gray-400 mb-2">Quick Scenario Load</label>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            {predefinedScenarios.map(scenario => (
                                <button
                                    key={scenario.name}
                                    onClick={() => handleScenarioSelect(scenario)}
                                    className={`w-full text-center p-2 rounded-lg text-xs transition-colors flex flex-col items-center justify-center ${
                                        predictionInput.displacement === scenario.data.displacement ? 'bg-blue-600 border-blue-400' : 'bg-gray-700 hover:bg-gray-600'
                                    }`}
                                >
                                    {scenario.icon}
                                    <span className="mt-1">{scenario.name.split(' ')[0]}</span>
                                </button>
                            ))}
                        </div>

                        <div className="space-y-3 pt-3 border-t border-gray-700">
                            {Object.keys(predictionInput).map(field => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-400 mb-1 capitalize">
                                        {field.replace(/([A-Z])/g, ' $1')} ({field === 'displacement' ? 'mm/h' : field === 'strain' ? '$\mu \epsilon$' : field === 'porePressure' ? 'kPa' : field === 'rainfall' ? 'mm/d' : 'mm/s'})
                                    </label>
                                    <input
                                        type="number"
                                        value={predictionInput[field]}
                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                        className="w-full px-3 py-2 border rounded-md text-sm bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="0.0"
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handlePrediction}
                            disabled={isTraining}
                            className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-lg"
                        >
                            {isTraining ? (
                                <>
                                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                                    <span>Predicting...</span>
                                </>
                            ) : (
                                <>
                                    <Play className="h-5 w-5" />
                                    <span>Run Prediction</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* --- RESULTS & REPORT (COL 2, 3) --- */}
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="font-semibold text-xl text-gray-200">Prediction Results & AI Interpretation</h3>

                    {predictionResult ? (
                        <>
                            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 p-4 rounded-xl border-2 ${getRiskColor(predictionResult.riskLevel)}`}>
                                
                                {/* 1. Risk Gauge */}
                                <div className="flex flex-col items-center justify-center">
                                    <h4 className="font-medium text-gray-300 mb-3">Overall Risk Score</h4>
                                    <RiskGauge 
                                        probability={predictionResult.riskProbability} 
                                        timeToFailure={predictionResult.timeToFailure} 
                                    />
                                </div>

                                {/* 2. Core Metrics */}
                                <div className="space-y-4 pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-gray-700 sm:pl-4">
                                    <div className='pb-2 border-b border-gray-700'>
                                        <div className="text-3xl font-extrabold text-red-400">
                                            {predictionResult.timeToFailure.toFixed(1)} hrs
                                        </div>
                                        <div className="text-sm text-gray-400">Time to Failure (Estimated)</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-indigo-400">
                                            {(predictionResult.confidence * 100).toFixed(1)}%
                                        </div>
                                        <div className="text-sm text-gray-400">Model Confidence</div>
                                    </div>
                                    <div className='text-sm font-medium text-gray-200'>
                                        <p className='text-xs text-gray-400'>Model Used:</p>
                                        <p>{predictionResult.modelUsed}</p>
                                    </div>
                                </div>

                                {/* 3. Protocols */}
                                <div className="pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-gray-700 sm:pl-4">
                                    <h4 className="font-semibold text-gray-200 mb-2 flex items-center">
                                        <TrendingUp className="h-5 w-5 mr-2 text-green-400" /> Immediate Protocols
                                    </h4>
                                    <ul className="space-y-1">
                                        {predictionResult.recommendations.map((rec, index) => (
                                            <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                                <span>{rec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {predictionResult.riskLevel === 'high' && (
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="w-full mt-3 flex items-center justify-center space-x-2 px-2 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 transition-colors"
                                        >
                                            <AlertTriangle className="h-5 w-5" />
                                            TRIGGER ALERT
                                        </button>
                                    )}
                                </div>
                            </div>
                            
                            {/* AI Safety Report Generator - Backend Simulation */}
                            <SafetyReportGenerator 
                                predictionResult={predictionResult} 
                                predictionInput={predictionInput} 
                                selectedModel={selectedModel} 
                                modelTypes={modelTypes} 
                            />
                        </>
                    ) : (
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-12 text-center shadow-xl">
                            <Brain className="h-16 w-16 text-gray-600 mx-auto mb-3" />
                            <p className="text-gray-400">Run a prediction to view the real-time AI Risk Analysis and generate a Geotechnical Safety Report.</p>
                        </div>
                    )}

                    {/* Model Performance History Chart */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-xl">
                        <h4 className="font-semibold text-gray-200 mb-3 flex items-center"><BarChart3 className="h-5 w-5 mr-2 text-orange-400" /> Model Performance History (Last 5 Runs)</h4>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={mockPredictionHistory} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                                    <XAxis dataKey="date" stroke="#cbd5e0" />
                                    <YAxis stroke="#cbd5e0" />
                                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563', color: '#fff' }} />
                                    <Legend iconType="circle" wrapperStyle={{ color: '#cbd5e0' }} />
                                    <Line type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={2} name="Predicted Risk" />
                                    <Line type="monotone" dataKey="actual" stroke="#ef4444" strokeWidth={2} name="Actual Risk" />
                                    <Line type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={2} name="Accuracy" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PredictionModel;


