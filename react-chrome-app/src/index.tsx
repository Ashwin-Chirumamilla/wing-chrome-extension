import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";

const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #${rootElement.id} {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #c2c2c2;
  z-index: 999999999;
  }

  body {
    font-family: Roboto, Arial, sans-serif;
    background-color: #f2f2f2;
    background: transparent;
    width: 250px;
    height: 540px;
    border-radius: 10px;
  }
  
  .chat-container {
    position: fixed;
    right: 20px;
    left: 20px; 
    width: 420px;
    height: 500px;
    background-color: #1d1d1d;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  
  .chat-header {
    padding: 15px;
    background-color: #333;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
  
  .chat-messages {
    padding: 15px;
    height: 350px;
    overflow-y: auto;
    scroll-behavior: smooth;
  }
  
  .chat-messages::-webkit-scrollbar {
    width: 6px;
  }
  
  .chat-messages::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }
  
  .message {
    margin-bottom: 10px;
  }
  
  .sent-message {
    text-align: right;
  }
  
  .received-message {
    text-align: left;
  }
  @keyframes flyUpAnimation {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .message-bubble {
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    background-color: #AC2BF6;
    transition: background-color 0.3s ease;
    animation: flyUpAnimation 0.5s ease forwards;
  }
  
  
  .sent-message .message-bubble {
    background-color: #AC2BF6;
    color: #fff;
  }
  
  .received-message .message-bubble {
    background-color: #606060;
    color: #fff;
  }
  
  .chat-input {
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: #1d1d1d;
  }
  
  #message-input {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #373737;
    background-color: #373737;
    color: #fff;
    transition: border-color 0.3s ease, background-color 0.3s ease;
  }
  
  #message-input:focus {
    border-color: #007cff;
  }
  
  #send-button {
    margin-left: 10px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    background-color: #AC2BF6;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  #send-button:hover {
    background-color: #AC2BF6;
  }
  
  .sent-message {
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
  }
  
  .received-message {
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
  }
  
  .sent-message .message-bubble {
    order: 2;
    background-color: #AC2BF6;
    color: #fff;
    border-radius: 20px;
    padding: 10px;
    max-width: 70%;
  }
  
  .received-message .message-bubble {
    order: 2;
    background-color: #606060;
    color: #fff;
    border-radius: 20px;
    padding: 10px;
    max-width: 70%;
  }
  
  .gradient-bg {
    background: linear-gradient(120deg, #AC2BF6, #a86aff);
    background-size: 200% 200%;
    animation: gradientAnimation 5s ease-in-out infinite;
  }
  
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
`;
document.body.appendChild(rootElement);
document.body.appendChild(globalStyles);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
