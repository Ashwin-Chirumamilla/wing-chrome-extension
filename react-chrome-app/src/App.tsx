import React, { useEffect, useRef } from 'react';
import { OpenAIApi, Configuration } from 'openai'

function App() {
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sendButton = document.getElementById("send-button");

    if (sendButton) {
      sendButton.addEventListener("click", handleSendMessage);
    }

    return () => {
      if (sendButton) {
        sendButton.removeEventListener("click", handleSendMessage);
      }
    };
  }, []);

  const handleSendMessage = () => {
    if (messageInputRef.current) {
      const message = messageInputRef.current.value.trim();

      if (message !== "") {
        appendMessage(message, "sent-message");
        simulateResponse(message);
        messageInputRef.current.value = "";
      }
    }
  };

  const appendMessage = (message: string, messageType: string) => {
    if (chatMessagesRef.current) {
      const messageContainer = document.createElement("div");
      messageContainer.className = "message";

      const messageBubble = document.createElement("div");
      messageBubble.className = "message-bubble";
      messageBubble.textContent = message;

      messageContainer.appendChild(messageBubble);

      if (messageType === "received-message") {
        messageContainer.classList.add("received-message");
      } else if (messageType === "sent-message") {
        messageContainer.classList.add("sent-message");
      }

      chatMessagesRef.current.appendChild(messageContainer);
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };


  const simulateResponse = (message: string) => {
    const responseDelay = Math.floor(Math.random() * 2000) + 500; // Simulate response delay between 500ms and 2500ms
    //create an open ai response
    const configuration = new Configuration({
      apiKey: 'HpnEaM9O9Hooq78BYE9IT3BlbkFJWsqkzM3VIWd6Q2BUCBKL',
    });
    const prompt = `
    You are an intelligent shopping assistant that can only access items from the list of products that are given to you. 
    We have a goal in mind and we want to find the best way to achieve it using the given products.
    Since you are given the product ID's, descriptions, and prices, you can use all of this information.
    Your response should be a bundle of products that you think will help us achieve our goal. 
    It should be formatted like:
    {{product_id: 1234, quantity: 1}, {product_id: 5678, quantity: 2}, {product_id: 9101, quantity: 3}}
    
    Here is the goal we want to achieve through shopping: ${message}

  `
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.7,
    })
    const result = response.data.choices[0].text!;
    setTimeout(() => {
      appendMessage(result, "received-message");
    }, responseDelay);
  };

  return (
    <div className="chat-container">
      <div className="chat-column">
        <div className="chat-header">
          Wing Search
        </div>
        <div className="chat-messages" id="chat-messages" ref={chatMessagesRef}>

        </div>

      </div>
      <div className="chat-column">
        <div className="chat-input">
          <textarea id="message-input" placeholder="Type your message" ref={messageInputRef}></textarea>
          <button id="send-button" onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
