import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
  try {
    firebaseApp = initializeApp(firebaseConfig);
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    throw error;
  }
} else {
  firebaseApp = getApps()[0];
}

// Export the app instance
export const app = firebaseApp;

// Initialize Realtime Database with explicit URL
export const database = getDatabase(app, process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL); 