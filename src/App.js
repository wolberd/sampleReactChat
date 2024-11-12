import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    // Replace with actual response logic, here we'll mock a response
    setResponse(`You said: ${message}`);
    setMessage(''); // Clear the textarea after sending
  };

  return (
    <div style={{ width: '300px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Simple Chat App</h2>
      
      <label htmlFor="messageInput">Your Message:</label>
      <textarea
        id="messageInput"
        rows="4"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message here..."
        style={{ width: '100%', marginTop: '8px', padding: '8px' }}
      />
      
      <button onClick={handleSend} style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}>
        Send
      </button>
      
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="responseArea">Response:</label>
        <div
          id="responseArea"
          style={{ border: '1px solid #ccc', padding: '10px', marginTop: '8px', minHeight: '50px', background: '#f9f9f9' }}
        >
          {response || 'No response yet'}
        </div>
      </div>
    </div>
  );
}

export default App;

