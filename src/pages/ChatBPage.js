/*import React, { useState } from 'react';

const ChatbotPage = () => {
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    try {
        const response = await fetch("http://192.168.40.1:5000/api/chat", {  
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage }),
        });
          

      const data = await response.json();
      console.log("Chatbot Reply:", data.reply);  // Show chatbot response
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="home-page">
      <h1>Chatbot</h1>
      <input
        type="text"
        placeholder="Type a message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button className="pink-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatbotPage;*/

/*import React, { useState } from 'react';

const ChatbotPage = () => {
  const [userInput, setUserInput] = useState(""); // State for user input
  const [chatHistory, setChatHistory] = useState([]); // Store chat messages

  const sendMessage = async () => {
    if (!userInput.trim()) return; // Prevent sending empty messages

    console.log("User Message:", userInput); // Debugging

    try {
      const response = await fetch("http://192.168.40.1:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();
      console.log("Chatbot Reply:", data.reply); // Debugging chatbot response

      setChatHistory([...chatHistory, { user: userInput, bot: data.reply }]); // Update chat
      setUserInput(""); // Clear input after sending
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="home-page">
      <h1>Chatbot</h1>

      {/* Chat Display *//*}
      <div className="chat-box">
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-message">
            <p><strong>You:</strong> {chat.user}</p>
            <p><strong>Bot:</strong> {chat.bot}</p>
          </div>
        ))}
      </div>

      {/* Input and Send Button *//*}
      <input
        type="text"
        placeholder="Type a message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button className="pink-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatbotPage;*/

/*import React, { useState } from 'react';

const ChatbotPage = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    console.log("User Message:", userInput);

    try {
      const response = await fetch("http://10.100.19.64:5000/api/chat", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });
      if (!response.ok) {
        throw new Error(HTTP error! Status: ${response.status});
      }

      const data = await response.json();
      console.log("Chatbot Reply:", data.reply || data.message); 

      setChatHistory([...chatHistory, { user: userInput, bot: data.reply || data.message }]);
      setUserInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="home-page">
      <h1>Chatbot</h1>

      <div className="chat-box">
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-message">
             <p><strong>You:</strong> {chat.user}</p>
            <p><strong>Bot:</strong> {chat.bot || "Error fetching response"}</p>
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Type a message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button className="pink-button" onClick={sendMessage}>
        Send
      </button>
    </div>
    );
};
    
export default ChatbotPage;*/



import React, { useState } from 'react';

const ChatbotPage = () => {
  const [userInput, setUserInput] = useState(""); // State for user input
  const [chatHistory, setChatHistory] = useState([]); // Store chat messages

  const sendMessage = async () => {
    if (!userInput.trim()) {
      console.log("Message is empty, ignoring.");
      return; // Prevent sending empty messages
    }

    console.log("User Message:", userInput); // Debugging

    try {
      const response = await fetch("http://192.168.64.47:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();
      console.log("Chatbot Reply:", data.reply); // Debugging chatbot response

      setChatHistory([...chatHistory, { user: userInput, bot: data.reply }]); // Update chat
      setUserInput(""); // Clear input after sending
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="home-page">
      <h1>Chatbot</h1>

      {/* Chat Display */}
      <div className="chat-box">
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-message">
            <p><strong>You:</strong> {chat.user}</p>
            <p><strong>Bot:</strong> {chat.bot}</p>
          </div>
        ))}
      </div>

      {/* Input and Send Button */}
      <form 
        onSubmit={(e) => { 
          e.preventDefault();
          sendMessage(); 
        }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button 
          type="submit" 
          className="pink-button"
          onClick={() => console.log("Button Clicked!")}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatbotPage;





