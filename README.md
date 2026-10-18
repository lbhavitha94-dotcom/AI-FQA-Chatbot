# 🤖 AI FAQ Chatbot

An AI-powered FAQ Chatbot developed as part of an Artificial Intelligence internship project.

The chatbot uses Natural Language Processing (NLP) techniques to understand user questions and find the most relevant answer from a predefined FAQ dataset.

---

## 🚀 Features

- 🤖 AI-powered FAQ chatbot
- 💬 Interactive chat interface
- 🧠 NLP-based question matching
- 🔍 TF-IDF text vectorization
- 📊 Cosine similarity for finding the best matching FAQ
- ⚡ Fast response generation
- 😊 User-friendly interface
- 📱 Responsive web design
- ⌨️ Enter key support
- 🗂️ JSON-based FAQ dataset
- 🌐 Flask backend

---

## 🧠 How It Works

The chatbot follows these steps:

1. User enters a question.
2. The question is received by the Flask backend.
3. FAQ questions are converted into numerical vectors using TF-IDF.
4. The user's question is also converted into a TF-IDF vector.
5. Cosine similarity compares the user's question with the stored FAQ questions.
6. The FAQ with the highest similarity score is selected.
7. The corresponding answer is returned to the user.
8. The answer is displayed in the chatbot interface.

### NLP Pipeline

```text
User Question
      ↓
Text Preprocessing
      ↓
TF-IDF Vectorization
      ↓
Cosine Similarity
      ↓
Best FAQ Match
      ↓
Answer
      ↓
Chatbot Response
