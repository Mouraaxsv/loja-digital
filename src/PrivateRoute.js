// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function PrivateRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // true se o usuário está autenticado, false caso contrário
    });
    return () => unsubscribe(); // Limpa a subscrição ao desmontar o componente
  }, []);

  if (isAuthenticated === null) {
    // Carregando a verificação de autenticação
    return <div>Carregando...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
