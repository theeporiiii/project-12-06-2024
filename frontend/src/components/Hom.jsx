import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/add'); // Navigate to Add Computer page
  };

  const handleViewClick = () => {
    navigate('/view'); // Navigate to View Computers page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Computer Lab Management</h1>
      <div style={styles.buttonContainer}>
        <button onClick={handleAddClick} style={styles.button}>
          Add Computer
        </button>
        <button onClick={handleViewClick} style={styles.button}>
          View Computers
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',  // Distribute space evenly between the elements
    height: '100vh',//width:'100vh',  // Ensure the container takes full viewport height
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',  // Gradient background
    fontFamily: "'Roboto', sans-serif", // Modern font
    color: '#fff', // Text color
    padding: '100 50px', // Padding to avoid content being too close to edges
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)', // Text shadow for better readability
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    justifyContent: 'center',
    width: '100%',  // Make buttons stretch across the container
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: '500',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#ff6f61', // Button color
    color: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Button shadow
    transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Smooth hover transition
    width: '250px',  // Give the buttons a consistent width
    textAlign: 'center',
  },
  buttonHover: {
    transform: 'scale(1.1)', // Button hover effect
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
  },
};

export default Home;

