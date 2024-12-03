import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    // Function to fetch the IP address using fetch
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip); // Update state with IP address
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();
  }, []);

  return (
    <div className="App">
      <h1>Hello There!, Let's start</h1>
      <p>Your IP address is: {ipAddress || 'Fetching...'}</p>
    </div>
  );
}

export default App;
