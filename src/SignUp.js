// SignUp.js
import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { saveUserProfile } from './Service/userService'; // Importa a função para salvar o perfil
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Cria o usuário com email e senha
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Salva o perfil do usuário no Firestore
      await saveUserProfile(user.uid, { name, email, createdAt: new Date() });

      alert("Cadastro realizado com sucesso!");
      navigate('/login'); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro ao cadastrar:", error.message);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          required
        />
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default SignUp;
