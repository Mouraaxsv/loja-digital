// services/userService.js
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Importa Firestore configurado

// Função para salvar dados do usuário na coleção "users"
export const saveUserProfile = async (uid, profileData) => {
  try {
    await setDoc(doc(db, 'users', uid), profileData); // Cria ou atualiza o documento com UID
    console.log("Perfil do usuário salvo com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar perfil:", error);
  }
};
