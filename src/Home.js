// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token de autenticação
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div>
      <h1>Bem-vindo à Home!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
