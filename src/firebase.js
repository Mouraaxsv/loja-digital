import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Importa Firestore

const firebaseConfig = {
    apiKey: "AIzaSyDKqZb7aLr1pypRWHy2UuZITVnTUMAH6KI",
    authDomain: "site-vendas-89658.firebaseapp.com",
    projectId: "site-vendas-89658",
    storageBucket: "site-vendas-89658.appspot.com",
    messagingSenderId: "895914979939",
    appId: "1:895914979939:web:55491b7699e426a2d3be56"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Exporta Firestore
