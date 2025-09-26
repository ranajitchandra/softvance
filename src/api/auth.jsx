// src/api/auth.js
import axios from "axios";

const API_BASE = "https://apitest.softvencefsd.xyz/api";

const client = axios.create({
  baseURL: API_BASE,
  timeout: 15000,
});

// ---------------- AUTH APIs ----------------

// Register user
export async function register(formData) {
  return client.post("/register", formData); // FormData
}

// Verify OTP after registration
export async function verifyOtp(data) {
  // { email, otp }
  return client.post("/verify_otp", data);
}

// Resend OTP
export async function resendOtp(data) {
  // { email }
  return client.post("/resend_otp", data);
}

// Login
export async function login(data) {
  // { email, password }
  return client.post("/login", data);
}

// Forgot password (request reset link/OTP)
export async function forgotPassword(data) {
  // { email }
  return client.post("/forgot-password", data);
}

// ✅ Forgot Password Verify OTP
export async function forgotVerifyOtp(data) {
  // { email, otp }
  return client.post("/forgot-verify-otp", data);
}

// Reset password
export async function resetPassword(data) {
  // { email, otp, password, password_confirmation }
  return client.post("/reset-password", data);
}

// Logout
export async function logout(token) {
  return client.post(
    "/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
