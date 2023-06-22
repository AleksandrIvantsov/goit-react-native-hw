// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9CX0Fs--37D9Q4RiII_g4tRnVzm2Flsw",
  authDomain: "photo-app-8e7ba.firebaseapp.com",
  databaseURL: "https://photo-app-8e7ba.firebaseio.com",
  projectId: "photo-app-8e7ba",
  storageBucket: "photo-app-8e7ba.appspot.com",
  messagingSenderId: "250225528499",
  appId: "1:250225528499:ios:cb4c96affa9923b8db2ac6",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
