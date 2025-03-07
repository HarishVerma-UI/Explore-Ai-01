# AI Development Project
- This repository contains a AI application with a Python backend and React frontend.
- Overview
- This project implements an AI chatbot application using the Groq API. The system consists of:

FastAPI backend for AI model integration
React frontend for user interaction
MLflow for experiment tracking and model management

-Prerequisites
  Python 
  Node.js and npm
  Git
  Groq API account

Installation and Setup
Backend Setup

## Step 1: Install Python

Download and install Python from python.org
Ensure you check the option Add Python to PATH during installation

## Step 2: Clone the Repository
bashCopygit clone https://github.com/HarishVerma-UI/Explore-Ai-01

## Step 3: Navigate to the Project Folder
bashCopycd Explore-Ai-01

## Step 4: Create a Virtual Environment
bashCopypython -m venv ai-env

## Step 5: Activate the Virtual Environment
bashCopy.\ai-env\Scripts\activate

## Step 6: Install Required Libraries
bashCopypip install -r requirements.txt

## Step 7: Create a Groq Account

Visit Groq Cloud and sign up or log in
After logging in, generate an API key

## Step 8: Configure Environment Variables
Create a .env file in the project root with the following:
CopyGROQ_API_KEY="your_api_key_here"
MLFLOW_TRACKING_URI="http://localhost:5000"

## Step 9: Run the Backend Server
bashCopycd backend
uvicorn main:app --reload

## Step 10: Test the API
Using curl:
bashCopycurl -X POST http://localhost:8000/start-session
Expected response:
jsonCopy{"session_id": "uuid-here"}
You can send messages using the session ID.

# Frontend Setup

## Step 1: Install Node.js

Download and install Node.js from nodejs.org

## Step 2: Navigate to the Frontend Directory
bashCopycd frontend

## Step 3: Install Dependencies
bashCopynpm install

## Step 4: Start the Frontend Development Server
bashCopynpm start
The application should now be running at http://localhost:3000

## Additional Setup (Optional)
MLflow Setup

## Step 1: Install MLflow
bashCopypip install mlflow

## Step 2: Start MLflow Server
bashCopymlflow server --host 127.0.0.1 --port 5000

## Step 3: Access MLflow UI
Open your browser and navigate to http://localhost:5000

## Step 4: Using MLflow in Your Python Scripts
Example:

pythonCopyimport mlflow

# Start a new run
with mlflow.start_run():
    # Log parameters
    mlflow.log_param("model_name", "groq-llama3-8b")
    
    # Log metrics
    mlflow.log_metric("accuracy", 0.95)
    
    # Log artifacts
    mlflow.log_artifact("model_outputs.json")

API Endpoints

- POST /start-session: Starts a new chat session
- POST /chat: Sends a message to the AI model
