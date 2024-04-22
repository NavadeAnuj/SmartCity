import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/Syles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(formData.email, formData.password);

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate('../admin');
    try {
      setLoading(true);
  
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        // Successful login, you can perform additional actions here
        navigate('../admin');
      } else {
        const errorBody = await response.json(); // Parse JSON response
        console.error('Error during login:', response.status, response.statusText);
        console.error('Error body:', errorBody);
  
        if (errorBody && errorBody.msg === "Enter valid credentials") {
          setError('Invalid credentials. Please check your email and password.');
        } else {
          setError('An error occurred during login.');
        }
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setError('An unexpected error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="login wrap">
          <div className="h1">Login</div>
          <input
            placeholder="Email"
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
