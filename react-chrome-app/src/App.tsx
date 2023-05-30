import React, { useEffect, useRef } from 'react';


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
        simulateResponse();
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

  const simulateResponse = () => {
    const responseDelay = Math.floor(Math.random() * 2000) + 500; // Simulate response delay between 500ms and 2500ms

    setTimeout(() => {
      const responseMessage = "This is a response message.";
      appendMessage(responseMessage, "received-message");
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
