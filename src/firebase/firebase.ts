import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD98AARvF1oYtGDxQUxI-fwpkpuMvRvkiM",
  authDomain: "portifolio-2025.firebaseapp.com",
  projectId: "portifolio-2025",
  storageBucket: "portifolio-2025.firebasestorage.app",
  messagingSenderId: "939352020664",
  appId: "1:939352020664:web:061637288930157ae8864d",
  measurementId: "G-07VJS6D7HP",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null; // Garante que Analytics só rode no client

export { app, db, storage, analytics };
