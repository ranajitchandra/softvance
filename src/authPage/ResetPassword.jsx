// src/pages/ResetPassword.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { resetPassword } from "../api/auth";
import Swal from "sweetalert2";

export default function ResetPassword() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const token = state?.token || "";
    const email = state?.email || "";
    console.log(email, token);

    const [form, setForm] = useState({ password: "", password_confirmation: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (!form.password || !form.password_confirmation) {
            setError("All fields are required");
            return;
        }
        if (form.password !== form.password_confirmation) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        try {
            await resetPassword({ ...form, token, email });
            setLoading(false);

            // ✅ Success SweetAlert
            Swal.fire({
                icon: "success",
                title: "Password Reset Successful",
                text: "Your password has been updated. Please login with your new password.",
                confirmButtonColor: "#16a34a",
            }).then(() => {
                navigate("/"); // redirect after alert confirmation
            });
        } catch (err) {
            setLoading(false);

            // ❌ Error SweetAlert
            Swal.fire({
                icon: "error",
                title: "Reset Failed",
                text: err.response?.data?.message || "Something went wrong. Please try again.",
                confirmButtonColor: "#dc2626",
            });
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="absolute top-6 left-6">
                <img src="/logo.png" alt="ScapeSync Logo" className="h-10" />
            </div>

            <div className="w-full max-w-md px-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Reset Password</h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Create a new password for your account
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="password"
                        name="password"
                        placeholder="New password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 border-gray-300"
                    />
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirm new password"
                        value={form.password_confirmation}
                        onChange={handleChange}
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 border-gray-300"
                    />
                    {error && <p className="text-xs text-red-600">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full rounded-md px-4 py-2 text-white font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                            }`}
                    >
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Back to{" "}
                    <a href="/" className="text-green-600 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
