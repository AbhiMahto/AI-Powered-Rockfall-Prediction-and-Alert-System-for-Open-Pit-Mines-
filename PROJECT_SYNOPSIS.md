# 🎓 Project Synopsis: AI-Based Rockfall Prediction & Alert System
## Academic & Thesis Submission Document

This document contains the official technical details, methodology, and architectural frameworks for the **AI-Based Rockfall Prediction and Alert System** (Project Name: **RockGuard AI**). You can use this content directly in your final project report or thesis submission.

---

## 1. Project Title & Abstract

* **Project Title**: Design and Implementation of an AI-Powered Real-Time Rockfall Prediction and Warning System for Open-Pit Mines
* **Domain**: Artificial Intelligence, Computer Vision, Internet of Things (IoT), Geotechnical Engineering, and Mine Safety.
* **Abstract**: 
  Open-pit mining operations are highly susceptible to slope failures and rockfalls, which pose severe risks to personnel and expensive heavy machinery. Traditional monitoring systems rely on periodic manual inspections or expensive localized radar tracking. This project proposes an integrated full-stack solution (**RockGuard AI**) that combines deep learning computer vision with multi-sensor geotechnical telemetry. 
  
  The system uses a **YOLOv8 Convolutional Neural Network (CNN)** running on an edge-compute node to process high-resolution video streams of mine benches, dynamically segmenting structural anomalies like cracks, loose rock bodies, and slope deformations. Furthermore, the system includes a **Long Short-Term Memory (LSTM) Recurrent Neural Network** to forecast slope displacement velocities, issuing automated alerts via physical sirens and SMS/WhatsApp channels when safety factors breach safe limits. The system is designed to comply with Directorate General of Mines Safety (DGMS) regulatory standards.

---

## 2. Problem Statement

Mining operations are increasingly deep and complex, creating steep wall benches. Factors such as heavy monsoon rainfall, geological structural joints, and blast-induced vibrations lead to sudden bench collapses. 

Existing mine safety systems suffer from:
1. **High Latency**: Manual geological surveys are slow and fail to identify rapid, microscopic slope displacements.
2. **Lack of Integration**: CCTV visual monitors, piezometers, and geophones operate in isolated silos, lacking data fusion.
3. **Absence of Proactive Warning**: Current tools alert personnel *after* a rockfall has started, leaving zero time for evacuation.

Our solution, **RockGuard AI**, solves this by providing a unified, real-time, sensor-fused monitoring dashboard backed by deep learning prediction engines.

---

## 3. System Architecture & Block Diagram

The system comprises three primary layers:
1. **IoT Sensor & Edge Layer**: CCTV cameras, drone feeds, borehole piezometers (pore pressure), extensometers (displacement), and geophones (vibrational noise) stream data.
2. **AI Processing Engine**: A Flask-based server executing YOLOv8 model inference for visual defects and an LSTM model for geotechnical forecast analysis.
3. **Command & Warning Interface**: A React-based web dashboard displaying interactive GIS mapping, visual overlays, charts, and emergency response guides.

```text
+-----------------------------------------------------------------------------------+
|                                  IoT SENSOR LAYER                                 |
|  [CCTV Cameras]   [Drone Feeds]   [Piezometers]   [Extensometers]  [Geophones]   |
+-----------------------------------+-----------------------------------------------+
                                    |
                                    v (RTSP Video Stream / MQTT Telemetry)
+-----------------------------------+-----------------------------------------------+
|                                AI CORE BACKEND                                    |
|  +-------------------------+  +--------------------------+  +------------------+  |
|  |     YOLOv8 Engine       |  |       LSTM Predictor     |  | Geotechnical     |  |
|  | (Detects cracks/boulders)  |  | (Predicts slope movement)|  | Rule-Engine      |  |
|  +-------------------------+  +--------------------------+  +------------------+  |
+-----------------------------------+-----------------------------------------------+
                                    |
                                    v (JSON WebSockets / Rest API endpoints)
+-----------------------------------+-----------------------------------------------+
|                             VISUAL DASHBOARD & ALERTS                             |
|  +--------------------------------+  +-------------------------+  +-------------+  |
|  |   React GIS Live Risk Map      |  | SMS / WhatsApp Warnings |  | Siren Relay |  |
|  +--------------------------------+  +-------------------------+  +-------------+  |
+-----------------------------------------------------------------------------------+
```

---

## 4. Technical Methodology

### A. Computer Vision Deep Learning Model (YOLOv8)
The visual pipeline utilizes a pre-trained **YOLOv8 (You Only Look Once)** object detection and instance segmentation model, optimized for ONNX (Open Neural Network Exchange) formats:
* **Feature Extraction**: The model processes the image through a backbone network (modified CSPDarknet53) to extract multiscale visual features.
* **Anchor-Free Detection**: YOLOv8 uses an anchor-free design that predicts the center of bounding boxes directly, increasing speed and precision when processing irregular crack shapes and overlapping rock blocks.
* **Non-Maximum Suppression (NMS)**: To avoid redundant bounding boxes around a single defect, the system calculates intersection-over-union (IoU) ratios, filtering overlapping boxes with an IoU greater than 0.45:
  
$$\text{IoU} = \frac{\text{Area of Overlap}}{\text{Area of Union}}$$

### B. Fallback Geometrical Algorithms (OpenCV)
To guarantee high availability and safety operational uptime, if deep learning weights are missing or during hardware failovers, a **fallback heuristic computer vision pipeline** takes over automatically:
1. **Crack Detection**: Employs **Canny Edge Filtering** to extract raw edges, groups edge contours, and filters them using aspect ratio bounds (cracks typically exhibit $w/h > 3.0$ or $< 0.3$).
2. **Rock Detachment Monitoring**: Utilizes **Otsu’s Binarization** and **Gaussian Filtering** to isolate and track rock clusters showing abnormal displacements.

### C. Recurrent Neural Network (LSTM) for Geotechnical Predictions
To forecast geological slope displacement velocities, the system implements an **LSTM (Long Short-Term Memory)** network:
* LSTMs maintain an internal cell state ($C_t$), enabling them to capture temporal dependencies in sequence datasets (like daily displacement rates) over long periods.
* **Inverse Velocity Method**: Geotechnical models show that before a slope collapse, the inverse velocity ($1/v$) of displacement approaches zero. The LSTM predicts future displacement velocities ($v_t$), plotting the curve to calculate the exact **Time-of-Failure (ToF)**.

---

## 5. Software Requirements

* **Frontend**: React 19, React Router DOM, Tailwind CSS (v4), Recharts (for dynamic telemetry graphing), Lucide React (icons).
* **Backend**: Python 3.9+, Flask, OpenCV (with DNN module active), NumPy, Pillow, python-dotenv.
* **Model Formats**: ONNX (for CPU-optimized edge network execution).
