// Home.js
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Você saiu com sucesso.");
      navigate('/login');
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
    <div className="home-container">
      <header className="header-top">
        <h1 className="logo">Minha Loja</h1>
      </header>

      <nav className="header-nav">
        <input type="text" placeholder="Pesquisar produtos..." className="search-bar" />
        <button className="account-btn" onClick={handleLogout}>Sair</button>
        <button className="cart-btn">Carrinho</button>
      </nav>

      <div className="main-content">
        <aside className="sidebar">
          <h3>Categorias</h3>
          <ul>
            <li>Tecnologia</li>
            <li>Camisetas</li>
            <li>Tênis</li>
          </ul>
        </aside>

        <section className="product-grid">
          <div className="product-card">
            <img src="/images/tenis-modelo.webp" alt="Produto 1" className="product-image" />
            <p className="product-price">R$99,99</p>
          </div>
          <div className="product-card">
            <img src="/images/tenis-modelo.webp" alt="Produto 2" className="product-image" />
            <p className="product-price">R$199,99</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
