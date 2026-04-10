// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { Shield, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: 'admin@mineguard.com',
//     password: 'admin123'
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const { login, loading, isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   // Redirect if already authenticated
//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/');
//     }
//   }, [isAuthenticated, navigate]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!formData.email || !formData.password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     try {
//       const result = await login(formData.email, formData.password);
//       if (!result.success) {
//         setError(result.message);
//       } else {
//         // Login successful - the AuthContext will handle the redirect
//         console.log('Login successful:', result);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError('An error occurred during login. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 relative">
//       <div className="absolute inset-0 opacity-40">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundRepeat: 'repeat'
//         }}></div>
//       </div>
      
//       <div className="relative w-full max-w-md">
//         {/* Logo and Header */}
//         <div className="text-center mb-8">
//           <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
//             <Shield className="h-10 w-10 text-white" />
//           </div>
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
//             RockGuard AI
//           </h1>
//           <p className="text-gray-600">Safety Intelligence Platform</p>
//         </div>

//         {/* Login Form */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
//           <div className="mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
//             <p className="text-gray-600">Sign in to your account to continue</p>
//           </div>

//           {error && (
//             <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
//               <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
//               <p className="text-red-700 text-sm">{error}</p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
//                 placeholder="admin@mineguard.com"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
//                   placeholder="Enter your password"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                 >
//                   {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
//               </label>
//               <a href="#" className="text-sm text-blue-600 hover:text-blue-500 transition-colors">
//                 Forgot password?
//               </a>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="h-5 w-5 animate-spin" />
//                   <span>Signing in...</span>
//                 </>
//               ) : (
//                 <span>Sign In</span>
//               )}
//             </button>
//           </form>

//           {/* Demo Credentials */}
//           <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
//             <h3 className="text-sm font-medium text-blue-900 mb-2">Demo Credentials</h3>
//             <div className="text-xs text-blue-700 space-y-1">
//               <p><strong>Email:</strong> admin@mineguard.com</p>
//               <p><strong>Password:</strong> admin123</p>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-8 text-sm text-gray-500">
//           <p>&copy; 2024 MineGuard Pro. All rights reserved.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState, useEffect } from 'react';
// import { 
//   Shield, Eye, EyeOff, Loader2, AlertCircle, Sparkles, Lock, Mail, 
//   ChevronRight, Mountain, Zap 
// } from 'lucide-react';

// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';


// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: 'admin@mineguard.com',
//     password: 'admin123'
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Track mouse movement for interactive background
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError('');
//   };

//   const handleSubmit = (e) => {
//     if (e) e.preventDefault();
//     setError('');

//     if (!formData.email || !formData.password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     // Simulate login
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       console.log('Login attempted with:', formData);
//       // In production, you would handle actual authentication here
//     }, 2000);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Dynamic gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
//         <div 
//           className="absolute inset-0 opacity-30"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
//           }}
//         />
//       </div>
      
//       {/* Animated particles */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
//         <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
//         <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
//       </div>
      
//       {/* Grid overlay */}
//       <div 
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
//           backgroundSize: '50px 50px'
//         }}
//       />
      
//       <div className="relative w-full max-w-md z-10">
//         {/* Logo and Heading */}
//         <div className="text-center mb-8">
//           <div className="relative inline-block mb-6">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-75 animate-pulse"></div>
//               <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform hover:rotate-6 transition-all duration-300 cursor-pointer">
//                 <Shield className="h-12 w-12 text-white drop-shadow-lg" />
//               </div>
//             </div>
//             <div className="absolute -top-2 -right-2">
//               <Sparkles className="h-6 w-6 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
//             </div>
//             <div className="absolute -bottom-1 -left-1">
//               <Zap className="h-5 w-5 text-blue-400 animate-pulse" />
//             </div>
//           </div>
          
//           <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 tracking-tight">
//             RockGuard AI
//           </h1>
//           <div className="flex items-center justify-center space-x-2 text-gray-400">
//             <Mountain className="h-4 w-4" />
//             <p className="text-sm uppercase tracking-wider">Next-Gen Safety Intelligence</p>
//           </div>
//         </div>

//         {/* Login Card */}
//         <div className="relative">
//           {/* Glow border */}
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur opacity-30 animate-pulse"></div>
          
//           <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800/50 p-8 overflow-hidden">
//             {/* Inner gradient */}
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
            
//             <div className="relative z-10">
//               <div className="mb-6">
//                 <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
//                   Welcome Back
//                   <span className="ml-2 text-xs px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">
//                     v2.0
//                   </span>
//                 </h2>
//                 <p className="text-gray-400 text-sm">Access your safety command center</p>
//               </div>

//               {/* Error message */}
//               {error && (
//                 <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center space-x-3 backdrop-blur-sm animate-shake">
//                   <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
//                   <p className="text-red-400 text-sm">{error}</p>
//                 </div>
//               )}

//               {/* Input fields */}
//               <div className="space-y-5">
//                 {/* Email */}
//                 <div>
//                   <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
//                     Email Address
//                   </label>
//                   <div className="relative group">
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                       <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
//                     </div>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onKeyPress={handleKeyPress}
//                       className="w-full pl-12 pr-4 py-4 bg-black/40 border border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 text-white placeholder-gray-600 hover:bg-black/60 hover:border-gray-600"
//                       placeholder="admin@mineguard.com"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label htmlFor="password" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
//                     Password
//                   </label>
//                   <div className="relative group">
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                       <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
//                     </div>
//                     <input
//                       type={showPassword ? 'text' : 'password'}
//                       id="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       onKeyPress={handleKeyPress}
//                       className="w-full pl-12 pr-12 py-4 bg-black/40 border border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 text-white placeholder-gray-600 hover:bg-black/60 hover:border-gray-600"
//                       placeholder="Enter your password"
//                       required
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-400 transition-colors focus:outline-none"
//                     >
//                       {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Remember + Forgot */}
//                 <div className="flex items-center justify-between pt-2">
//                   <label className="flex items-center cursor-pointer group">
//                     <input
//                       type="checkbox"
//                       className="w-4 h-4 text-purple-600 bg-black/40 border-gray-600 rounded focus:ring-purple-500 focus:ring-2 cursor-pointer"
//                     />
//                     <span className="ml-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
//                   </label>
//                   <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors hover:underline">
//                     Forgot password?
//                   </a>
//                 </div>

//                 {/* Submit button */}
//                 <button
//                   onClick={handleSubmit}
//                   disabled={loading}
//                   className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group mt-6"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//                   {loading ? (
//                     <>
//                       <Loader2 className="h-5 w-5 animate-spin" />
//                       <span className="relative z-10">Authenticating...</span>
//                     </>
//                   ) : (
//                     <>
//                       <span className="relative z-10">Sign In to Dashboard</span>
//                       <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
//                     </>
//                   )}
//                 </button>
//               </div>

//               {/* Demo credentials */}
//               <div className="mt-6 relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
//                 <div className="relative p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 rounded-2xl text-gray-300 text-sm">
//                   <p className="mb-1 font-semibold text-purple-400">Demo Credentials:</p>
//                   <p>Email: <span className="text-gray-400">admin@mineguard.com</span></p>
//                   <p>Password: <span className="text-gray-400">admin123</span></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>  
//     </div>
//   );
// };

// export default Login;




// import React, { useState, useEffect } from 'react';
// import { 
//   Shield, Eye, EyeOff, Loader2, AlertCircle, Sparkles, Lock, Mail, 
//   ChevronRight, Mountain, Zap 
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: 'admin@rockguard.com',
//     password: 'admin123'
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const { login, loading, isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   // Redirect if already logged in
//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/');
//     }
//   }, [isAuthenticated, navigate]);

//   // Track mouse movement for interactive glow
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!formData.email || !formData.password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     try {
//       const result = await login(formData.email, formData.password);
//       if (!result.success) {
//         setError(result.message);
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong. Try again.');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') handleSubmit(e);
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Background effects */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
//         <div 
//           className="absolute inset-0 opacity-30"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
//           }}
//         />
//       </div>

//       {/* Decorative particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
//         <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
//         <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
//       </div>

//       {/* Grid overlay */}
//       <div 
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
//           backgroundSize: '50px 50px'
//         }}
//       />

//       {/* Card */}
//       <div className="relative w-full max-w-md z-10">
//         {/* Logo */}
//         <div className="text-center mb-8">
//           <div className="relative inline-block mb-6">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-75 animate-pulse"></div>
//               <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
//                 <Shield className="h-12 w-12 text-white" />
//               </div>
//             </div>
//             <div className="absolute -top-2 -right-2">
//               <Sparkles className="h-6 w-6 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
//             </div>
//             <div className="absolute -bottom-1 -left-1">
//               <Zap className="h-5 w-5 text-blue-400 animate-pulse" />
//             </div>
//           </div>
//           <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 tracking-tight">
//             RockGuard AI
//           </h1>
//           <div className="flex items-center justify-center space-x-2 text-gray-400">
//             <Mountain className="h-4 w-4" />
//             <p className="text-sm uppercase tracking-wider">Next-Gen Safety Intelligence</p>
//           </div>
//         </div>

//         {/* Login card */}
//         <div className="relative">
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur opacity-30 animate-pulse"></div>
//           <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800/50 p-8 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

//             <div className="relative z-10">
//               <div className="mb-6">
//                 <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
//                   Welcome Back
//                   <span className="ml-2 text-xs px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">
//                     v2.0
//                   </span>
//                 </h2>
//                 <p className="text-gray-400 text-sm">Access your safety command center</p>
//               </div>

//               {/* Error */}
//               {error && (
//                 <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center space-x-3">
//                   <AlertCircle className="h-5 w-5 text-red-400" />
//                   <p className="text-red-400 text-sm">{error}</p>
//                 </div>
//               )}

//               {/* Form */}
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 {/* Email */}
//                 <div>
//                   <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onKeyPress={handleKeyPress}
//                       className="w-full pl-12 pr-4 py-4 bg-black/40 border border-gray-700/50 rounded-2xl text-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
//                       placeholder="admin@mineguard.com"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label htmlFor="password" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
//                     <input
//                       type={showPassword ? 'text' : 'password'}
//                       id="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       onKeyPress={handleKeyPress}
//                       className="w-full pl-12 pr-12 py-4 bg-black/40 border border-gray-700/50 rounded-2xl text-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
//                       placeholder="Enter your password"
//                       required
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-400"
//                     >
//                       {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center space-x-3 hover:scale-[1.02] transition-all disabled:opacity-50"
//                 >
//                   {loading ? (
//                     <>
//                       <Loader2 className="h-5 w-5 animate-spin" />
//                       <span>Authenticating...</span>
//                     </>
//                   ) : (
//                     <>
//                       <span>Sign In to Dashboard</span>
//                       <ChevronRight className="h-5 w-5" />
//                     </>
//                   )}
//                 </button>
//               </form>

//               {/* Demo */}
//               <div className="mt-6 p-4 bg-gray-800/40 border border-gray-700/50 rounded-2xl text-gray-300 text-sm">
//                 <p className="mb-1 font-semibold text-purple-400">Demo Credentials:</p>
//                 <p>Email: <span className="text-gray-400">admin@rockguard.com</span></p>
//                 <p>Password: <span className="text-gray-400">admin123</span></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>  
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from 'react';
import { 
  Shield, Eye, EyeOff, Loader2, AlertCircle, Sparkles, Lock, Mail, 
  ChevronRight, Mountain, Zap 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: 'admin@rockguard.com',
    password: 'admin123'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { login, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Track mouse movement for interactive glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const result = await login(formData.email, formData.password);
      if (!result.success) {
        setError(result.message);
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Try again.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit(e);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects (unchanged) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Decorative particles (unchanged) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
      </div>

      {/* Grid overlay (unchanged) */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* NEW: Main Content Container (Two Columns) */}
      <div className="relative w-full max-w-6xl z-10 p-8 flex flex-col lg:flex-row items-center justify-between gap-16">
{/* SECTION 1: Logo/Branding (Left Side) - ENHANCED WITH THEMATIC QUOTES */}
        <div className="flex-1 text-center lg:text-left max-w-lg lg:max-w-none">
          <div className="mb-8">
            {/* Logo (Retained the original Shield/Security theme, but updated for a stronger visual punch) */}
            <div className="relative inline-block mb-6 lg:mx-0 mx-auto">
              <div className="relative">
                {/* Updated blur to a strong, high-tech blue/green mix */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl blur-xl opacity-75 animate-pulse"></div>
                
                {/* Main Logo: Shield (Security) with an emphasis on data/tech colors */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-blue-700 via-green-600 to-blue-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>
              
              {/* Top-Right Icon: Zap (Alert/Power) */}
              <div className="absolute -top-2 -right-2">
                <Zap className="h-6 w-6 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              
              {/* Bottom-Left Icon: Mountain (The hazard being guarded) */}
              <div className="absolute -bottom-1 -left-1">
                <Mountain className="h-5 w-5 text-gray-400 animate-pulse" />
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-7xl font-black bg-gradient-to-r from-blue-300 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-4 tracking-tight">
              RockGuard AI
            </h1>
            
            {/* Subtitle */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-300">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L1 21h22L12 2z"/><path d="M12 6L7 15h10L12 6z"/></svg> 
              <p className="text-lg uppercase tracking-wider font-medium">Predictive Geological Defense</p>
            </div>

            {/* ENHANCED QUOTE AND TAGLINES */}
            <div className="mt-10 max-w-lg lg:max-w-none mx-auto lg:mx-0">
                
                <blockquote className="text-2xl font-semibold italic text-gray-200 border-l-4 border-cyan-500 pl-4 mb-6">
                    "The greatest danger lies not in the fall, but in the failure to foresee it."
                </blockquote>

                <p className="text-gray-400 text-xl font-light leading-relaxed">
                    We turn geological data into unwavering foresight. Access the predictive models that stand guard when human eyes can't.
                </p>
                
                <ul className="mt-6 space-y-3 text-gray-500 text-sm">
                    <li className="flex items-center space-x-2 text-blue-400">
                        <Zap className="w-4 h-4 text-cyan-400"/> <span>Predict: Identify Instability Before It Happens</span>
                    </li>
                    <li className="flex items-center space-x-2 text-blue-400">
                        <Shield className="w-4 h-4 text-green-400"/> <span>Protect: Deploy Real-Time Hazard Zoning</span>
                    </li>
                    <li className="flex items-center space-x-2 text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-purple-400"><path d="M18 10h-1.26a8 8 0 1 0-11.48 0H6"/><path d="M18 10a4 4 0 1 1-8 0"/></svg> <span>Analyze: Deep Learning on Structural Dynamics</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>

        {/* SECTION 2: Login Card (Right Side) */}
        <div className="w-full lg:w-96">
          {/* Login card */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur opacity-30 animate-pulse"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800/50 p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
                    Welcome Back
                    <span className="ml-2 text-xs px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">
                      v2.0
                    </span>
                  </h2>
                  <p className="text-gray-400 text-sm">Access your safety command center</p>
                </div>

                {/* Error */}
                {error && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        className="w-full pl-12 pr-4 py-4 bg-black/40 border border-gray-700/50 rounded-2xl text-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                        placeholder="admin@mineguard.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        className="w-full pl-12 pr-12 py-4 bg-black/40 border border-gray-700/50 rounded-2xl text-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-400"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center space-x-3 hover:scale-[1.02] transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Authenticating...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In to Dashboard</span>
                        <ChevronRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>

                {/* Demo */}
                <div className="mt-6 p-4 bg-gray-800/40 border border-gray-700/50 rounded-2xl text-gray-300 text-sm">
                  <p className="mb-1 font-semibold text-purple-400">Demo Credentials:</p>
                  <p>Email: <span className="text-gray-400">admin@rockguard.com</span></p>
                  <p>Password: <span className="text-gray-400">admin123</span></p>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Login;