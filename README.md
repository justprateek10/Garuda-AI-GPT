Garuda-AI-GPT
Garuda-AI-GPT is a powerful AI-powered conversational assistant built with OpenAI’s GPT models. It uses a streamlined Gradio interface for easy user interaction and includes modular prompt engineering for customization and advanced conversations.

Features
✅ Chat with an LLM via an interactive web interface
✅ Gradio-powered, responsive, and simple UI
✅ Modular design to experiment with prompt templates
✅ Ready for deployment on local or cloud platforms
✅ Easily extendable to use different LLM backends (OpenAI, Anthropic, etc.)

Tech Stack
Python 3

Gradio

OpenAI API

LangChain

(Optionally extendable to other LLM providers)

Project Structure
Garuda-AI-GPT/
├── garuda.py
├── requirements.txt
├── .env (for storing your OpenAI API key)
└── README.md
Getting Started
1. Clone the repository
git clone https://github.com/justprateek10/Garuda-AI-GPT.git
cd Garuda-AI-GPT
2. Set up a virtual environment (recommended)
python -m venv venv
source venv/bin/activate       # Mac/Linux
venv\Scripts\activate          # Windows
3. Install dependencies
pip install -r requirements.txt
4. Set up your API key
Create a .env file in the root folder with the following content:

OPENAI_API_KEY=your_openai_api_key_here
(Never commit your .env file to GitHub!)

Running the App
Simply launch:

python garuda.py
Then open the Gradio link shown in the console (usually http://127.0.0.1:7860).

How It Works
garuda.py loads a Gradio chat interface

Messages are sent to OpenAI's GPT API using a LangChain prompt chain

The GPT model returns a response which is displayed in Gradio

You can modify the prompt template in garuda.py for tailored behaviors

Roadmap Ideas
✅ Add memory for multi-turn conversation
✅ Support streaming token responses
✅ Add authentication for user-protected endpoints
✅ Deploy to HuggingFace Spaces or AWS/GCP
✅ Experiment with vector database retrieval (RAG)
