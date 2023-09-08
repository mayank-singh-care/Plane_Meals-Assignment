import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsGBWv3t1ybcw03cYcfgT7O69XfDZhVzo",
  authDomain: "planemeals-c09e0.firebaseapp.com",
  projectId: "planemeals-c09e0",
  storageBucket: "planemeals-c09e0.appspot.com",
  messagingSenderId: "371819137907",
  appId: "1:371819137907:web:cc2f5c898c0f1a41abd306",
  measurementId: "G-FHWKME8ZZ5",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account ",
});
export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
