import {initializeApp} from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  initializeAuth,
  signInWithEmailAndPassword,
  getReactNativePersistence,
  signOut,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage"

import {Alert} from 'react-native';
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from '@env';


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });

export const register = async (fullName, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    auth.currentUser.displayName = fullName;
  } catch (error) {
    const code = error.code;
    Alert.alert(
      'Failed to sign up',

      code,
      [{text: 'Retry'}],
    );
  }
};

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const code = error.code;
    Alert.alert(
      'Failed to sign in',

      code,
      [{text: 'Retry'}],
    );
  }
};

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
    }
}

