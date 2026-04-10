<h1 align="center">🏔️ AI-Powered Rockfall Prediction & Alert System</h1>

<p align="center">
  <strong>An Intelligent Dashboard for Open-Pit Mines to Predict, Monitor, and Alert Against Rockfall Risks.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue?style=for-the-badge&logo=react" alt="Frontend">
  <img src="https://img.shields.io/badge/Backend-Python%20Flask-green?style=for-the-badge&logo=python" alt="Backend">
  <img src="https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/AI-Computer%20Vision-FF6F00?style=for-the-badge&logo=opencv" alt="AI Model">
</p>

<hr>

## 📖 Overview

The **AI-Powered Rockfall Prediction & Alert System** is a full-stack solution designed for proactive safety in open-pit mines. By leveraging real-time sensor data and computer vision, this system continuously detects structural anomalies (like cracks, loose rocks, slope instability) and instantly issues alerts before accidents occur.

### ✨ Key Features

- 🟢 **Real-Time AI Detection**: Uses OpenCV/AI backend to analyze camera feeds and evaluate geological risks.
- 📊 **Interactive Risk Dashboard**: Modern, dark-themed UI (built down to the pixel with TailwindCSS and React) displaying live data, probability gauges, and status maps.
- 🚨 **Instant Action Plans**: When a high-risk scenario is detected, the AI generates immediate, step-by-step mitigation plans.
- 🌐 **Responsive & Fast**: Lightning-fast Vite-based frontend perfectly synchronized with a lightweight Python/Flask prediction backend.
- 📱 **Multi-channel Alerts**: Structured for SMS & WhatsApp alert integration.

---

## 🛠️ Technology Stack

| Domain | Technology / Tool Engine |
| :--- | :--- |
| **Frontend** | React 19, Vite, TailwindCSS (v4), Recharts, Lucide React Icons |
| **Backend** | Python 3.9+, Flask, OpenCV, Python-dotenv, Flask-CORS |
| **Package Managers** | npm / pnpm, pip |

---

## 🚀 Quick Start Guide

Ready to run the project locally? Follow these simple steps.

### 1. Clone the Repository
```bash
git clone https://github.com/AbhiMahto/AI-Powered-Rockfall-Prediction-and-Alert-System-for-Open-Pit-Mines-.git
cd AI-Powered-Rockfall-Prediction-and-Alert-System-for-Open-Pit-Mines-
```

### 2. Start the Backend (AI Prediction Server)
Open a new terminal and navigate to the backend directory:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
*The backend server will start at `http://127.0.0.1:5000`*

### 3. Start the Frontend (User Dashboard)
Open a second terminal and navigate to the frontend directory:
```bash
cd frontend
npm install
npm run dev
```
*The frontend will be available at `http://localhost:5173`*

---

## 📂 Project Structure

```text
├── backend/                      # Python Flask Backend
│   ├── app.py                    # Main Flask application & Server Endpoints
│   ├── start_backend.py          # Start script
│   ├── requirements.txt          # Python dependencies
│   └── README.md                 # Detailed backend documentation
│
├── frontend/                     # React + Vite Frontend
│   ├── src/
│   │   ├── components/           # Reusable UI & Dashboard Components
│   │   ├── charts/               # Recharts Data Visualizations
│   │   ├── contexts/             # React State Contexts 
│   │   ├── data/                 # Mock Risk Data / Configurations
│   │   ├── App.jsx               # Main Application Routing
│   │   └── main.jsx              # React DOM Entry
│   ├── index.html                # HTML Base
│   ├── package.json              # NPM Configuration
│   └── vite.config.js            # Vite configuration
│
└── .gitignore                    # Root level Git ignores (node_modules, venvs, etc.)
```

---

## 📸 Screenshots & UI Previews

*(You can add screenshots of your beautiful dark-mode dashboard here)*
* `<img src="path/to/DashboardScreenshot.png" width="800">`
* `<img src="path/to/PredictionWarning.png" width="800">`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check [issues page](https://github.com/AbhiMahto/AI-Powered-Rockfall-Prediction-and-Alert-System-for-Open-Pit-Mines-/issues).

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---
<p align="center">
  <i>Built with safety and precision in mind.</i>
</p>
