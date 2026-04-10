#!/usr/bin/env python3
"""
MineGuard AI Backend Starter Script
This script starts the Python backend server for AI-powered mine risk detection.
"""

import subprocess
import sys
import os
import time

def check_python_version():
    """Check if Python version is compatible"""
    if sys.version_info < (3, 7):
        print("❌ Error: Python 3.7 or higher is required")
        print(f"Current version: {sys.version}")
        return False
    print(f"✅ Python version: {sys.version.split()[0]}")
    return True

def install_requirements():
    """Install required packages"""
    print("📦 Installing required packages...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("✅ All packages installed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error installing packages: {e}")
        return False

def start_server():
    """Start the Flask server"""
    print("🚀 Starting MineGuard AI Backend Server...")
    try:
        subprocess.run([sys.executable, "app.py"])
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except Exception as e:
        print(f"❌ Error starting server: {e}")

def main():
    """Main function"""
    print("=" * 60)
    print("🏭 ROckGuard AI Backend Server")
    print("=" * 60)
    
    # Check Python version
    if not check_python_version():
        sys.exit(1)
    
    # Change to backend directory
    if os.path.exists("backend"):
        os.chdir("backend")
        print("📁 Changed to backend directory")
    
    # Install requirements
    if not install_requirements():
        sys.exit(1)
    
    # Start server
    start_server()

if __name__ == "__main__":
    main()
