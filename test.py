

import os
from dotenv import load_dotenv
from groq import Groq

# Load the .env file
load_dotenv()

# Initialize Groq client with the API key
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Example request to Groq API
response = client.chat.completions.create(
    model="llama3-70b-8192",
    messages=[{"role": "system", "content": "You are a helpful assistant."}],
    max_tokens=100,
    temperature=1.2
)

# Print response from Groq
print("Response from Groq:", response.choices[0].message.content)