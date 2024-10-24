// src/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Verifica se o token de autenticação está presente

  return token ? children : <Navigate to="/login" />; // Se o token existir, renderiza a rota, senão redireciona para o login
};

export default PrivateRoute;
