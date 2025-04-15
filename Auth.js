import { auth } from './firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Sign up function
const signUp = async () => {
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  if (emailInput && passwordInput) {
    if (passwordInput.length >= 6) {
      try {
        await createUserWithEmailAndPassword(auth, emailInput, passwordInput);
        window.location.href = 'home.html';
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Pasword must be at least 6 characters long.");
    }
  } else {
    alert("Please fill in both fields.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".login-btn");
  if (btn) {
    btn.addEventListener("click", signUp);
  }
});
