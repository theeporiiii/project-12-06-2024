import React, { useEffect, useState } from 'react';
import compImage from '../assets/comp.jpg';

// A functional component that displays available systems in cards
const UserBook = () => {
  const [systems, setSystems] = useState([]);  // State to store systems
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  // Fetch available systems from the backend
  useEffect(() => {
    const fetchSystems = async () => {
      try {
        const response = await fetch('http://localhost:3008/api/computer/available');  //Updated to fetch available systems
        if (!response.ok) {
          throw new Error('Failed to fetch available systems');
        }

        const data = await response.json();
        console.log("Fetched systems:", data);  // Log the data to see what you're getting
        setSystems(data);  // Set the systems data into state
      } catch (err) {
        setError(err.message);  // Display the error message
        console.error("Error:", err);
      } finally {
        setLoading(false);  // Set loading to false after the fetch completes
      }
    };

    fetchSystems();  // Call the fetch function
  }, []);  // Empty dependency array ensures the effect runs once when the component mounts

  // Function to handle booking (you can extend this with actual logic)
  function handleBookSystem(systemId, timeSlot) {
    const username = prompt('Enter your username');  // You can customize this to ask for username
  
    if (!username) {
      alert('Please enter a username');
      return;
    }
  
    // Prepare the data to send to the backend
    const bookingData = {
      username,
      computerId: systemId,
      timeSlot,
    };
  
    // Send the booking data to the backend
    fetch('http://localhost:3008/api/booking/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Booking successful: ' + data.message);
      })
      .catch((error) => {
        alert('Error booking system: ' + error.message);
      });
  }
  

  return (
    <div className="user-book">
      <header>
        <h1>Available Computer Systems</h1>
      </header>

      {loading ? (
        <p>Loading available systems...</p>  // Show a loading message while fetching data
      ) : error ? (
        <p>Error: {error}</p>  // Show error if something went wrong
      ) : (
        <div className="systems-grid">
          {systems.length === 0 ? (
            <p>No systems available at the moment.</p>
          ) : (
            systems.map((system) => (
              <div className="card" key={system._id}>
               
               <img
  src={compImage} 
  alt={system.computerId}
  className="system-image"
/>

                <h3>{system.computerId}</h3> {/* Displaying computerId as the name */}
                <p><strong>Status:</strong> {system.status}</p>
                <p><strong>Time Slots:</strong> {system.timeSlots.join(", ")}</p>
                <button onClick={() => handleBookSystem(system._id)}>Book Now</button>
              </div>
            ))
          )}
        </div>
      )}

      <footer>
        <p>&copy; 2024 Computer Lab Booking</p>
      </footer>

      {/* Styling */}
      <style jsx>{`
        .user-book {
          font-family: Arial, sans-serif;
          margin: 20px;
        }

        header h1 {
          text-align: center;
          color: #333;
        }

        .systems-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .card {
          border: 1px solid #ddd;
          padding: 20px;
          text-align: center;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px);
        }

        .system-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
        }

        button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 5px;
          margin-top: 10px;
        }

        button:hover {
          background-color: #45a049;
        }

        footer {
          text-align: center;
          font-size: 14px;
          color: #666;
          margin-top: 40px;
        }
      `}</style>
    </div>
  );
};

export default UserBook;



