import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import ChatInterface from './components/ChatInterface/ChatInterface.jsx'
import Footer from './components/Footer/Footer.jsx'
import Input from './components/Input/Input.jsx'
import Loading from './components/Loading/Loading.jsx'
import axios from 'axios'



function App() {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = (message) => {
    const newMessage = { text: message, type: 'user' };
    setMessages([...messages, newMessage]);

    // Simulate a response from the AI (for demo purposes)
    /* setTimeout(() => {
      const aiMessage = { text: `You said: ${message}`, type: 'ai' };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 1000); */
    async function fetchdata() {
      setLoading(true);

      try {
        const response = await axios.post('http://localhost:3001/api/queries/', { query: message });

        const aiMessage = { text: JSON.stringify(response.data.data, null, 2), type: 'ai' };

        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error('Error fetching response from backend:', error);
        const errorMessage = { text: 'Failed to get response from AI or database', type: 'error' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      } finally {
        setLoading(false);
      }

    }
    fetchdata();


  };

  return (
    <div className="App flex flex-col h-screen bg-gradient ">
      <Header />
      <ChatInterface messages={messages} />
      {loading && <Loading />}
      <Input onSend={handleSend} />
      <Footer />
    </div>
  )

}


export default App
