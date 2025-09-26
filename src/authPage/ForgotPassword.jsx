// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { forgotPassword } from "../api/auth";

export default function ForgotPassword() {
    const navigate = useNavigate();

    const location = useLocation();

    // Get email if passed from Login
    const initialEmail = location.state?.email || "";

    const [email, setEmail] = useState(initialEmail);
    console.log(email);
    
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [fieldError, setFieldError] = useState("");

    function validate() {
        if (!email.trim()) return "Email is required";
        const re = /\S+@\S+\.\S+/;
        if (!re.test(email)) return "Email is invalid";
        return "";
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setServerError("");
        setSuccessMsg("");
        setFieldError("");

        const err = validate();
        if (err) {
            setFieldError(err);
            return;
        }

        setLoading(true);
        try {
            const resp = await forgotPassword({ email });
            setLoading(false);

            console.log("FP---", resp);
            
            setSuccessMsg(resp.data?.message || "Reset link sent to your email!");
            // Optionally redirect to reset page after API confirms
            navigate("/forgot-verify-otp", { state: { email } });
        } catch (err) {
            setLoading(false);
            if (err.response?.data?.message) {
                setServerError(err.response.data.message);
            } else {
                setServerError("Failed to send reset instructions. Please try again.");
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            {/* Top-left logo */}
            <div className="absolute top-6 left-6">
                <img src="/logo.png" alt="ScapeSync Logo" className="h-10" />
            </div>

            <div className="w-full max-w-md px-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Forgot Password?</h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Enter your email and we’ll send you instructions to reset your password.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setFieldError("");
                            }}
                            placeholder="Email address"
                            className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 ${fieldError ? "border-red-400" : "border-gray-300"
                                }`}
                            aria-invalid={!!fieldError}
                            aria-describedby={fieldError ? "err-email" : undefined}
                        />
                        {fieldError && (
                            <p id="err-email" className="text-xs text-red-600 mt-1">
                                {fieldError}
                            </p>
                        )}
                    </div>

                    {serverError && <div className="text-sm text-red-600">{serverError}</div>}
                    {successMsg && <div className="text-sm text-green-600">{successMsg}</div>}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full rounded-md px-4 py-2 text-white font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                            }`}
                        aria-busy={loading}
                    >
                        {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Remember your password?{" "}
                    <a href="/login" className="text-green-600 hover:underline">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
}
