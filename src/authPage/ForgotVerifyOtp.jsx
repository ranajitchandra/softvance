// src/pages/ForgotVerifyOtp.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { forgotVerifyOtp } from "../api/auth";

export default function ForgotVerifyOtp() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const email = state?.email || "";

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (!otp.trim()) {
            setError("OTP is required");
            return;
        }

        setLoading(true);
        try {
            const resp = await forgotVerifyOtp({ email, otp });
            console.log("FVotp---", resp);
            console.log("FVotp---1", resp.data?.token);
            console.log("FVotp---2", resp.data?.data?.token);

            setLoading(false);

            const token = resp.data?.data?.token;
            if (!token) {
                setError("token returned. Cannot reset password.");
                return;
            }

            navigate("/reset-password", { state: { email: email, token: token } });
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.message || "Invalid OTP");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="absolute top-6 left-6">
                <img src="/logo.png" alt="ScapeSync Logo" className="h-10" />
            </div>

            <div className="w-full max-w-md px-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Verify OTP</h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Enter the 6-digit code sent to <span className="font-medium">{email}</span>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        maxLength="6"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full rounded-md border px-3 py-2 text-sm text-center tracking-widest shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 border-gray-300"
                    />
                    {error && <p className="text-xs text-red-600">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full rounded-md px-4 py-2 text-white font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                            }`}
                    >
                        {loading ? "Verifying..." : "Verify OTP"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Didn’t receive the code?{" "}
                    <button className="text-green-600 hover:underline">Resend OTP</button>
                </p>
            </div>
        </div>
    );
}
