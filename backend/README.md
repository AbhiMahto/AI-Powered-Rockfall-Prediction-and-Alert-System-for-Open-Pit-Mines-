# RockGuard AI Backend

This is the Python backend server that provides AI-powered mine risk detection for the MineGuard Pro dashboard.

## Features

- **Real-time AI Detection**: Computer vision-based detection of mine risks
- **Multiple Risk Types**: Detects cracks, loose rocks, gas leaks, structural damage
- **REST API**: Clean API endpoints for frontend integration
- **Image Processing**: OpenCV-based image analysis and annotation
- **Risk Assessment**: Automatic risk level calculation

## Installation

### Prerequisites
- Python 3.7 or higher
- pip package manager

### Quick Start

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Start the server:**
   ```bash
   python app.py
   ```

   Or use the starter script:
   ```bash
   python start_backend.py
   ```

4. **Server will be available at:**
   ```
   http://localhost:5000
   ```

## API Endpoints

### Health Check
```
GET /api/health
```
Returns server status and detection state.

### Process Frame
```
POST /api/process_frame
Content-Type: application/json

{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
}
```
Processes a camera frame and returns AI detection results.

### Detection Control
```
POST /api/start_detection    # Start continuous detection
POST /api/stop_detection     # Stop continuous detection
GET  /api/detection_status   # Get current status
```

### System Control
```
POST /api/calibrate          # Calibrate detection parameters
POST /api/emergency_stop     # Emergency stop all systems
```

## Detection Types

The AI system can detect the following mine risks:

1. **Cracks** - Structural cracks and fissures
2. **Loose Rock** - Unstable rock formations
3. **Gas Leak** - Hazardous gas detection (simulated)
4. **Structural Damage** - Building/mine structure issues
5. **Slope Instability** - Ground movement indicators
6. **Water Accumulation** - Water-related hazards

## Risk Levels

- **Critical**: Immediate danger requiring evacuation
- **High**: Significant risk requiring immediate attention
- **Medium**: Moderate risk requiring monitoring
- **Low**: Minimal risk, normal operations

## Development

### Adding New Detection Types

1. Add new risk type to `risk_types` dictionary in `MineRiskDetector`
2. Implement detection logic in `detect_risks` method
3. Update severity mapping as needed

### Customizing Detection Parameters

Modify the detection thresholds in the `detect_risks` method:
- Contour area thresholds
- Aspect ratio limits
- Confidence calculations

## Troubleshooting

### Common Issues

1. **Port 5000 already in use:**
   ```bash
   # Kill process using port 5000
   lsof -ti:5000 | xargs kill -9
   ```

2. **OpenCV installation issues:**
   ```bash
   pip uninstall opencv-python
   pip install opencv-python-headless
   ```

3. **Permission errors:**
   ```bash
   # On Linux/Mac
   chmod +x start_backend.py
   ```

### Logs

The server logs all activities to the console. Check for:
- Detection results
- API requests
- Error messages

## Production Deployment

For production deployment:

1. **Use a production WSGI server:**
   ```bash
   pip install gunicorn
   gunicorn -w 4 -b 0.0.0.0:5000 app:app
   ```

2. **Set up environment variables:**
   ```bash
   export FLASK_ENV=production
   export FLASK_DEBUG=False
   ```

3. **Configure reverse proxy (nginx/apache)**

## Support

For issues or questions:
- Check the logs for error messages
- Verify all dependencies are installed
- Ensure Python version compatibility
- Test API endpoints with curl or Postman
