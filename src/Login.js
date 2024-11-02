import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para a mensagem de erro
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Tenta realizar o login
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redireciona para a página inicial após o login bem-sucedido
    } catch (error) {
      // Define a mensagem de erro caso o login falhe
      if (error.code === 'auth/wrong-password') {
        setError('Senha incorreta. Tente novamente.');
      } else if (error.code === 'auth/user-not-found') {
        setError('Usuário não encontrado. Verifique o email e tente novamente.');
      } else {
        setError('Erro ao tentar fazer login. Tente novamente.');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <button type="submit">Entrar</button>
      </form>
      {/* Exibe a mensagem de erro, se houver */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
