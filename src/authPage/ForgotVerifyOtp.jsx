// src/pages/ForgotVerifyOtp.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { forgotVerifyOtp, resendOtp } from "../api/auth";
import Swal from "sweetalert2";

export default function ForgotVerifyOtp() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const email = state?.email || "";

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [resending, setResending] = useState(false);

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

            setLoading(false);

            const token = resp.data?.data?.token;
            if (!token) {
                setError("No token returned. Cannot reset password.");
                return;
            }

            navigate("/reset-password", { state: { email, token } });
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.message || "Invalid OTP");
        }
    }

    async function handleResendOtp() {
        if (!email) {
            Swal.fire({
                icon: "error",
                title: "Missing Email",
                text: "Email is required to resend OTP.",
                confirmButtonColor: "#dc2626",
            });
            return;
        }

        setResending(true);
        try {
            await resendOtp({ email });

            Swal.fire({
                icon: "success",
                title: "OTP Resent",
                text: `A new OTP has been sent to ${email}`,
                confirmButtonColor: "#16a34a",
            });
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Failed to Resend",
                text: err.response?.data?.message || "Could not resend OTP. Please try again.",
                confirmButtonColor: "#dc2626",
            });
        } finally {
            setResending(false);
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
                    <button
                        type="button"
                        onClick={handleResendOtp}
                        disabled={resending}
                        className="text-green-600 hover:underline"
                    >
                        {resending ? "Resending..." : "Resend OTP"}
                    </button>
                </p>
            </div>
        </div>
    );
}
