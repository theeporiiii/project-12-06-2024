// UserHome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate hook

const UserHome = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Handle the button click to navigate to the /book page
  const handleBookSystemClick = () => {
    navigate('/userbook'); // Redirects to the UserBook page
  };

  return (
    <div className="user-home">
      <header>
        <h1>Welcome to the Computer Lab</h1>
      </header>

      <section className="rules">
        <h2>Rules and Regulations for Using the Computer Lab</h2>
        <ul>
          <li> All users must sign in before using the computers.</li>
          <li> No food or drink is allowed near the computers.</li>
          <li> Users must respect others and avoid disruptive behavior.</li>
          <li> Users must log off after their session is complete.</li>
          <li> Personal devices may not be connected to lab computers without permission.</li>
          <li> No illegal downloading or sharing of files.</li>
          <li> Report any technical issues to the lab supervisor immediately.</li>
        </ul>
      </section>
<center>
      <section className="booking">
        <h2>Book a System</h2>
        <p>Click the button below to book a computer in the lab.</p>
        <button onClick={handleBookSystemClick}>Book Now</button>
      </section>
</center>
      <footer>
        <p>&copy; 2024 Computer Lab Management</p>
      </footer>

      <style jsx>{`
        .user-home {
          font-family: Arial, sans-serif;
          margin: 20px;
        }
        
        header h1 {
          text-align: center;
          color: #333;
        }

        .rules, .booking {
          margin: 20px 0;
        }

        .rules ul {
          list-style-type: decimal;
          padding-left: 20px;
        }

        .booking button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }

        .booking button:hover {
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

export default UserHome;




